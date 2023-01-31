import styled from "styled-components"

export const NoteContainer = styled.div`
    width: 85%;
    position: relative;
    padding-top: 5em;
    margin: 0 auto 0 auto;

    color: white;
`

export const Overlay = styled.div`
    /* couldn't find a better solution at the moment */
    opacity: 0.85;
    width: 100%;
    height: 100%;
    z-index: 0;
    position: fixed;
`

export const Title = styled.h1`
    font: 700 13pt "Josefin Sans";
`

export const Text = styled.pre`
    font: 400 13pt "Josefin Sans";
    padding-top: 1.15385em;
    white-space: break-spaces;
    text-align: justify;
`

export const Main = styled.main`
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`