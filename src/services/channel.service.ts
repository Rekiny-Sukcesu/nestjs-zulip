import { ZulipService } from './zulip.service';

export class ChannelService extends ZulipService {
  protected endpoint: string = '';

  public async getSubscribedChannels(): Promise<Zulip.Response> {
    return this.get<Zulip.Response>('/users/me/subscriptions');
  }
}
