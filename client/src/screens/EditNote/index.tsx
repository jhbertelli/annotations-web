import { BaseSyntheticEvent, FormEvent, useEffect, useState } from "react"
import axios from "axios"

import Header from "../../components/Header"
import ColorsContainer from "../../components/ColorsContainer"
import CreatePasswordModal from "../../components/CreatePasswordModal"
import Button from "../../components/Button"
import DeleteNoteModal from "../../components/DeleteNoteModal"
import PrivateNoteError from "../../components/PrivateNoteError"
import NoteNotFoundError from "../../components/NoteNotFoundError"

import BackButton from "../../assets/back.svg"

import {
    Form,
    NoteTextArea,
    TitleInput,
    EnablePasswordDiv,
    StyledSwitch,
    TextLength,
    Main
} from "./styles"

export default function CreateNote() {
    const noteId = window.location.pathname.split("/")[2]
    const [openCreatePassword, setOpenCreatePassword] = useState(false)
    const [openDeleteNote, setOpenDeleteNote] = useState(false)
    const [switchActive, setSwitchActive] = useState(false)
    const [textLengthNumber, setTextLengthNumber] = useState(4000)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [color, setColor] = useState("")
    const [success, setSuccess] = useState(false)
    const [privateNote, setPrivateNote] = useState(false)

    useEffect(() => {
        const getNote = async () => {
            const note = await axios(`http://localhost:7777/note/${noteId}/`)

            if (note.data.success) {
                setSuccess(true)
                setTitle(note.data.noteTitle)
                setText(note.data.noteText)
                setColor(note.data.noteColor)

                if (note.data.private) setSwitchActive(true)
            }

            if (note.data.private) {
                setPrivateNote(true)
            }
        }

        getNote()
    }, [])

    const handleOpenCreatePassword = (e: BaseSyntheticEvent) => {
        // opens create password modal if the password switch is enabled
        setSwitchActive(!switchActive)
        if (!e.target.checked) setOpenCreatePassword(true)

        if (e.target.checked) {
            // clears password inputs if the user unchecks the switch
            // (probably gonna change this code later)
            const passwordInput = document.querySelector(
                "#password"
            ) as HTMLInputElement
            const confirmPasswordInput = document.querySelector(
                "#confirm-password"
            ) as HTMLInputElement

            passwordInput!.value = ""
            confirmPasswordInput!.value = ""
        }
    }

    const handleTextInput = (e: BaseSyntheticEvent) => {
        // updates how many characters the user has left to write his note
        setTextLengthNumber(4000 - e.target.value.length)

        setText(e.target.value)
    }

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const noteTitle = (document.querySelector("#title") as HTMLInputElement)
            .value
        const noteColor = (
            document.querySelector("#note-color") as HTMLInputElement
        ).value
        const noteText = (
            document.querySelector("#note-text") as HTMLInputElement
        ).value
        const notePassword = (
            document.querySelector("#password") as HTMLInputElement
        ).value
        const enablePassword = document.querySelector(
            "#activate-password"
        ) as HTMLInputElement

        if (noteTitle === "" || noteColor === "" || noteText === "") return

        const active = enablePassword.checked

        let form = {
            noteTitle,
            noteColor,
            noteText,
            enablePassword: active
        } as any

        if (notePassword.length > 0) form.notePassword = notePassword

        try {
            const response = await axios.put(
                `http://localhost:7777/note/${noteId}/edit/`,
                form
            )

            // redirects if note is edited successfully
            if (response.status === 200) window.location.href = "/"
        } catch (err) {
            console.error(err)
        }
    }

    const handleDeleteButtonClick = (e: BaseSyntheticEvent) => {
        e.preventDefault()

        setOpenDeleteNote(true)
    }

    const handleTitleChange = (e: BaseSyntheticEvent) => {
        setTitle(e.target.value)
    }

    if (success)
        return (
            <>
                <Header leftButton={{ image: BackButton, url: "../" }} />
                <Form onSubmit={handleFormSubmit} encType="multipart/form-data">
                    <TitleInput
                        id="title"
                        name="title"
                        placeholder="Insert this note's title here..."
                        maxLength={40}
                        value={title}
                        onInput={handleTitleChange}
                    />

                    <ColorsContainer defaultColor={color} />

                    <NoteTextArea
                        id="note-text"
                        name="note-text"
                        placeholder="Write your text here..."
                        maxLength={4000}
                        value={text}
                        onInput={handleTextInput}
                    />

                    <TextLength>{textLengthNumber}</TextLength>

                    <EnablePasswordDiv>
                        <p>Enable password:</p>
                        <StyledSwitch
                            onInput={handleOpenCreatePassword}
                            checked={switchActive}
                            name="activate-password"
                            id="activate-password"
                        />
                    </EnablePasswordDiv>

                    <Button
                        onClick={handleDeleteButtonClick}
                        background="#E53232"
                        style={{ marginBottom: 1 }}
                    >
                        Delete note
                    </Button>
                    <Button background="#131A3C">Edit note</Button>

                    <CreatePasswordModal
                        open={openCreatePassword}
                        setOpen={setOpenCreatePassword}
                        setSwitchStatus={setSwitchActive}
                    />

                    <DeleteNoteModal
                        open={openDeleteNote}
                        setOpen={setOpenDeleteNote}
                        noteId={noteId}
                    />
                </Form>
            </>
        )

    // in case note doesn't exist/is private
    return (
        <>
            <Header leftButton={{ image: BackButton, url: "/" }} />
            <Main>
                {privateNote ? <PrivateNoteError /> : <NoteNotFoundError />}
            </Main>
        </>
    )
}
