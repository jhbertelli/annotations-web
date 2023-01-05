import Fastify from "fastify"
import cors from "@fastify/cors"
import Ajv from "ajv"
import { MongoClient } from "mongodb"

const app = Fastify()
const ajv = new Ajv({})

// connects at default mongodb port
const mongoPort = 27017
const mongoClient = new MongoClient(`mongodb://localhost:/${mongoPort}`)
const database = mongoClient.db("annotations")
const notesCollection = database.collection("notes")

app.register(cors)

app.post("/create_note/", (request, response) => {
    const formData: any = request.body

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

    if (!valid) {
        response.code(400)
        return ""
    }

    notesCollection.insertOne(formData)

    response.code(201)
    return { sucess: true }
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
