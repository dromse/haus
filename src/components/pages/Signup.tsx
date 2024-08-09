import BigTitle from "@components/reusable/BigTitle";
import { LinkUnderline } from "@components/reusable/LinkUnderline";
import { Subtitle } from "@components/reusable/Subtitle";
import { COLOR } from "@consts/colors";
import { useAuth } from "@firebase";
import React, { useState } from "react";
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

const SignUpButton = styled.button.attrs({ type: "button" })`
  background: black;
  border: 1px solid white;
  padding: 20px 52px;
  text-transform: uppercase;
  width: max-content;
  color: white;
  transition: all 0.5s ease;
  text-decoration: none;
  font-size: 12px;

  &:hover {
    background-color: white;
    color: ${COLOR.black};
    cursor: pointer;
  }
`;

export default function Signup(props: LoginProps): React.JSX.Element {
  const { } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useAuth();

  return (
    <Container>
      <BigTitle>Sign Up</BigTitle>

      <Form>
        <Input placeholder="First name" type="text" />

        <Input placeholder="Last Name" type="text" />

        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />

        <Input placeholder="Confirm password" type="password" />

        <SignUpButton onClick={() => signup(email, password)}>
          Submit
        </SignUpButton>

        <Subtitle>
          Have an account?{" "}
          <LinkUnderline theme="gray" href="/login">
            Login
          </LinkUnderline>
        </Subtitle>
      </Form>
    </Container>
  );
}
