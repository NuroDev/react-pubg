import { getSamples } from "pubg.ts";

import { usePubgHook } from "../util";

import type { Sample, SamplesOptions } from "pubg.ts";

/**
 * Get a list of all past matches from the api
 *
 * @param {Object} options - Sample Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {Date | undefined} options.createdAt - The starting search date for the matches in UTC
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export function useSamples(props: SamplesOptions) {
  return usePubgHook<Sample, SamplesOptions>(props, getSamples);
}
