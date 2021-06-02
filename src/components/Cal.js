import React from 'react';
import { Spinner } from 'react-bootstrap';


const Spin = (props) => {
    return (
      <>
      <p>{props.msg}</p>
      <Spinner animation="border" variant="dark" />
    </>
    )
};

export default Spin;



