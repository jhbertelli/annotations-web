import { useEffect, useState } from "react"
import { Masonry } from "@mui/lab"
import axios from "axios"

import Header from "../../components/Header"
import Note from "../../components/Note"
import PrivateNote from "../../components/PrivateNote"
import InsertPasswordModal from "../../components/InsertPasswordModal"

import Add from "../../assets/add.svg"
import CreateNoteImage from "../../assets/plus-list.svg"

import { AddNoteImg, NoNotes, NoNotesText, NotesContainer } from "./styles"

import { NoteAttributes } from "../ViewNote"

interface AllNotes extends NoteAttributes {
    private: boolean
}

export default function Home() {
    const [notes, setNotes] = useState<AllNotes[]>([])
    const [openInsertPassword, setOpenInsertPassword] = useState(false)
    const [privateNoteId, setPrivateNoteId] = useState("")

    const handlePrivateNoteClick = (id: string) => {
        setOpenInsertPassword(true)
        setPrivateNoteId(id)
    }

    useEffect(() => {
        const getNotes = async () => {
            // gets all notes from api
            const notes = await axios("http://localhost:7777/notes/")

            setNotes(notes.data)
        }

        getNotes()
    }, [])

    return (
        <>
            <Header rightButton={{ image: Add, url: "/create/" }} />
            {notes.length === 0 ? (
                <NoNotes>
                    <AddNoteImg src={CreateNoteImage} />
                    <NoNotesText>You haven’t created any notes yet</NoNotesText>
                </NoNotes>
            ) : (
                <NotesContainer>
                    <Masonry columns={4} spacing={2}>
                        {notes.map((note: AllNotes) => {
                            // for each note in api

                            if (note.private)
                                return (
                                    <PrivateNote
                                        key={note._id}
                                        title={note.noteTitle}
                                        onClick={() => {
                                            handlePrivateNoteClick(note._id)
                                        }}
                                    />
                                )

                            return (
                                <Note
                                    id={note._id}
                                    key={note._id}
                                    title={note.noteTitle}
                                    text={note.noteText}
                                    color={note.noteColor}
                                />
                            )
                        })}
                    </Masonry>
                    <InsertPasswordModal
                        open={openInsertPassword}
                        setOpen={setOpenInsertPassword}
                        noteId={privateNoteId}
                    />
                </NotesContainer>
            )}
        </>
    )
}
