import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { colors } from "../../globalStyles/GlobalStyles";

export const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.bgComponent};

  @media (max-width: 580px) {
    display: flex;
    justify-content: center;
    height: 1.6rem;
  }

  @media (max-width: 430px) {
    padding: 0.18rem;
    padding-top: 1.5rem;
    height: 3rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2.5rem;

  @media (max-width: 580px) {
    gap: 0.5rem;
  }

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 580px) {
    gap: 0.63rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.textSecondary};
  white-space: nowrap;

  &.active {
    position: relative;
    display: flex;
    color: ${colors.blue};
  }
`;

export const Title = styled(NavLink)`
  text-decoration: none;
  color: ${colors.blue};
  font-size: 1.5rem;

  @media (max-width: 580px) {
    display: none;
  }
`;
