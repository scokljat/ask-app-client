import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../globalStyles/GlobalStyles";

export const Wrapper = styled.div`
  margin: 1.8rem 3.7rem;
  display: grid;
  grid-template-columns: 20% 80%;

  @media (max-width: 1000px) {
    margin: 1.8rem;
  }

  @media (max-width: 940px) {
    grid-template-columns: 30% 70%;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
  overflow: hidden;
  overflow-y: scroll;
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;

  @media (max-width: 640px) {
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    height: 85vh;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;

  @media (max-width: 640px) {
    flex-direction: row;
    font-size: 0.9rem;
    gap: 1.25rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: list-item;
  margin-bottom: 0.9rem;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.blue};
`;
