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

  export type GetSubscribedChannelsRequest = {
    include_subscribers?: boolean;
  };

  export type GetSubscribedChannelsResponse = Zulip.Response & {
    subscriptions: Channel[];
  };
}
