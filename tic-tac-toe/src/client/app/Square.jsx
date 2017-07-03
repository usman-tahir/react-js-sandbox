import React from 'react';

function Square(props) {
	// spaces are required since the class is being appended manually
	const classes = {'X': ' x', 'O': ' o'};

  return(
    <button className={'square' + (props.value ? classes[props.value] : '')} onClick={props.onClick} >
      {props.value}
    </button>
  );
}

export default Square;
