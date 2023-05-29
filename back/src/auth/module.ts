import { Module } from "danet/mod.ts";
import { TokenInjector } from "danet/mod.ts";
import { HardCodedAuthService } from "./hardcoded-auth.service.ts";
import { OAuth2Controller } from "./controller.ts";

export const ACTUAL_USER_SERVICE = "ACTUAL_USER_SERVICE";

@Module({
  controllers: [OAuth2Controller],
  injectables: [
    new TokenInjector(HardCodedAuthService, ACTUAL_USER_SERVICE),
  ],
})
export class AuthModule {
}
