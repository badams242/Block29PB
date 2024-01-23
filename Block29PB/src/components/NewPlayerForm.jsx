import React, { useState } from 'react';

const NewPlayerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    team: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to handle form submission (e.g., API request to add a new player)
    console.log('Form submitted with data:', formData);
  };

  return (
    <div>
      <h2>New Player Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Position:
          <input type="text" name="position" value={formData.position} onChange={handleChange} />
        </label>
        <br />
        <label>
          Team:
          <input type="text" name="team" value={formData.team} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;