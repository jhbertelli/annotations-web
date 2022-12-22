import { DialogProps } from "../ImagesDialog"

import { Content, ContentText, CloseButton, Key, StyledDialog } from "./styles"

import CloseButtonImage from "../../assets/close.svg"
import KeyImage from "../../assets/key.svg"
import DialogInput from "../DialogInput"
import DialogButton from "../DialogButton"

export default function CreatePasswordDialog(props: DialogProps) {
    function handleCloseCreatePassword() {
        props.setOpen(false)
    }

    return (
        <StyledDialog
            open={props.open}
            onClose={handleCloseCreatePassword}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Content>
                <CloseButton src={CloseButtonImage}></CloseButton>

                <Key src={KeyImage}></Key>

                <ContentText id="alert-dialog-description">
                    By enabling a password, you’ll only be able to view, update
                    and delete your note entering the provided password below.
                </ContentText>

                <DialogInput name="password" type="password" placeholder="Password..." />
                <DialogInput
                    name="confirm-password"
                    type="password"
                    placeholder="Confirm password..."
                />
                <DialogButton
                    style={{ backgroundColor: "#1C243E", marginTop: "12px" }}
                >
                    Submit
                </DialogButton>
            </Content>
        </StyledDialog>
    )
}
