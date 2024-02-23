import { ZulipConfig } from "../../../lib/classes/zulip-config.class";

describe("Zulip config", () => {
    describe("Api url build", () => {
        test("add /api/v1", async () => {
            const zulipConfig = new ZulipConfig("test1", "test1", "");
            expect(zulipConfig.getApiUrl()).toBe("/api/v1");
        });
        test("add api/v1", () => {
            const zulipConfig = new ZulipConfig("test1", "test1", "/");
            expect(zulipConfig.getApiUrl()).toBe("/api/v1");
        });
        test("add /v1", () => {
            const zulipConfig = new ZulipConfig("test1", "test1", "/api");
            expect(zulipConfig.getApiUrl()).toBe("/api/v1");
        });
        test("add v1", () => {
            const zulipConfig = new ZulipConfig("test1", "test1", "/api/");
            expect(zulipConfig.getApiUrl()).toBe("/api/v1");
        });
        test("shouldn't add anything", () => {
            const zulipConfig = new ZulipConfig("test1", "test1", "/api/v1");
            expect(zulipConfig.getApiUrl()).toBe("/api/v1");
        });
    });
});
