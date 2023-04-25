import React, { useEffect } from "react";
import CardList from "src/components/CardList";
import { useDispatch, useSelector } from "react-redux";
import { BookSelectors, getAllBooks } from "src/redux/reducers/bookSlice";
import Subscribe from "src/components/Subscribe";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  const booksList = useSelector(BookSelectors.getAllBooks);
  return (
    <div>
      <CardList cardsList={booksList} />
      <Subscribe/>
    </div>
  );
};

export default Home;
