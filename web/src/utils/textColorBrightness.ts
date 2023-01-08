export default function textColorBrightness(hex: string) {
    // checks if the color inserted is too bright
    // (used to change the text color to black/white)

    const r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16)

    const brightness = (r * 299 + g * 587 + b * 114) / 1000
    if (brightness >= 240) return "#000"

    return "#FFF"
}
