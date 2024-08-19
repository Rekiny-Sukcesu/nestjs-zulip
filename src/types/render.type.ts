import { Zulip } from './response.type';

export namespace Render {
  export type Request = {
    content: string;
  };

  export type Response = Zulip.Response & {
    rendered: string;
  };
}
