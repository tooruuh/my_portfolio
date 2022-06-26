import { useHistory } from "react-router-dom";
import Link from "../../components/link";
import Rodape from "../../components/rodape";
import { BackEnd, Container, ContainerTec, ContentText, FrontEnd, TituloPage } from "./styles";

import js from '../../assets/js.png'
import rea from '../../assets/react.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'

export default function Technology() {

  const history = useHistory();

  return (
    <>

      <Container>
        <Link onClick={() => { history.push('/') }}>Home</Link>
        <Link onClick={() => { history.push('/aboutme') }}>Sobre</Link>
        <Link onClick={() => { history.push('/qualifications') }}>Qualificações</Link>
        <Link onClick={() => { history.push('/Projects') }}>Meus Projetos</Link>
      </Container>

        <TituloPage>Tecnologias</TituloPage>

      <ContainerTec>

        <FrontEnd>
          <div className="containerImg">
            <img src={js} alt="javascript" className="javascript" />
            <img src={css} alt="css" className="css" />
            <img src={html} alt="html" className="html" />
            <img src={rea} alt="react" className="react" />
          </div>

          <ContentText>
            <p >Javascript</p>
            <p>CSS</p>
            <p>HTML</p>
            <p>React</p>
          </ContentText>

        </FrontEnd>

        <BackEnd>
          <p> BackEnd in progress ... </p>
        </BackEnd>

      </ContainerTec>

      <Rodape />
    </>
  )
}
