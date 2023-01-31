import NoteNotFoundImage from "../../assets/note-not-found.svg"
import BackHomeButton from "../BackHomeButton"
import { ErrorImage, ErrorText, SmallText } from "./styles"

export default function NoteNotFoundError() {
    return (
        <>
            <ErrorImage src={NoteNotFoundImage} />
            <ErrorText>Note not found</ErrorText>
            <SmallText>Please check if the link is correct.</SmallText>
            <BackHomeButton />
        </>
    )
}
