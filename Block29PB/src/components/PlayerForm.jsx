import React, { useState } from 'react';

const PlayerForm = ({ onCreatePlayer }) => {
  const initialFormData = {
    name: '',
    breed: '',
    status: '',
    teamId: '',
    // Add more form fields as needed
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the onCreatePlayer function to handle the creation of a new player
    onCreatePlayer(formData);
    // Optionally, reset the form fields after submission
    setFormData(initialFormData);
  };
return (
    <div>
      <h2>Create a New Player</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" autoComplete='name' value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="breed">Breed:</label>
          <input type="text" id="breed" name="breed" value={formData.breed} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <input type="text" id="status" name="status" value={formData.status} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="teamId">TeamId:</label>
          <input type="text" id="teamId" name="teamId" value={formData.teamId} onChange={handleChange} required />
        </div>

        {/* Add more form fields as needed */}

        <button type="submit">Create Player</button>
      </form>
    </div>
  );
};

export default PlayerForm;