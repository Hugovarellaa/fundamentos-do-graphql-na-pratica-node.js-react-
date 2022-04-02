import React from 'react';
import userImg from '../../assets/pessoa.webp';
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

const HomeHero: React.FC = () => (
  <>
    <Container>
      <img src={userImg} alt="Minha foto do Github" />
      <div>
        <TextContainer>
          <h1>Ola</h1>
          <h2>Me chamo Hugo Alves</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment"> //Minha apresentação</span>
            <span className="purple">Infos </span>
            {'\u007b'}
            <div>
              Nome: <span className="blue">Hugo</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Alves Varella</span>
            </div>
            {'\u007d'}
          </CodeItem>

          <CodeItem>
            <span className="comment"> //Minha apresentação</span>
            <span className="purple">Cargo </span>
            {'\u007b'}
            <div>
              Função: <span className="blue">Desenvolvedor Front-End</span>
            </div>
            <div>
              Cidade: <span className="blue">Brasilia - DF</span>
            </div>
            {'\u007d'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  </>
);

export default HomeHero;
