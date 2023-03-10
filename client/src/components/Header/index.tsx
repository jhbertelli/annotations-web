import { HTMLAttributes } from "react"
import { HeaderButton, StyledHeader } from "./styles"

interface Props extends HTMLAttributes<HTMLDivElement> {
    leftButton?: {
        image: string
        url?: string
        action?: VoidFunction
    }
    rightButton?: {
        image: string
        url?: string
        action?: VoidFunction
    }
}

export default function Header(props: Props) {
    return (
        <StyledHeader {...props}>
            {props.leftButton ? (
                <HeaderButton
                    href={props.leftButton.url}
                    onClick={props.leftButton.action}
                    style={{ left: 0 }}
                >
                    <img src={props.leftButton.image} />
                </HeaderButton>
            ) : (
                ""
            )}

            {props.rightButton ? (
                <HeaderButton
                    href={props.rightButton.url}
                    onClick={props.rightButton.action}
                    style={{ right: 0 }}
                >
                    <img src={props.rightButton.image} />
                </HeaderButton>
            ) : (
                ""
            )}
        </StyledHeader>
    )
}
