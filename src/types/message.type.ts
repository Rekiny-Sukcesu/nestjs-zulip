import { Zulip } from './response.type';

export namespace Message {
  export type ResponseCode =
    | 'STREAM_DOES_NOT_EXIST'
    | 'STREAM_WILDCARD_MENTION_NOT_ALLOWED'
    | 'MOVE_MESSAGES_TIME_LIMIT_EXCEEDED'
    | 'STREAM_WILDCARD_MENTION_NOT_ALLOWED'
    | 'TOPIC_WILDCARD_MENTION_NOT_ALLOWED';

  export type Type = 'direct' | 'channel' | 'stream' | 'private';
  export type To = string | number | string[] | number[];
  export type PropagatMode = 'change_one' | 'change_all' | 'change_later';

  export type SendRequest = {
    type: Type;
    to: To;
    content: string;
    topic?: string;
    queue_id?: string;
    local_id?: string;
    read_by_sender?: boolean;
  };

  export type SendResponse = Zulip.Response & {
    id: number;
    automatic_new_visibility_policy: number;
  };

  export type EditRequest = {
    topic: string;
    propagate_mode?: PropagatMode;
    send_notification_to_old_thread?: boolean;
    send_notification_to_new_thread?: boolean;
    content?: string;
    stream_id?: number;
  };

  export type GetRequest = {
    anchor?: string;
    include_anchore?: boolean;
    num_before: number;
    num_after: number;
    narrow?: NarrowItem[];
    client_gravatar?: boolean;
    apply_markdown?: boolean;
  };

  export type GetResponse = Zulip.Response & {
    anchor: number;
    found_newest: boolean;
    found_oldest: boolean;
    found_anchor: boolean;
    messages: Message[];
  };

  export type GetOneRequest = {
    apply_markdown?: boolean;
  };

  export type GetOneResponse = Zulip.Response & {
    raw_content: string;
    message: Message;
  }

  export type HistoryItem = {
    user_id: number | null;
    timestamp: number;
    prev_content?: string;
    prev_rendered_content?: string;
    prev_rendered_content_version?: number;
    prev_stream?: number;
    prev_topic?: string;
    stream?: number;
    topic?: string;
  };

  export type User = {
    email: string;
    full_name: string;
    id: number;
  };

  export type Reaction = {
    emoji_code: string;
    emoji_name: string;
    reaction_type: string;
    user: User;
    user_id: number;
  };

  export type Submessage = {
    id: number;
    content: string;
    sender_id: number;
    message_id: number;
    msg_type: Type;
  };

  export type TopicLink = {
    url: string;
    text: string;
  };

  export type NarrowItem = {
    operator: string;
    operand: string;
    negated?: boolean;
  };

  export type Message = {
    id: number;
    sender_id: number;
    content: string;
    recipient_id: number;
    subject: string;
    timestamp: number;
    type: Type;
    flags: string[];
    sender_email: string;
    sender_full_name: string;
    display_recipient: string | object[];
    stream_id: number;
    stream_name: string;
    topic_links: TopicLink[];
    submessages: string[];
    subject_links: string[];
    reactions: string[];
    avatar_url: string | null;
    client: string;
    content_type: 'text/html' | 'text/markdown' | string;
    edit_history?: HistoryItem[];
    is_me_message: boolean;
    last_edit_timestamp: number;
    sneder_realm_str: string;
    match_content?: string;
    match_subject?: string;
  };
}
