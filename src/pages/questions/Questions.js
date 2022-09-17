import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Details from "../../components/cards/details/Details";
import FormCard from "../../components/cards/form/Form";
import Modal from "../../components/modal/Modal";
import QuestionDetails from "../../components/modalContent/questionDetails/QuestionDetails";
import { getAllQuestions } from "../../store/actions/Questions";
import { Wrapper } from "../../globalStyles/GlobalStyles";
import { CardWrapper } from "../home/HomeStyle";

function Questions() {
  const dispatch = useDispatch();
  const { allQuestions } = useSelector((state) => state.reducerQuestions);
  const { isLoggedIn } = useSelector((state) => state.reducerUser);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    dispatch(getAllQuestions());
  }, [dispatch]);

  return (
    <Wrapper>
      {modalIsOpen && (
        <Modal setIsOpen={setModalIsOpen}>
          <QuestionDetails id={id} setModalIsOpen={setModalIsOpen} />
        </Modal>
      )}
      {isLoggedIn && <FormCard placeholder="What's on your mind ..." />}
      <CardWrapper height={isLoggedIn ? "65vh" : "85vh"} width="100%">
        {allQuestions.map((question) => (
          <Details
            question={question}
            key={question.id}
            setModalIsOpen={setModalIsOpen}
            setId={setId}
          />
        ))}
      </CardWrapper>
    </Wrapper>
  );
}

export default Questions;
