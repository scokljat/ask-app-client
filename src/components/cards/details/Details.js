import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Like } from "../../../assets/images/thumbs-up.svg";
import { ReactComponent as Dislike } from "../../../assets/images/thumbs-down.svg";
import { ReactComponent as VerticalPoints } from "../../../assets/images/more-vertical.svg";
import Button from "../../button/Button";
import Modal from "../../modal/Modal";
import Form from "../../cards/form/Form";
import FormatUtils from "../../../utils/FormatUtils";
import Tooltip from "../../tooltip/Tooltip";
import {
  likeQuestion,
  dislikeQuestion,
  deleteQuestion,
} from "../../../store/actions/Questions";
import {
  likeAnswer,
  dislikeAnswer,
  deleteAnswer,
} from "../../../store/actions/Answers";
import { colors } from "../../../globalStyles/GlobalStyles";
import {
  Wrapper,
  Text,
  Description,
  ButtonContainer,
  FooterContainer,
  Footer,
} from "./DetailsStyle";
import { useEffect, useState } from "react";

let searchQuestion;
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
  const [searchParams] = useSearchParams();
  const { isLoggedIn, user } = useSelector((state) => state.reducerUser);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [tooltipIsVisible, setTooltipIsVisible] = useState(false);
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  searchQuestion = searchParams.get("edit");

  useEffect(() => {
    if (searchQuestion) setEditModalIsOpen(true);
  }, []);

  return (
    <Wrapper width={width}>
      {editModalIsOpen && (
        <Modal setIsOpen={setEditModalIsOpen} isEdit={true}>
          <Form
            isEdit={true}
            questionId={questionId}
            question={question}
            setEditModalIsOpen={setEditModalIsOpen}
            pageSize={pageSize}
            isAnswer={isAnswer}
          />
        </Modal>
      )}
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
          <VerticalPoints
            style={{ cursor: "pointer" }}
            onClick={() => setShowAdditionalButtons(!showAdditionalButtons)}
          />
        )}
      </Footer>
      {showAdditionalButtons && (
        <ButtonContainer>
          <Button
            title="Edit"
            height="1.4rem"
            onClick={() => {
              setEditModalIsOpen(true);
              if (!isAnswer) {
                if (location.pathname !== "/dashboard") {
                  navigate(`${location.pathname}?edit=${question?.id}`);
                } else {
                  navigate(`/dashboard?list=all-questions&edit=${question.id}`);
                }
              }
            }}
          />
          <Button
            title="Delete"
            height="1.4rem"
            color={colors.red}
            onClick={() => {
              if (isAnswer) {
                dispatch(deleteAnswer(question?.id, questionId));
              } else {
                dispatch(
                  deleteQuestion(
                    question?.id,
                    location.pathname,
                    pageSize,
                    user?.id
                  )
                );
              }
            }}
          />
        </ButtonContainer>
      )}
      <Description
        isAnswer={isAnswer}
        onMouseEnter={() => {
          if (!isAnswer) setTooltipIsVisible(true);
        }}
        onMouseOut={() => {
          if (!isAnswer) setTooltipIsVisible(false);
        }}
        onClick={() => {
          setModalIsOpen(true);
          navigate(`${location.pathname}?question=${question.id}`);
        }}
      >
        {question?.content}
      </Description>
      <Tooltip tooltipIsVisible={tooltipIsVisible} />
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
                      {
                        id: question?.id,
                        dateOfPublished: question?.dateOfPublished,
                        content: question?.content,
                        userId: question?.userId,
                        numberOfLikes: question?.numberOfLikes + 1,
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
