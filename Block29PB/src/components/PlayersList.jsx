import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PlayerList = () => {
  const [playersData, setPlayersData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all available players from the provided API
    const fetchPlayersData = async () => {
      try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt/players');
        const data = await response.json();
        setPlayersData(data);
      } catch (error) {
        console.error('Error fetching players data:', error);
      }
    };

    fetchPlayersData();
  }, []);

  const handleSeeDetails = (playerId) => {
    // Navigate to the details page for the selected player
    navigate(`/players/${playerId}/details`);
  };

  return (
    <div>
      <h2>All Players</h2>
      {playersData.length > 0 ? (
        <ul>
          {playersData.map((player) => (
            <li key={player.id}>
              <Link to={`/players/${player.id}`}>
                {player.name}
              </Link>
              <button onClick={() => handleSeeDetails(player.id)}>See Details</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading players data...</p>
      )}
    </div>
  );
};

export default PlayerList;