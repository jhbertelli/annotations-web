import { StyledModal } from "../GenericModal/styles"
import {
    CloseButton,
    Content,
    Title,
    NoAttachmentsText,
    NoAttachmentsImage,
    AddAttachmentButton,
    ImagesInput,
    ModalContainer
} from "./styles"

import { ModalProps } from "../GenericModal"

import PicturesImage from "../../assets/images.svg"
import CloseButtonImage from "../../assets/close.svg"

export default function ImagesModal(props: ModalProps) {
    // slightly different from the generic modal component

    function handleCloseImagesModal() {
        // closes images modal
        props.setOpen(false)
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
                        onChange={(e) => {
                            console.log(e.target.files)
                        }}
                        name="attachments"
                        type="file"
                        multiple
                        id="attachments"
                    />
                </Content>
            </ModalContainer>
        </StyledModal>
    )
}
