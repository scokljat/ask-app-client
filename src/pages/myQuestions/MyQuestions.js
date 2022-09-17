import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserQuestions } from "../../store/actions/Questions";
import Details from "../../components/cards/details/Details";
import { CardWrapper } from "../home/HomeStyle";
import { Wrapper } from "../../globalStyles/GlobalStyles";

function MyQuestions() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.reducerUser);
  const { userQuestions } = useSelector((state) => state.reducerQuestions);

  useEffect(() => {
    dispatch(getUserQuestions(user?.id));
  }, [dispatch, user?.id]);

  return (
    <Wrapper>
      <CardWrapper height="85vh" width="100%">
        {userQuestions?.map((question) => {
          return <Details question={question} key={question?.id} />;
        })}
      </CardWrapper>
    </Wrapper>
  );
}

export default MyQuestions;
