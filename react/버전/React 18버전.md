> 출처 : https://medium.com/naver-place-dev/react-18%EC%9D%84-%EC%A4%80%EB%B9%84%ED%95%98%EC%84%B8%EC%9A%94-8603c36ddb25



React 18이 업데이트 됬습니다.

React 18은 이전과 다르게 많은 부분이 업데이트 됬습니다.

- 자동 배치(Automatic Batching)가 도입되어 배치가 개선되었습니다.
- `startTransition` 이나 선택적(Selective) Hydartion 등의 동시성(Concurrent) 기능이 추가되었습니다.
- 새로운 서버 사이드 렌더링 아키텍처가 도입되었습니다. 이 아키텍처에서는`<Suspense>` 와 `React.lazy` 를 지원하며, 기존 서버 사이드 렌더링의 근본적인 문제를 해결했습니다.
- `ReactDOM.render()` 가 Deprecated 되고 새롭게 `ReactDOM.createRoot()` API가 그 자리를 이어갑니다.

이것들에 대해 하나하나 알아가보겠습니다.

> 참고로 현재는 알파버전으로 정식 릴리즈는 아직 멀었습니다.
>
> 아래에서 React 18 버전을 사용할 수 있는 방법을 알아보겠습니다.



# 1. 자동 배치(Automatic Batching)



## 1.1 React 17버전까지

리액트의 배치에 대해 알고 계시나요??

배치란 **리액트가 더 나은 성능을 위해 여러 개의 상태 업데이트를 한번의 리렌더링으로 묶는 작업입니다.**

예시를 살펴봅시다.

```react
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    setCount(c => c + 1); // 아직 리렌더링 되지 않습니다.
    setFlag(f => !f); // 아직 리렌더링 되지 않습니다.
    // 리액트는 오직 마지막에만 리렌더링을 한 번 수행합니다. (배치 적용)
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
    </div>
  );
}
```

위의 `handleClick` 이벤트 핸들러 함수에서는 상태 업데이트를 2번 (setCount, setFlag)수행했습니다.

하지만 리액트는 언제나 배치를 수행하여 2번 리렌더링하는게 아닌 1번 리렌더링을 합니다.

이를 통해서 불필요한 리렌더링을 줄이고 의도치 않는 버그를 예방할 수 있습니다.



하지만 배치가 수행되지 않는 예외가 존재합니다.

```react
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    fetchSomething().then(() => {
      // 리액트 17 및 그 이전 버전에서는 배치가 수행되지 않습니다. 왜냐하면
      // 이 코드들은 이벤트 이후의 콜백에서 실행되기 때문입니다.
      setCount(c => c + 1); // 리렌더링 
      setFlag(f => !f); // 리렌더링
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
    </div>
  );
}
```

React 17 까지 리액트에서는 위와 같이 이벤트 핸들러 함수 내에서 실행되는 상태 업데이트가 아닌 경우 배치가 동작하지 않았습니다.



## 1.1 React 18 업데이트

이번 업데이트로 인해 **자동 배치**가 추가되었습니다.

배치란, 위와 같이 일반적인 이벤트 핸들러 함수 스코프에서 상태 업데이트가 발생하지 않더라도 자동으로 배치를 적용해주는 것을 뜻합니다.

```react
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // 리액트는 오직 마지막에만 리렌더링을 한 번 수행합니다. (배치 적용)
}, 1000);

fetch(/*...*/).then(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // 리액트는 오직 마지막에만 리렌더링을 한 번 수행합니다. (배치 적용)
})

elm.addEventListener('click', () => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // 리액트는 오직 마지막에만 리렌더링을 한 번 수행합니다. (배치 적용)
});
```

이 자동 배치를 사용하기 위해서는 컴포넌트 트리를 기존의 `ReactDOM.render` 함수 대신 새로운 `ReactDOM.createRoot` 함수를 사용해야 하는데요. 이 부분은 뒤에서 자세히 다루도록 하겠습니다.



