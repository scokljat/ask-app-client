import styled from "styled-components";

import { colors } from "../../globalStyles/GlobalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.31rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 6.25rem;
  padding: 0.18rem;
  top: 0.63rem;
  background: ${colors.tooltipBlue};
  color: ${({ theme }) => theme.textPrimary};
`;

export const Text = styled.p`
  font-size: 0.93rem;
  margin: 0;
`;
