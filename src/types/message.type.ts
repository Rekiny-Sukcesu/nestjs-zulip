import { ZulipResponse } from './response.type';

export type MessageType = 'direct' | 'channel' | 'stream' | 'private';
export type MessageTo = string | number | string[] | number[];
export type MessagePropagatMode = 'change_one' | 'change_all' | 'change_later';

export type SendMessageRequest = {
  type: MessageType;
  to: MessageTo;
  content: string;
  topic?: string;
  queue_id?: string;
  local_id?: string;
  read_by_sender?: boolean;
};

export type SendMessageResponse = ZulipResponse & {
  id: number;
  automatic_new_visibility_policy: number;
};

export type EditMessageRequest = {
  topic: string;
  propagate_mode?: MessagePropagatMode;
  send_notification_to_old_thread?: boolean;
  send_notification_to_new_thread?: boolean;
  content?: string;
  stream_id?: number;
};