한편, 매우 드문 경우이기는 하나 상태 업데이트에 배치가 적용되지 않았으면 하는 경우가 있을 것입니다. 그 경우에는 새롭게 추가된`ReactDOM.flushSync` 함수를 사용하면 해결할 수 있습니다.

```react
import { flushSync } from 'react-dom';

function handleClick() {
  flushSync(() => {
    setCounter(c => c + 1);
  });  // 리액트는 즉시 DOM을 업데이트합니다.

  flushSync(() => {
    setFlag(f => !f);
  });  // 리액트는 즉시 DOM을 업데이트합니다.
}
```





# 2. 동시성(Concurrent) 기능

지금까지 Concurrent Mode 라고 알려졌던 리액트의 차기 핵심 기능 중 일부가 React 18에 추가됩니다.

>*서버 컴포넌트와 빌트인 캐시 등을 포함하는 Data Fetching 솔루션은 React 18.0 릴리즈에 포함되지 않습니다.*
>*이 부분은 아직 작업 중이고, React 18.x 에 적용 예정입니다.*

이 동시성 기능을 이해하기 위해, 먼저 상태 업데이트를 어떻게 분류할 수 있는지에 대해 생각해 봐야 합니다.



## 2.1 상태 업데이트

상태 업데이트를 두 가지로 분류한다면 다음과 같이 할 수 있습니다.

- **긴급 업데이트(Urgent updates)**: 직접적인 상호 작용 반영(타이핑, 오버, 스크롤링 등)
- **전환 업데이트(Transition updates)**: 하나의 뷰에서 다른 뷰로의 UI 전환

