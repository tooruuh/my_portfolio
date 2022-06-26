import styled from 'styled-components'

export const LinkContent = styled.a`
    position: relative;
    background: var(--white);
    color: var(--white);
    text-decoration: none;
    font-size: 1.5em;
    letter-spacing: 0.1em;
    font-weight: 400;
    padding: 10px 30px;
    transition: 0.5s;
    border: none;
    cursor: pointer;

    :hover{
        background-color: var(--green);
        letter-spacing: 0.25em;
        box-shadow: 0 0 35px var(--green);
        color: var(--green);
    }

    :before{
        content: '';
        position: absolute;
        inset: 2px;
        background: var(--black);
    }

    span{
        position: relative;
        z-index: 1;
    }

    i{
        position: absolute;
        inset: 0;
        display: block;
    }

    i::before{
        content: '';
        position: absolute;
        top: 0;
        left: 80%;
        width: 10px;
        height: 4px;
        background-color: var(--black);
        transform: translateX(-50%) skewX(325deg);
        transition: 0.5s;
    }
    
    :hover i::before{
        width: 20px;
        left: 20%;
    }
`