import styled from "styled-components";

export const ContainerButton = styled.button`
    width: 182px;
    height: 36px;
    background: #9758a6;
    border-radius: 20px;
    
    cursor: pointer;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #eee;

    &:hover {
        opacity: .7;
    }

    &:active {
        opacity: .3;
    }

    border: ${ props => props.error ? '2px solid #cc1717;' : 'none'};
`
