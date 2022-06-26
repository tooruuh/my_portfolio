import Rodape from "../../components/rodape";
import fotoPerfil from '../../assets/victor.jpeg'
import { ContainerLink, Content, ContentDiv } from "./styles";
import { useHistory } from "react-router-dom";
import Link from "../../components/link";

export default function AboutMe() {

  const history = useHistory();

  return (
    <>
      <ContainerLink>
        <Link onClick={() => { history.push('/') }}>Home</Link>
        <Link onClick={() => { history.push('/Technology') }}>Tecnologias</Link>
        <Link onClick={() => { history.push('/qualifications') }}>Qualificações</Link>
        <Link onClick={() => { history.push('/Projects') }}>Meus Projetos</Link>
      </ContainerLink>

      <Content>

        <img src={fotoPerfil} alt='foto victor'/>

        <ContentDiv>
          <p className="textTop">SOBRE MIM</p>

          <h2>victor hugo</h2>
          <p className="textSobre">
            Formado em matemática, professor por 5 anos do ensino fundamental 2 e apaixonado por tecnologia,
            tenho um grande desejo de aprender cada vez mais. Estou iniciando minha carreira de tecnologia afim
            de evoluir e atuar em uma área que sempre desejei além buscar sempre soluções para os problemas futuros.
          </p>
        </ContentDiv>
      </Content>

      <Rodape />
    </>
  )
}