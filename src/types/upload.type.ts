import { ZulipResponse } from './response.type';

export type UploadFileResponse = ZulipResponse & {
  uri: string;
  url: string;
};
