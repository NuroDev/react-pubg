import {
  getMatch,
  getPlayer,
  getSamples,
  getSeason,
  getSeasons,
  getStatus,
  getTournament,
  getTournaments,
} from "pubg.ts";

import { usePubgHook } from "./util";

import type {
  Match,
  MatchOptions,
  Player,
  PlayerOptions,
  ResponseObjectType,
  Sample,
  SamplesOptions,
  Season,
  SeasonOptions,
  SeasonsOptions,
  StatusOptions,
  Tournament,
  TournamentOptions,
  Tournaments,
  TournamentsOptions,
} from "pubg.ts";

/**
 * Get a match from a specificed match id
 *
 * @param {Object} options - Match Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string} options.id - Match ID
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export function useMatch(props: MatchOptions) {
  return usePubgHook<Match>(props, getMatch);
}

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
  return usePubgHook<Player | Array<Player>>(props, getPlayer);
}

/**
 * Get a list of all past matches from the api
 *
 * @param {Object} options - Sample Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {Date | undefined} options.createdAt - The starting search date for the matches in UTC
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export function useSamples(props: SamplesOptions) {
  return usePubgHook<Sample>(props, getSamples);
}

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
  return usePubgHook<Season | undefined>(props, getSeason);
}

/**
 * Get an array of all seasons of a provided shard
 *
 * @param {Object} options - Seasons Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export function useSeasons(props: SeasonsOptions) {
  return usePubgHook<Array<Season>>(props, getSeasons);
}

/**
 * Gets the status of the API
 *
 * @param {Object} options - Status Options
 * @param {string} options.apiKey - PUBG Developer API key
 */
export function useStatus(props: StatusOptions) {
  return usePubgHook<{ id: string; type: ResponseObjectType.STATUS }>(
    props,
    getStatus
  );
}

/**
 * Fetches telemetry data from a provided URL
 *
 * @param {Object} options - Telemetry Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string | undefined} [options.shard] - Platform Shard
 * @param {string} options.url - URL of the telemetry object
 *
 * @TODO
 */
// export function useTelemetry(props: TelemetryOptions) {
//   return usePubgHook<Telemetry>(props, getTelemetry);
// }

/**
 * Gets a specific tournament using a provided match id
 *
 * @param {Object} options - Tournament Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string} options.id - Tournament ID
 */
export function useTournament(props: TournamentOptions) {
  return usePubgHook<Tournament | Array<Tournaments>>(props, getTournament);
}

/**
 * Gets all tournaments
 *
 * @param {Object} options - Tournament Options
 * @param {string} options.apiKey - PUBG Developer API key
 */
export function useTournaments(props: TournamentsOptions) {
  return usePubgHook<Tournament | Array<Tournaments>>(props, getTournaments);
}
