import { Controller, Get, Inject, UseGuard } from "danet/mod.ts";
import { ApiBearerAuth, ReturnedType, Tag } from "danet_swagger/decorators.ts";
import { UserConnected } from "./guard.ts";
import type { ActualUserService } from "./actual-user.service.ts";
import { ACTUAL_USER_SERVICE } from "./constant.ts";
import { User } from "../user/class.ts";

@Tag("auth")
@Controller("auth")
export class AuthController {
  constructor(
    @Inject(ACTUAL_USER_SERVICE) private actualUserService: ActualUserService,
  ) {
  }

  @UseGuard(UserConnected)
  @ApiBearerAuth()
  @Get("me")
  @ReturnedType(User)
  getMyInfo() {
    return this.actualUserService.get();
  }
}
