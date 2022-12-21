import Header from "../../components/Header"
import ColorButton from "../../components/ColorButton"

import BackButton from "../../assets/back.svg"
import ImageButton from "../../assets/image.svg"
import ColorPickerImage from "../../assets/color-picker.svg"

import {
    Button,
    ColorInput,
    ColorPicker,
    ColorSelection,
    ColorSelectionLabel,
    ColorsWrapper,
    Form,
    NoteTextArea,
    TitleInput
} from "./styles"

export default function CreateNote() {
    return (
        <>
            <Header
                leftButton={{ image: BackButton, url: "/" }}
                rightButton={{ image: ImageButton, url: "/" }}
            />
            <Form>
                <TitleInput name="title" placeholder="Title..." />

                <ColorsWrapper>
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

                </ColorsWrapper>

                <NoteTextArea
                    name="note-text"
                    placeholder="Write your text here..."
                />
                
                <Button style={{backgroundColor: '#131A3C'}}>Save changes</Button>
            </Form>
        </>
    )
}
