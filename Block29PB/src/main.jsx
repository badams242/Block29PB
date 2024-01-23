// Import React and necessary components
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PlayerForm from './PlayerForm'; // Assuming you have a PlayerForm component
import PlayerList from './PlayerList'; // Assuming you have a PlayerList component

// Main App component
const App = () => {
  const [players, setPlayers] = useState([]); // State to manage players

  // Function to add a new player to the list
  const addPlayer = (newPlayer) => {
    setPlayers([...players, newPlayer]);
  };

  // Function to delete a player from the list
  const deletePlayer = (playerIndex) => {
    const updatedPlayers = [...players];
    updatedPlayers.splice(playerIndex, 1);
    setPlayers(updatedPlayers);
  };

  return (
    <div>
      <h2>Add New Player</h2>
      <PlayerForm onAddPlayer={addPlayer} />

      <h2>All Players</h2>
      <PlayerList players={players} onDeletePlayer={deletePlayer} />
    </div>
  );
};

// Render the App component to the root element in your HTML
ReactDOM.render(<App />, document.getElementById('root'));