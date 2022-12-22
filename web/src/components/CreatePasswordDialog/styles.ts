import { Dialog, DialogContent } from "@mui/material"
import styled from "styled-components"

export const StyledDialog = styled(Dialog)`
    > div {
        > div {
            background-color: transparent !important;
            width: 400px;
        }
    }
`
export const Content = styled(DialogContent)`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #0e1428;
    border-radius: 20px;
`

export const ContentText = styled.p`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 11pt;
    line-height: 15px;
    text-align: center;

    color: #ffffff;

    margin: 1em 0;
`

export const CloseButton = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    margin: 1em;
`

export const Key = styled.img``