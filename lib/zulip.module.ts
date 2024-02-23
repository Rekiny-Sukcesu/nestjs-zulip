import { DynamicModule, Module } from "@nestjs/common";
import { ZulipService } from "./zulip.service";
import { IZulipConfig } from "./interfaces/zulip-config.interface";
import { ZulipConfig } from "./classes/zulip-config.class";

@Module({
    providers: [ZulipService],
    exports: [ZulipModule]
})
export class ZulipModule {

    static register (config: IZulipConfig): DynamicModule {
        return {
            module: ZulipModule,
            providers: [
                {
                    provide: "ZULIP_CONFIG",
                    useValue: config
                },
                ZulipService
            ],
            exports: [ZulipService]
        }
    }

}
