import type { Thread, ThreadItem } from './types'
import { graphql } from "./utils"

/**
 * Get a thread
 * @param threadId The thread Id
 * @returns unknown
 */
export async function getThread(threadId: string): Promise<{
  containing_thread: Thread
  reply_threads: Thread[]
}> {
  return await graphql(
    `__comet_req=29fb_api_caller_class=RelayModern&fb_api_req_friendly_name=BarcelonaPostPageQuery&variables=%7B%22postID%22%3A%22${threadId}%22%7D&server_timestamps=true&doc_id=5587632691339264`
  ).then(res => res.json()).then(res => res.data.data)
}
