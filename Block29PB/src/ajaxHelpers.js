
const cohortName = '2309-ftb-et-web-pt';
const APIURL = 'https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt/players';
const fetchAllPlayers = async () => {
  try {
      const response = await fetch(`${APIURL}/players`);
      const players = await response.json();
      return players;
  } catch (err) {
      console.error('Uh oh, trouble fetching players!', err);
  }
};

// const cohortName = '2309-ftb-et-web-pt';

const searchPlayers = async (name) => {
  try {
    const response = await fetch(`${APIURL}/search?name=${name}`);
    if (!response.ok) {
      throw new Error('Failed to fetch filtered players');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching filtered players:', error.message);
    throw error;
  }
};

    const deletePlayer = async (playerId) => {
      try {
        const response = await fetch(`${APIURL}/players/${playerId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error(`Failed to delete player #${playerId}`);
        }

        return 'Player deleted successfully';
      } catch (error) {
        console.error('Error deleting player:', error.message);
        throw error;
      }
    };

const createPlayer = async (playerData) => {
  try {
    const response = await fetch(APIURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerData),
    });

    if (!response.ok) {
      throw new Error('Failed to create player');
    }

    return 'Player created successfully';
  } catch (error) {
    console.error('Error creating player:', error.message);
    throw error;
  }
};

export { fetchAllPlayers, searchPlayers, deletePlayer, createPlayer };