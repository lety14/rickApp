import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import CardImage from "./CardImage.component";
import CardBody from "./CardBody.component";
import CardHeader from "./CardHeader.component";

type CompoundCard = FC<PropsWithChildren<object>> & {
  Header: FC<PropsWithChildren<object>>;
  Image: FC<PropsWithChildren<object>>;
  Body: FC<PropsWithChildren<object>>;
};

/**
 * Function that renders a card
 *
 * @param {PropsWithChildren<object>} children
 */
const Card: CompoundCard = ({ children }: PropsWithChildren<object>) => (
  <CardBox>{children}</CardBox>
);

Card.Header = CardHeader;
Card.Image = CardImage;
Card.Body = CardBody;

export default Card;

const CardBox = styled.div`
  height: auto;
  width: auto;
`;
