import Dexie from 'dexie';

export const db = new Dexie('todosDB');
db.version(1).stores({
  todos: '++id, text, completed, createdAt'
});