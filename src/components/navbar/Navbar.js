import Button from "../button/Button";
import { navbarList } from "../../utils/Constants";
import { ReactComponent as Logout } from "../../assets/images/log-out.svg";
import {
  Wrapper,
  Container,
  LinksContainer,
  Title,
  StyledNavLink,
} from "./NavbarStyle";

function Navbar() {
  return (
    <Wrapper>
      <Container>
        <Title>Ask me</Title>
        <LinksContainer>
          {navbarList.map((link, index) => (
            <StyledNavLink key={index} to={link.route}>
              {link.name}
            </StyledNavLink>
          ))}
        </LinksContainer>
        <Button
          title="Log out"
          width="6%"
          height="1.8rem"
          icon={<Logout style={{ marginRight: "0.3rem" }} />}
        />
      </Container>
    </Wrapper>
  );
}

export default Navbar;
