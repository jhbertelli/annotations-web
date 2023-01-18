import styled from "styled-components"

export const Colors = styled.div`
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
    border-radius: 50%;
`

export const ColorPicker = styled.img`
    width: 100%;
    height: 100%;
`

export const ColorInput = styled.input`
    display: none;
`

export const TempColorInput = styled.input`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    height: 0;
    opacity: 0;
`
