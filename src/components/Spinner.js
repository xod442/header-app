import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';


const Spin = (props) => {
    return (
      <>
      <p>{props.msg}</p>
      <ProgressSpinner/>
    </>
    )
};

export default Spin;



