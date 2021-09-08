import { NestFactory } from "@nestjs/core";
import { WebModule } from "package-a";

export async function bootstrapWebModule(): Promise<void> {
  const app = await NestFactory.create(WebModule, {
    cors: true,
  });

  return app.listen(3000, "127.0.0.1", () => {
    console.log("listening on https://localhost:3000");
  });
}

bootstrapWebModule();
