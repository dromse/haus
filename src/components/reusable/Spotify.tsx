import { FollowUsSubtitle } from "@components/blocks/FollowUs";
import styled from "styled-components";
import { WhiteButton } from "./Button";

const Title = styled.h2`
  font-family: "PT Serif", serif;
  font-size: 55px;
  line-height: 80px;

  @media (max-width: 500px) {
    font-size: 45px;
    line-height: 45px;
  }
`;

function Spotify(): React.JSX.Element {
  return (
    <>
      <Title>Set the mood</Title>

      <FollowUsSubtitle>
        Curated playlists from Woody + Helena, plus some of our friends and
        favorite brands.
      </FollowUsSubtitle>

      <WhiteButton>Spotify</WhiteButton>
    </>
  );
}

export default Spotify;
