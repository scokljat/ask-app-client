import { useDispatch, useSelector } from "react-redux";
import Button from "../button/Button";
import { logout } from "../../store/actions/User";
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
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.reducerUser);

  return (
    <Wrapper>
      <Container>
        <Title>Ask me</Title>
        {isLoggedIn ? (
          <>
            <LinksContainer>
              {navbarList.map((link, index) => (
                <StyledNavLink key={index} to={link.route}>
                  {link.name}
                </StyledNavLink>
              ))}
            </LinksContainer>
            <Button
              title="Log out"
              height="1.8rem"
              icon={<Logout style={{ marginRight: "0.3rem" }} />}
              onClick={() => dispatch(logout())}
            />
          </>
        ) : (
          <StyledNavLink to="/questions">Questions</StyledNavLink>
        )}
      </Container>
    </Wrapper>
  );
}

export default Navbar;
