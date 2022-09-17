import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ReactComponent as Play } from "../../../assets/images/play.svg";
import Button from "../../button/Button";
import { createQuestion } from "../../../store/actions/Questions";
import { Text } from "../../../pages/auth/AuthStyle";
import { Wrapper, StyledTextArea, Form, ButtonWrapper } from "./FormStyle";

function FormCard({ placeholder, width }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.reducerUser);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (values) => {
    dispatch(
      createQuestion({
        dateOfPublished: new Date(),
        content: values.question,
        userId: user?.id,
      })
    );
    reset();
  };

  return (
    <Wrapper width={width}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <StyledTextArea
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
