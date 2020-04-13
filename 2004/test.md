# 변수와 값

## 변수와 데이터 타입

자바스크립트에서는 변수 타입이 없으므로 var 하나로 사용했다.

하지만 ES6버젼에서 새로운 변수 선언문이 등장했다.

[let와 const](#let&const)은 다음에 소개하겠습니다.

그 외에 데이터 타입은 다른 언어와 비슷하며 값이 없음을 표현하는 값에는 null과 undefined가 있다.

* undefined는 정의되지 않은 상태를 뜻하며 다음 값이 undefined가 된다.
  * 값을 아직 할당하지 않는 변수의 값
  * 없는 객체의 프로퍼티를 읽으려고 시도했을 때의 값
  * 없는 배열의 요소를 읽으려고 시도했을 때의 값
  * 아무것도 반환하지 않는 함수가 반환하는 값
  * 함수를 호출했을 때 전달받지 못한 인수의 값

그에 반해 null의 경우는 아무것도 없음을 표현한 리터럴이다.

### ES6에서 추가된 데이터 타입

#### 심벌

실벌은  자기 자신을 제외한 그 어떤 값과도 다른 유일무이한 값이다.

##### 심벌의 생성

심벌은 Symbol()을 사용해서 생성합니다.

또한 심벌은 호출할 때마다 새로운 값을 만든다.

```javascript
var sym1 = Symbol();
var sym2 = Symbol();
console.log(sym1 === sym2);	//false

//추가로 Symbol("하트")처럼 인수를 전달하면 실벌의 설명을 덧붙일 수 있다.
```

##### 심벌과 문자열 연결하기

Symbol.for()를 활용하면 문자열과 연결된 심벌을 생성할 수 있다. 그렇게 되면 전역 레스스트리에 심벌이 만들어지고 그 심벌을 지정한 문자열로 불러올 수 있따.

```javascript
var sym1 = Symbol.for("club");
var sym2 = Symbol.for("club");
console.log(sym1 === sym2); //true
```

이 기능을 이용하면 코드의 어느 부분에서도 같은 심벌을 공유할 수 있다.

심벌과 연결된 문자열은 Symbol.keyFor()로 구할 수 있다.

```javascript
var sym1 = Symbol.for('club');
var sym2 = Symbol('club');
console.log(Symbol.keyFor(sym1)); // club
console.log(Symbol.keyFor(sym2)); // undefined
```



### 템플릿 리터럴

템플릿 리터럴은 ECMAScript 6 부터 추가된 문자열 표현 구문이다. 

템플릿이란 일부만 변경해서 반복하거나 재사용할 수 있는 틀을 말한다.

#### 기본적인 사용법

템플릿 리터럴은 역따옴표(`)로 묶은 문자열이다.

```javascript
var text = `띄어쓰기도 이스케이프가 필요없이
그냥 쓰면 된다.`;
var test1 = "문자열 리터럴이 아니면\n으로 띄어쓰기를 표현해야한다."
```

### 보간 표현식

템플릿 리터럴 안에는 ${}을 넣어 사용할 수 있다.

자바스크립트 엔진은 ${}안에 있는 값을 표현식으로 간주하여 평가한다.

이를 활용하여 문자열안에 변수나 표현식의 결과값을 삽입할 수 있따.

```javascript
var a = 2, b = 3;
console.log(`${a} + ${b} = ${a + b}`);	// 2 + 3 = 5
```





# 객체와 배열, 함수의 기초

## 객체

객체는 키-값을 가진 데이터의 모음이다.

객체에 포함된 데이터 하나(키-값)을 객체의 프로퍼티라 한다.

자바스크립트로 객체를 생성하는 방법은 두 가지이다.

객체 리터럴을 사용하는 방법과 생성자 함수를 사용하는 방법이 있지만 여기서는 객체 리터럴을 가지고 객체를 만드는 법을 배운다.

### 객체 리터럴로 객체 생성 및 객체 읽기

```javascript
var card = [suit:'하트', "rank":"A"]//card라는 변수에 객체 리터럴을 담았다.
card.suit //하트
card["rand"] //A
card.color // undefined
var obj = []
console.log(obj) // Object()
```



### 프로퍼티 추가와 삭제

```javascript
card.value =14;	//없는 프로퍼티 이름에 값을 대입하면 추가
delete.card.rank; //delete연산자를 사용하면 프로퍼티 삭제
```



### 프로퍼티 확인

```javascript
var card = [suit:"하트", rand:"A"]
console.log("suit"in card)	//true
console.log("color"in card) //false
//in연상자를 사용하여 프로퍼티 여부를 확인할 수 있다.
```



> 메서드
>
> 프로퍼티에 저장된 값의 타입이 함수면 메서드라고 부른다.



### 객체는 참조 타입

생성된 객체는 메모리의 영역을 차지하는 한 덩어리가 된다.

객체 타입의 값을 변수에 대입하면 그 변수에는 객체의 참조(메모리의 위치정보)가 저장된다.

``` javascript
var a = card;
console.log(a.suit)//하트
```



## 함수

### 함수 선언

자바스크립트에서 함수는 function 키워드를 사용한다.

```javascript
function square(x) {return x * x}
```

### 함수 호출

함수를 호출할려면 함수명과 인수(x)의 개수에 맞게 맞게 값을 써주면 된다.

```javascript
square(3) // 9
```



### 인수

함수에서 인수는 여러 개가 들어갈 수 있다. 쉼표(,)로 인수를 구분한다.

또한 함수에 인수와 return이 없어도 된다. 단 return이 없을 경우 undefined가 된다.



### 함수의 실행 흐름

1. 호출한 코드에 있는 인수가 함수 정의문의 인자에 대입한다.
2. 함수 정의문의 중괄화 안에 작성된 프로그램이 순차적으로 실행된다.
3. return문이 실행되면 호출한 코드로 돌아가고 해당 값을 반환한다.
4. return문을 만나지 않고 마지막 코드를 실행하면 undefined를 반환한다.



### 함수의 선언문의 끌어올림

자바스크립트 엔진은 변수 선언문과 마찬가지로 함수 선언문을 프로그램의 첫머리로 끌어올린다.

즉 함수 선언문을 프로그램 어디서든 작성이 가능하고 어디서든 가지고 올 수 있다.

```javascript
console.log(square(5));	//아래에 있는 함수를 위에서 불러다가 사용이 가능하다.
functuion.square(x){return x * x} 
```



### 값으로서의 함수

자바스크립트에서는 함수는 객체이다.

즉 함수를 다른 변수에다 저장이 가능하고 함수를 또 다른 함수의 인수로 전달할 수 있다.



### 참조에 의한 호출과 값에 의한 호출

함수는 원시값을 인수로 넘겼을 때와 객체를 인수로 넘길 때 다르게 동작한다.

원시값을 인수로 넘길 때는 값을 복사하여 넘기기 때문에 원본값을 조작이 불가능하지만 객체의 경우에는 객체의 주소값을 넘기기 때문에 함수 안에서 객체를 직접적으로 조작이 가능하다.



### 함수의 유효범위

#### 전역 유효 범위 지역 유효 범위

변수에 접근할 수 있는 범위를 유효 범위라 한다.

유효 범위를 결정하는 방법에는 2가지 방법이 있는데 한가지는 어위적 나머지 한가지는 동적 범위이다.

C나 JAVA같은 대다수의 프로그래밍 언어는 어위적 범위를 채택하고 있다.

자바스크립트의 경우는 함수 내부에 선언되면 지역 함수 밖에 선언되면 전역 유효 범위이다.

#### 변수의 충돌

유효범위가 있는 이유는 프로그램의 다른 부분에 선언된 이름이 같은 변수와 충돌하지 않기 위함이다. 하지만 전역 변수와 지역 변수의 이름이 같으면 해당 함수에서는 지역 변수을 우선하여 사용한다.



#### 함수 안에서의 변수 선언과 변수 끌어올림(Hoisting)

변수의 끌어올림은 함수안에서도 적용이 된다.

단 초기화를 하기 전에는 undefined가 뜬다.

```javascript
var a = "global";
function f(){
    console.log(a);	//undefined
    var a = "local"
    console.log(a); //local
}
```



#### 함수 안에서 변수 선언 생략

함수 안에서 변수 선언을 생략하면 전역변수로 선언이 된다.

```javascript
function f(){
    a = 'local'
    console.log(a) //local
}
console.log(a) //local
```



#### #let&const

> let는 변수 const는 상수 선언문이다.

ES6에서 새롭게 추가된 변수 선언자 let과 const는 var의 끌어올림 문제를 방지하고자 만들었다.

##### let

var와 사용방법은 같지만 차이점은 let로 선언한 변수의 유효범위는 블록 안이다.

```javascript
let x = "let global";
{
  let x = "local x";		//let local의 유효범위이다.
  let y = "local y";		//global로 선언 된 let x는
  console.log(x);			//내부에 선언된 let x로 덮어썼다.
  console.log(y);			//
}
console.log(x);
console.log(y);	//참조 오류		
//만약 let y가 아닌 var y이면 끌어올림 현상으로 인해 local y가 정상적으로 실행된다.
```

자바스크립트 엔진은 var와 달리 let은 Hoisting하지 않는다.

또한 같은 변수명으로 중복 선언이 가능한 var와 달리 let은 똑같은 변수명을 사용하면 문법오류이다. 

##### const 

const는 단 한번만 할당 할 수 있는 상수를 선언한다.

let와 다르게 const는 반드시 초기화를 해야한다.

하지만 상수값이 객체거나 배열일 경우에는 프로퍼티 또는 프로퍼티 값을 수정할 수 있다.



### 함수 리터럴로 함수 정의

```javascript
var square = function(x){return x * x;};
//익명 함수로 선언하였기에 함수명은 필요 없고 square가 함수명처럼 사용된다
//일반 함수와 다르게 세미콜론(;)을 꼭 붙여줘야 한다.
//또한 함수 Hoisting이 발생하지 않는다.
```



### 객체의 메서드

객체의 프로퍼티 중에서 함수 객체의 참조를 값으로 담고 있는 프로퍼티를 메서드라한다.

```javascript
var circle = {
    center: {x : 1.0, y: 2.0},		//프로퍼티
    radius: 2.5,					//프로퍼티
    area: function(){				//메서드
        return Math.PI * this.radius * this.radius;
    }
}

circle.area() //메서드 사용법
circle.tarnslate = function(a, b){ //메서드 추가 방법
    this.center.x = this.center.x + a;
    this.center y = this.center.y + b;
}
```

이렇게 객체를 부품으로 삼아 프로그램을 만드는 방식을 객체 지향이라고 부른다.

> 메서드는 프로퍼티
>
> c++이나 JAVA등의 객체 지향언어는 객체 안의 데이터와 메서드를 별개로 다룬다.
>
> 하지만 자바스크립트는 함수를 값으로 가지는 프로퍼티일 뿐이다.
>
> 하지만 상황에 따라서는 프로퍼티와 메서드로 나누어서 설명하기도 한다.



### 함수 사용시 장점

- 재사용이 가능하다.
  - 똑같은 작업을 여려번 반복할 떄나 같은 알고리즘을 사용하는 경우 인수값만 바꿔 사용할 수 있다.
- 만든 프로그램을 이해하기 쉽다.
  - 함수 내부를 알 필요 없이 어떠한 역할을 하는지만 알면 사용이 가능하다.
- 프로그램 수정이 간단해진다.
  - 같은 처리를 하나의 함수로 처리하니 수정할 떄 함수만 수정하여 사용이 가능하다.



## 생성자

생성자를 사용하면 이름이 같은 메서드와 프로퍼티를 가진 객체를 효율적으로 생성 가능하다.



### 생성자로 객체 생성

JAVA와 C++은 객체를 여러개를 생성하는 방법으로 class을 사용한다.

하지만 자바스크립트에서는 ES6이전에는 class가 존재하지 않았기 떄문에 그 전까지는 생성자를 사용하여 객체를 생성했다.

```javascript
function Card(suit, rank){ //생성자
    this.suit = suit;
    this.rank = rank;
}
//new라는 키워드를 생성하여 생성자로 객체를 생성한다.
var card1 = new Card('킹', 'K')	//Card의 인스턴스
var card2 = new Card('퀸', 'Q')	//Card의 인스턴스
var card3 = new Card('잭', 'J')	//Card의 인스턴스
console.log(card1)
/*
Card {suit: "킹", rank: "K", constructor: Object}
suit: "킹"
rank: "K"
<constructor>: "Card"
name: "Card"
*/
```



ES6에서 추가된 class

```javascript
class Card {
  constructor(suit, rank) { //생성자
    this.suit = suit;
    this.rank = rank;
  } 
}
//new라는 키워드를 생성하여 생성자로 객체를 생성한다.
var card1 = new Card("킹", "K"); //Card의 인스턴스
console.log(card1);
/*
Card {suit: "킹", rank: "K", constructor: Object}
suit: "킹"
rank: "K"
<constructor>: "Card"
name: "Card"
*/

```



### 내장 객체

자바스크립트에 포함되어 있는 내부 생성자 객체이다.

| 생성자 이름 | 생성되는 객체    |
| ----------- | ---------------- |
| Object      | 일반 객체        |
| String      | 문자열 객체      |
| Number      | 숫자 객체        |
| Boolean     | 논리값 객체      |
| Array       | 배열             |
| Date        | 날짜와 시간      |
| Function    | 함수 객체        |
| RegExp      | 정규 표현식 객체 |
| Error       | 오류 객체        |

이 외에 세부적으로 Error을 표시하는 객체와 ES6에서 추가된 객체들이 있다.



대표적인 내장 생성자인 Date는 날짜와 시간을 표현한다.

```javascript
var now = new Date();	//now는 실행한 시점의 날짜와 시간 정보를 담고있다.
console.log(now)		//Mon Apr 13 2020 12:11:36 GMT+0900 (대한민국 표준시)
var then = new Date(2020, 02, 02)
console.log(then)		//Mon Mar 02 2020 00:00:00 GMT+0900 (대한민국 표준시)
var start = new Date();
/*
시간을 확인할 코드
*/
var end = new Date();
var elapsed = end - start	//start와 end 사이의 코드가 실행하는 시간을 구할 수 있다.
```



### 자바스크립트의 객체의 분류

자바스크립트의 객체는 크게 네이티브 객체, 호스트 객체, 사용자 정의 객체로 나눌 수 있다.

#### 네이티브 객체

ECMAScript에 정의되어 있는 내장 생성자로 생성된 객체와 JSON, Math, Reflect 등이 네이티브 객체이다.

#### 호스트 객체

ECMAScript에 정의는 안되어 있지만 자바스크립트 실행 환경에 정의된 호스트 객체이다.

브라우저 객체(Window, Navigator, History, Location 등), DOM 정의 객체, Ajax를 위한 XMLHttpRequest객체, HTML5의 각종 API 등이 클라이언트 측 자바스크립트에 정의된 호스트 객체이다.

#### 사용자 정의 객체

사용자가 정의하여 사용하는 객체이다.



## 배열 

배열의 기초적인 사용방법을 배운다.

### 배열 리터럴로 생성

배열 리터럴은 쉼표로 구분한 값을 대괄호([])로 묶어서 생성한다.

```javascript
var evens=[2, 4, 6, 8] //2, 4, 6, 8
var empty = [] //[]
var a = [2, , 4] // 2, undefuned, 4
var various = [3.14, "pi", true, {x:1, y:1}, [2, 4, 6, 8]]
//배열에도 모든 타입이 들어올 수 있다.
```

> 배열의 길이는 length로 확인할 수 있지만 [희소배열](#희소 배열) 때문에 아닐 수 도있다.



### Array 생성자로 생성

```javascript
var evens = new Array([2, 4, 6, 8])
var empty = new Array();
var a = new Array([2, 4]);
```



### 배열 요소 참조

```javascript
evens[2] // 3번째 요소를 가지고옴
```



### 배열은 객체이다.

C나 Java 같은 프로그래밍 언어의 배열 요소는 메모리의 연속된 공간에 차례대로 배치되어 있어서 인덱스를 지정하면 인덱스가 가르키는 요소를 빠르게 읽거나 쓸 수 있다.

하지만 자바스크립트는 Array객체이며 단순히 배열을 흉내낸거기 때문에 인덱스가 해당 배열의 범위를 넘어서도 오류를 발생하지 않고 undefined를 반환한다.



### 배열 요소의 추가와 삭제

```javascript
var a = ["A", "B", "C"]
a[3] = "D"	//a의 4번째 요소는 D로 추가한다.
a.push("E")	//배열에 마지막에 E를 추가한다.
delete.a[1]	//a의 2번째 요소를 undefined시킨다.

```



### #희소 배열

배열에 요소를 추가하거나 제거하면 인덱스가 0부터 시작되지 않는 배열이 만들어지는데 이를 희소배열이라 한다.

```javascript
var a = ["A", "B", "C"]
a[4] = "E"
console.log(a) // ["A", "B", "C", undefined, "E"] 희소배열이다.
//올바른 인덱스가 요소를 추가하면 4지만 해당 배열은 length가 5라고 나온다.
```



# 표현식과 연산자

기본적으로는 다른 언어와 비슷하게 산술, 논리연산자 등이 있다.

하지만 몇몇 특별한 부분을 소개한다.

- 자바스크립트의 논리 연산자 중 값이 같음을 비교하는 연산자는 2가지가 있다 ==, ===

  - ==은 값만을 비교하고
  - ===은 값과 타입을 비교한다.
  - !=와 !==도 같다.

- typeof

  - 데이터형이 없는 자바스크립트도 데이터 타입을 알 수 있는 연산자가 있는데 그게 typeof이다.

  - 아래의 표는 typeof의 리턴값의 종류이다.

  - | 데이터           | 데이터 예시              | typeof 연산자의 반환값 |
    | ---------------- | ------------------------ | ---------------------- |
    | 숫자, NaN        | 12, 3.14, NaN            | "number"               |
    | 문자열           | "abc", "안녕"            | "string"               |
    | 논리값           | true, false              | "boolean"              |
    | 정의되지 않는 값 | undefined                | "undefined"            |
    | null 값          | null                     | "object"               |
    | 심벌             | symbol("heart")          | "symbol"               |
    | 함수 외의 객체   | [1, 2, 3], String("abc") | "object"               |
    | 함수             | function(x){return ++x}  | "function"             |

## 명시적 타입 변환

### 숫자를 문자열로 변환

- 숫자 + 문자열

  - 숫자와 문자열을 +연산자로 연결하면 숫자의 타입이 문자열로 바뀐다.

- Number 객체 매서드 사용

  - ```javascript
    var n = 23;
    n.toString()	//10진수 문자열로 변환
    ```

  - toString 외에 다양한 기능으로 바꿔주는 Number이 있다.

- #String 함수를 활용

  - String 생성자에 new연산자를 사용하면 String 객체를 생성하지만 그렇지 않는 경우는 일반적인 함수로도 사용이 가능하다.

  - ```javascript
    String(27)	//"26"
    ```

### 문자열을 숫자로 변환

- 수식 안에서 묵시적으로 변환

  - ```javascript
    var s = "2";
    s-0	//2
    +s //2
    ```

- parseInt와 parseFloat 함수를 사용하는 방법

  - 문자열을 해석(parse)해서 숫자로 바꾸는 함수이다.
  - 첫번째 문자만을 숫자로 바꾸고 나머지는 무시한다.
  - 만약 숫자로 해석이 불가능 할 경우 NaN를 반환한다.

- Number 함수를 활용

  - String함수와 같다

