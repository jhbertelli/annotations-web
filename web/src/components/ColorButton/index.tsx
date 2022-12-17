import "./color-button.css"

interface Props {
    color: string
}

export default function ColorButton(props: Props) {
    return (
        <div
            className="color-button"
            style={{ backgroundColor: props.color }}
        ></div>
    )
}
