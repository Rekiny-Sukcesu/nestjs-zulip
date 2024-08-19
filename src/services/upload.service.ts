import { ZulipConfig } from '../classes';
import { ZulipConfigParams } from '../types';
import { UploadFileResponse } from '../types/upload.type';
import { ZulipService } from './zulip.service';

export class UploadService extends ZulipService {
  protected config: ZulipConfig;
  protected endpoint: string = '/user_uploads';

  constructor(config: ZulipConfigParams) {
    super(config);
    this.config = new ZulipConfig(config);
  }


  //TODO: Test this
  async uploadFile(filePath: string): Promise<UploadFileResponse> {
    return this.post<UploadFileResponse>({ filename: filePath });
  }
}
