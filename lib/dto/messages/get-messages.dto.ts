import { IReceivedMessage } from '../../interfaces/message/received-message.interface';

export interface GetMessagesDto {
  result: string;
  msg: string;
  messages: IReceivedMessage[];
}
