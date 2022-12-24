import { Input, InputContainer, TogglePassword } from "./styles"
import { BaseSyntheticEvent, InputHTMLAttributes } from "react"

import ShowPassword from "../../assets/show-password.svg"
import HidePassword from "../../assets/hide-password.svg"

interface Props extends InputHTMLAttributes<any> {
    name: string
    id: string
    placeholder: string
    togglePassword?: boolean
}

export default function ModalInput(props: Props) {
    const handleTogglePassword = (e: BaseSyntheticEvent) => {
        // toggles between showing and hiding password
        // activated when clicking the toggle password button
        const togglePasswordButton = e.target
        const input = togglePasswordButton.previousSibling
        
        if (input.type === "password") {
            input.type = "text"
            togglePasswordButton.src = HidePassword

            return
        }

        input.type = "password"
        togglePasswordButton.src = ShowPassword
    }

    return (
        <InputContainer htmlFor={props.id}>
            <Input
                {...props}
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
            />
            {props.togglePassword ? (
                <TogglePassword
                    onClick={handleTogglePassword}
                    src={ShowPassword}
                />
            ) : (
                ""
            )}
        </InputContainer>
    )
}
