import styled from 'styled-components'

import { Button } from '../../../components'


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        background: #565656;
        border-radius: 10px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
`

export const Label = styled.p`
    font-size: 15px;
    color: #fff;
    margin-bottom: 3px;
`

export const Input = styled.input`
    height: 40px;
    border-radius: 10px;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, .1);
    width: 100%;
    min-width: 280px;
    padding-left: 10px;
`

export const ButtonStyles = styled(Button)`
    width: 100%;
    margin-top: 25px;
`

export const LabelUpload = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px dashed #fff;
    padding: 10px;
    border-radius: 5px;
    gap: 10px;

    input {
        opacity: 0;
    }
`

export const ContainerIput = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    input {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`