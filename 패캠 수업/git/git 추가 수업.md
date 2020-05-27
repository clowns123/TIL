# branch

분기점을 생성하고 독립적으로 코드를 변경할 수 있도록 도와주는 모델

다양한 브런치들이 다른 공간에서 다른 형태로 존재할 수 있다.

모든 branch 관련 명령 `git branch` 로 시작한다.

`git branch`는 모든 git branch와 사용중인 브런치를 확인 가능하다.

## branch 생성

`git branch 브런치이름`으로 브런치를 생성한다.

만들어진 브런치는 생성된 시점과 똑같은 파일이 들어있다.

## branch 들어가기 

`git checkout 브런치이름` 으로 다른 브런치로 이동이 가능하다.

> `git checkout -b 브런치이름`을 통해서 존재하지 않는 브런치를 만들고 해당 브런치로 이동이 가능하다.

## 만들어진 branch 합치기

`git marge 브런치이름`

메인 브런치로 온 뒤 합칠 브런치 이름을 적어주면 해당 브런치에서 작업된 내용이 메인 브런치로 온다.

> **master**
>
> master같은 경우는 보통 사용자가 사용하게 될 최종 코드만 존재해야 한다. 그렇기 때문에 master에서는 실제로 코드를 추가하고 확인하지 않고 브런치에서 확인이 끝난 코드만을 marge만 할 뿐이다.
>
> 그렇기 때문에 git을 사용한다면 master에서 코드작업을 하지말고 브런치에서 코딩을 한 뒤 확인후 master과 merge를 하자





> git commit -m 이름 짓는 방법
>
> feat: features, 실제 기능 개발
>
> docs: documentations, 이 프로젝트의 주석 및 문서화 작업 등
>
> conf: configurations, 어떠한 패키지, 라이브러리 생성 등, package.json이 바뀌는 등의 행위가 일어나면 알려줌, 즉 프로젝트를 만들면서 사용한 라이브러리등을 알리고 node_modules는 무겁기 때문에 올리지 않는다.
>
> fix: bug-fix, 버그를 해결할 때
>
> solve : conflict solved, 브런치에서 문제 발생시 해결
>
> ex> feat:wrap h1, p with div
>
> TODO : 아직 하지 않은 부분을 써준다.



## 서로다른 시간대를 합치기

CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.

두사람 이상의 사람이 협업을 할 떄 파일이 파일이 충돌하게 될떄 발생하는 현상이다. 이럴떄 git status로 어떤 파일이 충돌되는지 확인하고 해결이 가능하다.

이떄 해결방법은 둘중 하나를 지워서 해결하던거 적절히 조합하는 방법이 있다.

코드에서 코드를 확인후 해결을 한 뒤 >>>>> <<<<<< =====이라는 특수 문자를 지우고 다시 add, commit를 하면 된다.

해결을 한 뒤 solve: conflict solved로 commit 메세지를 써준다.

git은 시간과 공간으로 이루어져 있다. 이것을 기억하고 git을 해야한다.



## git flow strategy

master, develop, feature로 이루어져 있따.

master에는 사용자가 쓰게될 코드만 존재하고 개발을 위한 코드를 만들지 않는다.

develop에서 개발을 시작하고

feature로 기능별로 개발을 한다.



## git branch 지우기

`git branch -D 브런치이름`



## git flow 전략 사용하기

`git flow init` ->  `git flow feature start MYFEATURE` -> `git flow feature finish MYFEATURE`-> `git flow release start 버젼` -> `git flow release finish` -> develop에서 push -> master에서 push

> 버젼
>
> 0(메이저).0(마이너).(더 마이너).200527002(20년 5월 27일 2번쨰 릴리즈)





# 협업

보통 깃헙은 협업을 하기 위해 사용된다.

크게 2가지 방법으로 사용한다.

1. Collaboration

레포에서 settings에서 Manage access에서 다른 사람을 추가하면 그 사람에게 권한을 전부 주기 때문에 보안에 취약해지므로 좋은 방법은 아니다.

2. Fork

다른사람의 레포에서 Fork해오면 나의 레포에 해당 레포가 생신다.

`forked from [kingwangzzang1234/visitors](https://github.com/kingwangzzang1234/visitors)`

그럼 내 소유가 된 레포에  주소를 복사해서 내 로컬에서 사용이 가능하다.



