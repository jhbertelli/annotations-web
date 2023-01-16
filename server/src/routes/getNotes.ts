import { FastifyInstance } from "fastify"
import { ObjectId } from "mongodb"
import { notesCollection } from "../database"
import { NoteHttpParams } from "../types"

export const getNoteRoutes = async (app: FastifyInstance) => {
    app.get("/notes/", async () => {
        // gets all notes from mongodb
        const databaseNotes = await notesCollection.find().toArray()
        let notes: Array<object> = []
    
        for (let i = 0; i < databaseNotes.length; i++) {
            // cycles through each note from mongo
            let databaseNote = databaseNotes[i]
    
            let note: any = {
                _id: databaseNote._id,
                noteTitle: databaseNote.noteTitle,
                private: false
            }
    
            // checks if the note has password
            // notes with password will only have their ID and title visible
            // prior to password insertion
            if (databaseNote.notePassword) {
                note.private = true
                notes.push(note)
                continue
            }
    
            note.noteColor = databaseNote.noteColor
            note.noteText = databaseNote.noteText
    
            notes.push(note)
        }
    
        return notes
    })

    app.get("/note/:id/", async (request, response) => {
        const params = request.params as NoteHttpParams
    
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
    
            return note
        } catch (err) {
            // if url contains a bad ID
            response.code(400)
            return err
        }
    })
}