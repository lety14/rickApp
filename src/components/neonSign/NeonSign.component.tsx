import { FC } from "react";
import styled, { keyframes } from "styled-components";

/**
 * Function that renders a neon sign
 * @param {any} message
 *
 * @returns {JSX.Element} neon sign
 */
const NeonSign: FC<{ message: any }> = ({ message }) => {
  return <Sign>{message}</Sign>;
};

export default NeonSign;

const blink = keyframes`
  20%,
  24%,
  55% {
    color: rgb(0,0,0);
    text-shadow: none;
  }
  0%,
  20%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    text-shadow: 0 0 5px #77ff00, 0 0 15px #09ff00, 0 0 20px #00ff84,
      0 0 40px #00ffcc, 0 0 60px #04ff00, 0 0 10px #00ffa2, 0 0 100px #00ff91;
      color: rgb(77, 239, 220);
  }
`;

const Sign = styled.header`
  font-size: 1.5rem;
  text-align: center;
  animation: ${blink} 8s infinite;
  -webkit-animation: ${blink} 8s infinite;
  /* ** TABLET ** */
  @media screen and (min-width: 451px) and (max-width: 760px) {
    font-size: 2.5rem;
  }
  /* *** DESKTOP *** */
  @media screen and (min-width: 761px) and (max-width: 1200px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 1201px) and (max-width: 1600px) {
    font-size: 3.5rem;
  }
  @media screen and (min-width: 1601px) {
    font-size: 4.5rem;
  }
  & span {
    animation: ${blink} 5s infinite;
    -webkit-animation: ${blink} 5s infinite;
  }
`;
