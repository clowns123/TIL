# 1. Vue에 대해서

## 1.1 Vue의 소개

Vue는 React와 Angular과 더불어 프론트엔드 프레임워크 3대장 중 하나이다. 특히 Vue는 React와 Angular보다 쉽고 빠르고 저 둘의 장점을 가지고 있기 떄문에 사용하기 좋습니다.



## 1.2 Vue의 특징

Vue는 UI 화면 개발 방법 중 하나인 MVVM 패턴의 뷰 모델에 해당하는 화면단 라이브러리입니다.

MVVM 패턴이란 화면을 모델(Model) - 뷰(View) - 뷰 모델(ViewModel)로 구조화하여 개발하는 방식을 의미합니다.

| 뷰   | 뷰 모델 | 모델              |
| ---- | ------- | ----------------- |
| 돔   | 뷰      | 자바스크립트 객체 |



뷰는 사용자에게 비춰지는 화면을 의미하고 이떄 어떠한 버튼을 클릭하면 어떠한 동작이 일어나는데 이때 돔 리스너에서 버튼의 클릭을 감지하고 모델에서 필요한 데이터를 가져와 화면에 나타냅니다.

이처럼 뷰에서 동작을 일으키는걸 감지 그리고 이벤트가 일어났을 때 모델에서 필요한 데이터를 가져오는 것을 뷰 모델이 담당하게 도비니다.

또한 컴포넌트 기반 프레임워크로 레고 블록처럼 컴포넌트를 조합하여 화면을 구성할 수 있습니다.

또한 리액트의 단방향 데이터 흐름, 앵귤러의 양방향 데이터 바인딩의 장점을 모두 결합했습니다.

> **양방향 데이터 바인딩**
>
> 화면에 표시되는 값과 프레임워크의 모델 데이터 값이 동기화되어 한쪽이 변경되면 다른 한쪽도 자동으로 변경되는 것

> **단방향 데이터 흐름**
>
> 컴포넌트의 단방향 통신을 의미하는것으로 컴포넌트 간에 데이터를 전달할 때 항상 상위 컴포넌트에서 하위 컴포넌트 한 방향으로만 전달하는 구조

# 2. Vue 시작하기

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<body>
    <div id="app-1">
        {{message}}
    </div>
</body>

<script>
    const app1 = new Vue({
        el: '#app-1',
        data: {
            message: 'Hello Vue',
        },
    });
</script>
```

첫번째 <script>는 뷰 라이브러리를 로딩 두번째 <script>는 메세지를 출력하기 위한 뷰 인스턴스를 만들고 <div id="app-1">에  적용했습니다.

이제 실행해보면 화면에 Hello Vue가 떠있습니다. 이를 좀 더 자세히 알아봅시다.

# 3. 화면을 개발하기 위한 인스턴스

## 3.1 뷰 인스턴스

뷰 인스턴스는 뷰로 화면을 개발하기 위해 필수적으로 생성해야 하는 기본 단위입니다. 위에서 봤듯이 우리는 new Vue({})로 뷰 인스턴스를 생성해 사용했습니다.

```html
<script>
    const app1 = new Vue({
        el: '#app-1',
        data: {
            message: 'Hello Vue',
        },
    });
</script>
```

app1이라는 뷰 인스턴스를 살펴보면 el 속성과 data 속성을 사용했습니다. el과 data외에도 다양한 속성들이 있습니다.

| 속성     | 설명                                                         |
| -------- | ------------------------------------------------------------ |
| el       | 뷰 인스턴스가 그려질 지점을 정의, 이때 css 선택자를 사용     |
| data     | 뷰 인스턴스에서 사용할 데이터를 정의                         |
| template | 화면에 표시할 HTML, CSS 등의 마크업 요소를 정의하는 속성. 뷰의 데이터 및 기타 속성들도 함께 화면에 그릴 수 있음 |
| methods  | 화면 로직 제어와 관계된 메서드를 정의하는 속성. 마우스 클릭 이벤트 처리와 같이 화면의 전반적인 이벤트와 화면 동작과 관련된 로직을 추가할 수 있습니다. |
| created  | 뷰 인스턴스가 생성되자마자 실행할 로직을 정의할 수 있는 속성 |

## 3.2 뷰 인스턴스 유효 범위

뷰 인스턴스를 생성하면 HTML의 특정 범위 안에서만 옵션 속성들이 적용되어 나타납니다. 이를 인스턴스의 유효 범위라 하는데 이때 지역 컴포넌트와 전역 컴포넌트의 차이점에서 중요하게 다뤄집니다. 또한 el 속성과도 밀접한 관계가 있습니다.

이를 쉽게 알아보기 위해 인스턴스가 생성된 후 어떻게 적용되는지 알아봅시다.

1. 뷰 라이브러리 파일 로딩
2. 인스턴스 객체 생성(옵션 속성 포함) 
3. 특정 화면 요소에 인스턴스를 붙임 
4. 인스턴스 내용이 화면 요소로 변환 
5. 변환된 화면 요소를 사용자가 최종 확인

```html
<!-- 1. 뷰 라이브러리 파일 로딩 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<body>
    <!-- 3. 특정 화면 요소에 인스턴스를 붙임  -->
    <div id="app-1">
        <!-- 4. 인스턴스 내용이 화면요소로 변환 -->
        {{message}}
    </div>
