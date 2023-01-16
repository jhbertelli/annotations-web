import { FastifyInstance } from "fastify"

import { ObjectId } from "mongodb"
import { notesCollection } from "../database"

import { Note, NoteHttpParams } from "../types"

import validateColor from "../utils/validateColor"
import validateNoteBody from "../utils/validateNoteBody"

export const editNoteRoutes = async (app: FastifyInstance) => {
    app.put("/note/:id/edit/", async (request, response) => {
        const formData = request.body as Note
        const params = request.params as NoteHttpParams

        if (!validateNoteBody(formData) || !validateColor(formData.noteColor)) {
            response.code(400)
            return
        }

        try {
            // tries to get note from mongodb
            const note = await notesCollection.findOne({
                _id: new ObjectId(params.id)
            })

            if (note === null) {
                // if note doesn't exist
                response.code(404)
                return
            }

            if (note?.password) {
                // wip
            }

            notesCollection.updateOne(
                {
                    _id: new ObjectId(params.id)
                },
                { $set: formData }
            )
            
            response.code(200)
            return
        } catch (err) {
            // if url contains a bad ID
            response.code(404)
            return err
        }
    })
}
