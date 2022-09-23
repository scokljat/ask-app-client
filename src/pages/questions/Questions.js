import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Details from "../../components/cards/details/Details";
import FormCard from "../../components/cards/form/Form";
import Modal from "../../components/modal/Modal";
import QuestionDetails from "../../components/modalContent/questionDetails/QuestionDetails";
import { getAllQuestions } from "../../store/actions/Questions";
import { Wrapper, colors } from "../../globalStyles/GlobalStyles";
import { CardWrapper } from "../home/HomeStyle";
import { Text } from "../../components/cards/details/DetailsStyle";

let searchQuestionId;
function Questions() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { allQuestions } = useSelector((state) => state.reducerQuestions);
  const { isLoggedIn } = useSelector((state) => state.reducerUser);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  searchQuestionId = searchParams.get("question");

  useEffect(() => {
    dispatch(getAllQuestions());
    if (searchQuestionId) setModalIsOpen(true);
  }, [dispatch]);

  return (
    <Wrapper>
      {modalIsOpen && (
        <Modal setIsOpen={setModalIsOpen}>
          <QuestionDetails setModalIsOpen={setModalIsOpen} />
        </Modal>
      )}
      {isLoggedIn && <FormCard placeholder="What's on your mind ..." />}
      <CardWrapper height={isLoggedIn ? "68vh" : "87vh"} width="100%">
        {!allQuestions?.length ? (
          <Text color={colors.gray}>No questions here</Text>
        ) : (
          allQuestions?.map((question) => (
            <Details
              question={question}
              key={question?.id}
              setModalIsOpen={setModalIsOpen}
            />
          ))
        )}
      </CardWrapper>
    </Wrapper>
  );
}

export default Questions;
