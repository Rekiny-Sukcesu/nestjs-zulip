import { MessageType } from '../../types/MessageType';

export interface IMessage {
  type: MessageType;
  to: string | number | string[] | number[];
  content: string;
  topic: string;
}
