import React, { useEffect, useRef, useState } from "react";
import search from "../../assets/search.png";
import styled from "styled-components";

interface InputProps {
  handleQuery: (arg: string) => void;
  placeholder?: string;
}

/**
 * Function that renders an input component
 *
 * @param {(arg: string) => void} handleQuery
 * @param {string} placeholder
 *
 * @returns {JSX.Element} input component
 */
const Input: React.FC<InputProps> = ({ handleQuery, placeholder }) => {
  const [query, setQuery] = useState<string>("");
  const inputRef: React.MutableRefObject<any> = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <InputBox>
      <InputElement
        id="input"
        type="text"
        placeholder={placeholder}
        ref={inputRef}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={(e) => {
          e.key === "Enter" && handleQuery(query);
        }}
      ></InputElement>
      <SearchButton onClick={() => handleQuery(query)}>
        <SearchImg id="SearchImg" src={search} alt="search_flaticon" />
      </SearchButton>
    </InputBox>
  );
};

export default Input;

const InputBox = styled.div`
  position: relative;
  max-width: 500px;
  min-width: 200px;
  width: 95%;
  height: 35px;
  display: flex;
`;
const SearchImg = styled.img`
  height: 30px;
  padding: 5px;
`;

const SearchButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  &:hover #SearchImg {
    transition: 0.25s ease-in;
    transform: scale(1.1);
  }
`;
const InputElement = styled.input`
  border: 1.5px solid rgb(77, 239, 220);
  box-shadow: 0px 0px 40px rgb(77, 239, 220);
  border-radius: 40px;
  font-size: 18px;
  height: 40px;
  width: 100%;
  padding: 0px 15px;
  &::placeholder {
    color: rgb(99, 99, 99);
    font-size: 15px;
  }
  &:focus {
    border: 2px solid rgb(77, 239, 220);
    outline: none;
  }
`;
