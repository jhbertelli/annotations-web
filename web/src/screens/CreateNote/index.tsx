import { BaseSyntheticEvent, useState } from "react"
import { Switch } from "@mui/material"

import Header from "../../components/Header"
import ColorButton from "../../components/ColorButton"
import ImagesModal from "../../components/ImagesModal"
import CreatePasswordModal from "../../components/CreatePasswordModal"
import Button from "../../components/Button"

import BackButton from "../../assets/back.svg"
import ImageButton from "../../assets/image.svg"
import ColorPickerImage from "../../assets/color-picker.svg"

import {
    ColorInput,
    ColorPicker,
    ColorSelection,
    ColorSelectionLabel,
    ColorsContainer,
    Form,
    NoteTextArea,
    TitleInput,
    EnablePasswordDiv
} from "./styles"

export default function CreateNote() {
    const [openImagesModal, setOpenImagesModal] = useState(false)
    const [openCreatePassword, setOpenCreatePassword] = useState(false)
    const [switchActive, setSwitchActive] = useState(false)

    const handleOpenImagesModal = () => {
        // opens images modal
        setOpenImagesModal(true)
    }

    const handleOpenCreatePassword = (e: BaseSyntheticEvent) => {
        // opens create password modal if the password switch is enabled
        setSwitchActive(!switchActive)
        if (!e.target.checked) setOpenCreatePassword(true)

        // clears password inputs if the user unchecks the switch
        if (e.target.checked) {
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
            <Header
                leftButton={{ image: BackButton, url: "/" }}
                rightButton={{
                    image: ImageButton,
                    action: handleOpenImagesModal
                }}
            />
            <Form
                onSubmit={handleFormSubmit}
                encType="multipart/form-data"
                method="post"
            >
                <TitleInput
                    name="title"
                    placeholder="Insert this note's title here..."
                />

                <ColorsContainer>
                    <p>Color:</p>

                    <ColorSelection>
                        <ColorButton color="#E924B2" />
                        <ColorButton color="#1446F9" />
                        <ColorButton color="#1DF64D" />
                        {/* opens hidden color input */}
                        <ColorSelectionLabel htmlFor="color-input">
                            <ColorPicker src={ColorPickerImage} alt="" />
                        </ColorSelectionLabel>
                        <ColorInput
                            name="note-color"
                            type="color"
                            id="color-input"
                        />
                    </ColorSelection>
                </ColorsContainer>

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

                <ImagesModal
                    open={openImagesModal}
                    setOpen={setOpenImagesModal}
                />

                <CreatePasswordModal
                    open={openCreatePassword}
                    setOpen={setOpenCreatePassword}
                    setSwitchStatus={setSwitchActive}
                />
            </Form>
        </>
    )
}
