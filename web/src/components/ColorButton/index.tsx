import { HTMLAttributes } from "react"
import { Button } from "./styles"

interface Props extends HTMLAttributes<HTMLDivElement> {
    color: string
}

export default function ColorButton(props: Props) {
    return (
        <Button
            {...props}
            className="color-button"
            style={{ backgroundColor: props.color }}
        />
    )
}
