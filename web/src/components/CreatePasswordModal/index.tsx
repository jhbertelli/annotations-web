import { ContentText, ErrorMessage, Key } from "./styles"

import ModalInput from "../ModalInput"
import ModalButton from "../ModalButton"
import GenericModal, { ModalProps } from "../GenericModal"

import KeyImage from "../../assets/key.svg"
import { ReactNode, useState } from "react"

interface Props extends ModalProps {
    setSwitchStatus: Function
}

export default function CreatePasswordModal(props: Props) {
    const [error, setError] = useState<ReactNode>()

    const passwordInput = document.getElementById(
        "password"
    ) as HTMLInputElement
    const confirmPasswordInput = document.getElementById(
        "confirm-password"
    ) as HTMLInputElement

    const handlePasswordSubmit = () => {
        // checks if both passwords are not null and are the same

        const passwordValue = passwordInput!.value
        const confirmPasswordValue = confirmPasswordInput!.value

        if (passwordValue === "") {
            setError(<ErrorMessage>Please enter a password.</ErrorMessage>)
            return
        }

        if (confirmPasswordValue === "") {
            setError(<ErrorMessage>Please confirm your password.</ErrorMessage>)
            return
        }

        if (passwordValue === confirmPasswordValue) {
            // closes the modal, keeping the switch checked
            props.setOpen(false)
            return
        }

        setError(<ErrorMessage>The passwords do not match.</ErrorMessage>)
    }

    const resetError = () => {
        // resets error when writing in inputs
        setError("")
    }

    const handleCloseModal = () => {
        // closes modal and sets switch to unchecked
        props.setOpen(false)
        props.setSwitchStatus(false)

        // clears modal inputs
        passwordInput.value = ""
        confirmPasswordInput.value = ""

        // clears the error message after the modal fades out
        setTimeout(() => {setError("")}, 200)
    }

    return (
        <GenericModal
            handleCloseModal={handleCloseModal}
            open={props.open}
            setOpen={props.setOpen}
        >
            <Key src={KeyImage} />

            <ContentText>
                By enabling a password, you’ll only be able to view, update and
                delete your note entering the provided password below.
            </ContentText>

            <ModalInput
                name="password"
                type="password"
                placeholder="Password..."
                id="password"
                togglePassword
                onInput={resetError}
            />
            <ModalInput
                name="confirm-password"
                id="confirm-password"
                type="password"
                placeholder="Confirm password..."
                togglePassword
                onInput={resetError}
            />

            {error}

            <ModalButton
                style={{ backgroundColor: "#1C243E", marginTop: "12px" }}
                onClick={handlePasswordSubmit}
            >
                Submit
            </ModalButton>
        </GenericModal>
    )
}
