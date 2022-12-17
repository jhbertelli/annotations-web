import Header from "../../components/Header"

import Add from "../../assets/add.svg"
import CreateNoteImage from "../../assets/plus-list.svg"

import "./home.css"

export default function Home() {
    return (
        <>
            <Header rightButton={{ image: Add, url: "/create/" }} />
            <div className="no-notes">
                <img src={CreateNoteImage} alt="" />
                <p>You haven’t created any notes yet</p>
            </div>
        </>
    )
}
