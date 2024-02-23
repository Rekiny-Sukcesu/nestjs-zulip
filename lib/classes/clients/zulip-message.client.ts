import { ZulipClient } from '../../core/ZulipClient';
import { GetMessagesDto } from '../../dto/messages/get-messages.dto';
import { MessageType } from '../../types/MessageType';
import { PostMessagesDto } from '../../dto/messages/post-messages.dto';

export class ZulipMessageClient extends ZulipClient {
  protected endpoint = '/messages';

  async getMessages(numBefore: number, numAfter: number, anchor: number) {
    return await this.get<GetMessagesDto>({
      num_before: numBefore,
      num_after: numAfter,
      anchor,
    });
  }

  async sendMessage(
    type: MessageType,
    to: string,
    topic: string,
    content: string,
  ) {
    return await this.post<PostMessagesDto>({ type, to, topic, content });
  }
}
