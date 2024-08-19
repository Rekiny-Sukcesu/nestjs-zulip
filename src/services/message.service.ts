import { Injectable } from '@nestjs/common';
import { ZulipService } from './zulip.service';
import { Message } from '../types/message.type';
import { ZulipResponse } from '../types/response.type';



@Injectable()
export class MessageService extends ZulipService {
  endpoint = '/messages';

  public async sendMessage(
    messageRequest: Message.SendRequest,
  ): Promise<Message.SendResponse> {
    return this.post<Message.SendResponse>(messageRequest);
  }

  public async editMessage(messageId: number, editRequest: Message.EditRequest): Promise<ZulipResponse>{
    return this.patch<ZulipResponse>(editRequest, `/${messageId}`)
  }

  public async deleteMessage(messageId: number): Promise<ZulipResponse>{
    return this.delete<ZulipResponse>(`/${messageId}`)
  }

  public async getMessages(getRequest: Message.GetRequest): Promise<Message.GetResponse>{
    return this.get<Message.GetResponse>(getRequest)
  }
    
}
