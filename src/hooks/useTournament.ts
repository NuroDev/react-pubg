import { getTournament } from "pubg.ts";

import { usePubgHook } from "../util";

import type { Tournament, Tournaments, TournamentOptions } from "pubg.ts";

/**
 * Gets a specific tournament using a provided match id
 *
 * @param {Object} options - Tournament Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string} options.id - Tournament ID
 */
export function useTournament(props: TournamentOptions) {
  return usePubgHook<Tournament | Array<Tournaments>, TournamentOptions>(props, getTournament);
}
