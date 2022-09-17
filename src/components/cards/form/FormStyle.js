import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  padding: 0.63rem;
  width: ${({ isAnswer }) => (isAnswer ? "95%" : "60%")};
  background: ${({ theme }) => theme.bgComponent};
  border-radius: 0.31rem;
  border: 0.06rem solid ${({ theme }) => theme.background};

  @media (max-width: 1300px) {
    width: 93%;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.31rem;
  border: 0;
  align-items: center;
  outline: none;
  background: ${({ theme }) => theme.background};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.25rem;
  margin-top: 1.25rem;
`;

export const Form = styled.form``;
