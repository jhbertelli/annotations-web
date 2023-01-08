import { HTMLAttributes } from "react"
import hexToRGB from "../../utils/hexToRGB"
import textColorBrightness from "../../utils/textColorBrightness"
import { NoteContainer, Title, Text, TextContainer } from "./styles"

interface Props extends HTMLAttributes<HTMLDivElement> {
    title: string
    text: string
    color: string
}

export default function Note(props: Props) {
    const fadedColor = hexToRGB(props.color, 0.75)

    return (
        <NoteContainer {...props} elevation={3} sx={{ backgroundColor: "transparent" }}>
            <Title
                color={textColorBrightness(props.color)}
                style={{
                    backgroundColor: props.color
                }}
            >
                {props.title}
            </Title>
            <TextContainer
                style={{
                    backgroundColor: fadedColor
                }}
            >
                <Text color={textColorBrightness(props.color)}>
                    {props.text}
                </Text>
            </TextContainer>
        </NoteContainer>
    )
}
