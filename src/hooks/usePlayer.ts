import { getPlayer } from "pubg.ts";

import { usePubgHook } from "../util";

import type { Player, PlayerOptions } from "pubg.ts";

/**
 * Get player(s) by a given name(s) or id(s)
 *
 * @param {Object} options - Player Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {boolean} options.id - Whether the provided value(s) are ID's, not player names
 * @param {string | undefined} [options.shard] - Platform Shard
 * @param {string | Array} - Player or array of players to fetch
 */
export function usePlayer(props: PlayerOptions) {
  return usePubgHook<Player | Array<Player>, PlayerOptions>(props, getPlayer);
}
