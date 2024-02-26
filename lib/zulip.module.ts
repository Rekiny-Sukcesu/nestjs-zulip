import { DynamicModule, Module } from '@nestjs/common';
import { ZulipService } from './zulip.service';
import { IZulipConfig } from './interfaces/zulip-config.interface';

@Module({
  providers: [ZulipService],
  exports: [ZulipService],
})
export class ZulipModule {
  public static register(config: IZulipConfig): DynamicModule {
    return {
      module: ZulipModule,
      providers: [
        {
          provide: 'ZULIP_CONFIG',
          useValue: config,
        },
        ZulipService,
      ],
      exports: [ZulipService],
    };
  }
}
