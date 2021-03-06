import React from 'react';
import { useConfigurations } from 'hooks';
import { BodyContainer, Container, HeaderContainer, LetterBox, LetterLine, Wrapper } from './styles';

interface IProps {
  setOpenRulesModal: React.Dispatch<React.SetStateAction<boolean>>
}

const RulesModal: React.FC<IProps> = ({ setOpenRulesModal }: IProps) => {
  const configurations = useConfigurations();

  return (
    <Wrapper onClick={() => setOpenRulesModal(false)}>
      <Container onClick={() => setOpenRulesModal(false)}>
        <HeaderContainer>
          <h1>Como jogar</h1>
          <p>Todo dia aparecerá uma palavra nova e {'\n'}você terá 6 chances para acertá-la</p>
        </HeaderContainer>
        <BodyContainer>
          <p>Cada tentativa deve ser uma palavra que exista. Os acentos e cedilhas são preenchidos automaticamente</p>

          <p>Caso a letra fique {configurations.colorBlindMode ? 'dessa cor' : 'verde'}, ela está na palavra e sua posição está correta</p>
          
          <LetterLine>
            <LetterBox>N</LetterBox>
            <LetterBox>O</LetterBox>
            <LetterBox>B</LetterBox>
            <LetterBox background={configurations.colorBlindMode ? "#648fff" :"#00A32D"}>R</LetterBox>
            <LetterBox>E</LetterBox>
          </LetterLine>
          
          <p>Caso a letra fique {configurations.colorBlindMode ? 'dessa cor' : 'amarela'}, ela está na palavra, mas na posição errada</p>

          <LetterLine>
            <LetterBox background={configurations.colorBlindMode ? "#fe6100" : "#F7A32D"}>P</LetterBox>
            <LetterBox>R</LetterBox>
            <LetterBox>O</LetterBox>
            <LetterBox>S</LetterBox>
            <LetterBox>A</LetterBox>
          </LetterLine>

          <p>Caso a letra fique {configurations.colorBlindMode ? 'dessa cor' : 'cinza'}, ela não está na palavra</p>

          <LetterLine>
            <LetterBox>C</LetterBox>
            <LetterBox>O</LetterBox>
            <LetterBox>I</LetterBox>
            <LetterBox>S</LetterBox>
            <LetterBox background={"#333333"}>A</LetterBox>
          </LetterLine>

          <p>As palavras podem conter letras repetidas</p>
        </BodyContainer>
     </Container>
    </Wrapper>
  );
}

export default RulesModal;