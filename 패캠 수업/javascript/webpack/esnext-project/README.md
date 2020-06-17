# 1. Babel을 깔아준다.

```bash
npm i --save-dev @babel/core @babel/cli
```



# 2. Babel 프리셋 설치

바벨 프리셋은 크게 4가지가 있다.

- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
- [@babel/preset-flow](https://babeljs.io/docs/en/babel-preset-flow)
- [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)
- [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)

우리는 바닐라 자바스크립트로 개발하므로 첫번째 프리셋을 설치한다.

```bash
npm i --save-dev @babel/core @babel/cli
```



# 3. babel.config.json 설정 파일 작성

루트폴더에 babel.config.json파일을 작성하고 다음과 같이 적는다.

```json
{
    "presets": ["@babel/preset-env"]
}
```

# 4. 트랜스파일링

Babel을 사용하여 ES6+ 코드를 ES5 이하의 코드로 트랜스파일링하기 위해 Babel CLI 명령어를 사용할 수도 있으나 npm script를 사용하여 트랜스파일링하는 방법에 대해 알아보도록 하자.

package.json 파일에 scripts를 추가한다. 완성된 package.json 파일은 아래와 같다.

```json
{
  "name": "esnext-project",
  "version": "1.0.0",
  "scripts": {
    "build": "babel src/js -w -d dist/js"
  },
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.9.0",
    "@babel/preset-env": "^7.9.5"
  }
}
```

src/js는 타깃폴더 dist/js는 저장될 폴더이다.

- -w : 타깃폴더의 변경을 감시하여 자동으로 트랜스파일을 한다. (--watch 옵션의 축약형)
- -d : 트랜스파일링된 결과물이 저장될 폴더를 지정한다. (--out-dir 옵션의 축약형)

# 5. Babel 플러그인

하지만 Babel은 ECMAScript에 정의된 사양만을 지원하기 때문에 제안 단계에 있는 사양을 지원하려면 플러그인을 깔아야 한다. 예를 들어 아래와 같은 코드를 보자

```js
// ES6 클래스
export class Foo {
  // stage 3: 클래스 필드 정의 제안
  #private = 10;

  foo() {
    // stage 4: 객체 Rest/Spread 프로퍼티
    const { a, b, ...x } = { ...{ a: 1, b: 2 }, c: 3, d: 4 };
    return { a, b, x };
  }

  bar() {
    return this.#private;
  }
}
```

#private는 아직 제안 단계이므로 Babel이 오류를 뿜는다.

```bash
SyntaxError: D:\study\패캠오프라인\TIL\패캠 수업\javascript\webpack\esnext-project\src\js\lib.js: Support for the experimental syntax 'classPrivateProperties' isn't currently enabled (13:3):

  11 | export class Foo {
  12 |   // stage 3: 클래스 필드 정의 제안
> 13 |   #private = 10;
     |   ^
  14 | 
  15 |   foo() {
  16 |     // stage 4: 객체 Rest/Spread 프로퍼티

Add @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.
```

위의 에러창을 보면 https://git.io/vb4SL에서 plugins를 깔라고 하니 가면 plugin을 인스톨하게 한다.

```bash
npm install --save-dev @babel/plugin-proposal-class-properties
```

하지만 깔아도 안되므로 상세 페이지에 들어가니 JSON 파일도 바꾸라 한다.

```json
{
    "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

아까 깐 presets는 내비두고 plugin을 추가해주니 babel이 잘 작동한다. 

Node.js에서는 잘 작동한다.

# 6. 브라우저에서의 모듈 로딩 테스트

하지만 브라우저에서 실행을 하니 제대로 동작하지 않는다.

---

여기까지가 바벨을 깔아 사용하는 방법이다.

---

