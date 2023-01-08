import { useState } from "react"
import { Masonry } from "@mui/lab"
import axios from "axios"

import Header from "../../components/Header"
import Note from "../../components/Note"
import PrivateNote from "../../components/PrivateNote"

import Add from "../../assets/add.svg"
import CreateNoteImage from "../../assets/plus-list.svg"

import { AddNoteImg, NoNotes, NoNotesText, NotesContainer } from "./styles"

interface Note {
    _id: string
    noteTitle: string
    noteColor: string
    noteText: string
    private: boolean
}

export default function Home() {
    const [notes, setNotes] = useState<Note[]>([])

    useState(async () => {
        // gets all notes from api
        const notes = await axios("http://localhost:7777/notes/")

        setNotes(notes.data)
    })

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
                        {notes.map((note: Note) => {
                            // for each note in api

                            if (note.private)
                                return (
                                    <PrivateNote
                                        key={note._id}
                                        title={note.noteTitle}
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
                </NotesContainer>
            )}
        </>
    )
}
