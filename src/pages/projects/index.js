import { useHistory } from "react-router-dom";
import Rodape from "../../components/rodape";
import { Container, ContainerLink, ContainerProject, TituloPage } from "./styles";
import Link from '../../components/link'

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
        <ContainerProject>
          <div>
            <p>Work in progress</p>
          </div>
        </ContainerProject>
        <ContainerProject>
          <div>
            <p>Work in progress</p>
          </div>
        </ContainerProject>
        <ContainerProject>
          <div>
            <p>Work in progress</p>
          </div>
        </ContainerProject>
        <ContainerProject>
          <div>
            <p>Work in progress</p>
          </div>
        </ContainerProject>
        <ContainerProject>
          <div>
            <p>Work in progress</p>
          </div>
        </ContainerProject>
        <ContainerProject>
          <div>
            <p>Work in progress</p>
          </div>
        </ContainerProject>
      </Container>

      <Rodape />
    </>
  )
}
