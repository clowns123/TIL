# 1. Hooks

> **함수형과 클래스형의 차이점**
>
> 클래스형은 앞에서 렌더되고 다시 렌더될 때 this.state를 사용하기 떄문에 같은 것을 가르킨다. 그렇기 때문에 렌더와 state가 꼬이면 렌더링되지 않는다.
>
> 함수형은 state를 바꿀 때 마다 새로 렌더링된다.  이떄 다시 계산된다.



*컴포넌트 사이에서 상태와 관련된 로직을 재사용하기 어렵습니다.*

- *컨테이너 방식 말고, 상태와 관련된 로직*

*복잡한 컴포넌트들은 이해하기 어렵습니다.*

*Class 는 사람과 기계를 혼동시킵니다.*

- *컴파일 단계에서 코드를 최적화하기 어렵게 만든다.*

*this.state 는 로직에서 레퍼런스를 공유하기 때문에 문제가 발생할 수 있다.*

- *좋은 것일까 ?*



Basic Hooks 

- useState
- useEffect
- useContext



## 1.1 useState

```react
import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [state, setState] = useState({ count: 0 });

  const click = useCallback(() => {
    setState({ count: state.count + 1 });
  }, [state.count]);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={click}>+</button>
    </div>
  );
};

export default Counter;
```



## 1.2 useEffect

### *라이프 사이클 훅을 대체 할 수 있다.*

- ### *componentDidMount*

- ### *componentDidUpdate*

- ### *componentWillUnmount*

```react
  // useEffect
  // 첫번째 인수는 함수, 두번째 인수는 배열
  // 함수는 동작, 배열은 추가 동작
  // useEffect는 리턴이 된 직후에 실행된다. 무조건
  // 때문에 여러개 써도 상관이 없다.
  // return은 끝나면 실행이 된다.
  useEffect(() => {
    console.log('componentDidMount');
      return() => {
      	console.log('componentWillUnmount');
      }
  }, []);

  // state가 바뀐 직후 실행이 된다.
  useEffect(() => {
    console.log('componentDidUpdate');
    return () => {
      console.log('componentWillUnmount');
    };
  }, [state]);
```

좀 더 정확하게 표현하면

```react
  useEffect(() => {
    console.log('componentDidMount');
      return() => {
      	console.log('componentWillUnmount');
      }
  }, []);

  useEffect(() => {
    console.log('state가 변경된 후 실행');
    return () => {
      console.log('state가 변경되기 전 실행');
    };
  }, [state]);
```

이다.





# 2. 커스텀 훅

결국 훅은 재사용을 위해 사용하므로 Hoc의 자리를 대체한다.

```react
import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const resize = () => {
    window.addEventListener('resize', () => {
      setWitdh(window.innerWidth);
    });
  };

  const [width, setWitdh] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return width;
};

export default useWindowWidth;

```



# 3. Additional Hooks

이 훅들은 함수형에서의 문제인 state가 끊기는 경우의 문제를 막아주는 훅이다.

*useReducer* *useCallback, useMemo* *useRef* 

## 3.1 useMemo

```react
  //   const count = sum(persons);
  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

```

기존의 count함수는 리렌더링될 때 마다 계속해서 계산했지만 useMemo를 쓰면 psesons가 바뀔 때만 실행된다.

이는 불필요한 렌더링을 줄이기 위해 중요하다.

## 3.2 useCallback

```react
  const click = useCallback(() => {
    setState({ count: state.count + 1 });
  }, [state.count]);
```

함수를 기억한다. useMemo는 값을 기억한다.



# 4. Context API

## 4.1 데이터를 Set 하기

1. *일단 컨텍스트를 생성한다.*
2. *컨텍스트.프로바이더 를 사용한다.*
3. *value 를 사용*

```react
    <ErrorBoundary FallbackComponent={FatalError}>
      <PersonContext.Provider value={persons}>
        <BrowserRouter>
          <Switch>
            <Route path="/signin" component={Signin} />
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </PersonContext.Provider>
    </ErrorBoundary>
```

`PersonContext.Provider`를 보자



## 4.2 데이터를 Get 하기

1.Consumer

```react
        <PersonContext.Consumer>
          {
            (value) => (
              <p>{JSON.stringify(value)}</p>
            ) /* 이 값은 Provider이 넣어준 값 */
          }
        </PersonContext.Consumer>
```

2. this.context

```react
class test {
	static contextType = PersonContext;    
}
```



3. useContext

```react
function test(){
	const context = uesContext(PersonContext)    
}
```



위의 방법을 쉽게 사용하는 방법이 리덕스이다.