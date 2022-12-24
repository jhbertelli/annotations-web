import { Button } from "./styles"
import { ButtonHTMLAttributes, CSSProperties } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string
    style?: CSSProperties
}

export default function ModalButton(props: Props) {
    return (
        <Button {...props} style={props.style}>
            {props.children}
        </Button>
    )
}