</body>

<script>
	// 2. 인스턴스 객체 생성(옵션 속성 포함) 
    const app1 = new Vue({
        el: '#app-1',
        data: {
            message: 'Hello Vue',
        },
    });
</script>

<!-- 5. 실행 후 화면이 {{message}}가 아닌 Hello Vue로 보인다. -->
```

위의 코드에서 {{message}}가 <div id="app-1">의 범위에서 벗어나게 되면 Hello vue로 변환되지 않고 그대로 화면에 뜨게 된다. 이는 인스턴스의 유효 범위에서 벗어나서이다.

## 3.3 뷰 인스턴스 라이플 사이클

뷰 인스턴스 속성 중 created 는 뷰 인스턴스가 생성된 후 실행되는 로직을 적는데 이처럼 뷰 인스턴스의 상태에 따라 호출할 수 있는 속성을 **라이플 사이클**이라 하고 라이플 사이클 속성에서 실행되는 로직을 **라이플 사이클 훅**이라 합니다.

![라이플사이클](./image/lifeCycle.png)

라이플 사이클 속성들을 하나씩 살펴보자

**1. beforeCreate**

**인스턴스가 생성되고 가장 처음으로 실행되는 라이플 사이클 단계**입니다. 이 단계에서는 data, methods 속성이 아직 인스턴스에 정의되어 있지 않고, 돔과 같은 화면 요소에도 접근할 수 없습니다.

**2. created**

beforeCreate 라이플 사이클 단계 다음에 실행되는 단계입니다. data 속성과 methods 속성이 정의되기 때문에 this.data, this.fetchData()와 같은 로직들을 이용하여 data 속성과 methods 속성에 정의된 값에 접근하여 로직을 실행할 수 있습니다. 다만 아직 인스턴스가 화면 요소에 부착되기 전이므로 template 속성에 정의된 **돔 요소에 접근할 수 없습니다.**

**3. beforeMount**

created 단계 이후 template 속성에 지정한 마크업 속성을 render() 함수로 변환한 후 el 속성에 지정한 **화면 요소(돔)에 인스턴스를 부착하기 전**에 호출되는 단계입니다. render() 함수가 호출되기 직전 로직을 추가하기 좋습니다.

**4. mounted**

el 속성에서 지정한 화면 요소에 인스턴스가 부착되고 나면 호출되는 단계로, template 속성에 정의한 **화면 요소(돔)에 접근할 수 있어 화면 요소를 제어하는 로직**을 수행하기 좋은 단계입니다. 다만, 돔에 인스턴스가 부착되자마자 바로 호출되기 때문에 하위 컴포넌트나 외부 라이브러리에 의해 추가된 화면 요소들이  최종 HTML 코드로 변환되는 시점과 다를 수 있습니다.

**5. beforeUpdate**

el 속성에서 지정한 화면 요소에 인스턴스가 부착되고 나면 인스턴스에 정의한 속성들이 화면에 치환됩니다. 치환된 값은 **뷰의 반응성**을 제공하기 위해 $watch 속성으로 감시합니다. 이를 데이터 감시라 합니다. 

> **뷰의 반응성**
>
> 뷰의 특징 중 하나로 코드의 변화에 따라 화면이 반사적으로 반응하여 빠르게 화면을 갱신하는 것을 의미함

또한 관찰하고 있는 데이터가 변경되면 가상 돔으로 화면을 다시 그리기 전 호출되는 단계이며 변경 예정인 새로운 데이터에 접근할 수 있어 변경 예정 데이터의 값과 관련된 로직을 미리 넣을 수 있습니다. 다만 여기서 값을 변경하는 로직을 넣더라고 화면에 다시 그려지지는 않습니다.

**6. updated**

데이터가 변경되고 나서 가상 돔으로 다시 화면을 그리고나면 실행되는 단계입니다. 데이터 변경으로 인한 화면 요소 변경까지 완료된 시점이므로, **데이터 변경 후 화면 요소 제어와 관련된 로직**을 추가하기 좋은 단계입니다. 다만 이 단계에서 데이터 값을 변경하면 무한 루프에 빠질 수 있기 때문에 값을 변경하려면 computed, watch와 같은 속성을 사용해야 합니다. 따라서 **데이터 값을 갱신하는 로직은 가급적 beforeUpdate**에 추가하고 update에서는 변경 데이터의 화면 요소(돔)와 관련된 로직을 추가하는 것이 좋습니다.

**7. beforeDestroy**

뷰 인스턴스가 파괴되기 직전에 호출되는 단계입니다. 이 단계에서는 아직 인스턴스에 접근이 가능합니다. 따라서 **뷰 인스턴스의 데이터를 삭제하기 좋은 단계입니다.**

**8. destroyed**

뷰 인스턴스가 파괴되고 나서 호출됩니다.



```html
<body>
    <div id="app-1">
        {{message}}
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app-1',
        data: {
            message: 'Hello Vue.js',
        },
        beforeCreate() {
            console.log('beforeCreate');
        },
        created() {
            console.log('created');
        },
        mounted() {
            console.log('mounted');
        },
        updated() {
            console.log('updated');
        },
    });
