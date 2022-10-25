import React, { useState } from "react";
import Todo from "../models/todos";
// todo아이템, 추가, 삭제기능 store

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

type Child = {
  children: React.ReactNode;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<Child> = (props) => {
  // dispatch타입은 상태 업데이트 함수가 갖는 타입이 함수를 호출해 state를 변경할 수 있음.
  const [todos, setTodos] = useState<Todo[]>([]);

  // Add Todo Handler
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  // Remove Todo Handler
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  // value는 객체이므로 리렌더링의 주범이 된다.
  // useMemo로 캐싱해두지 않으면 나중에 이 데이터를 쓰는 모든 컴포넌트가 매번 리렌더링 됨.
  // useMemo는 불필요한 렌더링을 방지함. (컴포넌트 성능 최적화)
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
