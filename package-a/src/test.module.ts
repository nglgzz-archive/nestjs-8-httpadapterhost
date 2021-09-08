import { Module } from "@nestjs/common";
import { Resolver, Query } from "@nestjs/graphql";

@Resolver(() => String)
export class TestResolver {
  @Query(() => String)
  async test(): Promise<string> {
    return "some test value";
  }
}

@Module({
  exports: [],
  imports: [],
  providers: [TestResolver],
})
export class TestModule {}
