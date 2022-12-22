import { DialogActions } from "@mui/material"

import {
    StyledDialog,
    CloseButton,
    Content,
    Title,
    NoAttachmentsText,
    NoAttachmentsImage,
    AddAttachmentButton,
    ImagesInput
} from "./styles"

import { DialogProps } from "../GenericDialog"

import PicturesImage from "../../assets/images.svg"
import CloseButtonImage from "../../assets/close.svg"

export default function ImagesDialog(props: DialogProps) {
    // slightly different from the generic dialog component

    function handleCloseImagesDialog() {
        // closes images dialog
        props.onClose(false)
    }

    return (
        <StyledDialog
            open={props.open}
            onClose={handleCloseImagesDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Title id="alert-dialog-title">
                Edit attachments
                <CloseButton
                    onClick={handleCloseImagesDialog}
                    src={CloseButtonImage}
                ></CloseButton>
            </Title>

            <Content>
                <NoAttachmentsImage src={PicturesImage} alt="" />
                <NoAttachmentsText>
                    You haven’t added any attachments to this note yet
                </NoAttachmentsText>
                <AddAttachmentButton htmlFor="attachments">
                    Add attachment
                </AddAttachmentButton>
                <ImagesInput onChange={(e) => {console.log(e.target.files)}} name="attachments" type="file" multiple id="attachments" />
            </Content>
        </StyledDialog>
    )
}
