import { ReactNode } from "react"

import CloseButtonImage from "../../assets/close.svg"

import { CloseButton, Content, StyledModal } from "./styles"

export interface ModalProps {
    open: boolean
    setOpen: Function
}

interface Props extends ModalProps {
    children: ReactNode
    // for when the user clicks on the "X" button or outside the modal
    handleCloseModal: VoidFunction
}

export default function GenericModal(props: Props) {
    // this generic modal is going to be used for these components:
    // create note password;
    // insert note password;
    // delete note

    return (
        <StyledModal
            open={props.open}
            onClose={props.handleCloseModal}
            aria-labelledby="alert-modal-title"
            aria-describedby="alert-modal-description"
            keepMounted
        >
            <Content>
                <CloseButton
                    onClick={props.handleCloseModal}
                    src={CloseButtonImage}
                />
                {props.children}
            </Content>
        </StyledModal>
    )
}
