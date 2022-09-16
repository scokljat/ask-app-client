import styled from "styled-components";
import { colors } from "../../globalStyles/GlobalStyles";

export const StyledButton = styled.button`
  width: ${({ width }) => width};
  background: ${({ color }) => color || colors.blue};
  height: ${({ height }) => height};
  border-radius: 0.3rem;
  border: none;
  color: ${({ theme }) => theme.bgComponent};
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  @media (max-width: 1300px) {
    width: 10%;
  }

  @media (max-width: 800px) {
    width: 15%;
  }

  @media (max-width: 580px) {
    width: 25%;
  }
`;
