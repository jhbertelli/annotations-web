import styled from "styled-components"
import { Paper } from "@mui/material"

export const NoteContainer = styled(Paper)`
    border-radius: 10px;
    overflow: hidden;
`

export const Title = styled.p`
    padding: 0.75em;
    text-align: center;
    font: 600 13pt "Inter";
    color: ${props => props.color};
    white-space: break-spaces;
    text-overflow: ellipsis;
    overflow: hidden;
`

export const TextContainer = styled.div`
    padding: 1em;
`

export const Text = styled.pre`
    font: 400 10pt "Inter";
    color: ${props => props.color};
    white-space: break-spaces;
    text-overflow: ellipsis;
    overflow: hidden;
    /* everything below: cuts text in case it's too long in height */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-box-orient: vertical;
    box-orient: vertical;
    -webkit-line-clamp: 20;
    -moz-line-clamp: 20;
    -ms-line-clamp: 20;
    line-clamp: 20;
`