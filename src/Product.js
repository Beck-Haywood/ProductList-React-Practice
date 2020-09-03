import React from 'react';


function DisplayProduct(props) {
    return (
      <div className="">
      
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <h3>{props.description}</h3>
        <h3>Units left: {props.units}</h3>
        <h3>Rating: {props.rating}/5</h3>

      </div>
    );
  }

export default DisplayProduct
