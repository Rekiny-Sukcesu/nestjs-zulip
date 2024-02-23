import axios, { type AxiosResponse } from "axios";
import { type ApiKeyDto } from "../dto/api-key.dto";

export class ZulipConfig {

    private readonly login: string;
    private readonly password: string;
    private readonly realm: string;
    private apiKey: string = "";
    private readonly apiUrl: string = "";

    constructor (login: string, password: string, realm: string) {
        this.login = login;
        this.password = password;
        this.realm = realm;
        this.apiUrl = this.buildApiUrl(realm);
    }

    getLogin(): string{
        return this.login
    }

    getPassword(): string{
        return this.password
    }

    getRealm(): string{
        return this.realm;
    }

    getApiUrl (): string {
        return this.apiUrl;
    }

    setApiKey(apiKey: string): void{
        this.apiKey = apiKey
    }

    getApiKey (): string {
        return this.apiKey;
    }

    private buildApiUrl (realm: string): string {
        if (realm.endsWith("/api/v1")) {
            return realm;
        }

        if (realm.endsWith("/api/")) {
            return realm + "v1";
        }

        if (realm.endsWith("/api")) {
            return realm + "/v1";
        }

        if (realm.endsWith("/")) {
            return realm + "api/v1";
        }

        return realm + "/api/v1";
    }

}
