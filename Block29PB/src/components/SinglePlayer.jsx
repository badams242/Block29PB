import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SinglePlayer = () => {
  const [playerData, setPlayerData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch player data from the provided API
    const fetchPlayerData = async () => {
      try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt/players');
        const data = await response.json();
        // Assuming the API response is an array of players and you want details for a single player
        // You can modify this logic based on the actual API response structure
        const singlePlayer = data[0];
        setPlayerData(singlePlayer);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayerData();

    // Check if the user is logged in (you can replace this with your authentication logic)
    const userIsLoggedIn = /* Replace this with your authentication logic */ false;
    setIsLoggedIn(userIsLoggedIn);
  }, []);

  const handleAddButtonClick = () => {
    // Navigate to the SinglePlayer component (replace '/single-player' with your actual route)
    navigate('/single-player');
  };

  return (
    <div>
      {playerData ? (
        <div>
          <h2>{playerData.name}</h2>
          <p>{playerData.position}</p>
          <p>{playerData.team}</p>
          {isLoggedIn && (
            <button onClick={handleAddButtonClick}>Add</button>
          )}
        </div>
      ) : (
        <p>Loading player data...</p>
      )}
    </div>
  );
};

export default SinglePlayer;