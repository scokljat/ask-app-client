import { useNavigate } from "react-router-dom";
import { Wrapper, Content } from "./ModalStyle";

function Modal({ children, setIsOpen }) {
  const navigate = useNavigate();

  return (
    <Wrapper
      onClick={() => {
        setIsOpen(false);
        navigate(-1);
      }}
    >
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default Modal;
