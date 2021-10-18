import { usePlayer } from "../../src";

function Player() {
  const { data: player, error } = usePlayer({
    apiKey: "...",
    value: "WackyJacky101",
  });

  if (!player) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error fetching player data</>;
  }

  return (
    <>
      <pre>{JSON.stringify(player, null, 4)}</pre>
    </>
  );
}

export default function App() {
  return <Player />;
}
