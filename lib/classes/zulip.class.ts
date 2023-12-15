import { type IZulipConfig } from '../interfaces/zulip-config.interface';

export class Zulip {

    config: IZulipConfig;

    constructor (config: IZulipConfig) {
        this.config = config;
    }

}
