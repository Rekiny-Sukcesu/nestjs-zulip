import { Zulip } from './response.type';

export namespace Draft {
  export type Type = 'stream' | 'private';

  export type Draft = {
    id: number;
    type: Type;
    to: number[];
    topic: string;
    content: string;
    timestamp?: number;
  };

  export type GetResponse = Zulip.Response & {
    count: number;
    drafts: Draft[];
  };

  export type CreateRequest = {
    drafts: Draft[];
  };

  export type CreateResponse = Zulip.Response & {
    ids: number[];
  };

  export type EditRequest = {
    draft: Draft;
  };
}