</script>
```

위의 뷰 코드를 실행하면 위의 순서대로 beforeCreate -> created -> mounted가 출력이 된다.

이때 updated 함수는 호출되지 않는데 데이터 변경이 일어나지 않아서 입니다

```html
<body>
    <div id="app-1">
        {{message}}
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app-1',
        data: {
            message: 'Hello Vue.js',
        },
        beforeCreate() {
            console.log('beforeCreate');
        },
        created() {
            console.log('created');
        },
        mounted() {
            console.log('mounted');
            this.message = "Hello VVue!"
        },
        updated() {
            console.log('updated');
        },
    });
</script>
```

위 코드와 같이 마운트 후 message 데이터를 변경하면 업데이트가 일어나고 화면이 바뀌게 된다.



# 4. 화면을 개발하기 위한 컴포넌트

## 4.1 컴포넌트에 대해

컴포넌트란 조합하여 화면을 구성할 수 있는 블록을 의미합니다. 컴포넌트를 활용하여 빠르게 구조화하여 개발할 수 있습니다.

블록으로 나누면 재활용하기도 쉽고 관리도 편하고 남이 작성한 코드도 알기 쉬워집니다.

![레이아웃](./image/layout.png)

위의 사진을 가지고 컴포넌트를 나누게 된다면

frame -> header, container, footer이 있고 container안에는 nav, content가 있다.

이는 화면 전체를 3개의 컴포넌트로 나누고  1개의 컴포넌트를 다시 2개의 하위 컴포넌트로 나눠서 관리하는 것이다.

## 4.2 전역 컴포넌트 등록하기

```vue
Vue.component('컴포넌트 이름', {
	// 컴포넌트 내용
})
```

전역 컴포넌트 등록 형식에서 컴포넌트 이름과 내용이 있습니다.

- 컴포넌트 이름 : template 속성에서 사용할 HTML 사용자 정의 태그 이름
  - 태그 이름 명명 규칙인 '모두 소문자', '케밥 기법'을 따르지 않아도 괜찮습니다.
- 컴포넌트 내용 : 실제 화면의 HTML 요소로 변활될 때 표시될 속성들
  - template, data, methods 등 인스턴스 옵션 속성 정의

예제를 살펴보자

```php+HTML
<body>
    <div id="app-1">
        {{message}}
        <my-component></my-component>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    Vue.component('my-component', {
        template: '<div>전역 컴포넌트가 등록되었습니다.</div>',
    });

    new Vue({
        el: '#app-1',
        data: {
            message: 'Hello Vue.js',
        },
    });
</script>
```

이때 동작 순서는

1. 뷰 라이브러리 파일 로딩
2. 뷰 생성자로 컴포넌트 등록 -> Vue.component
3. 인스턴스 객체 생성
4. 특정 화면 요소에 부착
5. 인스턴스 내용 변환 -> <my-component>가 <div>로 변환됨
6. 변환된 화면 요소를 사용자가 최종 확인



## 4.3 지역 컴포넌트 등록

지역 컴포넌트는 전역 컴포넌트와 다르게 인스턴스에 components 속성을 추가하고 등록할 컴포넌트의 이름과 속성을 정의합니다.

```html
<body>
    <div id="app-1">
        {{message}}
        <my-component></my-component>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app-1',
        data: {
            message: 'Hello Vue.js',
        },
        components: {
            'my-component': {
                template: '<div>전역 컴포넌트가 등록되었습니다.</div>',
            },
        },
    });
