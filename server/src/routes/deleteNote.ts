import { FastifyInstance } from "fastify"
import { ObjectId } from "mongodb"
import { notesCollection } from "../database"
import { NoteHttpParams } from "../types"

export const deleteNoteRoutes = async (app: FastifyInstance) => {
    app.post("/note/:id/delete/", async (request, response) => {
        const params = request.params as NoteHttpParams
    
        try {
            // tries to get note from mongodb
            const note = await notesCollection.findOne({
                _id: new ObjectId(params.id)
            })
            
            if (note?.password) {
                // wip
            }
            
            notesCollection.deleteOne({
                _id: new ObjectId(params.id)
            })
            
            response.code(200)
            return
        } catch (err) {
            // if note doesn't exist
            response.code(404)
            return
        }
    })
}