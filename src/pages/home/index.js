import { Banner } from "./styles";
import { useHistory } from "react-router-dom";

import movie from '../../assets/Coding3.mp4'
import Rodape from "../../components/rodape";
import Link from "../../components/link";


export default function Home() {

  const history = useHistory();

  return (
    
    <Banner>
      <video autoPlay muted loop>
        <source src={movie} type='video/mp4' />
      </video>

      <div className="content">
        <div>
          <h1>&lt;Hello World!/&gt;</h1>
          <h1>Seja bem-vindo ao Portfólio do Victor</h1>
          <h1>Desenvolvedor front end</h1>
        </div>

        <div className="ContainerBt">
          <Link onClick={() => { history.push('/aboutme') }}>Sobre</Link>
          <Link onClick={() => { history.push('/Technology') }}>Tecnologias</Link>
          <Link onClick={() => { history.push('/qualifications') }}>Qualificações</Link>
          <Link onClick={() => { history.push('/projects') }}>Meus Projetos</Link>
        </div>
      </div>

      <Rodape />

    </Banner>
  )
}