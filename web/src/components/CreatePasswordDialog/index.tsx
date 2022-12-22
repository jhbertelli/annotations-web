import { ContentText, ErrorMessage, Key } from "./styles"

import DialogInput from "../DialogInput"
import DialogButton from "../DialogButton"
import GenericDialog, { DialogProps } from "../GenericDialog"

import KeyImage from "../../assets/key.svg"
import { ReactNode, useState } from "react"

export default function CreatePasswordDialog(props: DialogProps) {
    const handlePasswordSubmit = () => {
        // checks if both passwords are not null and are the same

        const passwordValue = (document.getElementById(
            "password"
        ) as HTMLInputElement)!.value
        const confirmPasswordValue = (document.getElementById(
            "confirm-password"
        ) as HTMLInputElement)!.value

        if (passwordValue === "") {
            setError(<ErrorMessage>Please enter a password.</ErrorMessage>)
            return
        }

        if (confirmPasswordValue === "") {
            setError(<ErrorMessage>Please confirm your password.</ErrorMessage>)
            return
        }

        if (passwordValue === confirmPasswordValue) {
            // closes the dialog
            props.onClose(false)
            return
        }

        setError(<ErrorMessage>The passwords do not match.</ErrorMessage>)
    }

    const [error, setError] = useState<ReactNode>()

    const resetError = () => {
        // resets error when writing in inputs
        setError("")
    }

    return (
        <GenericDialog open={props.open} onClose={props.onClose}>
            <Key src={KeyImage}></Key>

            <ContentText>
                By enabling a password, you’ll only be able to view, update and
                delete your note entering the provided password below.
            </ContentText>

            <DialogInput
                name="password"
                type="password"
                placeholder="Password..."
                id="password"
                togglePassword
                onInput={resetError}
            />
            <DialogInput
                name="confirm-password"
                id="confirm-password"
                type="password"
                placeholder="Confirm password..."
                togglePassword
                onInput={resetError}
            />

            {error}

            <DialogButton
                style={{ backgroundColor: "#1C243E", marginTop: "12px" }}
                onClick={handlePasswordSubmit}
            >
                Submit
            </DialogButton>
        </GenericDialog>
    )
}
