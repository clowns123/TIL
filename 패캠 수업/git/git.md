# git & CLI

최우영 강사님

* 수업자료 : [https://github.com/ulgoon/essential-git](https://github.com/ulgoon/essential-git)

* blog: https://ulgoon.github.io/

* github: https://github.com/ulgoon/

* email: [me@ulgoon.com](mailto:me@ulgoon.com)

<hr/>

## 기본적인 CLI 명령어

* pwd : 현재 작업 중인 디렉터리의 이름을 출력
* ls : 현재 작업 중인 디렉터리의 파일명 출력
  * -l : 리스트 형식으로 출력
  * -a : 숨김파일 표시
* mkdir [폴더명] : 새로운 디렉터리 생성
* touch [파일명] : 빈 파일 생성
* echo '내용' > [파일명] : 내용이 있는 파일 생성
* mv [파일명] [파일명] : 파일을 이동하거나 파일의 이름을 변경한다.
* cat [파일명] : 파일에 있는 내용을 확인한다.
* cp [파일명] : 파일을 복사해서 옮긴다.
* rm [파일명] : 파일을 삭제한다.
  * -rf : 비어있지 않더라도 모든 파일을 삭제한다.

<hr>

## 간단한 git 명령어

![git](https://camo.githubusercontent.com/6101a2b0f170b0a22db8b1077bfa2c6d7fb172bf/68747470733a2f2f692e737461636b2e696d6775722e636f6d2f4d676156392e706e67)

1. git init	
   * 원하는 폴더에 local git 파일을 만든다.
2. git add [파일명]
   * 파일을 스테이지에 추가를 한다.
   * 파일명 대신  .을 사용하면 모든 파일을 추가한다.
3. git commit
   * 텍스트 에디터로 이동해서 저장할 제목과  내용을 쓴다.
   * 스테이지에 올라간 파일들 저장한다.
   * -m "제목 <br>내용"으로 간단하게 쓸 수 있다.
   * --amend 옵션으로 commit를 재작성 할 수 있다.
4. git remote [url]
   * github같은 온라인 저장소를 추가한다
5. git push
   * 온라인 저장소에 commit된 내용을 올린다.
   * 처음 remote한 저장소에는 -u명령어를 추가한다.
6. git clone [주소]
   * 해당 온라인 저장소의 git 로컬파일을 가져온다.
7. git pull
   * 온라인 git 저장소에서 바뀐 내용을 불러와 덮어쓴다.
8. git checkout
   * 저장소에서 원하던 시점으로 돌아갈 수 있다.
   * -- [파일명] 을 추가하면 해당파일을 가장 최근으로 돌아간다.

<hr>

## 라이센스

- Mit 라이센스(오픈소스) 맘대로 써라
- Apache License 2.0 (오픈소스) 단 출처만 밝혀라
- GNU General Public License v3.0(오픈소스) 여기에 있는 어떠한 소스를 가져다 쓰면 무조건 오픈소스다. 

<hr>



## Static Site Generator

- Jekyll

  : Ruby 기반 정적인 블로그 생성기

  - 설치와 사용이 쉬움
  - 사용자가 많았음

- Hugo

  : Golang 기반 정적인 블로그 생성기

  - 빠른 속도로 사이트를 생성
  - 사용자 증가 중

- Hexo

  : Node.js 기반 정적인 블로그 생성기

  - Node.js를 안다면 커스터마이즈가 쉬움
  - 빠른 속도로 사용자 증가 중

> Hexo를 이용하여 github에 블로그를 만들어 보자

<hr/>

## Hexo

### hexo의 시작

1. ```npm install hexo-cli -g```
   * node를 이용하여 hexo를 다운받는다.
2. ```hexo init blog```
   * hexo를 시작한다.
3. ```cd blog```
   * 만들어진 폴더로 이동
4. ```npm install```
   * 만들어진 hexo를 시작한다.
5. ```hexo server```
   * hexo의 server를 활성화한다.



> 이걸로 간단한 hexo가 완성되었다.

### hexo로 만들어진 블로그의 첫 글

1. ```hexo new "My New Post"```
2. ```hexo clean```
3. ```hexo generate```
4. ```hexo deploy```
5. Github에 배포용 저장소를 생성 후 _config.yml 파일에서 환경설정을 마치고 연결해서 확인해본다.







