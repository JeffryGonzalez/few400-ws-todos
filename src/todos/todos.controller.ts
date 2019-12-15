import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { AuthGuard } from '@nestjs/passport';
import { TodoRequest } from './models';
import { EventsGateway } from 'src/events';

@Controller('todos')
export class TodosController {

    constructor(private service: TodosService, private events: EventsGateway) { }
    @Get()
    @UseGuards(AuthGuard('jwt'))
    getAll() {
        return this.service.getAll();
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    addOne(@Body() req: TodoRequest) {
        const response = this.service.add(req);
        this.events.server.emit('todo-added', response);
        return response;
    }
}
