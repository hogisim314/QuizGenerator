import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DataModule } from './data/data.module';
import { CategoryModule } from './category/category.module';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [AuthModule, DataModule, CategoryModule, QuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
