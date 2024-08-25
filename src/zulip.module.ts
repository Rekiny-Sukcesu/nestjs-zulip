import { DynamicModule, Module } from '@nestjs/common';
import { MessageService } from './services';
import { ZulipConfigParams } from './types';

@Module({
  providers: [MessageService],
  exports: [MessageService],
})
export class ZulipModule {
  public static register(config: ZulipConfigParams): DynamicModule {
    return {
      module: ZulipModule,
      providers: [
        {
          provide: 'ZULIP_CONFIG',
          useValue: config,
        },
        MessageService,
      ],
      exports: [MessageService],
    };
  }
}
