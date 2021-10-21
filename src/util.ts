import { useEffect, useState } from "react";

export function usePubgHook<T, O>(
  props: O,
  hook: (props: O) => Promise<T | null>
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!data && !error) {
      setLoading(true);

      hook(props)
        .then((data) => setData(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [props]);

  return {
    data,
    loading,
    error,
  };
}
