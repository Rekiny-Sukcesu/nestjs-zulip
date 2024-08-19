import { Channel } from '../types/channel.type';
import { ZulipService } from './zulip.service';

export class ChannelService extends ZulipService {
  protected endpoint: string = '';

  public async getSubscribedChannels(
    getSubscribedChannelsRequest: Channel.GetSubscribedChannelsRequest,
  ): Promise<Channel.GetSubscribedChannelsResponse> {
    return this.get<Channel.GetSubscribedChannelsResponse>(
      getSubscribedChannelsRequest,
      '/users/me/subscriptions',
    );
  }
}
