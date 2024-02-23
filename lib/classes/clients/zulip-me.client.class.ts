import { ZulipClient } from '../../core/ZulipClient';
import { GetProfileResDto } from '../../dto/me/get-profile.res.dto';

export class ZulipMeClient extends ZulipClient {
  protected endpoint: string = '/users/me';

  async getProfile(): Promise<GetProfileResDto> {
    return await this.get<GetProfileResDto>();
  }
}
