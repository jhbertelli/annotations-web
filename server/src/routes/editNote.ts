import { FastifyInstance } from "fastify"

export const editNoteRoutes = async (app: FastifyInstance) => {
    app.post("/note/:id/edit/", async (request, response) => {
        response.send("adas")
    })
}