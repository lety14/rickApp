import { FC } from "react";
import Character from "../../types/character.types";
import styled from "styled-components";
import Card from "../card/Card.component";
import "animate.css";
import Episodes from "../episodes/Episodes.component";

interface ModalProps {
  setIsOpen: (arg: boolean) => void;
  character: Character;
}

/**
 * Function that renders a modal with the caracters details
 *
 * @param  {(arg: boolean) => void} setIsOpen
 * @param  {Character} character
 * @returns {React.ReactElement} modal component
 */
const ModalCharacter: FC<ModalProps> = ({ setIsOpen, character }) => {
  return (
    <>
      <ModalCharacterBackground>
        <ModalCharacterBox>
          <Card>
            <Card.Header>
              <Header>
                {character.name}
                <Button onClick={() => setIsOpen(false)}>&#10006;</Button>
              </Header>
            </Card.Header>
            <Body>
              <ImageAndDetails>
                <Card.Image>
                  <ImageContainer>
                    <Image src={character.image} alt={character.name} />
                  </ImageContainer>
                </Card.Image>
                <Card.Body>
                  <Data>
                    <h4>DATOS</h4>
                    <p>Genero: {character.gender}</p>
                    <p>Origen: {character.origin.name}</p>
                    <p>Especie: {character.species}</p>
                    <p>Estatus: {character.status}</p>
                  </Data>
                </Card.Body>
              </ImageAndDetails>
              <Card.Body>
                <Episodes character={character} />
              </Card.Body>
            </Body>
          </Card>
        </ModalCharacterBox>
      </ModalCharacterBackground>
    </>
  );
};

export default ModalCharacter;

const ModalCharacterBackground = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  overscroll-behavior: none;
`;
const Body = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-track {
    background: red;
  }
`;

const Header = styled.h3`
  background: #f7f7f7;
  font-size: 1.5rem;
  padding: 10px 5px;
  margin: 0px;
  border-bottom: solid 5px rgb(0, 0, 0);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Button = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  height: 40px;
  width: 40px;
  padding: 5px;
  font-size: 20px;
  line-height: 20px;
  border-radius: 50%;
  background: rgb(256, 256, 256);
  border: 3px solid rgb(0, 0, 0);
  background: rgb(253, 241, 255);
  &:hover {
    background: rgb(243, 177, 255);
    transition: 0.25s ease-in;
  }
`;

const ImageContainer = styled.div`
  height: 250px;
  width: 250px;
`;
const Image = styled.img`
  object-fit: cover;
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
  border: solid 1px rgb(0, 0, 0);
  border-top: none;
  border-left: none;
`;

const ModalCharacterBox = styled.div`
  border: 1px solid rgb(77, 239, 220);
  background-color: white;
  border: solid 1px rgb(0, 0, 0);
  box-shadow: 3px 3px 10px rgb(77, 239, 220);
  position: relative;
  height: 50px;
  height: max-content;
  width: 600px;
  margin: 0px;
  padding: 0px;
  animation: fadeInDown;
  animation-duration: 2s;
  overflow-y: auto;
  margin: 30px;
  background: white;
  box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
  border-radius: 20px;
`;

const ImageAndDetails = styled.div`
  display: flex;
  gap: 30px;
`;
const Data = styled.div`
  padding: 20px 0px;
  & p,
  h4 {
    padding: 8px 0px;
  }
`;
