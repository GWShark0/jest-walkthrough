import React from 'react';

function Button(props) {
  const {
    active,
    children,
    onClick,
    ...rest
  } = props;

  const className = 'button' + (active) ? ' active' : '';

  return (
    <button {...rest} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;
