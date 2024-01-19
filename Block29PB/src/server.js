const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON request bodies
app.use(bodyParser.json());

// Your existing routes

// Route to delete a player by ID
app.delete('/API/:cohortId/players/:playerId', (req, res) => {
  const { cohortId, playerId } = req.params;

  // Perform the deletion logic here (e.g., delete player from the database)

  // Respond with a success message or appropriate status code
  res.json({
    success: true,
    message: `Player with ID ${playerId} deleted successfully in cohort ${cohortId}.`,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});