import { FC, useEffect, useState } from "react";
import Character from "../../types/character.types";
import Episode from "../../types/episode.types";
import styled from "styled-components";
import "animate.css";
import { useApi } from "../../hooks/useApi.hook";
import WithLoading from "../../HOC/WithLoading.hoc";

interface ModalProps {
  character: Character;
}

/**
 * Function that renders a list of episodes per characters
 *
 * @param {ModalProps} characters
 * @returns {JSX.Element} returns a list of episodes per character
 */
const Episodes: FC<ModalProps> = ({ character }) => {
  const [arrayIdEpisode, setArrayIdEpisode] = useState<string>("");

  const ENDPOINT = "https://rickandmortyapi.com/api/episode";
  const {
    data: episodes,
    loading,
    error,
  } = useApi<Array<any>>(`${ENDPOINT}${arrayIdEpisode}`);

  useEffect(() => {
    const array: (string | undefined)[] = character.episode.map((episode) => {
      return episode.split("/").at(-1);
    });
    setArrayIdEpisode(`/${array}`);
  }, [character.episode]);

  if (loading) return <div>Cargando episodios...</div>;
  if (error) return <div>No se pudo cargar los personajes.</div>;
  if (!episodes || episodes.length === 0) return <p>nohay</p>;

  return (
    <EpisodeContainer>
      <EpisodesList>
        {episodes.length ? (
          episodes.map((episode: Episode) => {
            return (
              <li key={episode.id}>
                {episode.name}. Emision: {episode.air_date}
              </li>
            );
          })
        ) : (
          <li>
            {episodes.name}. Emision: {episodes.air_date}
          </li>
        )}
      </EpisodesList>
    </EpisodeContainer>
  );
};

export function LoadingText() {
  return <div>Loading...</div>;
}

export default // WithLoading(
Episodes;
//   ,
//   LoadingText,
//   "No se encontraron episodios"
// );

const EpisodesList = styled.ul`
  min-height: 150px;
  max-height: 50vh;
  height: 100%;
  width: auto;
`;
const EpisodeContainer = styled.div`
  padding: 10px;
`;
