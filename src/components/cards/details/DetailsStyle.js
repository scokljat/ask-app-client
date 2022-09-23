import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  color: ${({ theme }) => theme.textPrimary};
  padding: 0.63rem;
  width: ${({ width }) => width || "65%"};
  background: ${({ theme }) => theme.bgComponent};
  border-radius: 0.31rem;
  border: 0.06rem solid ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  gap: 0.63rem;

  @media (max-width: 1300px) {
    width: 93%;
  }

  @media (max-width: 968px) {
    width: 90%;
  }
`;

export const Description = styled.p`
  font-size: 1.25rem;
  cursor: ${({ isAnswer }) => (isAnswer ? "default" : "pointer")};
  margin: 0;
`;

export const Text = styled.p`
  font-size: 0.8rem;
  margin: 0;
  color: ${({ color }) => color};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.63rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.63rem;
  background: ${({ theme }) => theme.bgComponent};
  position: absolute;
  right: ${({ isAnswer }) => (isAnswer ? "0rem" : "-8.12rem")};
  top: ${({ isAnswer }) => (isAnswer ? "1.8rem" : "-0.06rem")};
  padding: 0.63rem;
  border-radius: 0.31rem;
  border: 0.06rem solid ${({ theme }) => theme.background};

  @media (max-width: 1300px) {
    right: 0rem;
    top: 1.8rem;
  }
`;
