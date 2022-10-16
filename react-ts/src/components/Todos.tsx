import React from "react";

// FC(Functional component)는 @types/react package에 정의된 type
// 제너릭 타입을 사용하기 전에 이미 FC(제너릭타입)를 사용함
// 따라서 새롭게 제너릭 타입을 사용하는게 아니라 내부적으로 사용된 제너릭 타입에 구체적인 값을 넣어야함
// 매개변수를 넣은 제너릭 함수의 값의 타입을 추론하도록 하려는 목적이 아니라
// 함수를 정의하고 타입스크립트에게 이 함수를 어떻게 처리해야 하는지 알려주기 위함임 -> 즉, 목적이 타입 추론 X

// => 리액트 & 타입스크립트로 함수형 컴포넌트를 만드려면!!!
// React.FC 타입을 함수형 컴포넌트의 상수 옆에 사용! 그 옆의  <> 안에 필요한 형태의 props를 정의! (프로퍼티 객체 타입)

const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
