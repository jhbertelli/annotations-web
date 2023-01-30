import { StyledModal } from "../GenericModal/styles"
import {
    CloseButton,
    Content,
    Title,
    NoAttachmentsText,
    NoAttachmentsImage,
    AddAttachmentButton,
    TempImagesInput,
    ModalContainer,
    ImagesInput
} from "./styles"

import { ModalProps } from "../GenericModal"

import PicturesImage from "../../assets/images.svg"
import CloseButtonImage from "../../assets/close.svg"
import { BaseSyntheticEvent } from "react"

export default function ImagesModal(props: ModalProps) {
    // slightly different from the generic modal component

    function handleCloseImagesModal() {
        // closes images modal
        props.setOpen(false)
    }

    const handleImagesInput = (e: BaseSyntheticEvent) => {
        const imagesInput = document.querySelector(
            "#attachments"
        ) as HTMLInputElement
        let files = imagesInput.files as FileList
        
        for (let i = 0; i < files.length; i++) {
            console.log(files[i])
        }
    
        console.log(files)
    }

    return (
        <StyledModal
            open={props.open}
            onClose={handleCloseImagesModal}
            aria-labelledby="alert-modal-title"
            aria-describedby="alert-modal-description"
            keepMounted
        >
            <ModalContainer>
                <Title id="alert-modal-title">
                    Edit attachments
                    <CloseButton
                        onClick={handleCloseImagesModal}
                        src={CloseButtonImage}
                    />
                </Title>

                <Content>
                    <NoAttachmentsImage src={PicturesImage} alt="" />
                    <NoAttachmentsText>
                        You haven’t added any attachments to this note yet
                    </NoAttachmentsText>
                    <AddAttachmentButton htmlFor="attachments">
                        Add attachment
                    </AddAttachmentButton>
                    <ImagesInput
                        onChange={handleImagesInput}
                        type="file"
                        name="attachments"
                        id="attachments"
                        multiple
                    />
                </Content>
            </ModalContainer>
        </StyledModal>
    )
}
