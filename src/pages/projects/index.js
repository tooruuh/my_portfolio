import { useHistory } from "react-router-dom";
import Rodape from "../../components/rodape";
import { Card, Container, ContainerLink, TituloPage } from "./styles";
import Link from '../../components/link'
import waiter from '../../assets/waiter.svg'
import hub from '../../assets/hub.svg'
import hamb from '../../assets/hamb.svg'
import shop from '../../assets/shop.svg'


export default function Projects() {

  const history = useHistory();

  return (
    <>
      <ContainerLink>
        <Link onClick={() => { history.push('/') }}>Home</Link>
        <Link onClick={() => { history.push('/aboutme') }}>Sobre</Link>
        <Link onClick={() => { history.push('/Technology') }}>Tecnologias</Link>
        <Link onClick={() => { history.push('/qualifications') }}>Qualificações</Link>
      </ContainerLink>

      <TituloPage>Projetos</TituloPage>

      <Container>

        <Card>
          <div className="circle orange"></div>
          <p className="textCircle orange">Kenzie Gastrobar</p>
          <img src={waiter} alt='garcom'/>
          <div className="content">
            <h2>Kenzie Gastrobar</h2>
            <p>Projeto desenvolvido em grupo, uma aplicação em ReactJS para facilitar o gerenciamento de restaurentes
              ao criar comandas e fazer pedidos, utilizando um fake json server, aplicação hospedada no Vercel.
            </p>
            <a href="https://kenzie-gastrobar-blue.vercel.app" target='_blank'>Visitar</a>
            <a href="https://github.com/tooruuh/kenzie_gastrobar" target='_blank'>Repositório</a>
          </div>
        </Card>

        <Card>
          <div className="circle pink"></div>
          <p className="textCircle pink">Kenzie Shop</p>
          <img src={shop} alt='garcom'/>
          <div className="content">
            <h2>Kenzie Shop</h2>
            <p>Projeto pessoal desenvoldido no curso da Kenzie Academy, feito em ReactJS
              simulando um e-commerce de relógios
            </p>
            <a href="https://react-entrega-s3-kenzishop-com-context-api-tooruuh-tooruuh.vercel.app/" target='_blank'>Visitar</a>
            <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzishop-com-context-api-tooruuh" target='_blank'>Repositório</a>
          </div>
        </Card>

        <Card>
          <div className="circle green"></div>
          <p className="textCircle green">Hamburgueria Kenzie</p>
          <img src={hamb} alt='garcom'/>
          <div className="content">
            <h2>Hamburgueria Kenzie</h2>
            <p>Projeto simples desenvoldido no curso da Kenzie Academy, uma page de uma hamburgueria simulando um e-commerce. 
              Projeto desenvolvido em ReactJS</p>
            <a href="https://react-entrega-s1-hamburgueria-da-kenzie-tooruuh.vercel.app/" target='_blank'>Visitar</a>
            <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-tooruuh" target='_blank'>Repositório</a>
          </div>
        </Card>

        <Card>
          <div className="circle black"></div>
          <p className="textCircle black">Kenzie Hub</p>
          <img src={hub} alt='garcom'/>
          <div className="content">
            <h2>Kenzie Hub</h2>
            <p>Aplicação para gestão de estudo, para maior controle dos conteudos já estudados e que ainda precisa estudar.</p>
            <a href="https://react-entrega-s2-kenzie-hub-tooruuh.vercel.app/" target='_blank'>Visitar</a>
            <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-tooruuh" target='_blank'>Repositório</a>
          </div>
        </Card>



      </Container>



      {/*       <Card>
        <div className="circle"></div>
        <div className="content">
          <h2>Pepsi Cola</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
          <a>Buy Now</a>
        </div>
      </Card> */}



      <Rodape />
    </>
  )
}
