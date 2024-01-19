import React, { useState } from 'react';
import './NewPlayerForm.css';
import { APIURL } from '../config';

const renderNewPlayerForm = () => {
  try {
      newPlayerFormContainer.innerHTML = `
          <form id="new-player-form">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" />
              <label for="breed">Breed</label>
              <input type="text" id="breed" name="breed" />
              <label for="status">Status</label>
              <input type="text" id="status" name="status" />
              <label for="number">Number</label>
              <input type="number" id="number" name="number" />
              <label for="team">Team</label>
              <input type="text" id="team" name="team" />
              <button type="submit">Add new player</button>
          </form>
      `;/// created container for html as weel adde button 

      const newPlayerForm = document.getElementById('new-player-form');
      newPlayerForm.addEventListener('submit', async (event) => {
          event.preventDefault();
          const newPlayerObj = {
              name: event.target.name.value,
              breed: event.target.breed.value,
              status: event.target.status.value,
              number: event.target.number.value,
              team: event.target.team.value
          };
          const addedPlayer = await addNewPlayer(newPlayerObj);
          const updatedPlayers = await fetchAllPlayers();
          renderAllPlayers(updatedPlayers);
      });

  } catch (err) {
      console.error('Uh oh, trouble rendering the new player form!', err);
  }
}

const init = async () => {
  const players = await fetchAllPlayers();
  renderAllPlayers(players);
  /// render all players and render new player form
  renderNewPlayerForm();
}

init();

export default NewPlayerForm;