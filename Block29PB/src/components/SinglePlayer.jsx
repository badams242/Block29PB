const SinglePlayer = ({ match }) => {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const playerId = match.params.id;

    const fetchSinglePlayer = async () => {
      try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${'2309-FTB-ET-WEB-PT'}/players/${playerId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch player details');
        }
        const data = await response.json();
        setPlayer(data);
      } catch (error) {
        console.error('Error fetching player details:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSinglePlayer();
  }, [match.params.id]);

  if (loading) {
    return <p>Loading player details...</p>;
  }

  if (!player) {
    return <p>Player not found</p>;
  }

  return (
    <div>
      <h2>{player.name}</h2>
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      {/* Display other details based on available properties */}
    </div>
  );
};

export default SinglePlayer;