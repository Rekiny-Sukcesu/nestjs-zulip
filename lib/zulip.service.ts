import { Inject, Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { ApiKeyDto } from './dto/get-apikey.dto';
import { Zulip } from './classes/zulip.class';
import { IZulipConfig } from './interfaces/zulip-config.interface';
import { ZulipConfig } from './classes/zulip-config.class';

@Injectable()
export class ZulipService {
  private zulip: Zulip;

  constructor(@Inject('ZULIP_CONFIG') private config: IZulipConfig) {
    const zulipConfig = new ZulipConfig(
      config.login,
      config.password,
      config.realm,
    );
    this.fetchApiKey(
      config.login,
      config.password,
      zulipConfig.getApiUrl(),
    ).then((v) => zulipConfig.setApiKey(v));
    this.zulip = new Zulip(zulipConfig);
  }

  public get UserClient(){
    return this.zulip.userClient;
  }

  public get MessageClient(){
    return this.zulip.messageClient;
  }

  public getApiKey() {
    return this.zulip.config.getApiKey();
  }

  private async fetchApiKey(
    login: string,
    password: string,
    apiUrl: string,
  ): Promise<string> {
    const form: FormData = new FormData();
    form.append('username', login);
    form.append('password', password);
    const res: AxiosResponse<ApiKeyDto> = await axios.post<ApiKeyDto>(
      apiUrl + '/fetch_api_key',
      form,
    );
    return res.data.api_key;
  }
}
