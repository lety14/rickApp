import { FC, useState } from "react";
import Character from "../../types/character.types";
import styled from "styled-components";
import Card from "../card/Card.component";
import "animate.css";
import ModalCharacter from "../modal/ModalCharacter.component";

/**
 * Character card component
 *
 * @param {Character} character
 * @returns {React.ReactElement} JSX element
 */
const CardCharacter: FC<{ character: Character }> = ({ character }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <CardCharacterBox>
        <CardComponent>
          <Card>
            <Card.Header>
              <Header id="Header">{character.name}</Header>
            </Card.Header>
            <ImageAndDetails>
              <Card.Image>
                <ImageContainer>
                  <Image src={character.image} alt={character.name} />
                </ImageContainer>
              </Card.Image>
              <DetailsBox id="DetailsBox">
                <Card.Body>
                  <h4>DATOS</h4>
                  <p>Genero: {character.gender}</p>
                  <p>Origen: {character.origin.name}</p>
                  <p>Especie: {character.species}</p>
                  <p>Estatus: {character.status}</p>
                </Card.Body>
                <Button onClick={() => setIsOpen(true)}>
                  Ver mas detalles
                </Button>
              </DetailsBox>
            </ImageAndDetails>
          </Card>
        </CardComponent>
      </CardCharacterBox>
      {isOpen && <ModalCharacter character={character} setIsOpen={setIsOpen} />}
    </>
  );
};

export default CardCharacter;

const DetailsBox = styled.div`
  opacity: 0;
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 5px;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Header = styled.h3`
  background: #b2e6e4;
  font-size: 1.1rem;
  padding: 10px 5px;
  margin: 0px;
  border-radius: 15px 15px 0px 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: inset 0px 0px 10px rgba(255, 255, 255, 0.2);
`;

const Button = styled.button`
  padding: 10px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  background: rgb(210, 118, 227);
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: 2px solid rgb(225, 56, 255);
  box-shadow: 2px 2px 5px rgb(225, 56, 255);

  &:hover {
    background: rgb(225, 56, 255);
    transition: 0.25s ease-in;
  }
`;

const ImageContainer = styled.div`
  height: 250px;
  width: 100%;
`;
const Image = styled.img`
  object-fit: cover;
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
  border-radius: 0px 0px 15px 15px;
`;

const CardComponent = styled.div`
  list-style: none;
  border: 1px solid rgb(77, 239, 220);
  background-color: white;
  box-shadow: 1px 1px 5px rgb(77, 239, 220);
  border-radius: 15px;
  position: relative;
  min-height: 250px;
  width: 250px;
  height: auto;
  margin: 0px;
  padding: 0px;
  align-items: center;
  justify-items: center;
  animation: fadeIn;
  animation-duration: 2s;
  &:hover {
    box-shadow: 0px 0px 30px rgb(77, 239, 220);
  }
  & :hover #Header {
    text-shadow: 0px 0px 5px rgba(86, 218, 132, 0.9);
    font-weight: 1000;
    transition: 0.25s ease-in;
    box-shadow: none;
  }
`;

const CardCharacterBox = styled.li`
  width: auto;
  height: auto;
`;

const ImageAndDetails = styled.div`
  position: relative;

  &:hover #DetailsBox {
    width: 100%;
    height: 100%;
    background: rgba(141, 210, 203, 0.9);
    border-radius: 0px 0px 15px 15px;
    animation: fadeIn;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
`;
