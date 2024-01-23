import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerList from './PlayerList';
import SinglePlayer from './SinglePlayer';
import NewPlayerForm from './NewPlayerForm';
import NavigationBar from './NavigationBar';
import PlayerDetails from './PlayerDetails';

const App = () => {
  const isLoggedIn = true; // Replace with your authentication logic

  return (
    <Router>
      <NavigationBar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/players" element={<PlayerList />} />
        <Route path="/players/:playerId" element={<SinglePlayer />} />
        <Route path="/new-player" element={<NewPlayerForm />} />
        <Route path="/players/:playerId/details" element={<PlayerDetails />} />
      </Routes>
    </Router>
  );
};

export default App;