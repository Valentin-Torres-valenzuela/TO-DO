import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender js');
// todoList.nuevoTodo(tarea);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABC123');

todoList.todos.forEach (todo => crearTodoHtml(todo));
// todoList.todos.forEach (crearTodoHtml);