</script>
```

이때 해당 객체를 변수로 설정 후 사용해도 됩니다.

## 4.4 지역, 전역 컴포넌트 차이

```html
<body>
    <div id="app-1">
        {{message}}
        <my-local-component></my-local-component>
        <my-global-component></my-global-component>
    </div>
    <div id="app-2">
        <my-global-component></my-global-component>
        <my-local-component></my-local-component> <!-- 나타나지 않음 -->
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    Vue.component('my-global-component', {
        template: '<div>전역 컴포넌트가 등록되었습니다.</div>',
    });

    new Vue({
        el: '#app-1',
        data: {
            message: 'Hello Vue.js',
        },
        components: {
            'my-local-component': {
                template: '<div>지역 컴포넌트가 등록되었습니다.</div>',
            },
        },
    });

    new Vue({
        el: '#app-2',
    });
</script>
```

아주 간단히 설명하면 전역 컴포넌트는 모든 인스턴스에서 사용이 가능하지만 지역 컴포넌트는 다른 인스턴스에서는 사용할 수 없다.



## 4.5 컴포넌트 간 통신

Angular.js나 백본과 같은 초창기 자바스크립트 프레임워크에서는 한 화면을 1개의 뷰로 간주했습니다. 그렇기 때문에 한 화면의 데이터를 화면 어디서든지 호출할 수 있었습니다.

하지만 Vue의 경우는 컴포넌트로 화면을 구성하므로 같은 웹 페이지라도 데이터를 공유할 수 없습니다. 이는 컴포넌트 마다 고유한 유효 범위를 갖기 때문입니다.

```html
<body>
    <div id="app">
        <my-component1></my-component1>
        <my-component2></my-component2>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    const cmp1 = {
        template: '<div>첫 번째 지역 컴포넌트 : {{ cmp1Data }} </div>',
        data: function () {
            return {
                cmp1Data: 100,
            };
        },
    };

    const cmp2 = {
        template: '<div>두 번째 지역 컴포넌트 : {{ cmp2Data }} </div>',
        data: function () {
            return {
                cmp2Data: cmp1.data.cmp1Data,
            };
        },
    };

    new Vue({
        el: '#app',
        components: {
            'my-component1': cmp1,
            'my-component2': cmp2,
        },
    });
</script>
```

분명히 cmp2는 cmp1의 cpm1Data를 참조했는데 화면에 제대로 뜨지 않는다. 이는 my-component2에서 my-component1에 직접 접근할 수 없기 때문입니다.

## 4.6 데이터 전달 방법

**상-하위 컴포넌트**

가장 기본적인 데이터 전달 방법은 상우 - 하위 컴포넌트 간 데이터 전달 방식입니다.

보통 트리 형태를 생각하면 쉬운데 위에서 배운 방법으로 지역 또는 전역 컴 컴포넌트를 등록하면 자연히 하위 컴포넌트가 되고 이때 컴포넌트를 등록한 인스턴스는 상위 컴포넌트가 됩니다.

이때 **상위 컴포넌트에서 하위 컴포넌트는 props**를 전달할 수 있고 **하위 컴포넌트에서 상위 컴포넌트는 이벤트**만을 전달할 수 있습니다.

```html
<body>
    <div id="app">
        <child-component v-bind:propsdata="message"></child-component>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    Vue.component('child-component', {
        props: ['propsdata'],
        template: '<p>{{ propsdata }} </p>',
    });

    new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue! passed from Parent Component',
        },
    });
</script>
```

이는 상위 컴포넌트인 인스턴스에서 하위 컴포넌트인 전역 컴포넌트로 message를 전달하여 메세지를 출력하는 것 입니다.

즉 여기서는 `new Vue() -> Vue.component()`로 new Vue()에 있는 message를 Vue.compoennt()로 전달합니다. Vue.component는 props을 어떠한 이름으로 사용할지 정의하고 컴포넌트 태그에서 v-bind를 사용하여 상위 컴포넌트의 message를 전달받아 사용합니다.

---

이번에는 하위에서 상위로 이벤트를 전달하는 방법을 봅시다.

> **하위에서 상위로 데이터를 전달하는 방법은 절대 불가능한가?**
>
> 절대로 불가능하지는 않지만 뷰의 단방향 데이터 흐름에 어긋나기 때문에 알 필요가 없습니다.
>
> 하지만 추후에 복잡한 뷰 애플리케이션을 구축할 때 이벤트 버스를 사용하여 데이터를 전달해야 할 경우가 있습니다.  데이터 버스를 공부할 때 다시 배웁시다.

이벤트 발생과 수신은 $emit()과 v-on: 속성을 사용하여 구현합니다.

```vue
// 이벤트 발생
this.$emit('이벤트명');

