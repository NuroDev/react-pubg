import { usePlayer } from "../../src";

function Player() {
  const {
    data: player,
    loading,
    error,
  } = usePlayer({
    apiKey: "...",
    value: "WackyJacky101",
  });

  if (loading) return <>Loading...</>;

  if (error) return <>{error}</>;

  return (
    <>
      <pre>{JSON.stringify(player, null, 4)}</pre>
    </>
  );
}

export default function App() {
  return <Player />;
}
