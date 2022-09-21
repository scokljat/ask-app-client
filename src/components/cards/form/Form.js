import { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ReactComponent as Play } from "../../../assets/images/play.svg";
import Button from "../../button/Button";
import {
  createQuestion,
  getQuestionById,
  updateQuestion,
} from "../../../store/actions/Questions";
import { createAnswer, updateAnswer } from "../../../store/actions/Answers";
import { Wrapper, StyledTextArea, Form, ButtonWrapper } from "./FormStyle";
import { Text } from "../../modalContent/questionDetails/QuestionDetailsStyle";

let searchQuestion;
function FormCard({
  placeholder,
  isAnswer,
  questionId,
  isEdit,
  setEditModalIsOpen,
  pageSize,
  question,
}) {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { user } = useSelector((state) => state.reducerUser);
  searchQuestion = searchParams.get("edit");

  useEffect(() => {
    if (searchQuestion) dispatch(getQuestionById(searchQuestion));
  }, [dispatch]);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { question: searchQuestion && question?.content },
  });

  const onSubmit = (values) => {
    if (isAnswer && !isEdit) {
      dispatch(
        createAnswer({
          userId: user.id,
          questionId: questionId,
          dateOfPublished: new Date(),
          content: values.question,
        })
      );
    } else if (isEdit && !isAnswer) {
      dispatch(
        updateQuestion(
          {
            id: question?.id,
            dateOfPublished: question?.dateOfPublished,
            content: values.question,
            userId: question?.userId,
          },
          location.pathname,
          pageSize
        )
      );
      setEditModalIsOpen(false);
    } else if (isAnswer && isEdit) {
      dispatch(
        updateAnswer({
          id: question?.id,
          dateOfPublished: question?.dateOfPublished,
          content: values.question,
          userId: question?.userId,
          questionId: questionId,
        })
      );
      setEditModalIsOpen(false);
    } else {
      dispatch(
        createQuestion({
          dateOfPublished: new Date(),
          content: values.question,
          userId: user?.id,
          numberOfLikes: 0,
        })
      );
    }
    reset();
  };

  return (
    <Wrapper
      isAnswer={isAnswer}
      isEdit={isEdit}
      onClick={(e) => e.stopPropagation()}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        {isEdit && (
          <Text
            color="#0a80ec"
            style={{
              marginBottom: "10px",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            Edit
          </Text>
        )}
        <StyledTextArea
          isEdit={isEdit}
          {...register("question", {
            required: "Content is required!",
            maxLength: {
              value: 50,
              message: "Content of question must not exceed 50 characters!",
            },
          })}
          placeholder={placeholder}
        />
        {errors.question && <Text>{errors.question.message}</Text>}
        <ButtonWrapper>
          <Button title={<Play />} type="submit" width="10%" height="2rem" />
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}

export default FormCard;
