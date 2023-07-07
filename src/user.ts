import type { Thread, User } from "./types"
import { graphql } from "./utils"

/**
 * Gets the user ID from their handle
 * @param handle The user handle (without the @ symbol)
 * @returns The user ID
 */
export async function getUserIdFromHandle(handle: string): Promise<string> {
  return await fetch("https://www.threads.net/@otterlord.dev", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "sec-fetch-site": "none",
    },
    method: "GET",
  }).then(res => res.text()).then(res => res.split('"props":{"user_id":"')[1]!.split('"')[0]!)
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
