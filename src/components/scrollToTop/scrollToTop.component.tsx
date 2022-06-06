import { FC, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

/**
 * Function that renders a button component that when it's clicked, auto-scroll the page to the top
 *
 * @returns {JSX.Element} component that scroll to bottom
 */
const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const scrollToTopFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", function () {
    setIsVisible(window.pageYOffset > 500 ? true : false);
  });

  return (
    <>
      {isVisible && (
        <Button onClick={scrollToTopFunction}>
          <FontAwesomeIcon icon={faChevronUp} />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  height: 60px;
  width: 60px;
  font-size: 2.3rem;
  line-height: 2.3rem;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  background: rgb(210, 118, 227);
  color: #ffffff;
  border: 2px solid rgb(225, 56, 255);
  box-shadow: 0px 0px 5px rgb(225, 56, 255);
  animation: fadeIn;
  animation-duration: 1.5s;

  &:hover {
    background: rgb(225, 56, 255);
    transition: 0.25s ease-in;
  }
`;
