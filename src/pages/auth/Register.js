import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Mail } from "../../assets/images/mail.svg";
import { ReactComponent as Eye } from "../../assets/images/eye.svg";
import Button from "../../components/button/Button";
import { registerUser } from "../../store/actions/User";
import { colors } from "../../globalStyles/GlobalStyles";
import {
  Wrapper,
  Form,
  InputWrapper,
  StyledInput,
  StyledNavLink,
  Text,
  InnerContainer,
} from "./AuthStyle";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.reducerUser);
  const [passwordShown, setPasswordShown] = useState(false);

  useEffect(() => {
    if (isLoggedIn) navigate("/dashboard?list=all-questions");
  }, [isLoggedIn, navigate]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    dispatch(
      registerUser({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        numberOfAnswers: 0,
      })
    );
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <StyledInput
            placeholder="First name"
            {...register("firstName", {
              required: "First name is required!",
            })}
          />
        </InputWrapper>
        {errors.firstName && <Text>{errors.firstName.message}</Text>}
        <InputWrapper>
          <StyledInput
            placeholder="Last name"
            {...register("lastName", {
              required: "Last name is required!",
            })}
          />
        </InputWrapper>
        {errors.lastName && <Text>{errors.lastName.message}</Text>}
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
        <Button title="Sign up" type="submit" height="40px" width="100%" />
        <InnerContainer>
          <Text style={{ color: colors.gray, fontSize: "1rem" }}>
            Have an account?
          </Text>
          <StyledNavLink to="/">Sign in</StyledNavLink>
        </InnerContainer>
      </Form>
    </Wrapper>
  );
}
export default Register;
