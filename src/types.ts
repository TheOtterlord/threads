export interface User {
  is_private: boolean
  profile_pic_url: string
  username: string
  hd_profile_pic_versions: {
    height: number
    width: number
    url: string
  }[]
  is_verified: boolean
  biography: string
  biography_with_entities: unknown
  follower_count: number
  profile_context_facepile_users: unknown | null
  bio_links: {
    url: string
  }[]
  pk: string
  full_name: string
  id: unknown | null
}

export type Thread = {
  id: string
  thread_items: unknown[]
};

export type ThreadItem = {
  post: {
    user: User
    image_versions2: {
      candidates: unknown[]
    }
    original_width: number
    original_height: number
    video_versions: unknown[]
    carousel_media: unknown
    carousel_media_count: unknown
    pk: string
    has_audio: unknown
    text_post_app_info: {
      link_preview_attachment: unknown
      share_info: unknown[]
      reply_to_author: unknown
      is_post_unavailable: boolean
    }
    caption: {
      text: string
    }
    taken_at: number
    like_count: number
    code: string
    media_overlay_info: unknown
    id: string
  }
  line_type: string
  view_replies_cta_string: string
  reply_facepile_users: {
    id: unknown | null,
    profile_pic_url: string,
    __typename: string
  }[]
  should_show_replies_cta: boolean
  __typename: string
}
