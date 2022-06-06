import { FC } from "react";
import loading from "../../assets/loadingData.gif";
import styled from "styled-components";

/**
 * Function that renders a loading component
 *
 * @returns {JSX.Element} loading component
 */
const LoadingComponent: FC = () => {
  return (
    <Loading>
      <Imagen src={loading} alt="loading" />
    </Loading>
  );
};

export default LoadingComponent;

const Loading = styled.div`
  background: rgb(0, 0, 0);
  padding: 50px;
  height: calc(100vh - 350px);
`;
const Imagen = styled.img`
  height: 100px;
  width: 100px;
  align-self: center;
`;
