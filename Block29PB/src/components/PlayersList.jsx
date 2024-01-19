import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PlayersList.css';
import { APIURL } from '../config';

const renderAllPlayers = (playerList) => {
  try {
      let playerContainerHTML = ''; //create loop through playerList and create HTML for each player
      playerList.forEach((player) => {
          playerContainerHTML += `
              <div class="player-card">
                  <h2>${player.name}</h2>
                  <p>${player.Breed}</p>
                  <p>${player.status}</p> 
                  <p>${player.number}</p>
                  <p>${player.team}</p>
                  <button class="see-details" id="see-details-${player.id}">See details</button>
                  <button class="remove-from-roster" id="remove-from-roster-${player.id}">Remove from roster</button>
              </div>
          `;
      });
      playerContainer.innerHTML = playerContainerHTML;// created container for HTML

      const seeDetailsButtons = document.querySelectorAll('.see-details'); /// Created listeners to buttons 
      seeDetailsButtons.forEach((button) => {
          button.addEventListener('click', async (event) => {
              const playerId = event.target.id.split('-')[2];
              const player = await fetchSinglePlayer(playerId);
              console.log(player);
          });
      });

      const removeFromRosterButtons = document.querySelectorAll('.remove-from-roster');
      removeFromRosterButtons.forEach((button) => {
          button.addEventListener('click', async (event) => {
              const playerId = event.target.id.split('-')[3];
              const removedPlayer = await removePlayer(playerId);
              console.log(removedPlayer);
          });
      });

  } catch (err) {
      console.error('Uh oh, trouble rendering players!', err);
  }
};

export default PlayersList;