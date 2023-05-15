import { ItemController } from "./controller.ts";
import { ItemService } from "./service.ts";
import { Module, TokenInjector } from "danet/mod.ts";
import { ITEM_REPOSITORY } from "./constant.ts";
import { InMemoryItemRepository } from "./in-memory-repository.ts";
import { CommentService } from "./comment/service.ts";
import { InMemoryCommentRepository } from "./comment/in-memory-repository.ts";
import { COMMENT_REPOSITORY } from "./comment/constant.ts";

@Module({
  controllers: [ItemController],
  injectables: [
    new TokenInjector(InMemoryItemRepository, ITEM_REPOSITORY),
    new TokenInjector(InMemoryCommentRepository, COMMENT_REPOSITORY),
    ItemService,
    CommentService,
  ], // change InMemoryTodoRepository by any custom repository using other database engine if needed
})
export class ItemModule {}