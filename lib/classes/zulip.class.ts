import { ZulipConfig } from "./zulip-config.class";

export class Zulip {

    config: ZulipConfig;

    constructor (config: ZulipConfig) {
        this.config = config;
    }

    getConfig(): ZulipConfig{
        return this.config
    }

    public callEnpoint (): void {

    }

}
