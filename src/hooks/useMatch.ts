import { getMatch } from "pubg.ts";
import { usePubgHook } from "../util";

import type { Match, MatchOptions } from "pubg.ts";

/**
 * Get a match from a specificed match id
 *
 * @param {Object} options - Match Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string} options.id - Match ID
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export function useMatch(props: MatchOptions) {
  return usePubgHook<Match, MatchOptions>(props, getMatch);
}
