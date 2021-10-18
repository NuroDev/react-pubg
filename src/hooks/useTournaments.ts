import { getTournaments } from "pubg.ts";

import { usePubgHook } from "../util";

import type { Tournament, Tournaments, TournamentsOptions } from "pubg.ts";

/**
 * Gets all tournaments
 *
 * @param {Object} options - Tournament Options
 * @param {string} options.apiKey - PUBG Developer API key
 */
export function useTournaments(props: TournamentsOptions) {
  return usePubgHook<Tournament | Array<Tournaments>, TournamentsOptions>(
    props,
    getTournaments
  );
}
