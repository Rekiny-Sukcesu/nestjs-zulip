import { ZulipConfig } from '../classes';
import { Zulip, ZulipConfigParams } from '../types';
import { ScheduledMessage } from '../types/scheduled-message.type';
import { ZulipService } from './zulip.service';

export class ScheduledMessageService extends ZulipService {
  protected endpoint: string = '/scheduled_messages';

  public async getScheduledMessages(): Promise<ScheduledMessage.GetResponse> {
    return this.get<ScheduledMessage.GetResponse>();
  }

  public async createScheduledMessage(
    createRequest: ScheduledMessage.CreateRequest,
  ): Promise<ScheduledMessage.CreateResponse> {
    return this.post<ScheduledMessage.CreateResponse>(createRequest);
  }

  public async editScheduledMessage(
    scheduledMessageId: number,
    editRequest: ScheduledMessage.EditRequest,
  ): Promise<Zulip.Response> {
    return this.patch<Zulip.Response>(editRequest, `/${scheduledMessageId}`);
  }

  public async deleteScheduledMessage(
    scheduledMessageId: number,
  ): Promise<void> {
    return this.delete<void>(`/${scheduledMessageId}`);
  }
}
