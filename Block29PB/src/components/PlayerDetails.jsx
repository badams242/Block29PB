import React from 'react';
import './PlayerDetails.css';

const PlayerDetails = ({ player }) => {
    return (
      <div>
        <h2>Player Details</h2>
        <p>ID: {player.id}</p>
        <p>Name: {player.name}</p>
        <p>Breed: {player.breed}</p>
        <p>Status: {player.status}</p>
        <p>Image URL: {player.imageUrl}</p>
        {/* Display additional player information as needed */}
        <h3>Team</h3>
        <p>Team ID: {player.team.id}</p>
        <p>Team Name: {player.team.name}</p>
        <p>Team Score: {player.team.score}</p>
        {/* Display additional team information as needed */}
        <h3>Team Players</h3>
        <ul>
          {player.team.players.map((teamPlayer) => (
            <li key={teamPlayer.id}>
              <p>Name: {teamPlayer.name}</p>
              <p>Breed: {teamPlayer.breed}</p>
              <p>Status: {teamPlayer.status}</p>
              <p>Image URL: {teamPlayer.imageUrl}</p>
              {/* Display additional team player information as needed */}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PlayerDetails;