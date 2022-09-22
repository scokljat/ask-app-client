import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { ReactComponent as Edit } from "../../assets/images/edit.svg";
import { ReactComponent as Eye } from "../../assets/images/eye.svg";
import Button from "../../components/button/Button";
import { updateUser } from "../../store/actions/User";
import { colors } from "../../globalStyles/GlobalStyles";
import { Wrapper } from "../../globalStyles/GlobalStyles";
import { Text, InputWrapper } from "../auth/AuthStyle";
import {
  UserContainer,
  UserDetails,
  InnerContainer,
  Form,
  StyledInput,
  ButtonWrapper,
} from "./ProfileStyle";

function Profile() {
  const [editUserIsClicked, setEditUserIsClicked] = useState(false);
  const [editPasswodIsClicked, setEditPasswordIsClicked] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const { user } = useSelector((state) => state.reducerUser);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
    },
  });

  const onSubmit = (values) => {
    dispatch(
      updateUser({
        firstName: values.firstName,
        lastName: values.lastName,
        id: user?.id,
      })
    );
    setEditUserIsClicked(false);
  };

  return (
    <Wrapper>
      <UserContainer>
        <InnerContainer>
          <User />
          <UserDetails size="1.8rem">
            {user.firstName} {user.lastName}
          </UserDetails>
        </InnerContainer>
        {editUserIsClicked ? (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <StyledInput
              placeholder="First name"
              {...register("firstName", {
                required: "First name is required!",
              })}
            />
            {errors.firstName && <Text>{errors.firstName.message}</Text>}
            <StyledInput
              placeholder="Last name"
              {...register("lastName", {
                required: "Last name is required!",
              })}
            />
            {errors.lastName && <Text>{errors.lastName.message}</Text>}
            <InnerContainer>
              <Button
                title="Confirm"
                height="1.8rem"
                type="submit"
                color={colors.green}
              />
              <Button
                title="Back"
                height="1.8rem"
                onClick={() => setEditUserIsClicked(false)}
              />
            </InnerContainer>
          </Form>
        ) : editPasswodIsClicked ? (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper background={colors.white}>
              <Eye
                onClick={() => setPasswordShown(!passwordShown)}
                style={{ cursor: "pointer" }}
              />
              <StyledInput
                type={passwordShown ? "text" : "password"}
                placeholder="New password"
                {...register("password", {
                  required: "Password is required!",
                })}
              />
            </InputWrapper>
            {errors.password && <Text>{errors.password.message}</Text>}
            <InnerContainer>
              <Button
                title="Confirm"
                height="1.8rem"
                type="submit"
                color={colors.green}
              />
              <Button
                title="Back"
                height="1.8rem"
                onClick={() => setEditPasswordIsClicked(false)}
              />
            </InnerContainer>
          </Form>
        ) : (
          <ButtonWrapper>
            <Button
              title="Edit user details"
              height="1.8rem"
              width="90%"
              onClick={() => setEditUserIsClicked(true)}
              icon={<Edit style={{ marginRight: "0.3rem" }} />}
            />
            <Button
              title="Change password"
              height="1.8rem"
              width="90%"
              onClick={() => setEditPasswordIsClicked(true)}
            />
          </ButtonWrapper>
        )}
      </UserContainer>
    </Wrapper>
  );
}

export default Profile;
