import { useEffect, useState } from "react";

import type { PubgResponseError, Result } from "pubg.ts";

type PubgHook<T> = Result<T> & {
  loading: boolean;
};

export function usePubgHook<
  T,
  // TODO: Add explicit parameter types rather than `any`
  U extends (...args: any) => Promise<Result<T>> = (
    ...args: any
  ) => Promise<Result<T>>
>(props: Parameters<U>, hook: U): PubgHook<T | null> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<PubgResponseError | null>(null);

  useEffect(() => {
    if (!data && !error) {
      setLoading(true);

      hook(props)
        .then(({ data, error }) => {
          setData(data);
          setError(error);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [props]);

  // TODO: Fix PubgResponseError type error
  // @ts-ignore
  return {
    data,
    loading,
    error,
  };
}
