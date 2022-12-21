import { HeaderButton, StyledHeader } from "./styles"

interface Props {
    leftButton?: {
        url: string
        image: string
    }
    rightButton?: {
        url: string
        image: string
    }
}

export default function Header(props: Props) {
    return (
        <StyledHeader>
            {props.leftButton ? (
                <HeaderButton href={props.leftButton.url} style={{ left: 0 }}>
                    <img src={props.leftButton.image} />
                </HeaderButton>
            ) : (
                ""
            )}
            
            {props.rightButton ? (
                <HeaderButton href={props.rightButton.url} style={{ right: 0 }}>
                    <img src={props.rightButton.image} />
                </HeaderButton>
            ) : (
                ""
            )}
        </StyledHeader>
    )
}
