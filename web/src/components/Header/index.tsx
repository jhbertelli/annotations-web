import "./header.css"

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
        <header>
            {props.leftButton ? (
                <a href={props.leftButton.url} style={{ left: 0 }}>
                    <img src={props.leftButton.image} />
                </a>
            ) : (
                ""
            )}
            {props.rightButton ? (
                <a href={props.rightButton.url} style={{ right: 0 }}>
                    <img src={props.rightButton.image} />
                </a>
            ) : (
                ""
            )}
        </header>
    )
}
