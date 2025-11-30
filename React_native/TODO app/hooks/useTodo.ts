import { Todo } from "@/types/todo";
import { useState } from "react";

const defaultTodos: Todo[] = [
  {
    id: 1,
    title: "Buy milk",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Buy bread",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Buy eggs",
    isCompleted: false
  }
];

const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>(defaultTodos);

    const onAddTodo = (title: Todo["title"]) => {
    setTodos([...todos, { id: Number(new Date()), title, isCompleted: false }]);
  };

  const onDeleteTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id != id));
  }

  const onCheckTodo = (id: Todo["id"]) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo )));
  }

  const onUpdateTodoTitle = (id: Todo["id"], title: Todo["title"]) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  }

  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return {
    onAddTodo,
    onDeleteTodo,
    onCheckTodo,
    onUpdateTodoTitle,
    todos,
    completedTodos
  }
};

export default useTodo;