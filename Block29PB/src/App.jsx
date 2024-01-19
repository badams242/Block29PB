import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import PlayersList from './components/PlayersList';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';

const App = () => {
  const handleCreatePlayer = async (newPlayerData) => {
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${'2309-ftb-et-web-pt'}/players/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlayerData),
      });

      if (!response.ok) {
        throw new Error('Failed to create player');
      }

      // Optionally handle the success, e.g., navigate to a different page
      console.log('Player created successfully');
    } catch (error) {
      console.error('Error creating player:', error.message);
      // Optionally show an error message to the user
    }
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<PlayersList />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/new-player" element={<NewPlayerForm onCreatePlayer={handleCreatePlayer} />} />
      </Routes>
    </Router>
  );
};

export default App;