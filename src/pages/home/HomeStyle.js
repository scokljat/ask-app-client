import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../globalStyles/GlobalStyles";

export const Wrapper = styled.div`
  margin: 1.8rem 3.7rem;
  display: grid;
  grid-template-columns: 15% 85%;
  gap: 0.63rem;

  @media (max-width: 1000px) {
    margin: 0.5rem 1rem;
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
    height: 80vh;
  }
`;

export const LinksWrapper = styled.div``;

export const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.blue};
  padding: 0.63rem 0;
`;

export const UserContainer = styled.div`
  /* background: ${({ theme }) => theme.bgComponent};
  border-radius: 0.31rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px; */
  display: list-item;
  color: ${colors.blue};
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  background: ${({ theme }) => theme.bgComponent};
  height: 80vh;
  border-radius: 0.31rem;
  padding: 0.63rem;

  @media (max-width: 640px) {
    background: transparent;
    flex-direction: row;
    font-size: 0.9rem;
    gap: 1.25rem;
    height: 5vh;
  }
`;
