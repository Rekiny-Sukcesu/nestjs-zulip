import { ISubmessage } from './submessage.interface';

export interface IReceivedMessage {
  id: number;
  sender_id: number;
  content: string;
  recipient_id: number;
  timestamp: number;
  client: string;
  subject: string;
  topic_links: { text: string; url: string }[];
  is_me_message: boolean;
  reactions: object[];
  submessages: ISubmessage[];
  flags: string[];
  sender_full_name: string;
  sender_email: string;
  sender_realm_str: string;
  display_recipient: {
    id: number;
    email: string;
    full_name: string;
    is_mirror_dummy: boolean;
  }[];
  type: string;
  avatar_url: string;
  content_type: string;
}
