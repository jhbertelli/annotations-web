import { BaseSyntheticEvent, useState } from "react"
import { Switch } from "@mui/material"

import Header from "../../components/Header"
import ColorsContainer from "../../components/ColorsContainer"
import CreatePasswordModal from "../../components/CreatePasswordModal"
import Button from "../../components/Button"

import BackButton from "../../assets/back.svg"

import { Form, NoteTextArea, TitleInput, EnablePasswordDiv } from "./styles"

export default function CreateNote() {
    const [openCreatePassword, setOpenCreatePassword] = useState(false)
    const [switchActive, setSwitchActive] = useState(false)

    const handleOpenCreatePassword = (e: BaseSyntheticEvent) => {
        // opens create password modal if the password switch is enabled
        setSwitchActive(!switchActive)
        if (!e.target.checked) setOpenCreatePassword(true)

        if (e.target.checked) {
            // clears password inputs if the user unchecks the switch
            // (probably gonna change this code later)
            const passwordInput = document.querySelector(
                "#password"
            ) as HTMLInputElement
            const confirmPasswordInput = document.querySelector(
                "#confirm-password"
            ) as HTMLInputElement

            passwordInput!.value = ""
            confirmPasswordInput!.value = ""
        }
    }

    const handleFormSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault()
    }

    return (
        <>
            <Header leftButton={{ image: BackButton, url: "/" }} />
            <Form
                onSubmit={handleFormSubmit}
                encType="multipart/form-data"
                method="post"
            >
                <TitleInput
                    name="title"
                    placeholder="Insert this note's title here..."
                />

                <ColorsContainer />

                <NoteTextArea
                    name="note-text"
                    placeholder="Write your text here..."
                />

                <EnablePasswordDiv>
                    <p>Enable password:</p>
                    <Switch
                        onInput={handleOpenCreatePassword}
                        checked={switchActive}
                    />
                </EnablePasswordDiv>

                <Button background="#131A3C">Create note</Button>

                <CreatePasswordModal
                    open={openCreatePassword}
                    setOpen={setOpenCreatePassword}
                    setSwitchStatus={setSwitchActive}
                />
            </Form>
        </>
    )
}
