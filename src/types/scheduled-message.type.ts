import { Message } from './message.type';
import { Zulip } from './response.type';

export namespace ScheduledMessage {
  export type Type = 'stream' | 'private';

  export type ScheduledMessage = {
    scheduled_message_id: number;
    type: Type;
    to: Message.To;
    topic?: string;
    content: string;
    rendered_content: string;
    scheduled_delivery_timestamp: number;
    failed?: boolean;
  };

  export type GetResponse = Zulip.Response & {
    scheduled_messages: ScheduledMessage[];
  };

  export type CreateRequest = {
    type: Message.Type;
    to: Message.To;
    topic?: string;
    content: string;
    scheduled_delivery_timestamp: number;
    read_by_sender?: boolean;
  };

  export type CreateResponse = Zulip.Response & {
    scheduled_message_id: number;
  };

  export type EditRequest = {
    type?: Message.Type;
    to?: Message.To;
    topic?: string;
    content?: string;
    scheduled_delivery_timestamp?: number;
  };
}
