import { StyledButton } from "./styles"
import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    background: string
    children: string
}

export default function Button(props: Props) {
    return (
        <StyledButton
            {...props}
            style={{ backgroundColor: props.background, ...props.style }}
        >
            {props.children}
        </StyledButton>
    )
}
