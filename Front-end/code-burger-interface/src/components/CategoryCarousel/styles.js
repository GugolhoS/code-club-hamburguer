import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    background: #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

    .rec.rec-arrow{
        background-color: #9758a6;
        color: #efefef;
    }
    .rec.rec-arrow:hover{
        border: 2px solid #9758a6;
        background-color: #efefef;
        color: #9758a6;
    }
    .rec.rec-arrow:disabled{
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }
`

export const CategoryImg = styled.img`
`

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
`

export const Image = styled.img`
    width: 200px;
    border-radius: 10px;
`

export const Button = styled(Link)`
    margin-top: 16px;
    background: #9758a6;
    box-shadow: 0px 5px 10px rgba(151, 88, 166, .22),
        0px 20px 40px rgba(151, 88, 166, .24);
    border-radius: 8px;
    height: 50px;

    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 100%;
    text-align: center;
    color: #fff;

    cursor: pointer;

    &:hover{
        opacity: .8;
    }

    &:active{
        opacity: 0.5;
    }

    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`