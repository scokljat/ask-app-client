import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Details from "../../components/cards/details/Details";
import Modal from "../../components/modal/Modal";
import User from "../../components/cards/user/User";
import QuestionDetails from "../../components/modalContent/questionDetails/QuestionDetails";
import { homeList } from "../../utils/Constants";
import {
  getHotQuestions,
  getPaginatedQuestions,
} from "../../store/actions/Questions";
import { getPopularUsers } from "../../store/actions/User";
import {
  Wrapper,
  LinksWrapper,
  StyledNavLink,
  CardWrapper,
  LinksContainer,
} from "./HomeStyle";
import { Text } from "../../components/cards/details/DetailsStyle";
import { colors } from "../../globalStyles/GlobalStyles";

let searchQuestionId;
function Home() {
  const defaultPageSize = 20;
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { paginatedQuestions, hotQuestions } = useSelector(
    (state) => state.reducerQuestions
  );
  const { popularUsers } = useSelector((state) => state.reducerUser);

  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loadMoreIsVisible, setLoadMoreIsVisible] = useState(true);

  searchQuestionId = searchParams.get("question");
  const searchList = searchParams.get("list");

  useEffect(() => {
    if (searchQuestionId) setModalIsOpen(true);
    if (searchList === "all-questions") {
      dispatch(getPaginatedQuestions(pageSize));
    } else if (searchList === "trending-questions") {
      dispatch(getHotQuestions());
    } else {
      dispatch(getPopularUsers());
    }
  }, [pageSize, searchList]);

  const handleMoreQuestions = () => {
    setPageSize(pageSize + defaultPageSize);

    setLoadMoreIsVisible(false);
  };

  return (
    <Wrapper>
      {modalIsOpen && (
        <Modal setIsOpen={setModalIsOpen}>
          <QuestionDetails setModalIsOpen={setModalIsOpen} />
        </Modal>
      )}
      <LinksWrapper>
        <LinksContainer>
          {homeList.map((link, index) => (
            <StyledNavLink to={link.route} key={index}>
              {link.name}
            </StyledNavLink>
          ))}
        </LinksContainer>
      </LinksWrapper>

      <CardWrapper height="86vh" width="80%">
        {searchList === "all-questions" && (
          <>
            {!paginatedQuestions?.length ? (
              <Text color={colors.gray}>No questions here</Text>
            ) : (
              paginatedQuestions?.map((question) => {
                return (
                  <Details
                    question={question}
                    key={question.id}
                    pageSize={pageSize}
                    setModalIsOpen={setModalIsOpen}
                  />
                );
              })
            )}
            {loadMoreIsVisible && paginatedQuestions.length !== 0 && (
              <Text
                onClick={handleMoreQuestions}
                color={colors.blue}
                style={{
                  fontSize: "17px",
                  cursor: "pointer",
                }}
              >
                Load more...
              </Text>
            )}
          </>
        )}
        {searchList === "trending-questions" && (
          <>
            {!hotQuestions?.length ? (
              <Text color={colors.gray}>No hot questions here</Text>
            ) : (
              hotQuestions?.map((question) => {
                return (
                  <Details
                    question={question}
                    key={question.id}
                    pageSize={pageSize}
                    setModalIsOpen={setModalIsOpen}
                  />
                );
              })
            )}
          </>
        )}
        {searchList === "trending-users" && (
          <>
            {!popularUsers?.length ? (
              <Text color={colors.gray}>No users here</Text>
            ) : (
              popularUsers?.map((user) => <User key={user?.id} user={user} />)
            )}
          </>
        )}
      </CardWrapper>
    </Wrapper>
  );
}

export default Home;
