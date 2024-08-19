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
    subscribers: number[];
  };

  export type GetSubscribedChannelsRequest = {
    include_subscribers?: boolean;
  };

  export type GetSubscribedChannelsResponse = Zulip.Response & {};
}
