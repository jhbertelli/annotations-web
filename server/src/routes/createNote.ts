import { FastifyInstance } from "fastify"
import { ajv} from ".."
import { Note } from "../types"
import { notesCollection } from "../database"
import validateColor from "../utils/validateColor"

export const createNoteRoutes = async (app: FastifyInstance) => {
    app.post("/create_note/", async (request, response) => {
        const formData = request.body as Note
    
        // schema to validate the request body
        // needs to include the following properties: "noteTitle", "noteColor" and "noteText"
        const schema = {
            type: "object",
            properties: {
                noteTitle: { type: "string", maxLength: 40, minLength: 1 },
                noteColor: { type: "string", minLength: 7 },
                noteText: { type: "string", maxLength: 4000, minLength: 1 },
                notePassword: { type: "string", maxLength: 20 }
            },
            required: ["noteTitle", "noteColor", "noteText"],
            additionalProperties: false
        }
    
        const validate = ajv.compile(schema)
        const valid = validate(formData)
    
        // returns bad user request, in case the validation fails
        // or if user inserts an invalid color code
        if (!valid || !validateColor(formData.noteColor)) {
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