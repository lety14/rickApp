import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

/**
 * Function that renders the card body
 *
 * @param {PropsWithChildren<object>} children
 */
const CardBody: FC<PropsWithChildren<object>> = ({
  children,
}: PropsWithChildren<object>) => <CardBodyDetails>{children}</CardBodyDetails>;

export default CardBody;

const CardBodyDetails = styled.div`
  text-align: left;
`;
