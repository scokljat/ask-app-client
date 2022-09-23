import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Close } from "../../../assets/images/close.svg";
import FormCard from "../../cards/form/Form";
import Details from "../../cards/details/Details";
import { getQuestionById } from "../../../store/actions/Questions";
import { getAnswers } from "../../../store/actions/Answers";
import FormatUtils from "../../../utils/FormatUtils";
import { Text } from "../../cards/details/DetailsStyle";
import {
  Wrapper,
  Header,
  QuestionStatistic,
  Description,
  CommentsContainer,
} from "./QuestionDetailsStyle";
import { colors } from "../../../globalStyles/GlobalStyles";

let searchQuestionId;
function QuestionDetails({ setModalIsOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { question } = useSelector((state) => state.reducerQuestions);
  const { answers } = useSelector((state) => state.reducerAnswers);
  const { isLoggedIn } = useSelector((state) => state.reducerUser);
  searchQuestionId = searchParams.get("question");

  useEffect(() => {
    dispatch(getQuestionById(searchQuestionId));
    dispatch(getAnswers(searchQuestionId));
  }, [dispatch]);

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <Header>
        <Text
          color={colors.blue}
          style={{
            marginBottom: "0.63rem",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          More informations about question
        </Text>
        <Close
          style={{ cursor: "pointer" }}
          onClick={() => {
            setModalIsOpen(false);
            navigate(-1);
          }}
        />
      </Header>
      <Text>
        {question?.dateOfPublished !== undefined &&
          FormatUtils.formatDate(question?.dateOfPublished, "dd.MM.yyyy")}
      </Text>
      <Text color={colors.blue} style={{ marginLeft: "0.06rem" }}>
        {question?.user?.firstName} {question?.user?.lastName}
      </Text>
      <Description>{question?.content}</Description>
      <QuestionStatistic>
        <Text>{question?.likes?.length} likes</Text>
        <Text>{question?.dislikes?.length} dislikes</Text>
        <Text>{answers?.length} comments</Text>
      </QuestionStatistic>
      {isLoggedIn && (
        <FormCard
          isAnswer={true}
          placeholder="Enter answer..."
          questionId={question?.id}
        />
      )}
      <CommentsContainer height={isLoggedIn ? "43vh" : "58vh"}>
        {answers?.length === 0 ? (
          <Text
            color={colors.gray}
            style={{ marginLeft: "0.63rem", marginTop: "0.63rem" }}
          >
            No answers yet.
          </Text>
        ) : (
          answers?.map((answer) => (
            <Details
              question={answer}
              key={answer.id}
              width="95%"
              isAnswer={true}
              questionId={question?.id}
            />
          ))
        )}
      </CommentsContainer>
    </Wrapper>
  );
}

export default QuestionDetails;
