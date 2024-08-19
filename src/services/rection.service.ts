import { Injectable } from '@nestjs/common';
import { ZulipService } from './zulip.service';
import { Reaction } from '../types/reaction.type';
import { Zulip } from '../types';

@Injectable()
export class ReactionService extends ZulipService {
  protected endpoint: string = '/messages';

  public async addReaction(
    messageId: number,
    addRequest: Reaction.AddRequest,
  ): Promise<Zulip.Response> {
    return this.post<Zulip.Response>(addRequest, `/${messageId}/reactions`);
  }

  public async removeReaction(
    messageId: number,
    removeRequest: Reaction.RemoveRequest,
  ): Promise<void> {
    return this.delete<void>(
      `/${messageId}/reactions`,
      removeRequest,
    );
  }
}
