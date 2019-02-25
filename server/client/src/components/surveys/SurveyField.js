import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className={`field ${touched && error ? 'error' : ''}`}>
      <label>{label}</label>
      <input {...input} placeholder={touched && error} />
    </div>
  );
};
