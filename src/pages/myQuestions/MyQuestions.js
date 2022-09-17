import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserQuestions } from "../../store/actions/Questions";
import Details from "../../components/cards/details/Details";
import Modal from "../../components/modal/Modal";
import QuestionDetails from "../../components/modalContent/questionDetails/QuestionDetails";
import { CardWrapper } from "../home/HomeStyle";
import { Wrapper } from "../../globalStyles/GlobalStyles";

function MyQuestions() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.reducerUser);
  const { userQuestions } = useSelector((state) => state.reducerQuestions);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    dispatch(getUserQuestions(user?.id));
  }, [dispatch, user?.id]);

  return (
    <Wrapper>
      {modalIsOpen && (
        <Modal setIsOpen={setModalIsOpen}>
          <QuestionDetails id={id} setModalIsOpen={setModalIsOpen} />
        </Modal>
      )}
      <CardWrapper height="85vh" width="100%">
        {userQuestions?.map((question) => {
          return (
            <Details
              question={question}
              key={question?.id}
              setModalIsOpen={setModalIsOpen}
              setId={setId}
            />
          );
        })}
      </CardWrapper>
    </Wrapper>
  );
}

export default MyQuestions;
