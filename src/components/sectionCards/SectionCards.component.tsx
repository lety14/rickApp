import { FC, useEffect } from "react";
import styled from "styled-components";
import CharacterCard from "../characters/CardCharacter.component";
import ListContainer from "../cardGrid/CardGrid.component";
import { useApi } from "../../hooks/useApi.hook";
import Character from "../../types/character.types";
import usePagination from "../../hooks/usePagination.hook";

interface IPropsSectionCards {
  nextEndpoint: string;
  handleEndpoint: (args: string) => void;
}

/**
 * Function that renders one page of cards for each API fetch
 *
 * @param {string}nextEndpoint
 * @param {(args: string) => void} handleEndpoint
 *
 * @returns {JSX.Element} renders a page component with one Api call
 */
const SectionCards: FC<IPropsSectionCards> = ({
  nextEndpoint,
  handleEndpoint,
}) => {
  const { data: characters, loading, error } = useApi<Array<any>>(nextEndpoint);
  const nextEndpointPagination = usePagination<string | null>(characters?.info);

  useEffect(() => {
    if (
      nextEndpointPagination !== null &&
      nextEndpointPagination !== undefined
    ) {
      handleEndpoint(nextEndpointPagination);
    }
  }, [nextEndpointPagination]);

  return (
    <>
      <Page>
        {characters?.results.length && (
          <ListContainer loading={loading} error={error}>
            {characters?.results.map((character: Character) => {
              return <CharacterCard key={character.id} character={character} />;
            })}
          </ListContainer>
        )}
      </Page>
    </>
  );
};

export default SectionCards;

const Page = styled.li`
  list-style: none;
  padding: 25px 10px;
  min-height: 300px;
  display: flex;
  justify-content: center;
`;
