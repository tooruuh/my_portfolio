import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    height: 100px;
    width: 950px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ContainerTec = styled.div`
    display: flex;
    max-width: 850px;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    margin: auto;
    margin-top: 3%;
`

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translate(-50px) translateY(-50px);
    }

    to {
        opacity: 1;
        transform: translate(0px);
    }
`

const appearFromDown = keyframes`
    from {
        opacity: 0;
        transform: translate(100px) translateY(50px);
    }

    to {
        opacity: 1;
        transform: translate(0px);
    }
`

const appearText = keyframes`
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translate(0px);
    }
`

export const FrontEnd = styled.div`
    width: 400px;
    height: 600px;
    border-radius: 8px;
    background: var(--gray);

    .containerImg{
        position: absolute;
        width: 400px;
        height: 35%;


        .javascript{
            position: absolute;
            top: 15%;
            left: 12%;
            animation: ${appearFromDown} 1s;
        }

        .css{
            position: absolute;
            top: 12%;
            left: 58%;
            animation: ${appearFromDown} 1s;
        }

        .html{
            position: absolute;
            top: 60%;
            left: 20%;
            animation: ${appearFromLeft} 1s;
        }

        .react{
            position: absolute;
            top: 56%;
            left: 60%;
            animation: ${appearFromLeft} 1s;
        }
    }

    :hover{
        box-shadow: 0 0 35px var(--gray);
    }

    img{
        width: 110px;
        border-radius: 10px;
    }
`

export const TituloPage = styled.div`
    font-size: 3em;
    font-weight: 400;
    text-align: center;
    margin-top: 2%;
    font-weight: 300;
`

export const ContentText = styled.div`
    position: absolute;
    bottom: 23%;
    left: 33%;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${appearText} 1s;

    p{
        font-size: 1.5em;
        letter-spacing: 0.1em;
        font-weight: 400;
        margin: 2.5px;
        cursor: default;
    
        :hover{
            letter-spacing: 0.3em;
        }
    }
`

export const BackEnd = styled.div`
    width: 400px;
    height: 600px;
    border-radius: 8px;
    background:var(--gray);

    p{
        width: 100%;
        position: relative;
        top: 40%;
        height: 60px;
        display: flex;
        align-items: center;
        letter-spacing: 0.2em;
        justify-content: center;
        background: var(--orange);
        font-size: 1.2rem;
        cursor: default;


    }:hover{
        letter-spacing: 0.6em;
    }

    :hover{
        box-shadow: 0 0 35px var(--gray);
    }
`