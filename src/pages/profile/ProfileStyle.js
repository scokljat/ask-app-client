import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-bottom: 0.63rem;
`;

export const UserDetails = styled.p`
  font-size: ${({ size }) => size};
  color: ${({ theme }) => theme.textSecondary};
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.63rem;
  margin-top: 0.63rem;
`;

export const StyledInput = styled.input`
  height: 2.1rem;
  width: 100%;
  border-radius: 0.31rem;
  padding: 0.31rem;
  outline: none;
  background: ${({ theme }) => theme.bgComponent};
  border: 0;

  ::placeholder {
    color: #67696d;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.63rem;
  width: 100%;
`;
