import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUserQuestions } from "../../store/actions/Questions";
import Details from "../../components/cards/details/Details";
import Modal from "../../components/modal/Modal";
import QuestionDetails from "../../components/modalContent/questionDetails/QuestionDetails";
import { CardWrapper } from "../home/HomeStyle";
import { Wrapper, colors } from "../../globalStyles/GlobalStyles";
import { Text } from "../../components/cards/details/DetailsStyle";

let searchQuestionId;
function MyQuestions() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { user } = useSelector((state) => state.reducerUser);
  const { userQuestions } = useSelector((state) => state.reducerQuestions);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  searchQuestionId = searchParams.get("question");

  useEffect(() => {
    dispatch(getUserQuestions(user?.id));
    if (searchQuestionId) setModalIsOpen(true);
  }, [dispatch, user?.id]);

  return (
    <Wrapper>
      {modalIsOpen && (
        <Modal setIsOpen={setModalIsOpen}>
          <QuestionDetails setModalIsOpen={setModalIsOpen} />
        </Modal>
      )}
      <CardWrapper height="90vh" width="100%">
        {!userQuestions?.length ? (
          <Text color={colors.gray}>No questions here</Text>
        ) : (
          userQuestions?.map((question) => {
            return (
              <Details
                question={question}
                key={question?.id}
                setModalIsOpen={setModalIsOpen}
              />
            );
          })
        )}
      </CardWrapper>
    </Wrapper>
  );
}

export default MyQuestions;
