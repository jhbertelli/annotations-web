import styled from "styled-components"

export const Form = styled.form`
    padding-top: 4em;
    /* margin-left: auto;
    margin-right: auto; */
    margin: 0 auto 1em auto;
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

export const ColorsWrapper = styled.div`
    padding: 1em 0;
    width: 100%;

    border-bottom: #f3f4f6 1px solid;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ColorSelection = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 1em;
`

export const ColorSelectionLabel = styled.label`
    width: 20px;
    height: 20px;
`

export const ColorPicker = styled.img`
    width: 100%;
    height: 100%;
`

export const ColorInput = styled.input`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    height: 0;
    opacity: 0;
`

export const NoteTextArea = styled.textarea`
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    min-height: 24em;
    padding: 1em;
    margin: 1.25em 0;
    box-sizing: border-box;

    opacity: 0.4;
    background-color: black;

    border-radius: 10px;

    font: inherit;
    color: #9ca3af;
`

export const Button = styled.button`
    width: 100%;
    padding: 1em 0;
    font: 600 11pt "Josefin Sans";
    text-transform: uppercase;
    color: inherit;
`