import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

// props로 함수를 받고자 할때 아래와같이 매개변수의 타입도 설정해줌
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  // useRef를 사용하는 이유? useState는 리렌더링이 계속 발생하므로 비효율적, useRef는 dom 참고 가능, 현재 저장하고 싶은 값을 리렌더링 없이 저장할 수 있음
  // 모든 dom요소들은 미리 정의된 타입을 가짐
  // 타입스크립트에서 해당 요소를 참소할 때 사용가능.
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  //React.FormEvent는 리액트 패키지가 제공하는 타입으로 폼 제출 이벤트를 수신하면 자동적으로 받게 됨, MouseEvent타입도 있음
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // current뒤에 물음표는 타입스크립트에게 일단 값에 접근해보고 접근이 가능하면 그때 입력된 값을 가져와 enteredText 저장하라고 알림
    // 값이 null이 아니고 레퍼런스와 요소가 연결되어있다는 것을 100% 확신한다면 물음표 대신에 느낌표 작성
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
