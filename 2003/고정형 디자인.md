# 1일차 : 시맨틱 구조

1. 전체적인 시맨틱 구조의 형태
   1. ![시맨틱구조 이미지 검색결과](https://t1.daumcdn.net/cfile/tistory/244DE54F58B0258702)
2. header
   1. 소개나 탑색을 돕는 것의 그룹
   2. 보통 다른 요소의 맨 위쪽에 위치함
3. footer
   1. 작성자 구획, 저작권 데이터, 관련된 문서의 링크등을 포함
   2. 보통 맨 아래 있음
4. main
   1. body의 주요 콘텐츠를 나타냄
5. article
   1. 독립적으로 구분되거나 재사용 가능한 영역을 설정(매거진/신문 기사, 블로그 등)
   2. 일반적으로 h1 ~ h6태그를 포함하여 식별
   3. 작성일자와 시간을 time태그의 datetime 속성으로 작성
6. section
   1. 문서의 일반적인 영역을 설정
   2. 일반적으로 h1~h6태그를 포함하여 식별
   3. article는 독립적이고 재사용이 가능해야하지만 section은 그렇지 않아도 됨
7. aside
   1. 문서의 별도 콘텐츠를 설정(보통 광고나 기타 링크 등의 사이드바를 설정)
8. nav
   1. 다른 페이지 링크를 제공하는 영역을 설정(Navigation의 약자)
   2. 보통 메뉴(home, about, contact), 목차, 색인 등을 설정
9. address
   1. body, article, footer 등에서 연락처 정보를 제공하기 위해 포함하여 사용
10. div
    1. 본질적으로 아무것도 나타내지 않는 콘텐츠 영역을 설정

<hr/>

#  고정형 웹 사이트 만들어보기

![image-20200316191015109](https://user-images.githubusercontent.com/50760015/76814732-f374ca80-683e-11ea-9593-f553c2989661.png)

## 위와 같은 웹 사이트를 만드는 순서



### 1. 구조 파악하기

1. 보통 웹사이트의 구조는 3단계나 4단계로 나눠져있다.
2. 3단계는 헤더 / 콘텐츠 / 푸터로 구성
3. 4단계는 헤더 / 내비게이션 / 콘텐츠 / 푸터로 구성
4. 분석 결과
   1. ![image-20200316192240028](https://user-images.githubusercontent.com/50760015/76814752-025b7d00-683f-11ea-9834-3b6791820b0a.png)

### 2. 위의 분석 결과를 바탕으로 전체적인 뼈대를 구성한다.

1. ```html
   <!DOCTYPE html>
   <html lang="ko-KR">
   <head>
       <meta charset="UTF-8">
       <title>웹카페 - HTML5,CSS3,웹표준,웹접근성</title>
   </head>
   <body>
       <div class="container">
           <header class="header">헤더</header>
           <div class="visual">비주얼</div>
           <main class="main">
               <div class="group group1">Group1</div>
               <div class="group group2">Group2</div>
               <div class="group group3">Group3</div>
           </main>
           <article class="slogan">슬로건</article>
           <div class="footer-bg">
               <footer class="footer">푸터</footer>
           </div>
       </div>    
   </body>
   </html>
   ```

2. 결과 : ![image-20200316192325438](https://user-images.githubusercontent.com/50760015/76814770-0daea880-683f-11ea-9753-4ddc3c90fbcd.png)

### 3. 레이아웃을 정의 하기 전 css의 뼈대를 만든다.

 1. 필요한 css의 속성들

    * container
      * header
      * visual
      * main
        * group1
        * group2
        * group3
      * slogan
      * footer-bg
        * footer

	2. ```css
        body {
       /*나중에 reset.css로 정리해준다.*/
       margin: 0;
        }
       
       .container {
       }
       .header {
       }
       .visual {
       }
       
       main {
       }
       .group1 {
       }
       .group2 {
       }
       .group3 {
       }
       
       .slogan {
       }
       
       .footer-bg {
       }
       .footer {
       }
       ```

### 레이아웃을 만들어서 HTML에 정의한다.

1. 나머지는 블록요소처럼 한줄에 하나의 요소만 있지만 main에 group는 인라인요소처림 한줄에 3개의 요소가 들어있다.

2. 모든 요소가 가운데 정렬이 되어있다..

   1. 사용가능한 레이아웃에는 float, position, display : flex, display : gird가 있다.

3. 위의 조건으로 display:flex를 사용하여 레이아웃을 잡아본다.

   1. ```css
      /* 기본 Box Sizing */
      body *,
      body *::before,
      body *::after {
          box-sizing: border-box;
      }
      /* 레이아웃 */
      .header,
      .visual,
      .main,
      .slogan,
      .footer {
          width: 940px;
          margin: 0 auto;
      }
      
      /* 헤더 */
      .header {
      }
      /* 메인 콘텐츠 */
      .main {
          display: flex;
          flex-flow: row nowrap;
          align-items: stretch;
          padding: 30px;
          justify-content: space-evenly;
      }
      .group1 {
          width: 250px;
      }
      .group2 {
          width: 380px;
      }
      .group3 {
          width: 190px;
      }
      
      ```

   2. ![image-20200316193553780](https://user-images.githubusercontent.com/50760015/76814875-62522380-683f-11ea-94e9-6fe10080edda.png)

> 복습 : 현재는 display: flex로만 했지만 다른 3가지 방법으로도 만들어본다.



<hr/>

# 그 외 교수님 소개

> > https://github.com/seulbinim?tab=repositories
> > 수업 예제
> > 김데레사 강사님 / seulbinim@gmail.com
>
> <hr/>
>
> > [troy](http://troy.labs.daum.net/)
> >
> > * 반응형 웹에서 픽셀 계산하기
>
> <hr/>
>
> > 1. ## Web Browser Extension
> >
> >    1. [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm) : 웹 브라우저 조작
> >    2. [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi) : 헤더 확인
> >    3. [OpenWAX](https://chrome.google.com/webstore/detail/openwax/bfahpbmaknaeohgdklfbobogpdngngoe) : 웹 접근성 확인
> >    4. [tota11y](https://chrome.google.com/webstore/detail/tota11y-plugin-from-khan/oedofneiplgibimfkccchnimiadcmhpe) : wcag에서 몇가지 중요 개념 체크
> >    5. [Gitzip For Github](https://chrome.google.com/webstore/detail/gitzip-for-github/ffabmkklhbepgcgfonabamgnfafbdlkn)

<hr/>

# 2일차 : CSS에 대한 설명

> 알아둘 점 : table와 grid의 차이점
>
> 1. table는 구조 grid는 css이다.
>    1. html은 페이지의 구조를 의미.
>    2. css는 스타일로 웹 페이지를 꾸며줄 때 사용한다.
>
> 웹 접근성은 [ARIA](https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA)를 이용한다.
>
> <hr/>

1. css3은 다양한 모듈들로 이루어져 있다.

   * w3.org/css : 모듈 확인

     1. Rec :  표준으로 채택된 상태
     2. PR : 표준에 제안된 상태
     3. CR : 권고되는 표준 후보 스펙
     4. WD : 초안

   * > tip [브라우저 별 css3 지원 test](http://css3test.com)

2. html은 구조, css는 표현, javascript는 동작으로 구별된다.

   1. 확인해보기 : http://www.csszengarden.com/
   2. css를 제거한 상태
      1. ![image-20200317102815688](https://user-images.githubusercontent.com/50760015/76813106-3ed8aa00-683a-11ea-832f-c363b6df1e0b.png)

   3. css를 입힌 상태
      1. ![image-20200317103043641](https://user-images.githubusercontent.com/50760015/76813156-5f086900-683a-11ea-98bb-0a5b225259eb.png)
      2. ![image-20200317103201104](https://user-images.githubusercontent.com/50760015/76813212-8e1eda80-683a-11ea-8eb9-7b3e78689dbd.png)
   4. css만 바꿔도 다양한 디자인이 나온다.

<hr/>

## 고정형 웹 사이트 header

 	1. 웹카페 -> 테스트링크 -> 네비게이션 순서로 만든다.
      	1. html은 구조만 만든다.(중요!)
      	2. aria-hidden = "true"는 스크린 리더와 같은 보조기술로 탐색할 수 없게 한다.
           	1. NVDA브라우저를 사용하여 들어볼 수 있다.
      	3. 웹 접근성 사이트
           	1. [웹 콘텐츠 접근성 가이드](https://yamoo9.gitbook.io/wcag/international-standards)
           	2. [웹 접근성(널리)](https://nuli.navercorp.com/)
 	2. 시맨틱 마크업/ 네이밍
     * 이미지를 html로 할건가 css로 할건가 정하자
       * img를 사용하거나 baground를 사용한다.
       * 상황에 따라 고정되지 않다.
       * 단 이미지 사용 횟수를 줄이자(수정에 불편)
     * [네이밍 방법론](https://wit.nts-corp.com/2015/04/16/3538)
 	3. css를 적용하기 전 reset.css나 normalize.css을 적용한다.
      	1. reset.css는 모든 브라우저에 기본적으로 적용되는 css를 초기화 시킨다.
      	2. normalize.css은 기본 스타일을 다른 브라우저와 일관성을 가지게 유지

<hr/>

# 3일차 

> 1. attribute와 property의 차이점
>    1. attr은 추가정보로 선택이 가능하다 하지만 property는 만들어질때 부터 만들어진다.
>
> 2. 각각의 박스모델에 따라 css의 prop가 무시되므로 잘 확인해보자
> 3. [웹에 대한 발표](https://www.slideshare.net/search/slideshow?searchfrom=header&q=wsconf)
> 4. 프론트엔드 페러다임
>    1. 개발버전과 배포버전을 다르게한다.
>       1. 개발 
>          1. pug, sass typescript를 사용하여 개발한다
>          2. 하지만 브라우저는 이해하지 못하기 때문에 배포할때 바꾼다.
>       2. 배포
>          1. babel, webpack처럼 html, css javascrip로 바꿔주는 툴을 사용한다.
>          2. 가벼운 pacel도 사용해보자
> 5. 그래픽스
>    1. reflow, repaint 검색해보기
> 6. css의 3대 요소
>    1. 상속
>    2. 겹침
>    3. 우선순위
> 7. em, rem
>    1. em은 상속받으면서 하기 때문에 잘못 설정하면 비하급수적으로 크기가 커진다.
>    2. rem은 최상단 요소로 기준으로 바꾼다.
> 8. 하이퍼링크 스타일을 지정할때
>    1. link, visited가 먼저 올라오고 hover과 focus를 쓴다
> 9. 링크는 44px~22px사이로 만든다. 그래야 사용성으로 편하다.
> 10. [그라디언트 예제](https://leaverou.github.io/css3patterns/) [그라디언트 조합예제](https://www.colorzilla.com/gradient-editor/)

## float로 main 바꾸어보기

1. 전에는 flex로 만들어 보았지만 flex를 지원하지 않는 크로스 브라우저를 지원 할 수도 있기 때문에 float로도 만들어본다.

   1. float는 사진을 한글의 배치에서 설정하는 것과 비슷하다.

   2. 부모요소의 넓이만큼 linebox가 있지만 float가 적용되면 적용된 요소의 크기의 linebox로 줄어들고 남는 부모요소 넓이만큼의 새로운 linebox가 옆에 생성된다. 

   3. float이 적용되면 해당 요소는 높이가 사라지고 모든요소가 float를 사용하면 부모요소의 높이가 사라진다.

   4. 그렇기 때문에 부모요소에 강제로 높이를 주던가 margin을 주지만 좋은 방법은 아니다.

   5. clearfix ,overflow, float로 해결할 수 있고 clearfix가 좋다.

      1. 다음 요소에 빈 div.clearfix요소를 추가하고 clear : both를 적용한다(초창기 방법)

         * 하지만 빈 div는 html의 구조를 망친다.

      2. 그렇기 때문에 부모요소에 가상요소를 추가해서 만든다. 

         1. ```html
                    <main class="main clearfix">
                        <div class="group group1">Group1</div>
                        <div class="group group2">Group2</div>
                        <div class="group group3">Group3</div>
                    </main>
            ```

         2. ```css
            .main > .group{
                float: left
            }
            .clearfix::after{
                clear: both;
                content: "";
                display: block;
            }
            ```

         3. 부모요소에 clearfix를 적용시킨다.

         4. 가상요소를 사용하기 위해 content를 사용한다.

         5. clear은 block일 때만 동작한다.

      3. 간단하게 부모요소에 overflow를 사용해서 해결이 가능하다.

         * 하지만 부모요소 밖으로 요소를 보여주고 싶을 때 overflow에 막혀서 디자인에 제약이 생긴다.

      4. 부모요소에 float를 사용하여 해결이 가능하다

         * 하지만 이중 float(요소를 그룹하여 사용)를 사용할 때만 사용이 가능하다.

   6. clear로 흐름을 조절할 수 있지만 clear는 block를 만들어야 사용이 가능하다.

   7. 하지만 clear를 사용하면  float의 높이만큼 강제로 margin을 추가시켜서 적용된것이므로 주의해야한다.

<hr/>

## header 레이아웃 설계

1. logo 배치

   1. logo는 nav위에 있다.
      1. position으로 위치를 옮긴다.
         * absolute : 화면에 떠있는 배치가 된다.(float와 비슷)
           * absolute는 좌표를 지정할 때 상위에 다른 position(static X)이 필요하다, 없으면 body를 기준으로 한다.
         * relative : 현재 자리를 고정으로 생각한다.
      2. .header에 pos:pelative를 주고 logo에 pos:absolute를 줘서 좌표를 조정하여 위치를 맞춘다.

2. member 배치

   1. li는 margin, padding, list-style이 있으므로 초기화 한다.

   2. 레이아웃 구성

      1. member에 float:left를 주고
      2. header에 float:right를 준다.

      * nav에 문제가 생기는데 clear:both로 해결이 가능하다.	

   3. 하지만 2번의 방법은 비합리적이다, li만 옮길 수 있지 않을까??

      1. li를 display:inline로 바꾸고
      2. block안에 있는 inline속성을 정렬하는 text-align: right로 바꾼다.
      3. inline로 바꾸니 띄어쓰기 때문에 공백이 생긴다. 공백을 제거하면 되지만 다른 방법을 사용한다.
      4. 상속을 사용하여 해결한다.
         * 부모요소에 font-size:0 하고 li요소에 font-size:16px 으로 하면 공백이 사라진다.
         * 부모가 font-size를 0으로 하니 공백요소가 0으로 되고 li요소는 다시 16으로 하니 li만 나타난다.

   4. li에 있는 글자의 밑줄을 제거한다.

      1. member에  text-decoration: none;로 제거했지만 a태그에 있기때문에 적용되지 않는다.
      2. 일일이 사라지게 하기 귀찮으므로 모든 a태그의 밑줄을 제거한다.

      * inherit : 상속받는 값을 사용한다는 값

   5. englsh단어를 .member에서  text-transform: uppercase으로 상속받아 사용

   6. 단어를 a태그를 기준으로 padding을 줘서 공백을 나타낸다.

      1. :을 기준으로 해도 되지만 a를 기준으로 해야 터치하기가 편하다.

   7. padding를 해도 요소의 크기는 커지지 않는다. 크기를 키울려면 inline-block로 바꾼다.

      1. 요소에 포커스가 갈 때 border가 생기기 때문에 너무 딱 붙지 않게 하자

3. nav 배치하기

   1. nav에 있는 제목를 사라지게 한다.

      1. display:none를 사용하면 안된다.

         1. 예전에는 p:a, top: -9999px를 사용했다.

      2.  position: absolute; width: 1px; height: 1px; overflow: hidden;을 사용한다.

         1. 이 경우는 1px의 점이 보인다.

         2.  clip: rect(0, 0, 0, 0); 추가하여 사용한다.

            1. p:a일때만 사용가능
            2. 구형 브라우저에서만 사용

         3. clip-path: polygon(0 0, 0 0, 0 0);

            1. 모던 브라우져에서 사용

         4. ```css
            .a11y-hidden {
                position: absolute;
                width: 1px;
                height: 1px;
                overflow: hidden;
                clip-path: polygon(0 0, 0 0, 0 0);
            }
            ```

         5. 

<hr/>

4. 메인메뉴
   1. margin과 padding-left의 속성을 다시 정하고 list-style: none;을 제거한다
   2.  선을 그어준다.
      1. border나 box-shadow을 사용한다.
   3. 색을 넣어준다.
      1. background-image: linear-gradient()로 그라디언트를 넣는다.
      2. [그라이언트 예제](https://leaverou.github.io/css3patterns/), [그라디언트 조합예제](https://www.colorzilla.com/gradient-editor/)
   4. 모서리를 둥글게 만든다.
   5. sub 제목을 글자 데코레이션을한다.
   6. sub 아이템을 초기화한다.

<hr/>

# 4일차 - 메인 메뉴 작성

> 1. 콘텐츠 모델
>    1. 모델에 따라 들어가는 자식이 다르다
>       * ul은 li만 들어가고 dl는 dt나 dd만 허용한다..
> 2. white-space
>    1. block에만 적용할 수 있는 속성으로 띄어쓰기를 방지한다.
> 3. 이모티콘
>    1. [폰트어썸](https://fontawesome.com/), [폰텔로](http://fontello.com/)
>    2. 각각 사이트에서 다운받아서 사용이 가능하다.
>    3. 이모티콘을 쓸때 \을 넣으면 스크린 리더가 읽지 못한다.
> 4. 박스아래 글자 크기만큼 밑줄을 원할때 ::after을 사용하여 border을 그려준다.
> 5. At-Rules
>    1. **`@keyframes`** [@규칙](https://developer.mozilla.org/ko/docs/Web/CSS/At-rule)은 개발자가 애니메이션 중간중간의 특정 지점들을 거칠 수 있는 키프레임들을 설정함으로써 CSS 애니메이션 과정의 중간 절차를 제어할 수 있게 합니다. 이 룰은 브라우저가 자동으로 애니메이션을 처리하는 것 보다 더 세밀하게 중간 동작들을 제어할 수 있습니다.
> 6. 애니메이션은 자바스크립트 라이브러리도 많다.
> 7. [자바스크립트 랜더링 방법](https://blog.asamaru.net/2017/05/04/script-async-defer/)
> 8. [Reflow와 Repaint](https://github.com/wonism/TIL/blob/master/front-end/browser/reflow-repaint.md)
>    1. [교수님 추천 링크]([https://falsy.me/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EC%9D%B4%ED%95%B4-1-reflow-repaint%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC-%EC%95%8C%EC%95%84%EB%B4%85%EB%8B%88%EB%8B%A4/](https://falsy.me/브라우저의-이해-1-reflow-repaint에-대하여-알아봅니다/))
>    2. reflow와 repaint가 많이 발생하면 성능이 떨어진다.





<hr/>

# 5일차 

> 1. 개발 순서
>    1. 논리적 순서
>    2. 시맨틱 마크업
>    3. 네이밍
>    4. 레이아웃/디자인
>
> 2. [엔티티 기호](https://www.w3schools.com/charsets/ref_html_entities_4.asp)
>
>    1. &lt; 태그 기호를 키보드에 있는것을 치면 태그로 인식하지만 엔티티 기호는 모양을 알아차린다.&gt;
>    2. &yen; &euro; 등 특수기호도 있다.
>
> 3. 피그마
>
>    1. ui작업
>
> 4. 배경은 z-index가 적용되지 않는다.
>
> 5. 하든 콘텐츠 선택
>
>    1. display: none, visibility: hidden, hidden은 잘못된다.
>
>    2. .a11y-hidden을 사용한다.
>
>       1. ```css
>          .a11y-hidden{ 
>          position: absolute !important;
>              height: 1px; 
>              width: 1px;
>              overflow: hidden;
>              clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
>              clip: rect(1px, 1px, 1px, 1px);
>              white-space: nowrap; /* added line */
>          }
>          ```
>
> 6. id값은 무조건 하나여야 한다.
> 7. 자바스크립트 정규표현식을 이용하여 글자 제한을 쉽게 가능하다.







1. visual 영역
   1. 장식 그림은 background로 배경을 넣는다.
   2. html에는 text만 넣는다.
2. main 영역
   1. group1 로그인 부분
      1. 아이디 비밀번호 부분의 텍스트
         1. 아무태그 없이 쓰면 접근성 사용성에 대해 문제가 생긴다.
         2. lable은 for을 넣어줘서 어떤것을 의미하는지 id값을 적어준다. 그것을 명시적 레이블링이라 한다.
         3. label에 input를 넣으면 암묵적 레이블링이라 한다.
         4. 라벨을 사용하지 않았을 경우 aria-label과 title를 적는다.
         5. input요소에 required을 넣어서 필수적으로 삽입시킨다.
      2. 로그인 버튼 만들기
         1. input는 value에 값을 넣는다.
         2. button은 택스트로 값을 넣는다.
         3. 둘다 속성으로는 submit을 적용시켜줘야 한다.
      3. 전체를 fieldset를 적용한다
         1. 폼에서 연관성 있는 필드를 묶는다.
         2. legend는 제목에 대해 연관을 한다.
      4. 아래 링크 태그는 ul태그를 사용하여 만든다, div태그로 만들어도 상관없다.

> ### git에 대해 간단한 설명
>
> 1. git은 많이 쓰이는 버전 관리 시스템중 하나이다.
>    1. git은 로컬로 저장을 하게 되고 온라인으로 저장이 가능한 사이트들이 있는데 가장 유명한 것은 github
> 2. 간단한 git 명령어
>    1. git init : 로컬에서 git 저장소를 만든다.
>    2. git status : 파일의 상태를 확인한다.
>    3. git add ('파일이름' or  '.') : git 저장소에 특정 파일 또는 모든 파일을 추적한다.
>    4. git commit -m "변경된 메시지 내용을 입력" : 변경사항을 저장한다.
>    5. git remote add origin "원격 서버 주소" : 원격 저장소를 지정한다. 
>    6. git push -u origin master : github등 원격 저장소에 저장을 한다.
>    7. git clone "원격 서버 주소" : 다른 사람의 원격 저장소를 로컬 저장소로 가져온다.
>    8. git pull : clone or remote한 git 원격 저장소에 업데이트 된 내용을 가져온다.





<hr/>

# 2주 1일차

> css 프레임워크
>
> 	1. bootstrp은 별로 추천안한다.
>  	2. sematic ui을 추천
>
> input
>
> 1. type의 종류
> 2. input는 label(for)과 같이 써야하고 주민등록번호와 같은 2개는 title로 지정하거나 aria-label을 사용한다.
>
> [html6](https://morioh.com/p/6d422fc49bd2?fbclid=IwAR2qeXSXaE4u2L5D1S-1thCUX_-nJ17ojwtcdNxdUZnUNbhKQIdxtRUYCV8) : 여러가지 태그가 추가된다.
>
> form
>
> 	1. fildset, legend을 사용하여 묶어줘서 사용하면 좋다.
>
> 유요성검사
>
>  	1. title을 이용하여 스크린 리더가 읽을 때를 도와준다.
>      * title : 마크업 유효성 검사 페이지로 이동(새창)
>
> 박스모델
>
> 	1. 예를들어서 li태그에 적용시킨 속성들을 a태그로 바꾸면 적용되지 않는 속성이 있는데 inline과 block의 차이로 인해 발생한다.
>
> img태그의 alt
>
> 	1. alt태그는 추가 정보를 줘야 하면 무조건 주지만 아닐경우는 공란으로 놔둬도 된다.
>
> git commit --amend : 코맨드를 잘못 적은 commit을 수정이 가능하다.

<hr/>

# 2일차

> 다시한번 강조
>
> 	 1. aria을 사용하여 접근성을 중요시하자
>
> required
>
> 	1. 폼의 유요성을 체크한다.
>
> 웹 표준
>
> 	1. 예전엔 ie가 웹 표준에 대해 문제가 많이 있었다.
>  	2. 요즘은 chrome에 문제가 많이 생긴다.
>
> 키보드 포커스
>
> 	1. 키포드 포커스를 받을 수 있는 태그는 한정된다.
>  	2. area a, input등이 있다.
>
> 운용의 용이성
>
> 	1. 마우스로 조작할 수 있으면 키보드로도 조작이 가능해야 한다.
>  	2. 키보드 포커스를 받지 못하면 tabindex로 받을 수 있게 만든다.
>
> 아웃라인
>
> 	1. 암시적 아웃라인 :  연관된 내용을 h1 + p로 묶는다.
>  	2. 명시적 아웃라인  : section으로 묶는다. 
>  	3. 단 명시적 아웃라인을 만들 떄 h래벨을 뛰어넘어도 되지만 되도록 쓰지말자
>
> time
>
> 	1. 예전에는 자바스크립트로 가져온 시간들을 time태그를 사용하여 쉽게 사용한다.
>  	2. time은 dateitme속성이 필수 속성이다.
>  	3. 2020-03-24T14:51:17의 형태로 속성을 넣는다.
>
> 글자 자르기
>
> 	1. overflow와 text-overflow를 사용
>
> flex
>
> ​	1. flex-grow등을 ul에 사용하자



1. text-align(black요소), vertical-align(inline)를 정렬한다.
2. line-hight: inline box모델을 바꾸는걸로 위치 조정이 가능하다.
3. [정리 공부](https://mulder21c.github.io/)
4. 오늘 숙제
   1. ul부분을 노멀플로우로 유지하면서 바꾸기



<hr/>

# 3일차





1. 글자 조절은 text-align(black요소), vertical-align(inline)를 정렬한다.
2. [정보화진흥원 웹 접근성에 대해](https://github.com/niawa)
3. [웹접근성 연구소](https://www.wah.or.kr:444/index.asp)
4. figure를 a태그로 묶을 수 있다.
5. 글자를 읽을 떄 가장 좋은 행간의 간격은 1.5 ~ 1.6배가 가장 보기 편하다.
6. 웹에서 사진을 슬라이드를 보여주는 것을 Carousel이라 한다.
   1. 아래 보이는 것은 인디케이션
7. [IR기법](https://dolly77.tistory.com/26)
8. 많은 이미지를 한번에 이미지를 가져와 잘라 사용한다.
   1. css spriter 기법이다.
   2. 성능이 좋아진다.
   3. 네이밍도 적게 필요하다.
9. css 전처리기를 하는 이유는 반복사용이 적기 떄문이다.
   1. 지금 실습 예제를 바꿔보자 좋다.

<hr/>

# 4일차

1. 요소에 문제가 생기면 부모요소를 이용하는 경우도 있다.

   1. ```css
      
      .btn-event {
        background-color: yellow;
        overflow: hidden;
        height: 20px;
      }
      .btn-event button {
        width: 20px;
        height: 20px;
        overflow: hidden;
        padding: 20px 0 0 0;
        border: none;
        background: pink;
      }
      ```

   2. ```css
      
      .btn-event {
        background-color: yellow;
        overflow: hidden;
        height: 20px;
      }
      .btn-event button {
        width: 20px;
        padding: 20px 0 0 0;
        border: none;
        background: pink;
      
      ```

   3. 위의 버튼을 원하는대로 만들 수 있다.

2. 스프라이트 기법을 사용하면 유지보수하기 쉽다.

3. focus는 폼 관련요소만 받을 수 있다

   1. 단 textindex를 사용하면 해당 요소도 받을 수 있다.
   2. 초점은 outline으로 바꾼다.

4. data- : 사용자 정의 속성

   1. 사용자가 원하는 데이터를 줄 수 있다.

5. 인라인 속성에 들어간 블록 속성은 인라인 속성에 적용한 속성을 받지 못한다.

<hr/>

# 5일차 

> [야무님 정보](https://github.com/yamoo9)

1. 푸터 요소에는 특별히 헤딩요소를 삽입하지 않아도 된다.
2. small : 저작권 같은 요소에 삽입, 주변 요소보다 작게 표현
3. [grid게임](https://cssgridgarden.com/#ko)
4. [gird ebook](https://github.com/yamoo9/CSS-Grid)