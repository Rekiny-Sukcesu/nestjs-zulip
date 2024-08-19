import { Injectable } from '@nestjs/common';
import { ZulipConfig } from '../classes';
import { ZulipConfigParams } from '../types';
import { UploadFileResponse } from '../types/upload.type';
import { ZulipService } from './zulip.service';

@Injectable()
export class UploadService extends ZulipService {
  protected endpoint: string = '/user_uploads';

  //TODO: Test this
  async uploadFile(filePath: string): Promise<UploadFileResponse> {
    return this.post<UploadFileResponse>({ filename: filePath });
  }
}