// 이벤트 수신
<child-component v-on:이벤트명="상위 컴포넌트의 메서드명"></child-component>
```

간단한 예제를 살펴봅시다.

```html
<body>
    <div id="app">
        <child-component v-on:show-log="printText"></child-component>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    Vue.component('child-component', {
        template: '<button v-on:click="showLog">show</button>',
        methods: {
            showLog: function () {
                this.$emit('show-log');
            },
        },
    });

    new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue! passed from Parent Component',
        },
        methods: {
            printText: function () {
                console.log('received an event');
            },
        },
    });
</script>
```

커스텀 컴포넌트 태그에서는 v-on:하위 컴포넌트 이벤트명="상위 컴포넌트 이벤트명"

하위 컴포넌트에서는 template에서는 v-on:이벤트="이벤트명" 그리고 methods에서 이벤트를 정의합니다.

상위 컴포넌트에서는 어떠한 이벤트를 발생할건지 정의해줍니다. 여기서는 methods의 printText입니다.

---

**같은 레벨의 컴포넌트 간 통신**

이제까지는 뷰의 기본적은 컴포넌트 통신 방법을 알아봤습니다. 이번에는 같은 레벨 컴포넌트의 통신 방법을 알아보겠습니다.

하지만 뷰에서는 같은 레벨의 컴포넌트에서 보낼 수 있는 방법이 없으므로 상위 컴포넌트로 이벤트를 전달한 후 상위 컴포넌트에서 하위 컴포넌트로 props로 넘겨주야 합니다.

하지만 이러한 통신 구조는 상위 컴포넌트가 없어도 되는데 강제로 두어야 하므로 이를 해결하는 방법이 **이벤트 버스**입니다.

## 4.7 이벤트 버스

이벤트 버스는 관계 없는 컴포넌트 간 통신 방법입니다. 아래는 이벤트 버스의 형식입니다.

```js
// 이벤트 버스를 위한 추가 인스턴스 1개 생성
const eventBus = new Vue();

// 이벤트를 보내는 컴포넌트
methods: {
    메서드명: function(){
        eventBus.$emit('이벤트명', 데이터);
    }
}

// 이벤트를 받는 컴포넌트
methods: {
    created: function(){
        envenBus.$on('이벤트명', function(데이터){
            ...
        });
    }
}
```

그럼 이제 간단한 예제를 살펴보자

```html
<body>
    <div id="app">
        <child-component></child-component>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    const eventBus = new Vue();	// 1. 이벤트 버스로 사용할 새 인스턴스
    
    Vue.component('child-component', {
        // 2. 하위 컴포넌트로 template와 methods를 정의한다.
        template: '<div>하위 컴포넌트 영영. <button v-on:click="showLog">show</button></div>',
        methods: {
            showLog: function () {
                eventBus.$emit('triggerEventBus', 100);
            },
        },
    });

    const app = new Vue({
        el: '#app',
        created() {
            // 3. 상위 컴포넌트에서 이벤트버스에 이벤트 받는 로직을 선언합니다.
            eventBus.$on('triggerEventBus', function (value) {
                console.log(`이벤트를 전달받음, 전달받은 값 : ${value}`);
            });
        },
    });
</script>
```

위의 예제를 실행 후 버튼을 클릭하면 콘솔창에 `이벤트를 전달받음, 전달받은 값 : 100`라 콘솔이 뜹니다.

> **이벤트 버스의 문제점**
>
> 이벤트 버스를 사용하면 데이터를 어디든지 전달할 수 있어 편하지만 어디서 어디로 보내는지 관리가 되지 않는 문제점이 발생합니다.
>
> 이 문제점을 해결하기 위해 vuex라는 상태 관리 도구를 사용합니다. react를 공부해봤다면 redux와 비슷한 라이브러리입니다.



# 5. 뷰 라우터

## 5.1 라우팅이란?

라우팅은 SPA를 구현하기 위해 주로 사용됩니다. SPA에서 가장 중요한 것은 리플래쉬가 일어나지 않아 UI를 쉽게 하기 위함인데 이때 페이지를 이동할때는 라우팅이라는 **페이지 이동방식**을 이용하는 것 입니다. 

라우팅방법은 뷰뿐만 아니라 SPA프레임워크인 리액트 앵귤러도 모두 사용합니다.

## 5.2 뷰 라우터

뷰 라우터는 뷰에서 라우팅 기능을 구현할 수 있도록 지원하는 공식 라이브러리입니다.

| 태그                      | 설명                                                         |
| ------------------------- | ------------------------------------------------------------ |
| <router-link to="URL 값"> | 페이지 이동태그. <a>로 표시되며 클릭하면 URL로 이동합니다.   |
| <router-view>             | 페이지 표시 태그. URL에 따라 해당 컴포넌트를 뿌려주는 영역입니다. |

위의 태그를 이용하여 간단한 예제를 작성해봅시다.

```html
<body>
    <div id="app">
        <h1>뷰 라우터 예제</h1>
        <p>
            <router-link to="main">main 컴포넌트로 이동</router-link>
            <router-link to="login">login 컴포넌트로 이동</router-link>
        </p>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 뷰 라우터 MDN -->
