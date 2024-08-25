import { ConfigurableModuleBuilder } from '@nestjs/common';
import { ZulipConfigParams } from './types';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<ZulipConfigParams>().build();
