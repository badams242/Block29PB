import React, { useState, useEffect } from 'react';
import PlayerDetails from './components/PlayerDetails.jsx';
import PlayerForm from './components/PlayerForm.jsx';
import PlayersList from './components/PlayersList.jsx';
import SearchBar from './components/SearchBar.jsx';


const App = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

 
  const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${'2309-FTB-ET-WEB-PT'}`;

  // Fetch all players on component mount
  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await fetch(`${API_URL}/players`);
      if (!response.ok) {
        throw new Error(`Failed to fetch players. Status: ${response.status}`);
      }
      const data = await response.json();
      setPlayers(data);
      setLoading(false); // Set loading to false after fetching
    } catch (error) {
      console.error('Error fetching players:', error.message);
    }
  };
  useEffect(() => {
    fetchPlayers();
  }, [API_URL]);

  const handleSeeDetails = async (playerId) => {
    try {
      const response = await fetch(`${API_URL}/players/${playerId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch player details');
      }
      const data = await response.json();
      setSelectedPlayer(data);
    } catch (error) {
      console.error('Error fetching player details:', error.message);
    }
  };

  const handleSearch = async (searchText) => {
    try {
      const response = await fetch(`${API_URL}/players/search?name=${searchText}`); // Adjust the API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch filtered players');
      }
      const data = await response.json();
      setPlayers(data); // Assuming setPlayers is a state updater function
    } catch (error) {
      console.error('Error fetching filtered players:', error.message);
    }
  };

  const handleDeletePlayer = async (playerId) => {
    try {
      const confirmDeletion = window.confirm('Are you sure you want to delete this player?');
      
      if (!confirmDeletion) {
        return;
      }
  
      const response = await fetch(`${API_URL}/players/delete/${playerId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        const errorMessage = await response.text(); // Get the error message from the server
        throw new Error(`Failed to delete player. Server response: ${errorMessage}`);
      }
  
      alert('Player deleted successfully');
      fetchPlayers();
    } catch (error) {
      console.error(error.message);
      alert('Failed to delete player. Please try again.');
    }
  };
  const handleCreatePlayer = async (newPlayerData) => {
    try {
      const response = await fetch('/api/players/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlayerData),
      });
      if (!response.ok) {
        throw new Error('Failed to create player');
      }
      // Fetch the updated list of players after creating a new player
      fetchPlayers();
    } catch (error) {
      console.error('Error creating player:', error.message);
    }
  };

  return (
    <div>
      <SearchBar searchText={searchText} setSearchText={setSearchText} onSearch={handleSearch} />
      {players.length === 0 ? (
        <p>Loading players...</p>
      ) : (
        <>
          <PlayersList players={players} onSeeDetails={handleSeeDetails} onDelete={handleDeletePlayer} />
          {selectedPlayer && <PlayerDetails player={selectedPlayer} />}
          <PlayerForm onCreatePlayer={handleCreatePlayer} />
        </>
      )}
    </div>
  );
};

export default App;