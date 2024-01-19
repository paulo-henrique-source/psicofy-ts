import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    transform: translate(-50%, -50%);
    background-color: #f8f9fa;
    z-index: 2;
    border-radius: 5px 5px 0 0;
    cursor: move;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    color: black;
    align-items: center;
    background-color: #6a9eda;
    padding: 0.5rem;
    border-radius: 5px 5px 5px 5px;

    span {
        display: flex;
    }
`;

export const Body = styled.div`
    display: flex;
    justify-content: space-between;
    color: black;
    align-items: center;
    background-color: #f8f9fa;
    border-radius: 0 0 5px 5px;

    span {
        display: flex;
    }
`;
