import { ReactNode } from "react"
import { DialogProps as MaterialUIDialogProps } from "@mui/material"

import CloseButtonImage from "../../assets/close.svg"

import { CloseButton, Content, StyledDialog } from "./styles"

export interface DialogProps extends MaterialUIDialogProps {
    open: boolean
    setOpen: Function
}

interface Props extends DialogProps {
    children: ReactNode
    // for when the user clicks on the "X" button or outside the dialog
    handleCloseDialog: VoidFunction
}

export default function GenericDialog(props: Props) {
    // this generic dialog is going to be used for these components:
    // create note password;
    // insert note password;
    // delete note

    return (
        <StyledDialog
            open={props.open}
            onClose={props.handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Content>
                <CloseButton onClick={props.handleCloseDialog} src={CloseButtonImage}></CloseButton>
                {props.children}
            </Content>
        </StyledDialog>
    )
}
