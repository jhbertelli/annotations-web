import styled from "styled-components"
import ModalButton from "../ModalButton"

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Lock = styled.img`
    width: 90px;
`

export const Text = styled.p`
    padding: 0.75em 0 1.25em 0;
    color: white;
    font: 500 12pt "Inter";
    text-align: center;
`

export const SubmitButton = styled(ModalButton)`
    background-color: #1C243E;
`