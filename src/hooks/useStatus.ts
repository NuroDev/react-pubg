import { getStatus } from "pubg.ts";

import { usePubgHook } from "../util";

import type { ResponseObjectType, StatusOptions } from "pubg.ts";

/**
 * Gets the status of the API
 *
 * @param {Object} options - Status Options
 * @param {string} options.apiKey - PUBG Developer API key
 */
export function useStatus(props: StatusOptions) {
  return usePubgHook<
    { id: string; type: ResponseObjectType.STATUS },
    StatusOptions
  >(props, getStatus);
}
