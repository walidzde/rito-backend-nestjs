import { Module } from "@nestjs/common";
import { CatsService } from "./cat.service";
import { CatsController } from "./cats.controller";
import { catsProviders } from "./cats.providers";
import { DatabaseModule } from "./providers/database.modules";

@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  providers: [
    CatsService,
    ...catsProviders,
  ],
})
export class CatsModule {}