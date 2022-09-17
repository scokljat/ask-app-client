import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Details from "../../components/cards/details/Details";
import FormCard from "../../components/cards/form/Form";
import { getAllQuestions } from "../../store/actions/Questions";
import { Wrapper } from "../../globalStyles/GlobalStyles";
import { CardWrapper } from "../home/HomeStyle";

function Questions() {
  const dispatch = useDispatch();
  const { allQuestions } = useSelector((state) => state.reducerQuestions);
  const { isLoggedIn } = useSelector((state) => state.reducerUser);

  useEffect(() => {
    dispatch(getAllQuestions());
  }, [dispatch]);

  return (
    <Wrapper>
      {isLoggedIn && <FormCard placeholder="What's on your mind ..." />}
      <CardWrapper height={isLoggedIn ? "65vh" : "85vh"} width="100%">
        {allQuestions.map((question) => (
          <Details question={question} key={question.id} />
        ))}
      </CardWrapper>
    </Wrapper>
  );
}

export default Questions;
