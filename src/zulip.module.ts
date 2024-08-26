import { DynamicModule, Module } from '@nestjs/common';
import { DraftService, MessageService, ReactionService, RenderService, ScheduledMessageService, UploadService } from './services';
import { ZulipConfigParams } from './types';
import { ChannelService } from './services/channel.service';

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
        ChannelService,
        DraftService,
        MessageService,
        ReactionService,
        RenderService,
        ScheduledMessageService,
        UploadService,
      ],
      exports: [
        ChannelService,
        DraftService,
        MessageService,
        ReactionService,
        RenderService,
        ScheduledMessageService,
        UploadService,
      ],
    };
  }
}
