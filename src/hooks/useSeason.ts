import { getSeason } from "pubg.ts";

import { usePubgHook } from "../util";

import type { Season, SeasonOptions } from "pubg.ts";

/**
 * Get data on a specified season. Whether current or a player(s)
 *
 * By default will fetch the current season
 *
 * @param {Object} options - Season Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string | undefined} [options.id] - Season ID
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export function useSeason(props: SeasonOptions) {
  return usePubgHook<Season | undefined, SeasonOptions>(props, getSeason);
}
