import { FollowUsSubtitle } from "@components/blocks/FollowUs";
import styled from "styled-components";
import { LinkUnderline } from "./LinkUnderline";

const Links = styled.div`
  display: flex;
  gap: 21px;
  flex-wrap: wrap;
`;

function OtherSocial(): React.JSX.Element {
  return (
    <>
      <FollowUsSubtitle>Follow us, share us, drink Ha(us)</FollowUsSubtitle>

      <Links>
        <LinkUnderline href="instagram.com" theme="white">
          Instagram
        </LinkUnderline>

        <LinkUnderline href="twitter.com" theme="white">
          Twitter
        </LinkUnderline>

        <LinkUnderline href="facebook.com" theme="white">
          Facebook
        </LinkUnderline>
      </Links>
    </>
  );
}

export default OtherSocial;
