import classes from "./TodoItem.module.css";

// FC<{}> 안에 있는 객체는 props를 합침!, 객체의 타입을 정해줘야함
// FC타입은 key프로퍼티를 컴포넌트에 추가해 사용할 수 있게 해줌
const TodoItem: React.FC<{ text: string }> = (props) => {
  return (
    // children프로퍼티만 가지고 있고 text라는 프로퍼티를 가지고 있지는 않음
    <li className={classes.item}>{props.text}</li>
  );
};

export default TodoItem;
