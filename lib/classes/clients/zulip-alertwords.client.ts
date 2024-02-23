import { ZulipClient } from '../../core/ZulipClient';
import { GetAlertwordsResDto } from '../../dto/alert-words/get-alertwords.res.dto';

export class ZulipAlertwordsClient extends ZulipClient {
  protected endpoint = '/users/me/alert_words';

  async getAlertWords() {
    return await this.get<GetAlertwordsResDto>();
  }
}
