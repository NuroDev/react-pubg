import { getSeasons } from "pubg.ts";

import { usePubgHook } from "../util";

import type { Season, SeasonsOptions } from "pubg.ts";

/**
 * Get an array of all seasons of a provided shard
 *
 * @param {Object} options - Seasons Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export function useSeasons(props: SeasonsOptions) {
  return usePubgHook<Array<Season>, SeasonsOptions>(props, getSeasons);
}
