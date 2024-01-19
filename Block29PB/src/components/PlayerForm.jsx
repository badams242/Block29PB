return (
    <div>
      <h2>Create a New Player</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
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