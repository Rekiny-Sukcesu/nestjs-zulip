export type ResponseResult = 'success' | 'error';

export type MessageResponseCode =
  | 'STREAM_DOES_NOT_EXIST'
  | 'STREAM_WILDCARD_MENTION_NOT_ALLOWED'
  | 'MOVE_MESSAGES_TIME_LIMIT_EXCEEDED'
  | 'STREAM_WILDCARD_MENTION_NOT_ALLOWED'
  | 'TOPIC_WILDCARD_MENTION_NOT_ALLOWED';

export type ResponseCode =
  | 'BAD_REQUEST'
  | 'INVALID_API_KEY'
  | 'REQUEST_VARIABLE_MISSING'
  | 'USER_DEACTIVATED'
  | 'REALM_DEACTIVATED'
  | 'RATE_LIMIT_HIT'
  | MessageResponseCode;

export type ZulipResponse = {
  msg: string;
  result: ResponseResult;
  code?: ResponseCode;
  ignored_parameters_unsupported?: string[];
};
