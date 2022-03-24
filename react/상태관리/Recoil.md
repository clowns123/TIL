현재 다는 회사에서 리액트의 상태관리를 사용하고 있기 때문에

정리를 하고자 작성합니다.



# 1. Recoil이란??

리코일은 React에서 사용하는 상태관리 라이브러리 중 하나입니다. React를 공부를 했다면 내장되어 있는 Context Api나 Redux를 공부했을 겁니다. 이와 비슷한 상태관리 라이브러리입니다.

리코일을 공부하러 [공식사이트](https://recoiljs.org/ko/)에 들어가면 나오는 메인 페이지에 특징 3가지가 적혀있습니다.

1. 작고 React스러운
   - Recoil은 React처럼 작동하고 생각합니다. 앱에 추가하여 빠르고 유연한 공유되는 상태를 사용해 보세요.
2. 데이터 흐름 그래프
   - 파생 데이터와 비동기 쿼리는 순수 함수와 효율적인 구독으로 관리됩니다.
3. 교차하는 앱 관찰
   - 코드 분할을 손상시키지 않고 앱 전체의 모든 상태 변경을 관찰하여 지속성, 라우팅, 시간 이동 디버깅 또는 실행 취소를 구현합니다.



이러한 특징을 생각하고 Recoil를 공부해보겠습니다.



# 2. Recoil은 왜 등장했는가

위에서 말했듯이 React에서는 내장되어 있는 Context Api부터 시작해서 Mobx, Redux 등 다양한 상태관리 툴이 있습니다. 왜 Recoil이 등장했을까요??



## 2.1 등장 이유

위에서 말한 Context Api는 거대한 프로젝트를 제작할 때는 다양한 문제점이 발생하여 잘 사용하지 않으므로 넘어가겠습니다.

리액트에서 가장 많이 사용되는 상태관리 라이브러리인 Redux의 경우의 경우는 다음과 같은 문제가 있습니다.

1. React에서 사용하기 위한 라이브러리가 아닙니다.
   1. 그렇기 때문에 store는 "외부요인으로" 취급되기 때문에 React의 내부 스케줄러에 접근할 수 없습니다.
   2. 평소에는 문제가 되지 않지만 [동시성 모드](https://ko.reactjs.org/docs/concurrent-mode-intro.html)를 구현하기에는 호환성이 부족합니다.
2. 복잡한 보일러플레이트 코드가 사용됩니다
   1. Store, Action, Reducer 등 다양한 구성요소가 필요합니다.
   2. 이를 적절하게 사용하기 위한 러닝커브가 높습니다.
3. 비동기 데이터를 처리하기 위한 추가 라이브러리가 필요합니다
   1. Redux의 짝궁인 Redux-saga 등 비동기 처리를 위한 라이브러리가 필요합니다.



React를 개발한 페이스북은 이러한 단점을 없애고 React에서 딱 맞는 상태관리 앱을 만들기 위해 Recoil를 개발하였습니다.



1. React 전용 라이브러리입니다.
   1. 그렇기 때문에 React 내부 접근성이 용이합니다.
   2. **React 동시성 모드, Suspense 등을 지원**하기 때문에 React의 신기능을 빠르게 지원합니다.
2. 매우 심플하게 사용이 가능합니다.
   1. 전역 상태의 설정/정의가 매우 쉽고 Recoil이 지원하는 Hooks로 get/set을 해서 React 문법과 흡사해서 러닝커브가 낮습니다.
   2. 전역상태를 사용하기 위해서는 recoil 디렉터리만 있으면 되므로 보일러플레이트가 적습니다.
3. 비동기 데이터 쿼리를 제공하여 비동기 데이터 처리가 가능합니니다.



## 2.2 공식 문서의 동기

Recoil 공식문서에서는, **[출시한 동기](https://recoiljs.org/ko/docs/introduction/motivation)**에 대해 아래와 같이 정리합니다.

- 공유상태(Shared State)도 React 내부상태(Local State)처럼 **간단한 get/set 인터페이스로 사용**할 수 있는 **Boilerplate-free API**를 제공하고자 했다.
- **동시성 모드(Concurrent Mode)**를 비롯한 다른 **새로운 React의 기능들과의 호환 가능성**도 갖는다.
- **상태 정의가 증분 및 분산**되므로 **코드분할**이 가능하다. 
- 상태를 사용하는 컴포넌트에서 수정 필요없이, **상태에서 파생된 데이터**를 사용 가능하다. 또한, **파생된 데이터는 동기/비동기 모두 가능**하다.
- 우리는 **탐색을 일급 개념**으로 취급할 수 있고, 심지어 링크에서 **상태 전환을 인코딩**할 수 있다.
- 역호환성 방식으로 전체 앱 상태를 유지하는 것은 쉬우므로, **유지된 상태는 애플리케이션 변경에도 살아남을 수 있다. (캐싱)**





# 3. Recoil 주요 개념

Recoil을 시작하기 전 개념을 간단하게 알아보고 가겠습니다.

Recoil는 크게 Atoms와 Selectors로 이루어져 있습니다.



## 3.1 Atoms 

Atoms의 특징을 알아보겠습니다.

1. 상태의 단위이며, 업데이트와 구독이 가능합니다.

2. 업데이트 되면 각각 구독된 컴포넌트는 새로운 값을 반영하여 다시 렌더링 됩니다.
3. 런타임에서 생성될 수도 있습니다.

3. React의 컴포넌트에서 상태 대신 사용이 가능하고 여러 컴포넌트에서 사용되는 경우 모든 컴포넌트의 상태는 공유 됩니다.



간단한 코드를 보며 알아보겠습니다.

```react
const fontSizeState = atom({
    key: "fontsizeState",
    default: 14,
})
```

Atoms는 고유한 키 값과 디폴트 값을 설정해야 합니다.

키 값의 경우는 다른  Atoms와 중복되면 안됩니다.

디폴트 값의 경우 정적값 또는 비동기 함수도 사용이 가능합니다.



이를 사용하기 위해서는 `useRecoilState`라는 Hooks를 사용합니다.

이 외에 useRecoilValue, useSetRecoilState로 각각 get/set만 가능한 Hooks도 있습니다.

```react
function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return (
    <button onClick={() => setFontSize((size) => size + 1)} style={{fontSize}}>
		{fontSize}
    </button>
  );
}
```

기존 useState를 사용하는 것 처럼 쉽게 사용이 가능합니다.



## 3.2 Selector

Selector의 특징을 알아보겠습니다.

1. Selector는 atoms나 다른 selectors를 입력으로 받아들이는 순수 함수(pure function)입니다.

2. 상위의 atoms나 selector가 업데이트되면 하위의 selector 함수도 다시 실행됩니다.
3. 컴포넌트들은 selectors를 atoms처럼 구독할 수 있으며 selectors가 변경되면 컴포넌트들도 다시 렌더링됩니다.



이처럼 Selector은 상태를 기반으로 파생 데이터를 계산하는 데 사용됩니다.

최소한의 상태만 Atoms에 저장하고 파생되는 데이터의 경우는 selector에 명시된 함수를 통해서 효율적으로 계산을 해서 쓸모없는 상태의 보존을 방지합니다.

Selectors는 어떤 컴포넌트가 자신을 필요로하는지, 또 자신은 어떤 상태에 의존하는지를 추적하기 때문에 이러한 함수적인 접근방식을 매우 효율적으로 만듭니다.



selector을 간단한 코드로 알아보겠습니다.

```react
const fontSizeLabelState = selector({
  key: 'fontSizeLabelState',
  get: ({get}) => {
    const fontSize = get(fontSizeState);
    const unit = 'px';

    return `${fontSize}${unit}`;
  },
});
```

`get`을 통해 atoms와 다른 selectors에 접근이 가능합니다. 이렇게 접근을 했으면 자동으로 종속 관계가 생성되므로 해당 atoms나 selector이 업데이트 되면 이 함수도 다시 실행이 됩니다.

위의 코드에서는 안나왔지만 `set`을 통해서 하나 이상의 atoms를 업데이트 할 수도 있습니다. 이 부분은 나중에 확인하겠습니다.



selector는 `useRecoilValue()`를 사용해 return 값을 읽을 수 있습니다.

```react
function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  return (
    <>
      <div>Current font size: ${fontSizeLabel}</div>

      <button onClick={setFontSize(fontSize + 1)} style={{fontSize}}>
        Click to Enlarge
      </button>
    </>
  );
}
```

버튼을 클릭하면 atoms인 fontsize의 값으로 fontsize가 설정이 되고

fontSizeLabel의 return값이 div에 문구가 출력이 됩니다.





# 4. Recoil 시작하기

Recoil은 React를 위한 상태관리 라이브러리이기 때문에 React에서만 사용이 가능합니다.



## 4.1 라이브러리 설치

```shell
npm install recoil
# OR
yarn add recoil
```



## 4.2 RecoilRoot

Recoil도 다른 상태관리 라이브러리와 비슷하게 부모 트리 어딘가에 RecoilRoot가 필요합니다.

보통은 App.jsx에 많이 넣습니다.

```react
import React from 'react';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}
```



## 4.3 상태

위에서 배운 **Atoms**와 **Selector**을 사용하여 상태를 관리하고 변경을 해주면 됩니다.



# 5. 비동기 데이터 쿼리

Recoil의 장점 중 하나는 비동기 처리를 Selector에서 바로 처리가 가능합니다.

예시를 알아보겠습니다.



## 5.1 동기 예제

```react
const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 1,
});

const currentUserNameState = selector({
  key: 'CurrentUserName',
  get: ({get}) => {
    return tableOfUsers[get(currentUserIDState)].name;
  },
});

function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameState);
  return <div>{userName}</div>;
}

function MyApp() {
  return (
    <RecoilRoot>
      <CurrentUserInfo />
    </RecoilRoot>
  );
}
```

위의 예제를 살펴보면 atom과 selector 모두 로컬에서 동기적으로 동작하고 있습니다.

하지만 데이터베이스에 username이 존재한다면 어떻게 해야할까요??



## 5.2 비동기 예제

 ```react
 const currentUserNameQuery = selector({
   key: 'CurrentUserName',
   get: async ({get}) => {
     const response = await myDBQuery({
       userID: get(currentUserIDState),
     });
     return response.name;
   },
 });
 
 function CurrentUserInfo() {
   const userName = useRecoilValue(currentUserNameQuery);
   return <div>{userName}</div>;
 }
 ```

그냥 selector에서 바로 async await를 사용하여 DB에서 값을 가지고 올 수 있습니다.

Selector의 인터페이스는 동일하므로 컴포넌트에서는 selector를 사용하면서 동기 atom 상태나 파생된 selector 상태, 혹은 비동기 쿼리를 지원하는지 신경쓰지 않아도 괜찮습니다! 또한 따로 미들웨어나 SWR, react-query를 사용하지 않아도 되죠



하지만 로딩 중 다양한 처리를 하고 싶을 땐 어떻게 처리를 해야할까요??

그 방법은 아래 예제를 보겠습니다.

```react
function MyApp() {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <CurrentUserInfo />
      </React.Suspense>
    </RecoilRoot>
  );
}
```

 [React Suspense](https://reactjs.org/docs/concurrent-mode-suspense.html)는 보류중인 데이터를 다루기 위해 있습니다.

아직 불러오지 못한 데이터의 경우 Suspense로 감싸서 처리를 해줄 수 있습니다.