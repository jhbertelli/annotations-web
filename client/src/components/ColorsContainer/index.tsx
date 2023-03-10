import { BaseSyntheticEvent, RefObject, useEffect, useRef, useState } from "react"

import ColorButton from "../ColorButton"

import ColorPickerImage from "../../assets/color-picker.svg"

import {
    Colors,
    ColorPicker,
    ColorSelection,
    ColorSelectionLabel,
    ColorInput,
    TempColorInput
} from "./styles"

interface Props {
    defaultColor?: string
}

export default function ColorsContainer(props: Props) {
    const [color, setColor] = useState("")
    const colorSelection = useRef() as RefObject<HTMLDivElement>

    useEffect(() => {
        if (props.defaultColor) {
            // loads color in edit note page
            setColor(props.defaultColor)
            const colorsSelectionCurrent = colorSelection.current as HTMLDivElement

            for (let i = 0; i < colorsSelectionCurrent.childElementCount - 3; i++) {
                const colorDiv = colorsSelectionCurrent.children[i] as HTMLDivElement
                
                // checks if the note's color is in any of the pre-made colors
                if (colorDiv.getAttribute("color") === props.defaultColor) {
                    colorDiv.style.outline = "3px solid #3f57c4"
                    return
                }
            }
            
            // in case it's a custom color
            const colorSelectionLabel =
                colorsSelectionCurrent.children[3] as HTMLDivElement
            
            colorSelectionLabel.style.outline = "3px solid #3f57c4"
            colorSelectionLabel.style.backgroundColor = props.defaultColor
        }
    }, [props.defaultColor])

    function handleOptionStyleBorder(element: HTMLElement) {
        // adds a border to the selected option to make visible
        // which color did the user select
        const colorSelection = element.parentElement as HTMLDivElement

        for (let i = 0; i < colorSelection.childElementCount - 2; i++) {
            // resets the other options' border when clicking on this element
            const option = colorSelection.children[i] as HTMLElement

            option.style.outline = ""
        }

        element.style.outline = "3px solid #3f57c4"
    }
    
    const handleSelectedColor = (e: BaseSyntheticEvent) => {
        // for when the user clicks on any of the pre-made colors avaliable
        const selectedColor = e.target

        setColor(selectedColor.getAttribute("color"))

        handleOptionStyleBorder(selectedColor)
    }

    const handleColorPickerClicked = (e: BaseSyntheticEvent) => {
        // updates the color input for when the user clicks on the color picker
        const label = e.target.parentElement as HTMLLabelElement
        const temporaryInput = label.nextSibling as HTMLInputElement

        // sets to the value the color picker had at the time of the click
        setColor(temporaryInput.value)

        // also adds the border outside the custom color label
        handleOptionStyleBorder(label)
    }

    const handleColorPickerSelection = (e: BaseSyntheticEvent) => {
        // to update the value inside the color input
        // when the user selects a color from the color picker
        const temporaryInput: HTMLInputElement = e.target
        const colorSelectionLabel =
            temporaryInput.previousSibling as HTMLLabelElement

        setColor(temporaryInput.value)

        // changes color shown inside the color picker image
        colorSelectionLabel.style.backgroundColor = temporaryInput.value
    }

    return (
        <Colors>
            <p>Color:</p>

            <ColorSelection id="colors" ref={colorSelection}>
                <ColorButton color="#E924B2" onClick={handleSelectedColor} />
                <ColorButton color="#1446F9" onClick={handleSelectedColor} />
                <ColorButton color="#1A7924" onClick={handleSelectedColor} />
                {/* opens hidden color input */}
                <ColorSelectionLabel
                    onClick={handleColorPickerClicked}
                    htmlFor="temp-color-input"
                >
                    <ColorPicker src={ColorPickerImage} alt="" />
                </ColorSelectionLabel>
                <TempColorInput
                    // temporary input
                    id="temp-color-input"
                    type="color"
                    onInput={handleColorPickerSelection}
                />
                <ColorInput
                    name="note-color"
                    id="note-color"
                    value={color}
                    onChange={(e) => {
                        e.target.value = color
                    }}
                />
            </ColorSelection>
        </Colors>
    )
}
