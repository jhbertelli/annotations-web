import Header from "../../components/Header"

import Add from "../../assets/add.svg"
import CreateNoteImage from "../../assets/plus-list.svg"
import { AddNoteImg, NoNotes, NoNotesText } from "./styles"

export default function Home() {
    return (
        <>
            <Header rightButton={{ image: Add, url: "/create/" }} />
            <NoNotes>
                <AddNoteImg src={CreateNoteImage} />
                <NoNotesText>You haven’t created any notes yet</NoNotesText>
            </NoNotes>
        </>
    )
}
