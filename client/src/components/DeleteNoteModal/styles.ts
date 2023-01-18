import styled from "styled-components"
import ModalButton from "../ModalButton"

export const Text = styled.p`
    font: 500 12pt "Inter";
    text-align: center;
    color: white;
    padding-top: 0.85em;
`

export const RedText = styled.span`
    font: inherit;
    color: #E53232;
`

export const CancelButton = styled(ModalButton)`
    background-color: #1C243E;
    padding: 0.5em 0;
    margin: 20px 0 8px 0;
`

export const DeleteButton = styled(ModalButton)`
    background-color: #E53232;
    padding: 0.5em 0; 
`