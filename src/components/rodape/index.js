import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Container } from './styles'

export default function Rodape() {
    return (

        <Container>
            <a href='https://github.com/tooruuh' target='blank'>
                <FaGithub size={70} />
            </a>
            <a href='https://www.linkedin.com/in/victor-hugo-236317236' target='blank'>
                <FaLinkedin size={70} />
            </a>
        </Container>
    )
}
