import Fastify from "fastify"
import cors from "@fastify/cors"
import Ajv from "ajv"

import { getNoteRoutes } from "./routes/getNotes"
import { createNoteRoutes } from "./routes/createNote"
import { deleteNoteRoutes } from "./routes/deleteNote"
import { editNoteRoutes } from "./routes/editNote"
import { allowedPrivateNotesRoutes } from "./routes/privateNotes"

export const ajv = new Ajv({})

const app = Fastify()

app.register(cors)
app.register(getNoteRoutes)
app.register(createNoteRoutes)
app.register(deleteNoteRoutes)
app.register(editNoteRoutes)
app.register(allowedPrivateNotesRoutes)

async function start() {
    try {
        await app.listen({ port: 7777 })
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

start()
