import { Input } from "./styles"
import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<any> {
    name: string
    placeholder: string
}

export default function DialogInput(props: Props) {
    return <Input {...props} name={props.name} placeholder={props.placeholder} />
}
