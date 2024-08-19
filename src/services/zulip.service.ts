import { ZulipConfigParams } from '../types';
import { ZulipConfig } from '../classes';
import axios from 'axios';

export abstract class ZulipService {
  protected config: ZulipConfig;
  protected abstract endpoint: string;

  constructor(config: ZulipConfigParams) {
    this.config = new ZulipConfig(config);
  }

  async get<T>(params?: object): Promise<T> {
    const res = await axios.get<T>(this.config.getApiUrl() + this.endpoint, {
      ...this.config.getAuth(),
      params,
    });

    return res.data;
  }

  async post<T>(requestParams: object, endpoint = ''): Promise<T> {
    const formData = this.generateFormDataFromObject(requestParams);
    const res = await axios.post<T>(
      this.config.getApiUrl() + this.endpoint + endpoint,
      formData,
      this.config.getAuth(),
    );

    return res.data;
  }

  async patch<T>(requestParams: object, endpoint = ''): Promise<T> {
    const formData = this.generateFormDataFromObject(requestParams)
    const res = await axios.patch<T>(
      this.config.getApiUrl() + this.endpoint + endpoint,
      formData,
      this.config.getAuth()
    )

    return res.data;
  }

  async delete<T>(endpoint = ''): Promise<T> {
    const res = await axios.delete<T>(
      this.config.getApiUrl() + this.endpoint + endpoint,
      this.config.getAuth()
    )

    return res.data;
  }

  private generateFormDataFromObject(obj: Record<string, any>): FormData {
    const formData = new FormData();
    Object.keys(obj).forEach((key: string) => {
      formData.append(key, obj[key]);
    });

    return formData;
  }
}
