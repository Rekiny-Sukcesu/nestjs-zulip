import { Message } from './message.type';
import { Reaction } from './reaction.type';}

export type ResponseResult = 'success' | 'error';

export type ResponseCode =
  | 'BAD_REQUEST'
  | 'INVALID_API_KEY'
  | 'REQUEST_VARIABLE_MISSING'
  | 'USER_DEACTIVATED'
  | 'REALM_DEACTIVATED'
  | 'RATE_LIMIT_HIT'
  | Message.ResponseCode
  | Reaction.ResponseCode;

export type ZulipResponse = {
  msg: string;
  result: ResponseResult;
  code?: ResponseCode;
  ignored_parameters_unsupported?: string[];
};
