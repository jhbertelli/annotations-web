import axios from "axios"

import { FastifyInstance } from "fastify"
import { NoteHttpParams } from "../types"

import { ObjectId } from "mongodb"
import { notesCollection } from "../database"

export const deleteNoteRoutes = async (app: FastifyInstance) => {
    app.delete("/note/:id/delete/", async (request, response) => {
        const params = request.params as NoteHttpParams
        const noteId = params.id

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

            notesCollection.deleteOne({
                _id: new ObjectId(noteId)
            })

            response.code(200)
            return
        } catch (err) {
            // if note doesn't exist
            response.code(400)
            return
        }
    })
}
