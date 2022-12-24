import { Button } from "./styles"

interface Props {
    color: string
}

export default function ColorButton(props: Props) {
    return (
        <Button
            className="color-button"
            style={{ backgroundColor: props.color }}
        />
    )
}
