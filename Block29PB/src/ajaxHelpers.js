const cohortName = '2309-FTB-ET-WEB-PT';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}/players`);
    if (!response.ok) {
      throw new Error('Failed to fetch players');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching players:', error.message);
    throw error;
  }
}

export const fetchSinglePlayer = async (id) => {
  try {
    const response = await fetch(`${APIURL}/players/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch player');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching player:', error.message);
    throw error;
  }
}

export const addNewPlayer = async (playerData) => {
  try {
    const response = await fetch(`${APIURL}/players`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerData),
    });
    if (!response.ok) {
      throw new Error('Failed to create player');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating player:', error.message);
    throw error;
  }
}

export const removePlayer = async (id) => { 
  try {
    const response = await fetch(`${APIURL}/players/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete player');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting player:', error.message);
    throw error;
  }
}