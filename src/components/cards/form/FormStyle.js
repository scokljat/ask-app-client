import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  padding: 0.63rem;
  width: ${({ isAnswer, isEdit }) =>
    isAnswer ? "95%" : isEdit ? "100" : "65%"};
  height: ${({ isEdit }) => isEdit && "100%"};
  background: ${({ theme }) => theme.bgComponent};
  border-radius: 0.31rem;
  border: 0.06rem solid ${({ theme }) => theme.background};

  @media (max-width: 1300px) {
    width: ${({ isEdit }) => (isEdit ? "100%" : "93%")};
  }

  @media (max-width: 968px) {
    width: ${({ isEdit }) => (isEdit ? "100%" : "90%")};
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: ${({ isEdit }) => (isEdit ? "3.5rem" : "2.5rem")};
  border-radius: 0.31rem;
  border: 0.06rem solid ${({ theme }) => theme.background};
  align-items: center;
  outline: none;
  background: ${({ theme }) => theme.bgComponent};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.25rem;
  margin-top: 1.25rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;
