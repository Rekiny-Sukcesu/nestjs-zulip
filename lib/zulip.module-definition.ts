import { ZulipModuleConfig } from './interfaces/zulip-module-config';
import { ConfigurableModuleBuilder } from '@nestjs/common';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<ZulipModuleConfig>().build();
