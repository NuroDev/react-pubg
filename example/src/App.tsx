import { usePlayer } from "../../src";

// @ts-ignore
const apiKey = import.meta.env.VITE_PUBG_API_KEY;

function Player() {
  const {
    data: players,
    error,
    loading,
  } = usePlayer({
    apiKey,
    value: ["WackyJacky101"],
  });

  if (loading) return <>Loading...</>;

  if (error) return <>{error}</>;

  return (
    <>
      <pre>{JSON.stringify(players, null, 4)}</pre>
    </>
  );
}

export default function App() {
  return <Player />;
}
