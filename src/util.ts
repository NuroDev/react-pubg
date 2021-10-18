import { useEffect, useState } from "react";

export function usePubgHook<T, O>(props: O, hook: (props: O) => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState();

  useEffect(() => {
    hook(props)
      .then((player) => setData(player))
      .catch((err) => setError(err));
  }, [hook, props]);

  return {
    data,
    error,
  };
}
