import { FormEvent, useState } from "react"
import axios from "axios"

import GenericModal, { ModalProps } from "../GenericModal"
import ModalInput from "../ModalInput"

import LockImage from "../../assets/lock.svg"

import { ErrorMessage, Form, Lock, SubmitButton, Text } from "./styles"

interface Props extends ModalProps {
    noteId: string
}

export default function InsertPasswordModal(props: Props) {
    const [errorMessage, setErrorMessage] = useState("")
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

        setErrorMessage("The provided password is wrong")
    }

    return (
        <GenericModal
            open={props.open}
            setOpen={props.setOpen}
            handleCloseModal={handleCloseModal}
        >
            <Form onSubmit={handleFormSubmit}>
                {/* <h1>{props.noteId}</h1> */}
                <Lock src={LockImage} alt="" />
                <Text>Please enter this note’s password:</Text>
                <ErrorMessage>{errorMessage}</ErrorMessage>
                <ModalInput
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
