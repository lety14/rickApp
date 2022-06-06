import React, { ReactNode } from "react";
import styled from "styled-components";
import WithLoading from "../../HOC/WithLoading.hoc";
import LoadingComponent from "../loading/loading.component";

interface IProps {
  children: ReactNode;
}

/**
 * Function that renders a grid of cards
 *
 * @param {IProps} children
 */
const CardGrid: React.FC<IProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default WithLoading(
  CardGrid,
  LoadingComponent,
  "No se encontró el personaje"
);

const Wrapper = styled.ul`
  display: grid;
  padding: 0px;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto;
  gap: 50px;
  width: auto;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  transition: 0.25s ease;

  /* *** DESKTOP *** */
  @media screen and (min-width: 761px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1201px) and (max-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1601px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
