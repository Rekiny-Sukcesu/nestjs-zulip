import { GetUsersResDto } from '../../dto/user/get-users.res.dto';
import { ZulipClient } from '../../core/ZulipClient';
import { NewUserData } from '../../interfaces/user/newuser-data.interface';
import { NewUserResDto } from '../../dto/user/post-newuser.res.dto';

export class ZulipUserClient extends ZulipClient {
  protected endpoint: string = '/users';

  async getUsers(): Promise<GetUsersResDto> {
    return await this.get<GetUsersResDto>();
  }

  async createUser(newUser: NewUserData) {
    const formData = new FormData();
    formData.append('email', newUser.email);
    formData.append('password', newUser.password);
    formData.append('full_name', newUser.full_name);
    return await this.post<NewUserResDto>(formData);
  }
}
