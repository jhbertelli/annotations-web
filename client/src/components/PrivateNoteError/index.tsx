import LockImage from "../../assets/lock.svg"
import BackHomeButton from "../BackHomeButton"
import { ErrorImage, ErrorText, SmallText } from "./styles"


export default function PrivateNoteError() {
    return (
        <>
            <ErrorImage src={LockImage} />
            <ErrorText>This note is private</ErrorText>
            <SmallText>
                Please insert this note's password to view or edit it. <br />
                If you had entered this note's password before and are seeing
                this page now, your password has expired.
            </SmallText>
            <BackHomeButton />
        </>
    )
}
