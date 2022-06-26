import { useHistory } from 'react-router-dom'
import certificado from '../../assets/certificado.jpg'
import Link from '../../components/link'
import Rodape from '../../components/rodape'
import { Container, ContainerLink, TituloPage } from './styles'

export default function Qualifications() {

  const history = useHistory();

  return (
    <>
      <ContainerLink>
        <Link onClick={() => { history.push('/') }}>Home</Link>
        <Link onClick={() => { history.push('/aboutme') }}>Sobre</Link>
        <Link onClick={() => { history.push('/Technology') }}>Tecnologias</Link>
        <Link onClick={() => { history.push('/projects') }}>Meus Projetos</Link>
      </ContainerLink>

      <TituloPage>Qualificações</TituloPage>

      <Container>
        <img src={certificado} alt='certificado front end' />
      </Container>

      <Rodape />
    </>
  )
}
