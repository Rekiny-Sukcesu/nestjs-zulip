import { Zulip } from './response.type';

export type UploadFileResponse = Zulip.Response & {
  uri: string;
  url: string;
};
