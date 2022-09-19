import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Like } from "../../../assets/images/thumbs-up.svg";
import { ReactComponent as Dislike } from "../../../assets/images/thumbs-down.svg";
import Button from "../../button/Button";
import FormatUtils from "../../../utils/FormatUtils";
import {
  likeQuestion,
  dislikeQuestion,
  deleteQuestion,
} from "../../../store/actions/Questions";
import { likeAnswer, dislikeAnswer } from "../../../store/actions/Answers";
import { colors } from "../../../globalStyles/GlobalStyles";
import {
  Wrapper,
  Text,
  Description,
  ButtonContainer,
  FooterContainer,
  Footer,
} from "./DetailsStyle";

function Details({
  question,
  setModalIsOpen,
  width,
  pageSize,
  isAnswer,
  questionId,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.reducerUser);
  console.log(question);
  return (
    <Wrapper width={width}>
      <Footer>
        <div>
          <Text>
            {FormatUtils.formatDate(question?.dateOfPublished, "dd.MM.yyyy")}
          </Text>
          <Text color={colors.blue}>
            {question?.user?.firstName} {question?.user?.lastName}
          </Text>
        </div>
        {question.user.id === user.id && (
          <ButtonContainer>
            <Button title="Edit" height="1.4rem" />
            <Button
              title="Delete"
              height="1.4rem"
              color={colors.red}
              onClick={() =>
                dispatch(
                  deleteQuestion(
                    question?.id,
                    location.pathname,
                    pageSize,
                    user?.id
                  )
                )
              }
            />
          </ButtonContainer>
        )}
      </Footer>
      <Description
        onClick={() => {
          setModalIsOpen(true);
          navigate(`${location.pathname}?question=${question.id}`);
        }}
      >
        {question?.content}
      </Description>

      <Footer>
        <FooterContainer>
          <Text>
            {isAnswer ? question?.answerLikes?.length : question?.likes?.length}{" "}
            likes
          </Text>
          {isLoggedIn && (
            <Button
              title="Like"
              height="1.8rem"
              icon={<Like style={{ marginRight: "0.3rem" }} />}
              onClick={() => {
                if (isAnswer) {
                  dispatch(
                    likeAnswer({
                      userId: user?.id,
                      answerId: question?.id,
                      questionId: questionId,
                    })
                  );
                } else {
                  dispatch(
                    likeQuestion(
                      {
                        userId: user?.id,
                        questionId: question?.id,
                      },
                      location.pathname,
                      pageSize
                    )
                  );
                }
              }}
            />
          )}
        </FooterContainer>
        <FooterContainer>
          <Text>
            {isAnswer
              ? question?.answerDislikes?.length
              : question?.dislikes?.length}{" "}
            dislikes
          </Text>
          {isLoggedIn && (
            <Button
              title="Dislike"
              height="1.8rem"
              color={colors.red}
              icon={<Dislike style={{ marginRight: "0.3rem" }} />}
              onClick={() => {
                if (isAnswer) {
                  dispatch(
                    dislikeAnswer({
                      userId: user?.id,
                      answerId: question?.id,
                      questionId: questionId,
                    })
                  );
                } else {
                  dispatch(
                    dislikeQuestion(
                      {
                        userId: user?.id,
                        questionId: question?.id,
                      },
                      location.pathname,
                      pageSize
                    )
                  );
                }
              }}
            />
          )}
        </FooterContainer>
      </Footer>
    </Wrapper>
  );
}

export default Details;