<script src="https://unpkg.com/vue-router@3.0.1/dist/vue-router.js"></script>
<script>
    // 컴포넌트
    const Main = { template: '<div>Main</div>' };
    const Login = { template: '<div>Login</div>' };
	
    // 라우터 path, component 연결
    const routers = [
        { path: '/main', component: Main },
        { path: '/login', component: Login },
    ];
	
    // 라우터 활성화
    const router = new VueRouter({
        routers,
    });
	
    // 인스턴스에 라우터 추가
    const app = new Vue({
        router,
    }).$mount('#app');
</script>
```

> **$mount() API란?**
>
> $mount()는 el속성과 동일하게 인스턴스를 화면에 붙이는 역할을 합니다. 인스턴스를 생성할 때 el속성을 넣지 않았더라도 생성하고 나서 $mount()를 이용하면 강제로 인스턴스를 화면에 붙일 수가 있습니다.

> **라우터 URL의 해시 값(#)을 없애는 방식**
>
> 위의 예제를 실행하면 uri/startVue.html#/login 처럼 라우터 앞에 #가 붙게 되는데 이를 해결하기 위해서는  아래 예제처럼
>
> ```js
> const router = new VueRouter({
>     routers,
>     mode: 'history'
> });
> ```
>
> 모드 히스토리를 해줘야 합니다.

## 5.3 네스티드 라우터

네스티드 라우터는 라우터로 페이지를 이동할 때 최소 2개 이상의 컴포넌트를 화면에 나타낼 수 있습니다. 이때 상위 컴포넌트 1개 하위 컴포넌트 1개를 포함하는 구조입니다. 아래의 예제를 살펴봅시다.

```html
  <body>
    <div id="app">
      <router-view></router-view>
    </div>
  </body>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-router@3.0.1/dist/vue-router.js"></script>
  <script>
    // 컴포넌트 내용 정의
    // 상위 컴포넌트
    const User = {
      template: `
        <div>
          User Component
          <router-view></router-view>
        </div>
      `,
    };
    // 하위 컴포넌트
    const UserProfile = { template: `<p>User Profile Component</p>` };
    const UserPost = { template: `<p>User Post Component</p>` };

    // 네스티드 라우팅 정의
    const routes = [
      {
        path: '/user',
        component: User,
        children: [
          { path: 'posts', component: UserPost },
          {
            path: 'profile',
            component: UserProfile,
          },
        ],
      },
    ];

    // 뷰 라우터 정의
    const router = new VueRouter({
      routes,
    });

    // 뷰 인스턴스에 라우터 추가
    const app = new Vue({
      router,
    }).$mount('#app');
  </script>
```

네스티드 라우터와 기본 라우터의 차이점은 최상위 컴포넌트에도 <router-view>가 있고 상위 컴포넌트에도 <router-view>가 있다는 점 입니다.

이떄 url 뒤에 posts와 profile가 잘 뜨는지 확인합니다.

## 5.4 네이드 뷰

네임드 뷰는 특정 페이지로 이동했을 때 여러개의 컴포넌트를 동시에 표시하는 라우터 방식입니다.

기본 뷰와 네스티드 라우터 뷰는 최상위 컴포넌트는 1개 뿐이었지만 네임드 뷰는 최상위 컴포넌트 여러개를 한번에 표시합니다. 아래의 예제를 보면서 알아봅시다.

```html
  <body>
    <div id="app">
      <router-view name="header"></router-view>
      <router-view></router-view>
      <router-view name="footer"></router-view>
    </div>
  </body>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-router@3.0.1/dist/vue-router.js"></script>
  <script>
    const Body = { template: '<div>This is Body</div>' };
    const Header = { template: '<div>This is Header</div>' };
    const Footer = { template: '<div>This is Footer</div>' };

    const router = new VueRouter({
      routes: [
        {
          path: '/',
          components: {
            default: Body,
            header: Header,
            footer: Footer,
          },
        },
      ],
    });

    const app = new Vue({
      router,
    }).$mount('#app');
  </script>
