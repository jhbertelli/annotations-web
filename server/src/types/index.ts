export interface Note {
    noteTitle: string
    noteColor: string
    noteText: string
    notePassword?: string
}

export interface NoteHttpParams {
    id: string
}