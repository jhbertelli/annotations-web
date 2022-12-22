import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import styled from "styled-components"

export const StyledDialog = styled(Dialog)`
    > div {
        > div {
            width: 600px;
            color: white;
            background-color: #0e1428;
            border-radius: 20px;
        }
    }
`

export const Title = styled(DialogTitle)`
    font: 500 13pt "Josefin Sans" !important;
    line-height: 13px;
    color: #f3f4f6;
`

export const Content = styled(DialogContent)`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CloseButton = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    margin: 1em;
`

export const NoAttachmentsImage = styled.img`
    margin: 2em 0;
`

export const NoAttachmentsText = styled.p`
    margin-bottom: 2em;

    font: 500 13pt "IBM Plex Sans";
    line-height: 26px;
    text-align: center;

    color: #e4e4e7;
`

export const AddAttachmentButton = styled.label`
    width: 100%;
    padding: 1em 0;
    
    font: 500 11pt "Josefin Sans";
    line-height: 12px;
    text-transform: uppercase;
    text-align: center;
    color: white;
    background-color: #1c243e;
    border-radius: 4px;
`

export const ImagesInput = styled.input`
    display: none;
`