```

총 3개의 컴포넌트를 만든 뒤 router(한개의 라우터)에 components를 3개를 넣어서 상위 컴포넌트인 인스턴스에 라우터 설정을 해줍니다.

> **<router-view>의 name이란?**
>
> name 속성은 예약어가 아니라 상용자가 임의로 정의한 것 입니다. 만약 사용하지 않으면 기본값인 default로 설정이 됩니다.



# 6. 뷰 HTTP 통신

## 6.1 웹 앱의 HTTP 통신 방법

요즘 웹 앱에서 서버에 데이터를 요청하는 HTTP 통신은 필수로 구현해야 합니다. 최근 웹 사이트는 다양한 데이터를 동적으로 데이터를 화면에 표시 해야하기 때문에 더 중요해졌습니다.

예전 HTTP 통신의 대표적인 사례로는 제이쿼리의 ajax가 있습니다. ajax는 서버에서 받아온 데이터를 표시할 때 화면 전체를 갱신하지 않고도 화면의 일부분만 변경할 수 있게 하는 자바스크립트 기법입니다. ajax는 제이쿼리 뿐만 아니라 리액트, 앵귤러 뷰 등에도 활발히 사용합니다.

뷰에서는 ajax를 지원하기 위한 라이브러리를 제공하고 axios를 많이 사용합니다.

## 6.2 뷰 리소스

뷰 리소스는 초기에는 공식적으로 권하는 라이브러리였지만 2016 말에는 공식적인 지원을 중단했습니다. 잘 사용하지 않으므로 저는 그냥 넘어가겠습니다.

## 6.3 엑시오스

엑시오스는 현재 뷰 커뮤니티에서 가장 많이 사용되는 HTTP 통신 라이브러리입니다. 뷰 뿐만 아니라 다양한 곳에서 많이 사용하고 Promise 기반의 API 형식이 다양하게 제공되어 별도의 로직을 구현할 필요 없이 API로 간편하게 원하는 로직을 구현할 수 있습니다.





# 7. 뷰 템플릿

## 7.1 뷰 템플릿이란?

뷰의 템플릿은 HTML, CSS 등의 마크업 속성과 뷰 인스턴스에서 정의한 데이터 및 로직들을 연결하여 사용자가 브라우저에서 볼 수 있는 형태의 HTML로 변환해 주는 속성입니다.

템플릿 속성을 사용하는 방법은 두 가지로, 첫 번째는 ES5에서 뷰 인스턴스의 template 속성을 활용하는 방법입니다.

두 번째는 싱글 파일 컴포넌트 체계의 <template> 코드를 활용하는 방법입니다.



## 7.2 데이터 바인딩

데이터 바인딩은 HTML 화면 요소를 뷰 인스턴스의 데이터와 연결하는 것을 의미합니다.

주요 문법으로는  {{}} 문법과 v-bind 속성이 있습니다.

- {{}} : 콧수염 괄호

  - 기본적인 텍스트 삽입 방식으로 뷰 인스턴스의 data를 가져다가 html에서 사용하기 위해서 사용합니다.
  - 만약 뷰 데이터가 변경되어도 값을 바꾸고 싶지 않다면 **v-once** 속성을 사용합니다.
  - {{}}를 사용할 때 자바스크립트 표현식을 사용해서 원하는 형태로 변환할 수 있습니다.
    - 단 선언문, 분기 구문은 사용할 수 없습니다.

- v-bind

  - v-bind는 아이디, 클래스, 스타일 등의 HTML 속성 값에 뷰 데이터 값을 연결할 때 사용하는 데이터 연결 방식입니다.

  - ```html
    <div id="app">
        <p v-bind:id="idA">아이디 바인딩</p>
        <p v-bind:class="classA">클래스 바인딩</p>
        <p v-bind:style="styleA">스타일 바인딩</p>
    </div>
    ...
    <script>
    	new Vue({
            el: '#app',
            data: {
                idA: 10,
                classA: 'container',
                styleA: 'color: blue'
            }
        })
    </script>
    ```

## 7.3 디렉티브

뷰 디렉티브란 HTML 태그 안에 v- 접두사를 가지는 모든 속성들을 의미합니다. 앞에서 배운 v-bind 속성도 디렉티브에 해당됩니다. 디렉티브 형식은 아래와 같습니다.

`<a v-if="flag">두잇 뷰</a>`

위 a태그는 flag값에 따라 보이기도 하고 안 보이기도 합니다. 주요 디렉티브를 살펴봅시다.

| 디렉티브 | 역할                                                         |
| -------- | ------------------------------------------------------------ |
| v-if     | 지정한 뷰 데이터 값의 참, 거짓 여부에 따라 해당 HTML 태그를 화면에 표시하거나 표시하지 않습니다. |
| v-for    | 지정한 뷰 데이터의 개수만큼 해당 HTML 태그를 반복 출력합니다. |
| v-show   | v-if와 유사하게 데이터 진위 여부에 따라 HTML을 표시하거나 표시하지 않습니다. 다만 v-if는 해당 태그를 완전히 삭제하지만 v-show는 css효과 display:none로 주어 실제 태그는 남아있습니다. |
| v-bind   | HTML 태그의 기본 속성과 뷰 데이터 속성을 연결합니다.         |
| v-on     | 화면 요소의 이벤트를 감지하여 처리할 때 사용합니다. 예를 들어 v-on:click은 해당 태그의 클릭 이벤트를 감지하여 특정 메서드를 실행할 수 있습니다. |
| v-model  | 폼에서 주로 사용됩니다. 폼에 입력한 값을 뷰 인스턴스의 데이터와 즉시 동기화합니다. <input>, <select>, <textarea> 태그에만 사용할 수 있습니다. |



## 7.4 이벤트 처리

웹 앱에서는 사용자의 클릭이나 키보드 입력과 같은 이벤트를 많이 처리하게 됩니다. 뷰 또한 이러한 이벤트를 처리하기 위해 v-on 디렉티브나 methods 속성을 활용합니다.

```html
...
<button v-on:click="clickBtn">
    클릭
