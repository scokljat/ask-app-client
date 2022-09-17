import styled from "styled-components";
import { colors } from "../../globalStyles/GlobalStyles";

export const StyledButton = styled.button`
  width: ${({ width }) => width || "fit-content"};
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
`;
