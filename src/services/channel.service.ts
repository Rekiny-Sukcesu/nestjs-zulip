import { Zulip } from '../types';
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

  public async getAllChannels(
    request: Channel.GetAllChannelsRequest,
  ): Promise<Channel.GetAllChannelsResponse> {
    return this.get<Channel.GetAllChannelsResponse>(request, '/streams');
  }

  public async getChannelById(
    streamId: number,
    request: Channel.GetChannelIdRequest,
  ): Promise<Channel.GetChannelByIdResponse> {
    return this.get<Channel.GetChannelByIdResponse>(
      request,
      `/streams/${streamId}`,
    );
  }

  public async getChannelId(
    request: Channel.GetChannelIdRequest,
  ): Promise<Channel.GetChannelIdResponse> {
    return this.get<Channel.GetChannelIdResponse>(request, '/get_stream_id');
  }

  public async updateChannel(
    streamId: number,
    request: Channel.UpdateChannelRequest,
  ): Promise<Zulip.Response> {
    return this.patch<Zulip.Response>(request, `/streams/${streamId}`);
  }

  public async archiveChannel(streamId: number): Promise<Zulip.Response> {
    return this.delete<Zulip.Response>(`/streams/${streamId}`);
  }
}
