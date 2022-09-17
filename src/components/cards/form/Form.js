import { useForm } from "react-hook-form";
import { ReactComponent as Play } from "../../../assets/images/play.svg";
import Button from "../../button/Button";
import { Text } from "../../../pages/auth/AuthStyle";
import { Wrapper, StyledTextArea, Form, ButtonWrapper } from "./FormStyle";

function FormCard({ placeholder }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };

  return (
    <Wrapper>
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
