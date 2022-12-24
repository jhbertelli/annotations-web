import { Modal, DialogContent } from "@mui/material"
import styled from "styled-components"

export const StyledModal = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled(DialogContent)`
    position: relative;

    max-width: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #0e1428;
    border-radius: 20px;
`

export const CloseButton = styled.img`
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    margin: 0.75em;
    padding: 0.25em;
`
