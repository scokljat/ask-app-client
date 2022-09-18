import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Close } from "../../../assets/images/close.svg";
import FormCard from "../../cards/form/Form";
import Details from "../../cards/details/Details";
import { getQuestionById } from "../../../store/actions/Questions";
import { getAnswers } from "../../../store/actions/Answers";
import FormatUtils from "../../../utils/FormatUtils";
import {
  Wrapper,
  Header,
  Text,
  QuestionStatistic,
  Description,
  CommentsContainer,
} from "./QuestionDetailsStyle";

let searchQuestionId;
function QuestionDetails({ setModalIsOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { question } = useSelector((state) => state.reducerQuestions);
  const { answers } = useSelector((state) => state.reducerAnswers);
  searchQuestionId = searchParams.get("question");

  useEffect(() => {
    dispatch(getQuestionById(searchQuestionId));
    dispatch(getAnswers(searchQuestionId));
  }, [dispatch]);

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <Header>
        <Text
          color="#0a80ec"
          style={{ marginBottom: "10px", fontSize: "17px", fontWeight: "bold" }}
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
      {/* <Text>
        {FormatUtils.formatDate(question?.dateOfPublished, "dd.MM.yyyy")}
      </Text> */}
      <Text>{question?.dateOfPublished}</Text>
      <Text color="#0a80ec" style={{ marginLeft: "1px" }}>
        {question?.user?.firstName} {question?.user?.lastName}
      </Text>
      <Description>{question?.content}</Description>
      <QuestionStatistic>
        <Text>{question?.likes?.length} likes</Text>
        <Text>{question?.dislikes?.length} dislikes</Text>
        <Text>{answers?.length} comments</Text>
      </QuestionStatistic>
      <FormCard
        isAnswer={true}
        placeholder="Enter answer..."
        questionId={question?.id}
      />
      <CommentsContainer>
        {answers?.length === 0 ? (
          <Text
            color=" #82807F"
            style={{ marginLeft: "10px", marginTop: "10px" }}
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
