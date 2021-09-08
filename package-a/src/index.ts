import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { GraphQLModule } from "@nestjs/graphql";
import { TestModule } from "./test.module";

@Module({
  imports: [TestModule, GraphQLModule.forRoot({ autoSchemaFile: true })],
})
export class WebModule {}

export async function bootstrapWebModule(): Promise<void> {
  const app = await NestFactory.create(WebModule, {
    cors: true,
  });

  return app.listen(3000, "127.0.0.1", () => {
    console.log("listening on https://localhost:3000");
  });
}
