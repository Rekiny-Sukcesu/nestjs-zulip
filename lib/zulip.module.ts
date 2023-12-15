import { Module } from '@nestjs/common';
import { ZulipService } from './zulip.service';
import { type IZulipConfig } from './interfaces/zulip-config.interface';

@Module({
    providers: [ZulipService],
    exports: [ZulipModule]
})
export class ZulipModule {

    public static forRoot (config: IZulipConfig): ZulipModule {
        return new ZulipModule();
    }

}
