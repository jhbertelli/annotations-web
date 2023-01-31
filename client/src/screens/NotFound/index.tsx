import Header from "../../components/Header"
import BackHomeButton from "../../components/BackHomeButton"

import BackButton from "../../assets/back.svg"

import { Main, Subtitle, Title } from "./styles"

export default function NotFound() {
    return (
        <>
            <Header leftButton={{image: BackButton, url: "/"}} />
            <Main>
                <Title>404</Title>
                <Subtitle>Page not found</Subtitle>
                <BackHomeButton />
            </Main>
        </>
    )
}