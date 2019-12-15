import { Injectable } from '@nestjs/common';
import { Todo, TodoRequest } from './models';
import * as cuid from 'cuid';
@Injectable()
export class TodosService {

    data: Todo[] = [
        { id: '1', description: 'Clean Garage', completed: false },
    ];

    getAll() {
        return this.data;
    }

    add(todo: TodoRequest) {
        const newTodo: Todo = { id: cuid(), description: todo.description, completed: false };
        this.data.push(newTodo);
        return newTodo;
    }
}
