import styled from "styled-components"

export const InputContainer = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    width: 100%;
    margin: 4px 0;
    padding: 4px 0;
    border-radius: 4px;
    
    background-color: #0b0e1b;
`

export const Input = styled.input`
    color: white;
    background-color: transparent;
    text-align: center;
    font: 500 10pt "inter";

    ::placeholder {
        color: #9ca3af;
        font: inherit;
    }
`

export const TogglePassword = styled.img`
    cursor: pointer;
    position: absolute;
    right: 0;
    height: 85%;
    margin-right: 0.25em;
`