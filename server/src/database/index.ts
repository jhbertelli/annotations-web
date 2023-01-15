import { MongoClient } from "mongodb"

// connects at default mongodb port
const mongoPort = 27017
const mongoClient = new MongoClient(`mongodb://localhost:/${mongoPort}`)
const database = mongoClient.db("annotations")

export const notesCollection = database.collection("notes")