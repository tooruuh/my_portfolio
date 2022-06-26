import styled, { keyframes } from 'styled-components'

const appearFromRigth = keyframes`
    from {
        opacity: 0;
        transform: translate(50px);
    }

    to {
        opacity: 1;
        transform: translate(0px);
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;

    img{
        width: 650px;
        border-radius: 16px;
        position: absolute;
        top: 21%;
        left: 17%;
        animation: ${appearFromRigth} 1s;
    }
`

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translate(-50px);
    }

    to {
        opacity: 1;
        transform: translate(0px);
    }
`

export const ContentDiv = styled.div`
    width: 500px;
    position: absolute;
    top: 35%;
    right: 19%;
    animation: ${appearFromLeft} 1s;

    p{
        font-size: 1.2em;
    }

    h2{
        text-transform: uppercase;
        margin-bottom: 12px;
    }

    .textTop{
        color: var(--green);
        margin-bottom: 25px;
    }
`

export const ContainerLink = styled.div`
    height: 100px;
    width: 950px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`



