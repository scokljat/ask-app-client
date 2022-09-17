import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Close } from "../../../assets/images/close.svg";
import FormCard from "../../cards/form/Form";
import { getQuestionById } from "../../../store/actions/Questions";
import FormatUtils from "../../../utils/FormatUtils";
import {
  Wrapper,
  Header,
  Text,
  QuestionStatistic,
  Description,
  CommentsContainer,
} from "./QuestionDetailsStyle";

function QuestionDetails({ setModalIsOpen, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { question } = useSelector((state) => state.reducerQuestions);

  useEffect(() => {
    dispatch(getQuestionById(id));
  }, [dispatch, id]);

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
        <Text>{question?.answers?.length} comments</Text>
      </QuestionStatistic>
      <CommentsContainer>
        <FormCard
          width="95%"
          placeholder="Enter answer..."
          questionId={question?.id}
        />
      </CommentsContainer>
    </Wrapper>
  );
}

export default QuestionDetails;
