// Primatives: number, string, boolean
// More Complex types: arrays, objects
// Function types, parameters

// Primatives

let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More Complex types

let hobbies: string[];

hobbies = ["1", "2"];

// Type Alias (타입 별칭)

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 12,
};

// 객체 배열
let people: {
  name: string;
  age: number;
}[];

// Type Conference (타입 추론)
// 유니온 타입 (조합-여러개의 타입)

let course: string | number = "abc";

course = 12345;

course = "bbc";

// Function & types
// 함수가 반환하는 값에 대해 타입 추론
// 매개변수 뒤에 타입을 붙여 반환 타입을 결정.
// 유연성 & 타입 안정성 제공
function add(a: number, b: number): number {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics
// <T>와 같이 제너릭 기능을 사용하게 되면 두매개변수의 타입이 같다는 것을 알 수 있고,
// any type과는 다르게 타입스크립트의 지원을 받음.
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d"); // ['a', 'b', 'c', 'd']

// => any type으로 설정해놓으면 타입스크립트로부터 어떠한 지원을 받을 수 없음
// 아래와 같이 number type에는 split()를 사용할 수 없는데 경고를 주지 않음
stringArray[0].split("");
