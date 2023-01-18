import { PrivateNoteContainer, Title } from "./styles"
import LockImage from "../../assets/lock.svg"
import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
    title: string
}

export default function PrivateNote(props: Props) {
    return (
        <PrivateNoteContainer>
            <img src={LockImage} />
            <Title>{props.title}</Title>
        </PrivateNoteContainer>
    )
}