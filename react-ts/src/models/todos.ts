// 인스턴스를 사용하게 되면 어떤 형태의 데이터, 컴포넌트가 필요한지 명확해짐.
class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
