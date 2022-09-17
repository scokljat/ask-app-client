import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  padding: 1.25rem;
  background: ${({ theme }) => theme.bgComponent};
  border-radius: 0.31rem;
  height: 80vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.p`
  font-size: 1.25rem;
`;

export const Text = styled.p`
  font-size: 0.8rem;
  margin: 0;
  color: ${({ color }) => color};
`;

export const QuestionStatistic = styled.div`
  display: flex;
  gap: 0.63rem;
  margin-bottom: 0.63rem;
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.63rem;
  gap: 0.63rem;
  height: 42vh;
  overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;
