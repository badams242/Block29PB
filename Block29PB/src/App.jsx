import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import PlayersList from './components/PlayersList';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';
import './App.css';
import { fetchAllPlayers } from './utils';

const App = () => {
  const API_BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt';

  const fetchAllPlayers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/players`);
      if (!response.ok) {
        throw new Error('Failed to fetch players');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching players:', error.message);
      return [];
    }
  };

  const fetchSinglePlayer = async (playerId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/players/${playerId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch player details');
      }
      return response;
    } catch (error) {
      console.error('Error fetching player details:', error.message);
      return { ok: false };
    }
  };

  const deletePlayer = async (playerId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/players/${playerId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete player');
      }
      return response;
    } catch (error) {
      console.error('Error deleting player:', error.message);
      return { ok: false };
    }
  };

  const handleCreatePlayer = async (newPlayerData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/players/create`, {
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
        <Route
          path="/"
          element={<PlayersList fetchAllPlayers={fetchAllPlayers} />}
        />
        <Route
          path="/players/:id"
          element={<SinglePlayer fetchSinglePlayer={fetchSinglePlayer} deletePlayer={deletePlayer} />}
        />
        <Route
          path="/new-player"
          element={<NewPlayerForm onCreatePlayer={handleCreatePlayer} />}
        />
      </Routes>
    </Router>
  );
};

export default App;