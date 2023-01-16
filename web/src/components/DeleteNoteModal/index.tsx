import GenericModal, { ModalProps } from "../GenericModal"
import DeleteNote from "../../assets/delete-note.svg"
import { Text, RedText, DeleteButton, CancelButton } from "./styles"
import axios from "axios"

interface Props extends ModalProps {
    noteId: string
}

export default function DeleteNoteModal(props: Props) {
    const handleCloseModal = () => {
        props.setOpen(false)
    }

    const handleDeleteNote = async () => {
        try {
            const request = await axios.delete(
                `http://localhost:7777/note/${props.noteId}/delete/`
            )

            if (request.status === 200) window.location.href = "/"
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <GenericModal
            open={props.open}
            setOpen={props.setOpen}
            handleCloseModal={handleCloseModal}
        >
            <img src={DeleteNote} alt="" />
            <Text>
                Are you sure you want to delete this note?{" "}
                <RedText>This action cannot be undone!</RedText>
            </Text>
            <CancelButton onClick={handleCloseModal}>Cancel</CancelButton>
            <DeleteButton onClick={handleDeleteNote}>Delete</DeleteButton>
        </GenericModal>
    )
}
