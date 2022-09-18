import { ReactComponent as Frown } from "../assets/images/frown.svg";
import { Wrapper } from "../globalStyles/GlobalStyles";
import { Description } from "../components/cards/details/DetailsStyle";

function Error() {
  return (
    <Wrapper style={{ marginTop: "9.7rem" }}>
      <Frown />
      <Description>404</Description>
      <Description>Page not found</Description>
    </Wrapper>
  );
}

export default Error;
