import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url('${Background}');

    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginImage = styled.img`
    height: 70%;
`

export const ContainerItens = styled.div`
    background: #373737;
    border-radius: 0px 10px 10px 0;
    height: 70%;
    padding: 25px 75px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: #fff;
        margin-top: 100px;
    }
`

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #fff;
    margin-top: 28px;
    margin-bottom: 5px;
`

export const Input = styled.input`
    width: 390px;
    height: 38px;
    background: #fff;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    padding-left: 10px;
`

export const Button = styled.button`
    width: 182px;
    height: 36px;
    background: #9758a6;
    border-radius: 20px;
    
    margin-top: 75px;
    margin-bottom: 25px;
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
`

export const SignInLink = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #fff;
    text-decoration: underline;
    a {
        cursor: pointer;
    }
`
