import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

interface IMargin {
  isMargin?: boolean;
}

export const Preloader: FC<IMargin> = ({ isMargin = true }) => {
  return (
    <Container
      fluid
      className={`d-flex flex-row align-items-center justify-content-center 
        ${isMargin === true ? 'mt-3' : ''}`}
    >
      <Spinner animation="grow" role="status" variant="primary" size="sm"></Spinner>
      <Spinner animation="grow" role="status" variant="primary" size="sm"></Spinner>
    </Container>
  );
};