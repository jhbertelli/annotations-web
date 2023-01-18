import axios from "axios"

import { FastifyInstance } from "fastify"
import { Note, NoteHttpParams } from "../types"

import { ObjectId } from "mongodb"
import { notesCollection } from "../database"

import validateColor from "../utils/validateColor"
import validateNoteBody from "../utils/validateNoteBody"

export const editNoteRoutes = async (app: FastifyInstance) => {
    app.put("/note/:id/edit/", async (request, response) => {
        const formData = request.body as Note
        const params = request.params as NoteHttpParams
        const noteId = params.id

        // returns bad user request, in case the validation fails
        // or if user inserts an invalid color code
        if (!validateNoteBody(formData) || !validateColor(formData.noteColor)) {
            response.code(400)
            return
        }

        try {
            // tries to get note from database
            const note = await notesCollection.findOne({
                _id: new ObjectId(noteId)
            })

            if (note === null) {
                // if note doesn't exist
                response.code(404)
                return
            }

            if (note.notePassword) {
                const allowedPrivateNotes = (
                    await axios("http://localhost:7777/allowed_private_notes/")
                ).data as Array<string>

                // if the user doesn't have access to the private note, returns unauthorized
                if (!allowedPrivateNotes.includes(noteId)) {
                    response.code(401)
                    return
                }
            }

            notesCollection.updateOne(
                // old note
                { _id: new ObjectId(noteId) },
                // new note
                { $set: formData }
            )

            response.code(200)
            return
        } catch (err) {
            // if url contains a bad ID
            response.code(400)
            return err
        }
    })
}
