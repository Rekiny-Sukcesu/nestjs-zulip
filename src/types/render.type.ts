import { Zulip } from './response.type';

export namespace Render {
  export type Request = {
    content: string;
  };

  export type response = Zulip.Response & {
    rendered: string;
  };
}
