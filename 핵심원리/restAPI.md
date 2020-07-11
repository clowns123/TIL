REST는 HTTP 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍쳐이고 이를 기반으로 서비스 API를 구현한 것이 RESTAPI이다.



# 1. 구성

REST API는 자원(Resource), 행위(Verb), 표현(Representations)의 3가지 요소로 구성된다. REST는 자체 표현 구조(Self-descriptiveness)로 구성되어 REST API만으로 요청을 이해할 수 있다.

| 구성 요소             | 내용                           | 표현 방법        |
| :-------------------- | :----------------------------- | :--------------- |
| 자원(Resource)        | 자원                           | HTTP URI         |
| 행위(Verb)            | 자원에 대한 행위               | HTTP 요청 메서드 |
| 표현(Representations) | 자원에 대한 행위의 구체적 내용 | HTTP 페이로드    |



# 2. 설계 방침

## 2.1 URL는 리소스를 표현해야 한다.

리소스를 식별할 수 있는 이름은 동사보다는 명사를 사용한다.

```code
# bad
GET /getTodos/1
GET /todos/show/1

# good
GET /todos/1
```



## 2.1 리소스에 대한 행위는 HTTP 요청 메서드로 표현한다.

리소스를 취득하는 경우에는 GET, 리소스를 삭제하는 경우에는 DELETE 메서드를 사용하여 리소스에 대한 행위를 명확히 표현한다.

리소스에 대한 행위는 GET, POST, PUT, PATCH, DELETE와 같은 HTTP 요청 메서드를 통해 표현하며 URI에 표현하지 않는다.

```code
# bad
GET /todos/delete/1

# good
DELETE /todos/1
```

