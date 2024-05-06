import BigTitle from "@components/reusable/BigTitle";
import { BlackButton } from "@components/reusable/Button";
import Container from "@components/reusable/Container";
import { COLOR } from "@consts/colors";
import { useAuth } from "@firebase";
import React from "react";
import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

const Logout = styled.button.attrs({ type: "button" })`
  text-transform: uppercase;
  word-spacing: 1px;
  font-size: 12px;
  background-color: ${COLOR.black};
  color: ${COLOR.white};
  padding: 20px 50px;
  border: 1px solid ${COLOR.black};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLOR.white};
    color: ${COLOR.black};
  }
`;

const Wrapper = styled.div`
  padding: 50px 0;
`;

export default function Account(): React.JSX.Element {
  const { logout, userState } = useAuth();

  return (
    <Container>
      <Wrapper>
        {userState ? (
          <>
            <BigTitle>Hi, {userState.email}</BigTitle>
            <Buttons>
              <Logout onClick={logout}>Logout</Logout>
            </Buttons>
          </>
        ) : (
          <>
            <BigTitle>You are not authenticated!</BigTitle>

            <Buttons>
              <BlackButton to="/login">Login</BlackButton>
              <BlackButton to="/signup">Sign Up</BlackButton>
            </Buttons>
          </>
        )}
      </Wrapper>
    </Container>
  );
}
