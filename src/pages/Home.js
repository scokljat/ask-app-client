import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaginatedQuestions } from "../store/actions/Questions";

function Home() {
  const defaultPageSize = 20;
  const dispatch = useDispatch();
  const { paginatedQuestions } = useSelector((state) => state.reducerQuestions);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  useEffect(() => {
    dispatch(getPaginatedQuestions(pageSize));
  }, [dispatch, pageSize]);

  return <div>Home</div>;
}

export default Home;
