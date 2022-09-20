import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const Content = styled.div`
  background: red;
  margin: auto;
  border-radius: 0.5rem;
  cursor: default;
  width: 40%;
  height: ${({ isEdit }) => isEdit && "20%"};
`;
