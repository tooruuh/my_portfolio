import styled from 'styled-components'


export const ContainerLink = styled.div`
    height: 100px;
    width: 950px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Container = styled.div`
    background: var(--gray);
    width: 70%;
    height: 70vh;
    border-radius: 8px;
    margin: auto;
    margin-top: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
`

export const ContainerProject = styled.div`
    background: var(--gray2);
    width: 350px;
    height: 240px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: ease-in-out 0.3s;

    :hover{
        box-shadow: 0 0 35px var(--green);
    }

    div{
        width: 1000px;
        height: 40px;
        text-align: center;
        display: flex;
        transform: rotate(-50deg);
        background: var(--green);
        align-items: center;
        justify-content: center;

        p{
            letter-spacing: 0.1em;
        }
        p:hover{
            letter-spacing: 0.25em;
        }
    }
`

export const TituloPage = styled.h1`
    text-align: center;
    margin-top: 2%;
    font-size: 3em;
    font-weight: 300;
`

