import { colors } from "../../../globalStyles/GlobalStyles";
import { Wrapper, Text } from "../details/DetailsStyle";

function User({ user }) {
  return (
    <Wrapper>
      <Text color={colors.blue} style={{ fontWeight: "bold" }}>
        {user.firstName} {user.lastName}
      </Text>
      <Text color={colors.blue}> {user.numberOfAnswers} answers</Text>
    </Wrapper>
  );
}

export default User;
