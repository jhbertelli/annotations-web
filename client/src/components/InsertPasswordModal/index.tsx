import { FormEvent } from "react"
import axios from "axios"

import GenericModal, { ModalProps } from "../GenericModal"
import ModalInput from "../ModalInput"

import LockImage from "../../assets/lock.svg"

import { Form, Lock, SubmitButton, Text } from "./styles"

interface Props extends ModalProps {
    noteId: string
}

export default function InsertPasswordModal(props: Props) {
    const handleCloseModal = () => {
        props.setOpen(false)
    }

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const password = (
            document.querySelector("#password") as HTMLInputElement
        ).value

        const form = {
            password
        }

        const request = await axios.post(
            `http://localhost:7777/note/${props.noteId}/password/`,
            form
        )

        const response = request.data

        if (response.sucess) window.location.href = `/note/${props.noteId}/`
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
