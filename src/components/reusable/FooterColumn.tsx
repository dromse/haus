import styled from "styled-components";
import { LinkUnderline } from "./LinkUnderline";

type Props = {
  column: { title: string; links: string[] };
};

const Wrapper = styled.div`
  text-transform: uppercase;
`;

const Title = styled.h4`
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 30px;

  @media (max-width: 900px) {
    font-size: 18px;
  }
`;

const List = styled.ul`
  font-size: 12px;
  line-height: 18px;
  display: flex;
  gap: 21px;
  flex-direction: column;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export default function FooterColumn(props: Props): React.JSX.Element {
  const { column } = props;

  return (
    <Wrapper>
      <Title>{column.title}</Title>

      <List>
        {column.links.map((link) => (
          <li key={link}>
            <LinkUnderline
              theme="gray"
              href="/"
            >
              {link}
            </LinkUnderline>
          </li>
        ))}
      </List>
    </Wrapper>
  );
}
