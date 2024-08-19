export namespace Reaction {
  export type ResponseCode =
    | 'REACTION_ALREADY_EXISTS'
    | 'REACTION_DOES_NOT_EXIST';

  export type Type = 'unicode_emoji' | 'realm_emoji' | 'zulip_extra_emoji';

  export type AddRequest = {
    emoji_name: string;
    emoji_code?: string;
    reaction_type?: Type;
  };

  export type RemoveRequest = {
    emoji_name?: string;
    emoji_code?: string;
    reaction_type?: Type;
  };
}
