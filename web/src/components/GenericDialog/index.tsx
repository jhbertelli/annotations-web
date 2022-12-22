import { ReactNode } from "react"
import { CloseButton, Content, StyledDialog } from "./styles"
import CloseButtonImage from "../../assets/close.svg"

export interface DialogProps {
    open: boolean
    onClose: Function
}

interface Props extends DialogProps {
    children: ReactNode
}

export default function GenericDialog(props: Props) {
    // this generic dialog is going to be used for these components:
    // create note password;
    // insert note password;
    // delete note

    const handleCloseDialog = () => {
        // closes dialog
        props.onClose(false)
    }

    return (
        <StyledDialog
            open={props.open}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Content>
                <CloseButton onClick={handleCloseDialog} src={CloseButtonImage}></CloseButton>
                {props.children}
            </Content>
        </StyledDialog>
    )
}
