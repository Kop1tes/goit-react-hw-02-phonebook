import styled from "@emotion/styled";

export const ContactItem = styled.li`
    display: flex;
    gap: 10px;
    margin: 10px;
`

export const Button = styled.button`
    background-color: white;
    border-radius: 5px;
    border: 1px solid gray;
    cursor: pointer;

    &:focus {
        background-color: blue;
        color: white;
    }
`