import { Injectable } from '@nestjs/common';
import { ZulipService } from './zulip.service';
import { Reaction } from '../types/reaction.type';
import { ZulipResponse } from '../types';

@Injectable()
export class ReactionService extends ZulipService {
  protected endpoint: string = '/messages';

  public async addReaction(
    messageId: number,
    addRequest: Reaction.AddRequest,
  ): Promise<ZulipResponse> {
    return this.post<ZulipResponse>(addRequest, `/${messageId}/reactions`);
  }

  public async removeReaction(
    messageId: number,
    removeRequest: Reaction.RemoveRequest,
  ): Promise<void> {
    return this.delete<void>(
      `/${messageId}/reactions/${emojiName}`,
      removeRequest,
    );
  }
}
