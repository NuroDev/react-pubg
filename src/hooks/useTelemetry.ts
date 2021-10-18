import { getTelemetry } from "pubg.ts";

import { usePubgHook } from "../util";

import type { Telemetry, TelemetryOptions } from "pubg.ts";

/**
 * Fetches telemetry data from a provided URL
 *
 * @param {Object} options - Telemetry Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string | undefined} [options.shard] - Platform Shard
 * @param {string} options.url - URL of the telemetry object
 */
export function useTelemetry(props: TelemetryOptions) {
  return usePubgHook<Telemetry, TelemetryOptions>(props, getTelemetry);
}
