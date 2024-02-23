import { ZulipConfig } from '../classes/zulip-config.class';
import axios from 'axios';

export abstract class ZulipClient {
  protected config: ZulipConfig;
  protected abstract endpoint: string;

  constructor(config: ZulipConfig) {
    this.config = config;
  }

  async get<T>(params?: object): Promise<T> {
    const res = await axios.get<T>(this.config.getApiUrl() + this.endpoint, {
      ...this.config.getAuth(),
      params,
    });

    return res.data;
  }

  async post<T>(requestParams: object): Promise<T> {
    const formData = this.generateFormDataFromObject(requestParams);
    console.log(this.config.getApiUrl() + this.endpoint);
    console.log(formData);
    console.log(this.config.getAuth());
    const res = await axios.post<T>(
      this.config.getApiUrl() + this.endpoint,
      formData,
      this.config.getAuth(),
    );
    return res.data;
  }

  private generateFormDataFromObject(obj: Object): FormData {
    const formData = new FormData();
    Object.keys(obj).forEach((key: string) => {
      // @ts-ignore
      formData.append(key, obj[key]);
    });
    return formData;
  }
}
