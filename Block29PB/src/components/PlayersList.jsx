const PlayersList = ({ players, onSeeDetails, onDelete }) => {
    return (
      <div>
        <h2>Players List</h2>
        {players.length > 0 ? (
          <ul>
            {players.map((player) => (
              <li key={player.id}>
                <p>{player.name}</p>
                <p>{player.breed}</p>
                <p>{player.status}</p>
                <p>Image URL: {player.imageUrl}</p>
                <button onClick={() => onSeeDetails(player.id)}>See Details</button>
                <button onClick={() => onDelete(player.id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No players available</p>
        )}
      </div>
    );
  };
  
  export default PlayersList;