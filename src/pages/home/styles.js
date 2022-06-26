import styled from 'styled-components'

export const Banner = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;


    video {
        position: fixed;
        top: 0;
        left: 0;
        object-fit: cover;
        width: 100%;
    }

    .content {
        position: relative;
        z-index: 1;
        text-align: center;

        h1{
            text-transform: uppercase;
            margin: 10px;
            display: flex;
        }

        img{
            width: 20px;
            height: 20px;
        }
    }

    .ContainerBt{
        margin-top: 5%;
        width: 100vh;
        display: flex;
        justify-content: space-between;

    }

    .links{
        position: absolute;
        right: 35px;
        bottom: 35px;

        a{
            text-decoration: none;
            cursor: pointer;
            margin: 6px;
            color: var(--white);
        }
    }
`