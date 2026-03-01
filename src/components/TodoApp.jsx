import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../db/db';  // Updated import to match your db.js

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Load todos from IndexedDB when component mounts
  useEffect(() => {
    const loadTodos = async () => {
      try {
        setIsLoading(true);
        // Get all todos, sorted by creation date (newest first)
        const savedTodos = await db.todos
          .orderBy('createdAt')
          .reverse()
          .toArray();
        setTodos(savedTodos);
      } catch (error) {
        console.error('Failed to load todos:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadTodos();
  }, []);

  // Add new todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      const newTodo = {
        text: input,
        completed: false,
        createdAt: new Date().toISOString()
      };
      
      // Add to database (ID is auto-generated)
      const id = await db.todos.add(newTodo);
      
      // Update local state with the new todo (including the generated ID)
      setTodos([{ id, ...newTodo }, ...todos]);
      setInput('');
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
  };

  // Toggle todo completion
  const toggleTodo = async (id) => {
    try {
      // Find the todo to toggle
      const todo = todos.find(t => t.id === id);
      if (!todo) return;

      // Update in database
      await db.todos.update(id, {
        completed: !todo.completed
      });

      // Update local state
      setTodos(todos.map(todo =>
        todo.id === id 
          ? { ...todo, completed: !todo.completed }
          : todo
      ));
    } catch (error) {
      console.error('Failed to toggle todo:', error);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      // Delete from database
      await db.todos.delete(id);
      
      // Update local state
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  // Clear all completed todos
  const clearCompleted = async () => {
    try {
      const completedTodos = todos.filter(t => t.completed);
      
      // Delete each completed todo from database
      for (const todo of completedTodos) {
        await db.todos.delete(todo.id);
      }
      
      // Update local state
      setTodos(todos.filter(todo => !todo.completed));
    } catch (error) {
      console.error('Failed to clear completed:', error);
    }
  };

  // Filter todos
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter(todo => !todo.completed).length;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="text-white text-xl">Loading your todos...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            Todo <span className="text-blue-400">App</span>
          </h1>
          <p className="text-gray-400">
            Your tasks are saved in the browser database
          </p>
        </div>

        {/* Add Todo Form */}
        <form onSubmit={addTodo} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Add
            </button>
          </div>
        </form>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            All ({todos.length})
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'active' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Active ({activeCount})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'completed' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Completed ({todos.length - activeCount})
          </button>
        </div>

        {/* Todo List */}
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          {filteredTodos.length > 0 ? (
            <ul className="divide-y divide-gray-700">
              {filteredTodos.map(todo => (
                <li key={todo.id} className="flex items-center gap-3 p-4 hover:bg-gray-750 transition-colors group">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      todo.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-500 hover:border-blue-500'
                    }`}
                  >
                    {todo.completed && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  
                  {/* Todo Text */}
                  <span className={`flex-1 text-lg ${
                    todo.completed 
                      ? 'text-gray-500 line-through' 
                      : 'text-white'
                  }`}>
                    {todo.text}
                  </span>
                  
                  {/* Delete Button */}
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-12 text-center text-gray-500">
              <p className="text-lg">No todos yet!</p>
              <p className="text-sm mt-2">Add one above to get started</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-between items-center text-sm text-gray-500">
          <span>{activeCount} items left</span>
          {todos.length > activeCount && (
            <button
              onClick={clearCompleted}
              className="hover:text-blue-400 transition-colors"
            >
              Clear completed
            </button>
          )}
        </div>

        {/* Back to Portfolio Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/" 
            className="text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-2"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;