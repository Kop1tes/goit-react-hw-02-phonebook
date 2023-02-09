import styled from "@emotion/styled";

export const Form = styled.form`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 10px;
    gap: 20px;
    width: 300px;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 150px;
`

export const Input = styled.input`
    padding-left: 5px;
`

export const Button = styled.button`
    width: 100px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid gray;

    &:hover {
        background-color: blue;
        color: white;
    }
`