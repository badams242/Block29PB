import React, { useState, useEffect } from 'react';

const SinglePlayer = ({ match, fetchSinglePlayer, deletePlayer }) => {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const playerId = match.params.id;

    const fetchPlayerDetails = async () => {
      try {
        const response = await fetchSinglePlayer(playerId);
        if (!response.ok) {
          throw new Error('Failed to fetch player details');
        }
        const data = await response.json();
        setPlayer(data);
      } catch (error) {
        console.error('Error fetching player details:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayerDetails();
  }, [match.params.id, fetchSinglePlayer]);

  const handleDelete = async () => {
    try {
      const confirmDeletion = window.confirm('Are you sure you want to delete this player?');
      if (!confirmDeletion) {
        return;
      }

      const response = await deletePlayer(player.id);
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to delete player. Server response: ${errorMessage}`);
      }

      // Optionally handle success (e.g., navigate to a different page)
      console.log('Player deleted successfully');
    } catch (error) {
      console.error('Error deleting player:', error.message);
      // Optionally show an error message to the user
    }
  };

  if (loading) {
    return <p>Loading player details...</p>;
  }

  if (!player) {
    return <p>Player not found</p>;
  }

  return (
    <div>
      <h2>{player.name}</h2>
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      <button onClick={handleDelete}>Delete Player</button>
      {/* Add more details as needed */}
    </div>
  );
};

export default SinglePlayer;