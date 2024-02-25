import styled from "styled-components";
import CloseIcon from "../icons/CloseIcon";
import BurgerIcon from "../icons/BurgerIcon";

const Button = styled.button`
  background: none;
  z-index: 2;
`

type Props = {
  toggle: boolean
  onClick: () => void;
}


const BurgerMenuButton = (props: Props) => {
  const { onClick, toggle } = props

  return (
    <Button type="button" onClick={onClick}>
      {toggle ? <CloseIcon /> : <BurgerIcon />}
    </Button>
  );
};

export default BurgerMenuButton;
