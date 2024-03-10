import styled from 'styled-components'

export const Container = styled.div`
    height: 72px;
    background-color: #fff;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, .15);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`

export const ContainerLeft = styled.div`
    display: flex;
    gap: 30px;
`

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    

`

export const PageLink = styled.div`
    cursor: pointer;
    text-decoration: none;
    color: ${props => (props.isActive ? '#9758a6' : '#555')};
    font-size: 16px;
    line-height: 20px;
    font-weight:  ${props => (props.isActive ? 'bold' : 'normal')};
`

export const ContainerText = styled.div`
    p {
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: #555;
    }
`

export const LineVertical = styled.div`
    height: 40px;
    border: .5px solid #bababa;
`

export const PageLinkExit = styled.div`
    cursor: pointer;
    text-decoration: none;
    color: #555;
    font-size: 16px;
    line-height: 20px;

    font-style: normal;
    font-weight: bold;

    color: #9758a6;
`
