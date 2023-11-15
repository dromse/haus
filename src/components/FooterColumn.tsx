import styled from "styled-components";
import { COLOR } from "../values/colors";

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
  color: ${COLOR.gray};
  font-size: 12px;
  line-height: 18px;
  display: flex;
  gap: 21px;
  flex-direction: column;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

function FooterColumn(props: Props) {
  const { column } = props;

  return (
    <Wrapper>
      <Title>{column.title}</Title>

      <List>
        {column.links.map((link) => (
          <li key={link}>
            <a href="/">{link}</a>
          </li>
        ))}
      </List>
    </Wrapper>
  );
}

export default FooterColumn;
