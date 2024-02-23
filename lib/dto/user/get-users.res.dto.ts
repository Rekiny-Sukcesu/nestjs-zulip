import { IZulipUser } from '../../interfaces/zulip-user.interface';

export interface GetUsersResDto {
  result: string;
  msg: string;
  members: IZulipUser[];
}
