import { BaseSyntheticEvent, useState } from "react"
import { Switch } from "@mui/material"

import Header from "../../components/Header"
import ColorButton from "../../components/ColorButton"
import ImagesDialog from "../../components/ImagesDialog"
import CreatePasswordDialog from "../../components/CreatePasswordDialog"
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
    const [openImageDialog, setOpenImageDialog] = useState(false)
    const [openCreatePassword, setOpenCreatePassword] = useState(false)

    const handleOpenImageDialog = () => {
        setOpenImageDialog(true)
    }

    const handleOpenCreatePassword = (e: BaseSyntheticEvent) => {
        // opens create password dialog if the password switch is enabled
        if (e.target.checked) setOpenCreatePassword(true)
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
                    action: handleOpenImageDialog
                }}
            />
            <Form onSubmit={handleFormSubmit}>
                <TitleInput name="title" placeholder="Title..." />

                <ColorsContainer>
                    <p>Color:</p>

                    <ColorSelection>
                        <ColorButton color="#E924B2"></ColorButton>
                        <ColorButton color="#1446F9"></ColorButton>
                        <ColorButton color="#1DF64D"></ColorButton>
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
                    <p>Password:</p>
                    <Switch onInput={handleOpenCreatePassword}></Switch>
                </EnablePasswordDiv>

                <Button background="#131A3C">Save changes</Button>

                <ImagesDialog
                    open={openImageDialog}
                    setOpen={setOpenImageDialog}
                ></ImagesDialog>

                <CreatePasswordDialog
                    open={openCreatePassword}
                    setOpen={setOpenCreatePassword}
                ></CreatePasswordDialog>
            </Form>
        </>
    )
}
