export default function validateColor(color: string) {
    const colorRegex = /^#[A-Fa-f0-9]{6}$/g // starts with a hashtag, accepts letters from A to F, 0-9 numbers and has exactly 7 digits (6)

    if (colorRegex.test(color)) return true

    return false
}