import React from 'react';

function CategoryButton(props) {
    return (
      <button onClick={props.onClick}>
          {props.name} 
          <sup>{props.count}</sup>
      </button> 
    );
}

export default CategoryButton