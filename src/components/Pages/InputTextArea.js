/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const InputTextArea = ({ placeholder, value, onChange }) => {
  return (
    <label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
    </label>
  )
}

export default InputTextArea;