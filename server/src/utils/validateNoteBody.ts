import { ajv } from ".."

export default function validateNoteBody(body: Object) {
    // schema to validate the request body
    // needs to include the following properties: "noteTitle", "noteColor" and "noteText"
    const schema = {
        type: "object",
        properties: {
            noteTitle: { type: "string", maxLength: 40, minLength: 1 },
            noteColor: { type: "string", minLength: 7 },
            noteText: { type: "string", maxLength: 4000, minLength: 1 },
            notePassword: { type: "string", maxLength: 20, minLength: 1 }
        },
        required: ["noteTitle", "noteColor", "noteText"],
        additionalProperties: false
    }

    const validate = ajv.compile(schema)
    const valid = validate(body)

    return valid
}