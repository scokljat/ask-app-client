import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as Like } from "../../../assets/images/thumbs-up.svg";
import { ReactComponent as Dislike } from "../../../assets/images/thumbs-down.svg";
import Button from "../../button/Button";
import FormatUtils from "../../../utils/FormatUtils";
import { colors } from "../../../globalStyles/GlobalStyles";
import {
  Wrapper,
  Text,
  Description,
  FooterContainer,
  Footer,
} from "./DetailsStyle";

function Details({ question, setModalIsOpen, setId, width }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useSelector((state) => state.reducerUser);

  return (
    <Wrapper width={width}>
      <Text>
        {FormatUtils.formatDate(question?.dateOfPublished, "dd.MM.yyyy")}
      </Text>
      <Text color={colors.blue}>
        {question?.user?.firstName} {question?.user?.lastName}
      </Text>
      <Description
        onClick={() => {
          setModalIsOpen(true);
          navigate(`${location.pathname}?modal=question-informations`);
          setId(question?.id);
        }}
      >
        {question?.content}
      </Description>

      <Footer>
        <FooterContainer>
          <Text>{question?.likes?.length} likes</Text>
          {isLoggedIn && (
            <Button
              title="Like"
              height="1.8rem"
              icon={<Like style={{ marginRight: "0.3rem" }} />}
            />
          )}
        </FooterContainer>
        <FooterContainer>
          <Text>{question?.dislikes?.length} dislikes</Text>
          {isLoggedIn && (
            <Button
              title="Dislike"
              height="1.8rem"
              color={colors.red}
              icon={<Dislike style={{ marginRight: "0.3rem" }} />}
            />
          )}
        </FooterContainer>
      </Footer>
    </Wrapper>
  );
}

export default Details;
