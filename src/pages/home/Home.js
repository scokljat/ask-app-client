import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Details from "../../components/cards/details/Details";
import Modal from "../../components/modal/Modal";
import QuestionDetails from "../../components/modalContent/questionDetails/QuestionDetails";
import { getPaginatedQuestions } from "../../store/actions/Questions";
import {
  Wrapper,
  LinkContainer,
  StyledNavLink,
  CardWrapper,
} from "./HomeStyle";
import { homeList } from "../../utils/Constants";

function Home() {
  const defaultPageSize = 20;
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { paginatedQuestions } = useSelector((state) => state.reducerQuestions);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    dispatch(getPaginatedQuestions(pageSize));
  }, [dispatch, pageSize]);
  console.log(id);
  return (
    <Wrapper>
      {modalIsOpen && (
        <Modal setIsOpen={setModalIsOpen}>
          <QuestionDetails id={id} setModalIsOpen={setModalIsOpen} />
        </Modal>
      )}
      <LinkContainer>
        {homeList.map((link, index) => (
          <StyledNavLink to={link.route} key={index}>
            {link.name}
          </StyledNavLink>
        ))}
      </LinkContainer>
      {searchParams.get("list") === "all-questions" && (
        <CardWrapper height="85vh">
          {paginatedQuestions?.map((question) => {
            return (
              <Details
                question={question}
                key={question.id}
                pageSize={pageSize}
                setModalIsOpen={setModalIsOpen}
                setId={setId}
              />
            );
          })}
        </CardWrapper>
      )}
    </Wrapper>
  );
}

export default Home;
