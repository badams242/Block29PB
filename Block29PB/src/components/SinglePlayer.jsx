import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PlayersList.css';
import { APIURL } from '../config';

const SinglePlayer = ({ match, fetchSinglePlayer, deletePlayer }) => {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const playerId = match.params.id;

    const fetchSinglePlayer = async (playerId) => {
      try {
          const response = await fetch(`${APIURL}/players/${playerId}`);
          const player = await response.json();
          return player;
      } catch (err) {
          console.error(`Oh no, trouble fetching player #${playerId}!`, err);
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