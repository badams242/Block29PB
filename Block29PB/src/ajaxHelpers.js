const baseUrl = 'https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt/players';

const fetchAllPlayers = async () => {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error(' Failed to fetch players');
    }
    const data = await response.json();
    return data.players;
  } catch (error) {
    console.error('Error fetching players:', error.message);
    throw error;
  }
};

const searchPlayers = async (name) => {
  try {
    const response = await fetch(`${baseUrl}/search?name=${name}`);
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
    if (!window.confirm('Are you sure you want to delete this player?')) {
      return;
    }

    const response = await fetch(`${baseUrl}/delete/${playerId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to delete player. Server response: ${errorMessage}`);
    }

    return 'Player deleted successfully';
  } catch (error) {
    console.error('Error deleting player:', error.message);
    throw error;
  }
};

const createPlayer = async (playerData) => {
  try {
    const response = await fetch(baseUrl, {
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