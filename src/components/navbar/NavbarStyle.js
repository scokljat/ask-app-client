import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../globalStyles/GlobalStyles";

export const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.bgComponent};
  height: 4.37rem;
  box-shadow: rgba(100, 100, 111, 0.1) 0rem 0.4rem 0.75rem 0rem;

  @media (max-width: 580px) {
    display: flex;
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2.5rem;

  @media (max-width: 580px) {
    gap: 0.63rem;
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
  color: ${({ theme }) => theme.text};
  white-space: nowrap;

  &.active {
    position: relative;
    display: flex;
    color: ${colors.blue};
  }
`;

export const Title = styled.h1`
  font-style: italic;
  color: ${colors.blue};

  @media (max-width: 768px) {
    font-size: 1.9rem;
  }

  @media (max-width: 580px) {
    display: none;
  }
`;
