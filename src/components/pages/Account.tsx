import BigTitle from "@components/reusable/BigTitle";
import { BlackButton } from "@components/reusable/Button";
import Container from "@components/reusable/Container";
import React from "react";
import styled from "styled-components";

type AccountProps = {};

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

export default function Account(props: AccountProps): React.JSX.Element {
  const {} = props;

  return (
    <Container>
      <BigTitle>You are not authenticated!</BigTitle>

      <Buttons>
        <BlackButton to="/login">Login</BlackButton>
        <BlackButton to="/signup">Sign Up</BlackButton>
      </Buttons>
    </Container>
  );
}
