import { Button } from "./styles"
import { ButtonHTMLAttributes, CSSProperties } from "react"

interface Props extends ButtonHTMLAttributes<any> {
    children: string
    style?: CSSProperties
}

export default function DialogButton(props: Props) {
    return (
        <Button {...props} style={props.style}>
            {props.children}
        </Button>
    )
}