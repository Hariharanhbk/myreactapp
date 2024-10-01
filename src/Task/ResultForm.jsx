import React from 'react';
import { useLocation } from 'react-router-dom';

function ResultForm() {
  const { state } = useLocation(); // Get the state passed from FormPage

  return (
    <div>
      <h2>Form Data</h2>
      <p>Name: {state?.name}</p>
      <p>Email: {state?.email}</p>
      <p>Age: {state?.age}</p>
    </div>
  );
}

export default ResultForm;
