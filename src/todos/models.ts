export interface TodoResponse {
    id: string;
    description: string;
    completed: boolean;
}

export class TodoRequest {
    description: string;
}

export interface Todo {
    id: string;
    description: string;
    completed: boolean;
}
