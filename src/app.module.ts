import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';
import { EventsGateway } from './events';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService, EventsGateway],
})
export class AppModule { }
