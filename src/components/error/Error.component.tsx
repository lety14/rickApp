import styled from "styled-components";
import rickAndMorty from "../../assets/RickAndMorty.png";

type IProps = {
  message: string;
};

/**
 * Error component
 * @param {IProps} message
 *
 *  @returns {JSX.Element} Error component
 */
function Error({ message }: IProps) {
  return (
    <Container>
      <Message>{message}</Message>
      <Image src={rickAndMorty} alt="rickAndMorty" />
    </Container>
  );
}

export default Error;

const Message = styled.h4`
  font-size: 1.5rem;
  padding-bottom: 2rem;
  color: rgb(256, 256, 256);
  text-shadow: 0.5px 0.5px rgb(77, 239, 220);
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 450px);
  height: 100%;
  padding: 100px 10px;
`;

const Image = styled.img`
  height: 300px;
`;
