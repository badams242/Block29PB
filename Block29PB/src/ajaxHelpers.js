const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2309-ftb-et-web-pt';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${'2309-ftb-et-web-pt'}/players`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}/players`);
        const players = await response.json();
        return players;
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/players/${playerId}`);
        const player = await response.json();
        return player;
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

const addNewPlayer = async (playerObj) => {
    try {
        const response = await fetch(`${APIURL}/players`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(playerObj)
            }
        );
        const addedplayer = await response.json();
        return addedplayer;
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

const removePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/players/${playerId}`,
            {
                method: 'DELETE'
            }
        );
        const removedPlayer = await response.json();
        return removedPlayer;
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * 
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */
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


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
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