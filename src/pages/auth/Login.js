import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import { ReactComponent as Mail } from "../../assets/images/mail.svg";
import { ReactComponent as Eye } from "../../assets/images/eye.svg";
import {
  Wrapper,
  Form,
  StyledNavLink,
  Text,
  InnerContainer,
  InputWrapper,
  StyledInput,
} from "./AuthStyle";
import { colors } from "../../globalStyles/GlobalStyles";

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);

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
        <InputWrapper>
          <Mail />
          <StyledInput
            placeholder="Email"
            {...register("email", {
              required: "Email is required!",
            })}
          />
        </InputWrapper>
        {errors.email && <Text>{errors.email.message}</Text>}
        <InputWrapper>
          <Eye
            onClick={() => setPasswordShown(!passwordShown)}
            style={{ cursor: "pointer" }}
          />
          <StyledInput
            label="Password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 5,
                message: "Password can have a minimum of 5 characters!",
              },
            })}
            type={passwordShown ? "text" : "password"}
          />
        </InputWrapper>
        {errors.password && <Text>{errors.password.message}</Text>}

        <Button title="Login" type="submit" height="40px" />

        <InnerContainer>
          <Text style={{ color: colors.gray, fontSize: "16px" }}>
            Don't have an account?
          </Text>
          <StyledNavLink to="/register">Sign up</StyledNavLink>
        </InnerContainer>
      </Form>
    </Wrapper>
  );
}

export default Login;
