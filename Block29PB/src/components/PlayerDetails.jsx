import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PlayerDetails = () => {
  const { playerId } = useParams();
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    // Fetch detailed player data for the specified playerId
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt/players/${playerId}`);
        const data = await response.json();
        setPlayerData(data);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayerData();
  }, [playerId]);

  return (
    <div>
      {playerData ? (
        <div>
          <h2>{playerData.name}</h2>
          <p>Owner: {playerData.owner}</p>
          <p>Team: {playerData.team}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading player details...</p>
      )}
    </div>
  );
};

export default PlayerDetails;