![img](https://miro.medium.com/max/1400/1*mWV7fluKF2E_GlvVIJOuKg.png)

사용자가 검색하기 위해 직접 “리액트"를 입력한다고 가정해 보겠습니다.

각각의 키를 입력할 때, **키 입력이 올바르게 되었다는 결과는 즉각적으로 보여줘야 합니다.** 사용자가 그렇게 되길 기대하기 때문입니다. 만약 이때 렉이나 화면 멈춤 등이 발생한다면 사용자는 부정적인 경험을 하게 됩니다.

반면 하단의 추천 검색어로 뜨는 자동 완성 영역의 경우 그렇지 않습니다. 만약 디바이스의 성능이 권장 사양보다 낮아 렌더링 성능이 낮거나, 네트워크 속도가 느린 상황 등의 이유로 업데이트가 늦어질 수도 있지요. **중요한 건 전환 업데이트 때문에 긴급 업데이트가 방해되면 안 됩니다.**

하지만 **React 17 까지는 상태 업데이트를 긴급 혹은 전환으로 명시하는 방법이 없었습니다.** 모든 상태 업데이트는 긴급 업데이트였죠. 그래서 `setTimeout`이나 `throttle`, `debounce` 등의 테크닉을 써서 긴급 업데이트 방해를 우회하는 것이 최선이었습니다.

하지만 리액트 18버전에서는 다릅니다.

## 2.2 startTransition

startTransition는 전환 업데이트를 명시적으로 구분하여 상태 업데이트를 진행할 수 있습니다.

```react
import { useTransition } from 'react';

function SearchBar() {
	const [isPending, startTransition] = useTransition();

  // ...

	function handleChange(e) {
		const input = e.target.value;

		// 긴급 업데이트: 타이핑 결과를 보여준다.
		setInputValue(input);

		// 이 안의 모든 상태 업데이트는 전환 업데이트가 된다.
		startTransition(() => {
		  // 전환 업데이트: 결과를 보여준다.
		  setSearchQuery(input);
		});
	}

  // ...
}
```

`startTransition`의 경우 크게 두 가지 Use Cases가 있습니다.

- 느린 렌더링: 작업량이 많아 결과를 보여주기 위한 UI 전환까지 시간이 걸립니다.
- 느린 네트워크: 네트워크로부터 데이터를 기다리기 위한 시간이 걸립니다. Suspense와 연계.

현재 각각의 경우 처리하는 방법이 다르다는 가이드는 있지만, 그 자세한 내용이나 다른 동시성(Concurrent) API에 대한 문서는 아직 공개되지 않았고 추후에 포스팅할 예정이라고 합니다.





# 3. 서스펜스를 지원하는 새로운 SSR 아키텍쳐

React 18 에서는 새로운 서버 사이드 렌더링(이하 SSR) 아키텍처가 적용되었습니다.

새롭게 `pipeToNodeWritable` API가 추가되었고, 이 API를 사용하면 SSR을 통해 `<Suspense>`를 사용할 수 있게 되었습니다.

> 즉, `React.lazy`를 서버 사이드 렌더링에서 사용할 수 있게 되었습니다.

기존의 리액트 SSR는 다음 4단계를 거쳤습니다.

1. 서버에서 전체 앱의 데이터를 받습니다.(Data Fetching)
2. 그 후, 서버에서 전체 앱을 HTML로 렌더링한 후 Response로 전송합니다.
3. 그 후, 클라이언트에서 전체 앱의 자바스크립트 코드를 로드합니다.
4. 그 후, 클라이언트에서 서버에서 생성된 전체 앱의 HTML과 자바스크립트 로직을 연결합니다(Hydration)



중요한 것은, 앱 전체를 대상으로 각 단계가 완료되어야만 다음 스텝으로 넘어갈 수 있다는 것입니다. 만약 전체 컴포넌트 트리 중 일부가 나머지 부분보다 느리다면, 서버 사이드 렌더링의 전체 성능은 급격하게 낮아지게 됩니다. 각 단계마다 그 느린 부분에서 병목 현상이 발생하기 때문이죠.



React 18에서는 `<Suspense>`를 사용하여 앱을 더 작은 독립적인 유닛으로 만들 수 있습니다. 이를 통해 앱의 나머지 부분의 렌더링을 방해하지 않게 할 수 있습니다.

React 17과 18이 어떻게 바뀌었는지 살펴보겠습니다.





##  3.1 React 17 서버렌더링

```react
<Layout>
  <NavBar />
  <Sidebar />
  <RightPane>
    <Post />
    <Comments />
  </RightPane>
</Layout>
```

위에서 언급한 리액트 SSR 4단계를 기준으로, 이 컴포넌트 트리의 렌더링이 어떻게 진행되는지 살펴보겠습니다.



**1. 서버에서 전체 앱의 데이터를 받습니다.(Data Fetching)**

SPA에서는 로딩 중 아무런 화면을 못 보지만

서버사이트 렌더링의 경우 서버에 미리 HTML을 렌더링 하여 내려주기 때문에 사용자가 좀 더 빠르게 화면을 볼 수 있습니다.

**2. 그 후, 서버에서 전체 앱을 HTML로 렌더링한 후 Response로 전송합니다.**

HTML만을 렌더링하기 때문에 다른 상호작용은 불가능한 HTML 자체의 링크나 Input입력 등의 간단한 상호작용만 가능합니다.

**3. 그 후, 클라이언트에서 자바스크립트 코드를 로드합니다. **

**4. 그 후 클라이언트에서 서버에 생성된 전체 앱의 HTML과 자바스크립트 로직을 연결합니다.**



자바스크립트 코드 로딩이 끝나면, 리액트는 메모리 단에서 컴포넌트 트리를 렌더링합니다. 그 후 모든 자바스크립트 로직을 서버에서 Response로 내려받은 HTML에 연결하죠. 이 작업을 Hydration(수화)이라고 합니다. 메마른 HTML에 촉촉한 상호 작용 능력을 불어넣어 준다고 보면 됩니다.



이 Hydration이 끝나면 리액트 애플리케이션의 초기화가 완료됩니다.