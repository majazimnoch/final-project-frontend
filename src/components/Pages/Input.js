/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
    </label>
  )
}

export default Input;