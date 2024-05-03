import { COLOR } from "@consts/colors";
import React from "react";
import styled from "styled-components";
import { LinkUnderline } from "./LinkUnderline";

type CartLinkWithBadgeProps = {
  link: string;
  label: string;
  badgeText: string;
};

const Badge = styled.span`
  background-color: #cf130c;
  border-radius: 100%;
  padding: 3px;
  color: ${COLOR.white};
  font-size: 10px;
  position: absolute;
  bottom: -5px;
  right: -12px;
`;

const LinkContainer = styled.div`
  position: relative;
`;

export default function LinkWithBadge(
  props: CartLinkWithBadgeProps,
): React.JSX.Element {
  const { link, label, badgeText } = props;

  return (
    <LinkContainer>
      <LinkUnderline
        theme="white"
        href={link}
      >
        {label}
      </LinkUnderline>
      <Badge>{badgeText}</Badge>
    </LinkContainer>
  );
}
