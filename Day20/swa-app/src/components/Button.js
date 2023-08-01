import styled from "@emotion/styled"

const Button = styled.button`
    display: block;
    width: 100%;
    height: 40px;
    padding: 8px 6px;
    background-color: black;
    color: white;
    border: none;
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        background-color: #111;
    }

    &:active {
        background-color: #222;
    }

    &:disabled {
        background-color: #999;
    }
`;

export default Button;