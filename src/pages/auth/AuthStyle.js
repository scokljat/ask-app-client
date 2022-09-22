import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../globalStyles/GlobalStyles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bgComponent};
  border-radius: 0.3rem;
  width: 30%;
  padding: 1.25rem;
  padding-top: 1.8rem;
  gap: 0.63rem;
  margin-top: 1.25rem;
  justify-content: center;
  align-items: center;
  //box-shadow: rgba(100, 100, 111, 0.2) 0rem 0.4rem 1.8rem 0rem;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${colors.gray};
  text-decoration: none;
  align-self: center;
  margin-left: 0.63rem;
  color: ${colors.blue};
`;

export const Text = styled.p`
  font-size: 0.75rem;
  color: ${colors.red};
  margin: 0rem;
  align-self: flex-start;
`;

export const InnerContainer = styled.div`
  display: flex;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.63rem;
  width: 100%;
  background: ${({ theme, background }) => background || theme.background};
  border: 0;
  border-radius: 0.31rem;
`;

export const StyledInput = styled.input`
  height: 2.18rem;
  padding: 0.31rem 0.63rem;
  outline: none;
  background: ${({ theme }) => theme.background};
  border: 0;

  ::placeholder {
    color: ${colors.placeholderGray};
  }
`;
