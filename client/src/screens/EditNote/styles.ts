import styled from "styled-components"
import { Switch } from "@mui/material"

export const Form = styled.form`
    padding-top: 4em;
    margin: 0 auto 0 auto;
    width: 85%;

    display: flex;
    flex-direction: column;
    align-items: center;

    font: 500 12pt "Josefin Sans";
    color: #f3f4f6;
`

export const TitleInput = styled.input`
    width: 100%;
    padding: 1em 0;

    background-color: transparent;
    border-bottom: #f3f4f6 1px solid;

    color: inherit;
    font: inherit;

    ::placeholder {
        opacity: 1;
        color: inherit;
    }
`

export const NoteTextArea = styled.textarea`
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    min-height: 24em;
    padding: 1em;
    margin: 1.25em 0 0.75em 0;
    box-sizing: border-box;

    opacity: 0.8;
    background-color: #000108;

    border-radius: 10px;

    font: inherit;
    color: #9ca3af;
`

export const EnablePasswordDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledSwitch = styled(Switch)`
    .MuiSwitch-track {
        background-color: #123456;
    }
`

export const TextLength = styled.p`
    width: 100%;
    text-align: right;
    margin: 0.25em 0;
`

export const Main = styled.main`
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`