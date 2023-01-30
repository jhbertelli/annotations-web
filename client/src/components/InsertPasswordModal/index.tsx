import { BaseSyntheticEvent, FormEvent, ReactNode, useState } from "react"
import axios from "axios"

import GenericModal, { ModalProps } from "../GenericModal"
import ModalInput from "../ModalInput"

import LockImage from "../../assets/lock.svg"

import { ErrorMessage, Form, Lock, SubmitButton, Text } from "./styles"

interface Props extends ModalProps {
    noteId: string
}

export default function InsertPasswordModal(props: Props) {
    const [errorMessage, setErrorMessage] = useState<ReactNode>()
    const passwordInput = document.querySelector("#password") as HTMLInputElement

    const handleCloseModal = () => {
        passwordInput.value = ""

        setErrorMessage("")

        props.setOpen(false)
    }

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const password = passwordInput.value

        const form = {
            password
        }

        const request = await axios.post(
            `http://localhost:7777/note/${props.noteId}/password/`,
            form
        )

        const response = request.data

        if (response.success)
            return (window.location.href = `/note/${props.noteId}/`)

        setErrorMessage(
            <ErrorMessage>The provided password is wrong</ErrorMessage>
        )
    }

    const handlePasswordInput = (e: BaseSyntheticEvent) => {
        if (e.target.value === "")
            return setErrorMessage(
                <ErrorMessage>Please enter a password</ErrorMessage>
            )
        
        setErrorMessage("")
    }

    return (
        <GenericModal
            open={props.open}
            setOpen={props.setOpen}
            handleCloseModal={handleCloseModal}
        >
            <Form onSubmit={handleFormSubmit}>
                <Lock src={LockImage} alt="" />
                <Text>Please enter this note’s password:</Text>
                {errorMessage}
                <ModalInput
                    onInput={handlePasswordInput}
                    placeholder="Password..."
                    id="password"
                    name="password"
                    type="password"
                />
                <SubmitButton onClick={handleFormSubmit}>Submit</SubmitButton>
            </Form>
        </GenericModal>
    )
}
