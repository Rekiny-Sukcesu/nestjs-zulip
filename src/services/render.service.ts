@Injectable()
export class RenderService {
  protected endpoint = '/messages/render';

  async renderMessage(params: RenderMessageParams) {
    return await this.post<RenderMessageResDto>(params);
  }
}
