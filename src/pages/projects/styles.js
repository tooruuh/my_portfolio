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

export const TituloPage = styled.h1`
    text-align: center;
    margin-top: 2%;
    font-size: 3em;
    font-weight: 300;
`

export const Card = styled.div`
    position: relative;
    width: 600px;
    height: 350px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    transition: .5s;

    .textCircle{
        position: relative;
        left: 40%;
        transition: .5s;
    }

    .pink{
        left: 43%;
    }

    .green{
        left: 38%;
    }

    .black{
        left: 43%;
    }

    :hover .textCircle{
        display: none;
        transition: .5s;
    }

    .circle{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        overflow: hidden;

        ::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--green);
            clip-path: circle(120px at center);
            transition: .5s;
        }
    }

    :hover .orange:before{
        background: var(--orange);
        clip-path: circle(400px at center);
    }

    :hover .pink:before{
        background: var(--pink);
        clip-path: circle(400px at center);
    }

    :hover .green:before{
        background: var(--green2);
        clip-path: circle(400px at center);
    }

    :hover .black:before{
        background: var(--black2);
        clip-path: circle(400px at center);
    }

    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        visibility: hidden;
    }

    :hover img{
        left: 72%;
        height: 300px;
        visibility: visible;
        transition: .5s;
    }

    .content{
        position: relative;
        width: 50%;
        left: 20%;
        padding: 20px 20px 20px 40px;
        transition: .5s;
        opacity: 0;
        visibility: hidden;
        
        h2{
            color: #fff;
            text-transform: uppercase;
            font-size: 2em;
            line-height: 1em;
            margin-bottom: 5px;
        }

        p{
            color: #fff;

        }

        a{
            position: relative;
            color: #111;
            padding: 10px 20px;
            border-radius: 10px;
            background: #FFF;
            margin: 10px 10px 0 0;
            display: inline-block;
            font-weight: 700;
        }
    }

    :hover .content{
        left: 0;
        opacity: 1;
        visibility: visible;
    }



    @media (max-width: 991px){
        width: auto;
        max-width: 350px;
        align-items: flex-start;
        margin: 10px;

        :hover{
            height: 600px;
        }

        .content{
            width: 100%;
            left: 0;
            padding: 30px;
        }

        :hover img{
            top: 70%;
            left: 50%;
            height: 300px;
        }
    }

    @media (max-width: 420px){
        .content{
            padding: 20px;
        }
    }

`



