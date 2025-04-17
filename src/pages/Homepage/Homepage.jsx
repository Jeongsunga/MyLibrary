import React from 'react'
import { useAllBooks } from '../../hooks/useAllBooks'
import { Alert, Container, Spinner } from "react-bootstrap";
import BookCard from './components/BookCard/BookCard';

const Homepage = () => {
  const { data, isLoading, isError, error } = useAllBooks();

  if(isLoading) {
    return <Spinner animation="border" variant="danger"/>;
  }

  if(isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  console.log('ddd', data)

  return (
    <div>
      <h3>인기 도서</h3>
      <Container>
        {/* {data.map((book, index)=><BookCard book={book} key={index}/>)} */}
      </Container>
    </div>
  )
}

export default Homepage