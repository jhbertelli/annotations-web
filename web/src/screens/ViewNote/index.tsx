import { useEffect, useState } from "react"

import Header from "../../components/Header"

import BackButton from "../../assets/back.svg"
import EditButton from "../../assets/edit.svg"
import axios from "axios"

import hexToRGB from "../../utils/hexToRGB"
import { NoteContainer, Overlay, Title, Text } from "./styles"

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

    useEffect(() => {
        const getNote = async () => {
            const note = await axios(`http://localhost:7777/note/${noteId}/`)

            setNote(note.data)
            setSecondaryColor(hexToRGB(note.data.noteColor, 0.85))
        }

        getNote()
    }, [])

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
}
