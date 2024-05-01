import { BurgerIcon } from "@components/icons/BurgerIcon";
import { CloseIcon } from "@components/icons/CloseIcon";
import styled from "styled-components";

const Button = styled.button`
  background: none;
  z-index: 2;
`;

type Props = {
  didToggle: boolean;
  onClick: () => void;
};

const BurgerMenuButton = (props: Props): React.JSX.Element => {
  const { onClick, didToggle: didToggle } = props;

  return (
    <Button
      type="button"
      onClick={onClick}
    >
      {didToggle ? <CloseIcon /> : <BurgerIcon />}
    </Button>
  );
};

export default BurgerMenuButton;
