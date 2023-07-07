import type { Thread, User } from "./types"
import { graphql } from "./utils"

/**
 * Gets the user ID from their handle
 * @param handle The user handle (without the @ symbol)
 * @returns The user ID
 */
export async function getUserIdFromHandle(handle: string): Promise<string> {
	return JSON.parse((await (await fetch("https://www.threads.net/ajax/bulk-route-definitions/", {
    "headers": {
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "content-type": "application/x-www-form-urlencoded",
      "sec-fetch-site": "none",
    },
    "referrer": `https://www.threads.net/@${handle}`,
    "body": `route_urls[0]=%2F%40${handle}%2Freplies&__a=1&__comet_req=29`,
    "method": "POST",
  }) as Response).text()).split('for (;;);')[1]!).payload.payloads[`/@${handle}/replies`].result.exports.rootView.props.user_id
}

/**
 * Gets the user profile from their ID
 * @param userId The user ID
 * @returns unknown
 */
export async function getUserProfile(userId: string): Promise<User> {
  return await graphql(
    `__comet_req=29fb_api_caller_class=RelayModern&fb_api_req_friendly_name=BarcelonaProfileRootQuery&variables=%7B%22userID%22%3A%22${userId}%22%7D&server_timestamps=true&doc_id=23996318473300828`
  ).then(res => res.json()).then(res => res.data.userData.user)
}

/**
 * Get threads from a user
 * @param userId The user ID
 * @returns unknown
 */
export async function getUserThreads(userId: string): Promise<Thread[]> {
  return await graphql(
    `__comet_req=29fb_api_caller_class=RelayModern&fb_api_req_friendly_name=BarcelonaProfileThreadsTabQuery&variables=%7B%22userID%22%3A%22${userId}%22%7D&server_timestamps=true&doc_id=6232751443445612`
  ).then(res => res.json()).then(res => res.data.mediaData.threads)
}

/**
 * Get threads and replies from a user
 * @param userId The user ID
 * @returns unknown
 */
export async function getUserThreadsAndReplies(userId: string): Promise<Thread[]> {
  return await graphql(
    `__comet_req=29fb_api_caller_class=RelayModern&fb_api_req_friendly_name=BarcelonaProfileRepliesTabQuery&variables=%7B%22userID%22%3A%22${userId}%22%7D&server_timestamps=true&doc_id=6307072669391286`
  ).then(res => res.json()).then(res => res.data.mediaData.threads)
}
