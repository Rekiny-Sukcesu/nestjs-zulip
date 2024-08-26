import { Zulip } from './response.type';

export namespace Channel {
  export type Channel = {
    stream_id: number;
    name: string;
    description: string;
    rendered_description: string;
    date_created: number;
    creator_id: number | null;
    invite_only: boolean;
    subscribers?: number[];
    desktop_notifications: boolean | null;
    email_notifications: boolean | null;
    wildcard_mentions_notify: boolean | null;
    push_notifications: boolean | null;
    audible_notifications: boolean | null;
    pin_to_top: boolean;
    is_muted: boolean;
    in_home_view: boolean;
    is_announcement_only: boolean;
    is_web_public: boolean;
    color: string;
    stream_post_policy: 1 | 2 | 3 | 4;
    message_retention_days: number | null;
    history_public_to_subscribers: boolean;
    first_message_id: number | null;
    stream_weekly_traffic: number | null;
    can_remove_subscribers_group: boolean;
  };

  export type Subscription = {
    name: string;
    description?: string;
  };

  export type GetSubscribedChannelsRequest = {
    include_subscribers?: boolean;
  };

  export type GetSubscribedChannelsResponse = Zulip.Response & {
    subscriptions: Channel[];
  };

  export type SubscribeToChannelRequest = {
    subscriptions: Subscription[];
    principals?: string[] | number[];
    authorization_errors_fatal?: boolean;
    announce?: boolean;
    invite_only?: boolean;
    is_web_public?: boolean;
    is_default_stream?: boolean;
    history_public_to_subscribers?: boolean;
    stream_post_policy?: 1 | 2 | 3 | 4;
    message_retention_days?: string | number;
    can_remove_subscribers_group: boolean;
  };

  export type SubscribeToChannelResponse = Zulip.Response & {
    subscribed: Record<string, string[]>;
    already_subscribed: Record<string, string[]>;
    unauthorized: string[];
  };

  export type UnsubscribeFromChannelRequest = {
    subscriptions: string[];
    principals?: string[] | number[];
  };

  export type UnsubscribeFromChannelResponse = Zulip.Response & {
    not_subscribed: string[];
    unauthorized: string[];
  };

  export type GetAllChannelsRequest = {
    include_public?: boolean;
    include_web_public?: boolean;
    include_subscribed?: boolean;
    include_all_active?: boolean;
    include_default?: boolean;
    include_owner_subscribed?: boolean;
  };

  export type GetAllChannelsResponse = Zulip.Response & {
    streams: Channel[];
  };

  export type GetChannelByIdResponse = Zulip.Response & {
    stream: Channel;
  };

  export type GetChannelIdRequest = {
    stream: string;
  };

  export type GetChannelIdResponse = Zulip.Response & {
    stream_id: number;
  };

  export type UpdateChannelRequest = {
    description?: string;
    new_name?: string;
    is_private?: boolean;
    is_web_public?: boolean;
    history_public_to_subscribers?: boolean;
    is_stream_default?: boolean;
    stream_post_policy?: 1 | 2 | 3 | 4;
    message_retention_days?: string | number;
    can_remove_subscribers_group?: boolean;
    is_announcement_only?: boolean;
  };
}
