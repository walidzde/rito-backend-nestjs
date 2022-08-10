import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats.module';
import { CringeModule } from './resource/cringe/cringe.module';

@Module({
  imports: [CringeModule,ConfigModule.forRoot(),CatsModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
