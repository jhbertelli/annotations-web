import axios from "axios"

import { FastifyInstance } from "fastify"
import { NoteHttpParams } from "../types"

import { ObjectId } from "mongodb"
import { notesCollection } from "../database"

export const getNoteRoutes = async (app: FastifyInstance) => {
    app.get("/notes/", async () => {
        // gets all notes from mongodb
        const dbNotes = await notesCollection.find().toArray()
        let notes: Array<object> = []

        for (let i = 0; i < dbNotes.length; i++) {
            // cycles through each note from mongo
            let dbNote = dbNotes[i]

            let note: any = {
                _id: dbNote._id,
                noteTitle: dbNote.noteTitle,
                private: false
            }

            // checks if the note has password
            // notes with password will only have their ID and title visible
            // prior to password insertion
            if (dbNote.notePassword) {
                note.private = true
                notes.push(note)
                continue
            }

            note.noteColor = dbNote.noteColor
            note.noteText = dbNote.noteText

            notes.push(note)
        }

        return notes
    })

    app.get("/note/:id/", async (request, response) => {
        const params = request.params as NoteHttpParams
        const noteId = params.id

        try {
            // tries to get note from database
            const dbNote = await notesCollection.findOne({
                _id: new ObjectId(noteId)
            })

            if (dbNote === null) {
                // if note doesn't exist
                response.code(404)
                return
            }

            let note = {
                _id: dbNote._id,
                noteTitle: dbNote.noteTitle,
                noteText: dbNote.noteText,
                noteColor: dbNote.noteColor
            }

            if (dbNote.notePassword) {
                const allowedPrivateNotes = (
                    await axios("http://localhost:7777/allowed_private_notes/")
                ).data as Array<string>

                // if the user doesn't have access to the private note, returns unauthorized
                if (!allowedPrivateNotes.includes(noteId)) {
                    response.code(401)
                    return
                }
            }

            return note
        } catch (err) {
            // if url contains a bad ID
            response.code(400)
            return err
        }
    })
}
