import { Injectable } from "@nestjs/common";
import { Render } from "../types/render.type";
import { ZulipService } from "./zulip.service";

@Injectable()
export class RenderService extends ZulipService {
  protected endpoint = '/messages/render';

  async renderMessage(params: Render.Request): Promise<Render.Response> {
    return this.post<Render.Response>(params);
  }
}
