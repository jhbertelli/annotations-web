import Fastify from "fastify"
import cors from "@fastify/cors"
import Ajv from "ajv"
import { MongoClient, ObjectId } from "mongodb"

import { note, noteHttpParams } from "./types"

import validateColor from "./utils/validateColor"

const app = Fastify()
const ajv = new Ajv({})

// connects at default mongodb port
const mongoPort = 27017
const mongoClient = new MongoClient(`mongodb://localhost:/${mongoPort}`)
const database = mongoClient.db("annotations")
const notesCollection = database.collection("notes")

app.register(cors)

app.post("/create_note/", async (request, response) => {
    const formData = request.body as note

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
    let note: note = {
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

app.get("/notes/", async () => {
    // gets all notes from mongodb
    const databaseNotes = await notesCollection.find().toArray()
    let notes: Array<object> = []

    for (let i = 0; i < databaseNotes.length; i++) {
        // cycles through each note from mongo
        let databaseNote = databaseNotes[i]

        let note: any = {
            _id: databaseNote._id,
            noteTitle: databaseNote.noteTitle
        }

        // checks if the note has password
        // notes with password will only have their ID and title visible
        // prior to password insertion
        if (databaseNote.notePassword) {
            notes.push(note)
            continue
        }

        note.noteColor = databaseNote.noteColor
        note.noteText = databaseNote.noteText

        notes.push(note)
    }

    return notes
})

app.get("/note/:id", async (request, response) => {
    const params = request.params as noteHttpParams
    
    try {
        // tries to get note from mongodb
        const note = await notesCollection.findOne({ _id: new ObjectId(params.id) })
        
        if (note?.password) {
            // wip
        }

        return note
    } catch (err) {
        response.code(404)
        return
    }
})

async function start() {
    try {
        await app.listen({ port: 7777 })
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

start()
