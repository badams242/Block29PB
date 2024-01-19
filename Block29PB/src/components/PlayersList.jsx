import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PlayersList = ({ fetchPlayers }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchAllPlayers = async () => {
      try {
        const response = await fetchPlayers();
        if (!response.ok) {
          throw new Error('Failed to fetch players');
        }
        const data = await response.json();
        setPlayers(data.players);
      } catch (error) {
        console.error('Error fetching players:', error.message);
      }
    };

    fetchAllPlayers();
  }, [fetchPlayers]);

  return (
    <div className="player-list">
      {players.map((player) => (
        <div key={player.id} className="player-card">
          <img src={player.imageUrl} alt={player.name} />
          <h4>{player.name}</h4>
          <Link to={`/players/${player.id}`}>See Details</Link>
        </div>
      ))}
    </div>
  );
};

export default PlayersList;