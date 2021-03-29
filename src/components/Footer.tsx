import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container } from '@/styles/components/FooterStyles';

export function Footer() {
  return (
    <Container>
      <h4><span>DESENVOLVIDO POR</span> <strong>SAMUEL</strong> Damasceno Filho</h4>

      <div>
        <a href="https://github.com/samuelfilho87/personagens-marvel" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub size={24} />
        </a>

        <a href="https://www.linkedin.com/in/samuel-damasceno-filho-84ab1313a" target="_blank" rel="noopener noreferrer" title="Linkedin">
          <FaLinkedin size={24} />
        </a>
      </div>
    </Container>
  );
}
