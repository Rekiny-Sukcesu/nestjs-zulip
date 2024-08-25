import { Injectable } from '@nestjs/common';
import { ZulipService } from './zulip.service';
import { Draft, Zulip } from '../types';

@Injectable()
export class DraftService extends ZulipService {
  protected endpoint: string = '/drafts';

  public async getDrafts(): Promise<Draft.GetResponse> {
    return this.get<Draft.GetResponse>();
  }

  public async createDraft(
    createRequest: Draft.CreateRequest,
  ): Promise<Draft.CreateResponse> {
    return this.post<Draft.CreateResponse>(createRequest);
  }

  public async editDraft(
    draftId: number,
    editRequest: Draft.EditRequest,
  ): Promise<Zulip.Response> {
    return this.patch<Zulip.Response>(editRequest, `/${draftId}`);
  }

  public async deleteDraft(draftId: number): Promise<void> {
    return this.delete<void>(`/${draftId}`);
  }
}
