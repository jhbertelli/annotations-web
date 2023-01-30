import { BaseSyntheticEvent, FormEvent, useState } from "react"
import axios from "axios"

import Header from "../../components/Header"
import ImagesModal from "../../components/ImagesModal"
import ColorsContainer from "../../components/ColorsContainer"
import CreatePasswordModal from "../../components/CreatePasswordModal"
import Button from "../../components/Button"

import ImageButton from "../../assets/image.svg"
import BackButton from "../../assets/back.svg"

import {
    Form,
    NoteTextArea,
    TitleInput,
    EnablePasswordDiv,
    StyledSwitch,
    TextLength
} from "./styles"

export default function CreateNote() {
    const [openImagesModal, setOpenImagesModal] = useState(false)
    const [openCreatePassword, setOpenCreatePassword] = useState(false)
    const [switchActive, setSwitchActive] = useState(false)
    const [textLengthNumber, setTextLengthNumber] = useState(4000)

    const handleOpenImagesModal = () => {
        // opens images modal
        setOpenImagesModal(true)
    }

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

    const handleTextLengthNumber = (e: BaseSyntheticEvent) => {
        // updates how many characters the user has left to write his note
        setTextLengthNumber(4000 - e.target.value.length)
    }

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const noteTitle = (document.querySelector("#title") as HTMLInputElement)
            .value
        const noteColor = (document.querySelector("#note-color") as HTMLInputElement)
            .value
        const noteText = (document.querySelector("#note-text") as HTMLInputElement)
            .value
        const notePassword = (document.querySelector("#password") as HTMLInputElement)
            .value

        if (noteTitle === "" || noteColor === "" || noteText === "") return

        let form = {
            noteTitle,
            noteColor,
            noteText
        } as any

        if (notePassword.length > 0) form.notePassword = notePassword

        try {
            const response = await axios.post(
                "http://localhost:7777/create_note/",
                form
            )
            
            // redirects if note is created successfully
            if (response.status === 201) window.location.href = "/"
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <Header 
                leftButton={{ image: BackButton, url: "/" }}
                rightButton={{
                    image: ImageButton,
                    action: handleOpenImagesModal
                }} 
            />
            <Form
                onSubmit={handleFormSubmit}
                encType="multipart/form-data"
            >
                <TitleInput
                    id="title"
                    name="title"
                    placeholder="Insert this note's title here..."
                    maxLength={40}
                />

                <ColorsContainer />

                <NoteTextArea
                    onInput={handleTextLengthNumber}
                    id="note-text"
                    name="note-text"
                    placeholder="Write your text here..."
                    maxLength={4000}
                />

                <TextLength>{textLengthNumber}</TextLength>

                <EnablePasswordDiv>
                    <p>Enable password:</p>
                    <StyledSwitch
                        onInput={handleOpenCreatePassword}
                        checked={switchActive}
                    />
                </EnablePasswordDiv>

                <Button background="#131A3C">Create note</Button>

                <ImagesModal
                    open={openImagesModal}
                    setOpen={setOpenImagesModal}
                />

                <CreatePasswordModal
                    open={openCreatePassword}
                    setOpen={setOpenCreatePassword}
                    setSwitchStatus={setSwitchActive}
                />
            </Form>
        </>
    )
}
