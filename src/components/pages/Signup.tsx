import BigTitle from "@components/reusable/BigTitle";
import { Button } from "@components/reusable/Button";
import { LinkUnderline } from "@components/reusable/LinkUnderline";
import { Subtitle } from "@components/reusable/Subtitle";
import { COLOR } from "@consts/colors";
import React from "react";
import styled from "styled-components";

type LoginProps = {};

const Form = styled.form`
  min-width: 95vw;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const Container = styled.div`
  background-color: ${COLOR.totalBlack};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 10px;
  width: 100%;
`;

const Input = styled.input`
  background-color: black;
  border-bottom: 1px solid ${COLOR.gray};
  color: white;
  padding: 21px;
  flex-grow: 1;
  font-size: 18px;
  width: 100%;
  max-width: 500px;
`;

export default function Login(props: LoginProps): React.JSX.Element {
  const {} = props;

  return (
    <Container>
      <BigTitle>Login</BigTitle>

      <Form>
        <Input
          placeholder="First name"
          type="text"
        />

        <Input
          placeholder="Last Name"
          type="text"
        />

        <Input
          placeholder="Email"
          type="email"
        />

        <Input
          placeholder="Password"
          type="password"
        />

        <Input
          placeholder="Confirm password"
          type="password"
        />

        <Button
          title="Submit"
          href=""
        />

        <Subtitle>
          Have an account?{" "}
          <LinkUnderline
            theme="gray"
            href="/login"
          >
            Login
          </LinkUnderline>
        </Subtitle>
      </Form>
    </Container>
  );
}
