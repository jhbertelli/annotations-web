import { useEffect, useState } from "react"
import axios from "axios"

import Header from "../../components/Header"
import NoteNotFoundError from "../../components/NoteNotFoundError"
import PrivateNoteError from "../../components/PrivateNoteError"

import hexToRGB from "../../utils/hexToRGB"

import BackButton from "../../assets/back.svg"
import EditButton from "../../assets/edit.svg"

import { NoteContainer, Overlay, Title, Text, Main } from "./styles"

export interface NoteAttributes {
    _id: string
    noteTitle: string
    noteColor: string
    noteText: string
}

export default function ViewNote() {
    // gets note id from url
    const noteId = window.location.pathname.split("/")[2]
    const [note, setNote] = useState<NoteAttributes>(Object)
    const [secondaryColor, setSecondaryColor] = useState("")
    const [success, setSuccess] = useState(false)
    const [privateNote, setPrivateNote] = useState(false)

    useEffect(() => {
        const getNote = async () => {
            const note = await axios(`http://localhost:7777/note/${noteId}/`)

            if (note.data.success) {
                setSuccess(true)
                setNote(note.data)
                setSecondaryColor(hexToRGB(note.data.noteColor, 0.85))
                return
            }

            if (note.data.private) {
                setPrivateNote(true)
            }
        }

        getNote()
    }, [])

    if (success)
        return (
            <>
                <Header
                    style={{ backgroundColor: note.noteColor }}
                    leftButton={{ image: BackButton, url: "/" }}
                    rightButton={{ image: EditButton, url: "edit/" }}
                />
                <Overlay style={{ backgroundColor: secondaryColor }} />
                <NoteContainer>
                    <Title>{note.noteTitle}</Title>
                    <Text>{note.noteText}</Text>
                </NoteContainer>
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
