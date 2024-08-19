import { ZulipConfigParams } from '../types';

export namespace Zulip {
  export class ZulipConfig {
    private readonly login: string;
    private readonly password: string;
    private readonly apiUrl: string = '';

    constructor(configParams: ZulipConfigParams) {
      this.login = configParams.login;
      this.password = configParams.password;
      this.apiUrl = this.buildApiUrl(configParams.realm);
    }

    getApiUrl(): string {
      return this.apiUrl;
    }

    getAuth() {
      return {
        auth: {
          username: this.login,
          password: this.password,
        },
      };
    }

    private buildApiUrl(realm: string): string {
      if (realm.endsWith('/api/v1')) {
        return realm;
      }

      if (realm.endsWith('/api/')) {
        return realm + 'v1';
      }

      if (realm.endsWith('/api')) {
        return realm + '/v1';
      }

      if (realm.endsWith('/')) {
        return realm + 'api/v1';
      }

      return realm + '/api/v1';
    }
  }
}
