import { ZulipConfig } from '../classes';
import { ZulipConfigParams } from '../types';
import { ZulipService } from './zulip.service';

export class UploadService extends ZulipService {
  protected config: ZulipConfig;
  protected endpoint: string = '/user_uploads';

  constructor(config: ZulipConfigParams) {
    super(config);
    this.config = new ZulipConfig(config);
  }

  async uploadFile(filePath: string) {
    return this.post({ filename: filePath });
  }
}
