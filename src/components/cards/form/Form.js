import { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import Button from "../../button/Button";
import { updateUser } from "../../../store/actions/User";
import {
  createQuestion,
  getQuestionById,
  updateQuestion,
} from "../../../store/actions/Questions";
import { createAnswer, updateAnswer } from "../../../store/actions/Answers";
import { Wrapper, StyledTextArea, Form } from "./FormStyle";
import { Text } from "../../cards/details/DetailsStyle";
import { colors } from "../../../globalStyles/GlobalStyles";

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
          userId: user?.id,
          questionId: questionId,
          dateOfPublished: new Date(),
          content: values.question,
        })
      );
      dispatch(
        updateUser({ id: user?.id, numberOfAnswers: user?.numberOfAnswers + 1 })
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
          location.search,
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
            color={colors.blue}
            style={{
              marginBottom: "0.63rem",
              fontSize: "1rem",
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

        <Button
          title={isAnswer ? "Add answer" : "Add question"}
          type="submit"
          width="100%"
          height="2rem"
        />
      </Form>
    </Wrapper>
  );
}

export default FormCard;
