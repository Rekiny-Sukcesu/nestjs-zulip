import { Injectable } from '@nestjs/common';
import { ZulipService } from './zulip.service';
import {
  MessageTo,
  MessageType,
  SendMessageRequest,
  SendMessageResponse,
} from '../types';

@Injectable()
export class MessageService extends ZulipService {
  endpoint = '/messages';

  public async sendMessage(
    messageRequest: SendMessageRequest,
  ): Promise<SendMessageResponse> {
    return this.post<SendMessageResponse>(messageRequest);
  }
}
