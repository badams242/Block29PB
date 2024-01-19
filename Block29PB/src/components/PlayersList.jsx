import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PlayersList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Your existing code to fetch players
    // e.g., fetchAllPlayers() and setPlayers(data);
  }, []);

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