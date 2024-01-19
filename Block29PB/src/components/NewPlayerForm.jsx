import React, { useState } from 'react';

const NewPlayerForm = ({ onCreatePlayer }) => {
  const [newPlayerData, setNewPlayerData] = useState({
    name: '',
    breed: '',
    Id: '',
    // Add other fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlayerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onCreatePlayer function with the new player data
    onCreatePlayer(newPlayerData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newPlayerData.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="breed" className="form-label">
            Breed:
          </label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={newPlayerData.breed}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="Id" className="form-label">
            Id:
          </label>
          <input
            type="text"
            id="Id"
            name="Id"
            value={newPlayerData.Id}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* Add other form fields as needed */}

        <button type="submit" className="form-button">
          Create Player
        </button>
      </form>
    </div>
  );
};

export default NewPlayerForm;