/**
 * Channel ID normalization for project resolution.
 *
 * Some registrations store channelId as "telegram:-100..." (type embedded in the string).
 * Tool calls and context usually pass the bare id "-100...". These must match.
 */
const CHANNEL_TYPE_PREFIX = /^(telegram|whatsapp|discord|slack|signal):/i;

export function normalizeChannelIdForLookup(channelId: string): string {
  return channelId.replace(CHANNEL_TYPE_PREFIX, "").trim() || channelId;
}

export function channelIdsMatch(a: string, b: string): boolean {
  return normalizeChannelIdForLookup(a) === normalizeChannelIdForLookup(b);
}
