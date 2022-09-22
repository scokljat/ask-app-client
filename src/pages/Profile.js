import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/button/Button";
import { updateUser, getUserById } from "../store/actions/User";
import { ReactComponent as User } from "../assets/images/user.svg";
import { ReactComponent as Edit } from "../assets/images/edit.svg";
import { colors } from "../globalStyles/GlobalStyles";
import { Wrapper } from "../globalStyles/GlobalStyles";
import styled from "styled-components";

const Text = styled.p`
  font-size: ${({ size }) => size};
  color: ${({ theme }) => theme.textSecondary};
  margin: 0;
`;

const InnerContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.63rem;
  margin-top: 0.63rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 78%;
  align-self: flex-end;
  margin-top: 0.63rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: 62%;
  background: ${({ theme }) => theme.bgComponent};
  border: 0;
  border-radius: 5px;
`;

export const StyledInput = styled.input`
  height: 35px;
  //width: 60%;
  width: 100%;
  border-radius: 5px;
  padding: 5px 10px;
  outline: none;
  background: ${({ theme }) => theme.bgComponent};
  border: 0;
  ::placeholder {
    color: #67696d;
  }
`;

function Profile() {
  const [editIsClicked, setEditIsClicked] = useState(false);
  const { user } = useSelector((state) => state.reducerUser);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUserById(user.id));
  // }, [dispatch, user]);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
    },
  });
  console.log(user);
  const onSubmit = (values) => {
    dispatch(getUserById(user?.id));
    dispatch(
      updateUser({
        firstName: values.firstName,
        lastName: values.lastName,
        id: user?.id,
        email: user?.email,
        password: user?.password,
      })
    );
    reset();
  };

  return (
    <Wrapper>
      <UserContainer>
        <InnerContainer>
          <User />
          <Text size="30px">
            {user.firstName} {user.lastName}
          </Text>
        </InnerContainer>
        {editIsClicked ? (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <StyledInput
              placeholder="First name"
              {...register("firstName", {
                required: "First name is required!",
              })}
            />

            <StyledInput
              placeholder="Last name"
              {...register("lastName", {
                required: "Last name is required!",
              })}
            />
            <StyledInput
              placeholder="Email"
              {...register("email", {
                required: "Email is required!",
              })}
            />
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
                onClick={() => setEditIsClicked(false)}
              />
            </InnerContainer>
          </Form>
        ) : (
          <ButtonWrapper>
            <Button
              title="Edit user details"
              height="1.8rem"
              width="100%"
              onClick={() => setEditIsClicked(true)}
              icon={<Edit style={{ marginRight: "0.3rem" }} />}
            />
          </ButtonWrapper>
        )}
      </UserContainer>
    </Wrapper>
  );
}

export default Profile;
