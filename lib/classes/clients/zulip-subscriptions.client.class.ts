import {ZulipClient} from "../../core/ZulipClient";
import {ISubscription} from "../../interfaces/subscriptions/subscription.interface";
import {PostSubscriptionsRes} from "../../dto/subscriptions/post-subscriptions.res";
import {DeleteSubscriptionsRes} from "../../dto/subscriptions/delete-subscriptions.res";

export class ZulipSubscriptionsClient extends ZulipClient{
    protected endpoint: string = '/users/me/subscriptions';

    async add(subscription: ISubscription){
        const formData = new FormData();
        formData.append("subscriptions", JSON.stringify([subscription]));
        return await this.post<PostSubscriptionsRes>(formData);
    }

    async remove(streamName: string){
        const formData = new FormData();
        formData.append("subscriptions", JSON.stringify([streamName]));
        return await this.post<DeleteSubscriptionsRes>(formData);
    }
}