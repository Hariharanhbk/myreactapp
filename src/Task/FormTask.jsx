import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormTask() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,[name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/result', { state: formData });
  };

  return (
    <div>
      <h2>Fill in the Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormTask;
