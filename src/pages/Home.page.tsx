import { useState } from "react";
import Input from "../components/input/Input.component";
import styled from "styled-components";
import GlobalFonts from "../components/GlobalStyles";
import stars from "../assets/stars.svg";
import SectionCards from "../components/sectionCards/SectionCards.component";
import NeonSign from "../components/neonSign/NeonSign.component";
import "animate.css";
import ScrollToTop from "../components/scrollToTop/scrollToTop.component";

/**
 * Homa page
 *
 * @returns {JSX.Element} Home page
 */
function Home() {
  const [endpoints, setEndpoints] = useState<string[]>([
    "https://rickandmortyapi.com/api/character",
  ]);
  const handleQuery = (query: string) => {
    setEndpoints([`https://rickandmortyapi.com/api/character/?name=${query}`]);
  };

  const handleEndpoint = (endpointInfo: string) => {
    if (endpointInfo !== endpoints.at(-1)) {
      setEndpoints([...endpoints, endpointInfo]);
    } else {
      setEndpoints([...endpoints]);
    }
  };

  return (
    <Container>
      <GlobalFonts />
      <Header>
        <NeonSign
          message={["<Rick an", <span>d</span>, " M", <span>o</span>, "rty/>"]}
        />
        <Input
          handleQuery={handleQuery}
          placeholder={"Busque por personaje..."}
        />
      </Header>
      <Pages>
        {endpoints?.map((endpoint, page) => (
          <SectionCards
            key={page}
            nextEndpoint={endpoint}
            handleEndpoint={handleEndpoint}
          />
        ))}
      </Pages>
      <ScrollToTop />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: rgb(0, 0, 0);
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${stars});
  background-size: 50%;
`;

const Header = styled.header`
  font-family: "Press Start 2P", "Source Code Pro", monospace;
  height: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;
  animation: zoomIn;
  animation-duration: 1.5s;

  /* ** TABLET ** */
  @media screen and (min-width: 451px) and (max-width: 760px) {
    height: 350px;
  }
  /* *** DESKTOP *** */
  @media screen and (min-width: 761px) and (max-width: 1200px) {
    font-size: 3rem;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1201px) and (max-width: 1600px) {
    margin-bottom: 100px;
    font-size: 3.5rem;
  }
  @media screen and (min-width: 1601px) {
    font-size: 4.5rem;
    margin-bottom: 150px;
  }
`;

const Pages = styled.ul`
  margin: 0px;
  padding: 0px;
`;
