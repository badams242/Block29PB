import React, { useState } from 'react';

const PlayerForm = ({ onCreatePlayer }) => {
  const initialFormData = {
    name: '',
    breed: '',
    status: '',
    teamId: '',
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

    // Basic validation
    if (formData.name.trim() === '' || formData.breed.trim() === '' || formData.status.trim() === '') {
      alert('Please fill out all required fields.');
      return;
    }

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
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label for="breed">Breed:</label>
          <input type="text" id="breed" value={formData.breed} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <input type="text" id="status" value={formData.status} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="teamId">TeamId:</label>
          
          <select id="teamId" value={formData.teamId} onChange={handleChange} required>
            <option value="">Select Team</option>
            <option value="team1">Team 1</option>
            <option value="team2">Team 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Add more form fields as needed */}

        <button type="submit">Create Player</button>
      </form>
    </div>
  );
};

export default PlayerForm;