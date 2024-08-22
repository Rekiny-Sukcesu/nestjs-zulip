import { Channel } from '../types/channel.type';
import { ZulipService } from './zulip.service';

export class ChannelService extends ZulipService {
  protected endpoint: string = '';

  public async getSubscribedChannels(
    request: Channel.GetSubscribedChannelsRequest,
  ): Promise<Channel.GetSubscribedChannelsResponse> {
    return this.get<Channel.GetSubscribedChannelsResponse>(
      request,
      '/users/me/subscriptions',
    );
  }

  public async subscribeToChannel(
    request: Channel.SubscribeToChannelRequest,
  ): Promise<Channel.SubscribeToChannelResponse> {
    return this.post<Channel.SubscribeToChannelResponse>(
      request,
      '/users/me/subscriptions',
    );
  }

  public async unsubscribeFromChannel(
    request: Channel.SubscribeToChannelRequest,
  ): Promise<Channel.SubscribeToChannelResponse> {
    return this.delete<Channel.SubscribeToChannelResponse>(
      '/users/me/subscriptions',
      request,
    );
  }
}
