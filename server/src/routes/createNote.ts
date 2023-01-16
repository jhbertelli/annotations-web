import { FastifyInstance } from "fastify"

import { Note } from "../types"

import { notesCollection } from "../database"

import validateColor from "../utils/validateColor"
import validateNoteBody from "../utils/validateNoteBody"

export const createNoteRoutes = async (app: FastifyInstance) => {
    app.post("/create_note/", async (request, response) => {
        const formData = request.body as Note

        // returns bad user request, in case the validation fails
        // or if user inserts an invalid color code
        if (!validateNoteBody(formData) || !validateColor(formData.noteColor)) {
            response.code(400)
            return
        }

        // note to be inserted to mongodb
        let note: Note = {
            noteTitle: formData.noteTitle,
            noteColor: formData.noteColor,
            noteText: formData.noteText
        }

        // inserts note password in case it exists
        if (formData.notePassword && formData.notePassword !== "")
            note.notePassword = formData.notePassword

        await notesCollection.insertOne(note)

        response.code(201)
        return
    })
}