</button>
...
<script>
	methods: {
        clickBtn: function(){
            alert('clicked');
        }
    }
</script>
```

위 코드는 버튼 태그에 v-on디렉티브를 추가하여 클릭 이벤트를 받게 했습니다. 이런 디렉티브를 처리할 때 인자 값을 받아서 넘기는 방법도 있습니다.

```html
...
<button v-on:click="clickBtn(10)">
    클릭
</button>
...
<script>
	methods: {
        clickBtn: function(num){
            alert(`clicked${num}`);
        }
    }
</script>
```

이제 클릭하여 경고창을 확인해보면 clicked10을 확인할 수 있습니다. 이번에는 event 인자를 이용해 화면 요소의 돔 이벤트에 접근해보겠습니다.

```html
...
<button v-on:click="clickBtn">
    클릭
</button>
...
<script>
	methods: {
        clickBtn: function(event){
            console.log(event)
        }
    }
</script>
```

따로 evnet를 인자로 전달해주지 않아도 event인자를 정의해 주는것만으로도 이벤트 객체에 접근할 수 있습니다.



## 7.5 고급 템플릿 기법

위의 기법들과 더해 실제 애플리케이션을 개발할 때 유용한 속성들을 배워봅시다.

**computed 속성**

데이터를 가공하는 등의 복잡한 연산은 뷰 인스턴스 안에서 하고 최종적으로 HTML에는 데이터를 표현만 해야 한다고 설명했습니다. computed 속성은 이러한 데이터 연산들을 정의하는 영역입니다.

```html
...
<div id="app">
    <p>{{ reversedMessage }}</p>
</div>
...
<script>
	new Vue({
        el: '#app',
        data:{
            message: 'Hello Vue!!'
        },
        computed: {
            reversedMessage: function(){
                return this.message.split('').reverse().join('');
            }
        }
    })
</script>
```

HTML에서 바로 message.split('').reverse().join('')라 해도 되지만 computed를 사용하면 좀 더 깔끔한 코드가 됩니다.

computed 속성의 장점으로는 data 속성 값의 변화에 따라 자동으로 다시 연산한다는 점입니다. 이때 computed 속성의 reversedMessage()가 미리 연산한 결과를 가지고 있다가 화면에 결과만 표시합니다. 그렇기 때문에 여러곳에서 재사용할 때 빠른 결과를 가지고 옵니다.

> **methods와 computed의 차이점**
>
> methods 속성은 호출할 때만 해당 로직이 수행되고 compuned 속성은 데이터의 값이 변경되면 자동적으로 수행된다는 것입니다.
>
> 즉 수동적이냐 능동적이냐의 차이점입니다.

**watch 속성**

watch 속성은 데이터 변화를 감지하여 자동으로 특정 로직을 수행합니다.

computed 속성과 유사하지만 computed 속성은 내장 API를 활용한 간단한 연산 정도만 적합한 반면 watch 속성은 데이터 호출과 같이 시간이 상대적으로 더 많이 소모되는 비동기 처리에 적합합니다.

```html
...
<div>
    <input v-model="message"/>
</div>
...
<script>
	new Vue({
        el: "#app",
        data: {
            message: "Hello Vue.js!"
        },
        watch: {
            message: function(data){
                console.log("message의 값이 바뀝니다. : ", data)
            }
        }
    })
</script>
```

위 코드를 간단히 살펴보면 v-model로 인풋박스의 값이 변화가 있을 때 마다 watch 속성의 message 메서드가 실행됩니다.

