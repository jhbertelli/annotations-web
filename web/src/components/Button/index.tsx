import { StyledButton } from "./styles"

interface Props {
    background: string
    children: string
}

export default function Button(props: Props) {
    return (
        <StyledButton style={{ backgroundColor: props.background }}>
            {props.children}
        </StyledButton>
    )
}
