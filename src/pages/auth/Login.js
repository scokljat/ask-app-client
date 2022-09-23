import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { ReactComponent as Mail } from "../../assets/images/mail.svg";
import { ReactComponent as Eye } from "../../assets/images/eye.svg";
import Button from "../../components/button/Button";
import { login } from "../../store/actions/User";
import { colors } from "../../globalStyles/GlobalStyles";
import {
  Wrapper,
  Form,
  StyledNavLink,
  Text,
  InnerContainer,
  InputWrapper,
  StyledInput,
} from "./AuthStyle";

function Login() {
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
    dispatch(login(values));
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

        <Button title="Login" type="submit" height="2.5rem" width="100%" />

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
