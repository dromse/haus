import styled from "styled-components";

const Button = styled.button`
  background: none;
  z-index: 2;
`

type Props = {
  toggle: boolean
  onClick: () => void;
}

function BurgerIcon() {
  return <svg
    viewBox="0 0 24 24"
    width="50"
    height="50"
    stroke="white"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12h18M3 6h18M3 18h18"></path>
  </svg>
}

function CloseIcon() {

  return (
    <svg
      viewBox="0 0 24 24"
      width="50"
      height="50"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
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
