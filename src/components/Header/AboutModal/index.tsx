import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BodyContainer, ContactContainer, Container, Wrapper } from './styles';

interface IProps {
  setOpenAboutModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AboutModal: React.FC<IProps> = ({ setOpenAboutModal }: IProps) => {
  return (
    <Wrapper onClick={() => setOpenAboutModal(false)}>
      <Container onClick={() => setOpenAboutModal(false)}>
        <BodyContainer>
          <h1>TERMIO</h1>
          <p>Criado em fevereiro de 2022</p>
          <ContactContainer  
            href="https://github.com/peterhttps" 
            target="_blank" 
            rel="noreferrer"
            onClick={e => e.stopPropagation()}>
            <p>Pedro Lucas</p>
            <div>
              <FaGithub size={24} color={"#B1A7A6"} />
            </div>
          </ContactContainer>
        </BodyContainer>
      </Container>
    </Wrapper>
  );
}

export default AboutModal;