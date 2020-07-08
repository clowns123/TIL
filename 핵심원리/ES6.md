# ECMAScript

넷스케이프가 자바스크립트를 만들어 성공하자 마이크로소프트가 자바스크립트와 **적당히** 호환되는 J스크립트라는걸 만들어서 넷스케이프가 자바스크립트 표준화를 위해 Ecma인터내셔널에 제출하면서 만들어졌다.

# ES6

ES6에서 추가된 중요한 기능을 살펴보자

## 1. 기본 매개 변수

ES6이전에는 기본인수를 전달하는 방법으로는 아래와 같은 방법을 써야 했다.

```js
function sum(x, y) {
  x = x || 0;
  y = y || 0;

  return x + y;
}
```

하지만 ES6부터는 좀 더 간편한 방법을 사용할 수 있다.

```js
function sum(x = 0, y = 0) {
  return x + y;
}
```

## 2. 템플릿 리터럴

템플릿 리터럴은 멀티라인 문자열(띄어쓰기 가능), 표현식 삽입(${}) 등 편리한 문자열 처리 기능을 제공한다. 템플릿 리터럴은 런타임에 일반 문자열로 변환되어 처리된다.

템플릿 리터럴은 일반 문자열과 비슷해 보이지만, 작은따옴표(‘’) 또는 큰따옴표(“”) 같은 일반적인 따옴표 대신 백틱(backtick) (`)을 사용해 표현한다.

```js
let a = 1
let template = `<ul>
  <li>${a}</li>
</ul>`;
```

## 3. 비구조화 할당

ES5에서 배열을 비구조화하기 위해서는 하나하나 나눠야 했다.

```js
// ES5
var arr = [1, 2, 3];

var one   = arr[0];
var two   = arr[1];
var three = arr[2];

console.log(one, two, three); // 1 2 3
```

하지만 ES6부터는 배열과 같은 이터러블 또는 객체를 비구조화 할당을 할 수 있다.

```js
const arr = [1, 2, 3];

// ES6 배열 디스트럭처링 할당
// 변수 one, two, three를 선언하고 배열 arr을 디스트럭처링하여 할당한다.
// 이때 할당 기준은 배열의 인덱스이다.
const [one, two, three] = arr;
```



객체의 경우도 가능하다.

```js
// ES5
var user = { firstName: 'Ungmo', lastName: 'Lee' };

var firstName = user.firstName;
var lastName  = user.lastName;

const user = { firstName: 'Ungmo', lastName: 'Lee' };

// ES6 객체 디스트럭처링 할당
// 변수 lastName, firstName을 선언하고 객체 user를 디스트럭처링하여 할당한다.
// 이때 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
const { lastName, firstName } = user;
```



## 4. 향상된 객체 리터럴

기존 자바스크립트의 객체 정의 방식은 다음과 같았다.

```js
var josh = {
  // 속성: 값
  language: 'javascript',
  coding: function() {
    console.log('Hello World');
  }
};
```

### 4.1. 프로퍼티 초기화 단축

```js
var language = 'javascript';

var josh = {
  // language: language,
  language
};

console.log(josh); // {language: "javascript"}
```

### 4.2 간결한 메서드

```js
const josh = {
  coding() {
    console.log('Hello World');
  }
};
josh.coding(); // Hello World
```

## 5. 함수의 구분

ES5이전에는 함수를 구분하지 않고 사용했지만 ES6부터는 함수를 구분하면서 사용한다.

| ES6 함수의 구분    | constructor | prototype | super | arguments |
| :----------------- | :---------: | :-------: | :---: | :-------: |
| 일반 함수(Normal)  |      ○      |     ○     |   ✗   |     ○     |
| 메서드(Method)     |      ✗      |     ✗     |   ○   |     ○     |
| 화살표 함수(Arrow) |      ✗      |     ✗     |   ✗   |     ✗     |

이중 화살표 함수와 메서드는 ES6에서 추가된거고 그 전까지의 함수는 모두 일반함수라 한다.



## 6. Promise

이전까지는 비동기 처리를 할때는 콜백기법을 사용하여 처리했지만 이 방법은 다음과 문제가 있었다.

- 가독성이 낮다. 
- 비동기 처리중 발생한 에러의 예외처리가 힘들다
- 여러개의 비동기 처리를 한번에 처리하는 것도 한계가 있다. 

이를 보완하고자 Promise를 도입하였다. Promise는 비동기 처리 시점을 명확하게 표현할 수 있다.

## 7. let과 const

var의 문제점을 let과 const를 도입하여서 해결하였다.



## 8. 모듈

ES6 이전까지는 비공식 모듈인 CommonJS, AMD, RequireJS 등을 사용하였지만 ES6에서 공식적으로 모듈을 제공하였다.

export와 import를 사용하여 모듈을 구현한다.

