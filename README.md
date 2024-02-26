# @rekiny-sukcesu/nestjs-zulip

## Description:
Zulip integration module for nestjs. 

## Install: 
```bash
npm i @rekiny-sukcesu/nestjs-zulip
```

## Usage:

### Import: 
```ts
import { Module } from '@nestjs/common';
import { ZulipModule } from '@rekiny-sukcesu/nestjs-zulip';
@Module({
  imports: [
    ZulipModule.register({
      login: 'you@login.com',
      password: 'youpassword',
      realm: 'https://example-zulip-server.com',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

### Send message: 

```ts
return await this.zulipService.messageClient.sendMessage(
      'stream',
      'TestStream',
      'TestTopic',
      'Message content.',
    );
```
