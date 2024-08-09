import { LinkUnderline } from "./LinkUnderline";

const NavbarLink = ({
  item,
}: {
  item: {
    link: string;
    label: string;
  };
}): React.JSX.Element => (
  <li key={item.link}>
    <LinkUnderline theme="white" href={item.link} key={item.link}>
      {item.label}
    </LinkUnderline>
  </li>
);

export default NavbarLink;
