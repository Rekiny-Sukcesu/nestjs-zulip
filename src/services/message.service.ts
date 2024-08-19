import { Injectable } from '@nestjs/common';
import { ZulipService } from './zulip.service';
import { Message } from '../types/message.type';
import { Zulip } from '../types/response.type';

@Injectable()
export class MessageService extends ZulipService {
  endpoint = '/messages';

  public async sendMessage(
    messageRequest: Message.SendRequest,
  ): Promise<Message.SendResponse> {
    return this.post<Message.SendResponse>(messageRequest);
  }

  public async editMessage(messageId: number, editRequest: Message.EditRequest): Promise<Zulip.Response> {
    return this.patch<Zulip.Response>(editRequest, `/${messageId}`)
  }

  public async deleteMessage(messageId: number): Promise<Zulip.Response> {
    return this.delete<Zulip.Response>(`/${messageId}`)
  }

  public async getMessages(getRequest: Message.GetRequest): Promise<Message.GetResponse> {
    return this.get<Message.GetResponse>(getRequest)
  }

  public async getOneMessage(messageId: number, getOneRequest: Message.GetOneRequest): Promise<Message.GetOneResponse> {
    return this.get<Message.GetOneResponse>(getOneRequest, `/${messageId}`);
  }

}
