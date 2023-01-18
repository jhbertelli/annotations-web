import { FastifyInstance } from "fastify"
import { NoteHttpParams } from "../types"

import { ObjectId } from "mongodb"
import { notesCollection } from "../database"

export const privateNotesRoutes = async (app: FastifyInstance) => {
    let allowedPrivateNotes: Array<string> = []

    app.get("/allowed_private_notes/", async () => {
        return allowedPrivateNotes
    })

    app.post("/note/:id/password/", async (request, response) => {
        interface NotePasswordForm extends Object {
            password: string
        }

        const params = request.params as NoteHttpParams
        const noteId = params.id

        const formData = request.body as NotePasswordForm

        // if form does not contain password value
        if (!formData.hasOwnProperty("password")) {
            response.code(400)
            return
        }

        const formPassword = formData.password

        try {
            // tries to get note from database
            const dbNote = await notesCollection.findOne({
                _id: new ObjectId(noteId)
            })

            // if note doesn't exist
            if (dbNote === null) {
                response.code(404)
                return
            }

            // in case it's a public note
            if (!dbNote.notePassword) {
                response.code(400)
                return
            }

            // in case user inserts wrong password
            if (dbNote.notePassword !== formPassword) {
                response.code(401)
                return
            }
        } catch (err) {
            // if url contains a bad ID
            response.code(400)
            return err
        }

        // adds the allowed note into array
        allowedPrivateNotes.push(noteId)

        // permission to access it expires after 20 minutes
        setTimeout(() => {
            allowedPrivateNotes.splice(allowedPrivateNotes.indexOf(noteId), 1)
        }, 1200000) // 20 min
    })
}
