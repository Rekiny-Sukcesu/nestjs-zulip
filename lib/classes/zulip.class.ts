import { ZulipConfig } from './zulip-config.class';
import { ZulipUserClient } from './clients/zulip-user.client.class';
import { ZulipMeClient } from './clients/zulip-me.client.class';
import { ZulipSubscriptionsClient } from './clients/zulip-subscriptions.client.class';
import { ZulipAlertwordsClient } from './clients/zulip-alertwords.client';
import { ZulipMessageClient } from './clients/zulip-message.client';

export class Zulip {
  public userClient: ZulipUserClient;
  public meClient: ZulipMeClient;
  public subscriptionsClient: ZulipSubscriptionsClient;
  public alertWordsClient: ZulipAlertwordsClient;
  public messageClient: ZulipMessageClient;

  constructor(public config: ZulipConfig) {
    this.userClient = new ZulipUserClient(config);
    this.meClient = new ZulipMeClient(config);
    this.subscriptionsClient = new ZulipSubscriptionsClient(config);
    this.alertWordsClient = new ZulipAlertwordsClient(config);
    this.messageClient = new ZulipMessageClient(config);
  }
}
