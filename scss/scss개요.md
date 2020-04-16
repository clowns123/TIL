# SCSS의 개요

1. CSS Preprocessor(CSS 전처리기)

   1. 3대장으로 Sass(SCSS), Less, Stylus 등이 있다.

      1. Less는 진입장벽이 비교적 낮지만 몇몇 기능들이 떨어진다.
      2. Stylus는 덜 유명하고 비교적 늦게 나와 사소한 버그들이 몇몇 보인다.
      3. Sass(SCSS)는 가장 유명하고 오래되어 안정적이다.

   2. Sass와 SCSS의 차이점

      1. SCSS는 Sass의 모든 기능을 지원하는 상위집합이다.

      2. 차이점으로는 {}와 ;의 유무이다.

         1. ```sass
            .list
            	width: 100px
            	float: left
            	li
            		color: red
            		bakground: url("./image")
            		&:last-child
            			margin-right: -10px
            ```

         2. ```Scss
            .list{
                width: 100px;
                float: left;
                li{
                    color: red;
                    background: url("./image.jpg");
                    &:last-child{
                        margin-right: -10px;
                    }
                }
            }
            ```

         3. Sass는 들여쓰기로 구분하고 SCSS는 중괄호로 구분한다.

   3. Scss의 컴파일러

      1. SassMeister, node-sass, Gulp, Webpack, Parcel등이 있다. 그중 간편한 SassMeister와 Parcel을 사용해본다.
         1. [SassMeister](https://www.sassmeister.com/)
            1. 웹으로 접속하여서 SCSS문법을 사용하면 css로 바로 바꾸어준다.
         2. Parcel
            1. node를 사용하여 사용한다.
               1. npm init -y
               2. npm install --save-dev parcel-bundeler
                  1. npm -i -D parcel-bundler과 동일하다.
               3.  npx parcel index.html을 사용하여 실시간으로 확인한다.

<hr/>

# SCSS의 문법

 1. 주석

     1. ```SCSS
        // 컴파일되지 않는 주석
        /* 컴파일되는 주석 */
        
        /*
         * Sass는 
         * *의 라인이 맞아야한다.
         */
        
        /*
        SCSS는 각 줄에 *이 없어도 문제되지 않는다.
        */
        ```

 2. 데이터 종류

    | 데이터   | 설명                                 | 예시                                     |
    | -------- | ------------------------------------ | ---------------------------------------- |
    | Numbers  | 숫자                                 | 1, .82, 20px, 2em                        |
    | Strings  | 문자                                 | bold, relative, "/images/a.png", "dotum" |
    | Colors   | 색상 표현                            | red, blue, #FFFF00, rgba(255, 0, 0, .5)  |
    | Booleans | 논리                                 | true, false                              |
    | Nulls    | 아무것도 없음                        | null                                     |
    | Lists    | 공백이나 , 로 구분된 값의 목록       | (apple, orange, banana), apple orange    |
    | Maps     | Lists와 유사하나 값이 Key: Value형태 | (apple : a, orange: o, banana: b)        |

    1. 특이사항
       1. Numbers: 숫자에 단위가 있거나 없다.
       2. Strings: 문자에 따옴표가 있거나 없다.
       3. Nulls: 속성값으로 null이 사용되면 컴파일하지 않습니다.
       4. Lists: ()를 붙이거나 붙이지 않습니다.
       5. Maps: ()를 꼭 붙여햐 합니다.

	3. 중첩

    	1. 상위 선택자의 반복을 피하고 좀 더 편리하게 구조를 작성할 수 있다.

    	2. ```scss
        .section{
          width: 100%;
          .list{
            padding: 20px;
            li{
              float: left;
            }
          }
        }
        ```

    	3. ```css
        .section {
          width: 100%;
        }
        .section .list {
          padding: 20px;
        }
        .section .list li {
          float: left;
        }
        ```

	4. 상위 선택자 참조

    	1. 중첩 안에서 & 키워드는 상위(부모) 선택자를 참조하여 치환

    	2. ``` scss
        .btn{
          position: absolute;
          &.active{
            color: red;
          }
        }
        
        .list{
          li{
            &:last-child{
              margin-right: 0;
            }
          }
        }
        ```

    	3. ```css
        .btn {
          position: absolute;
        }
        .btn.active {
          color: red;
        }
        
        .list li:last-child {
          margin-right: 0;
        }
        ```

	5. @at-root(중첩 벗어나기)

    	1. 중첩 안에서 생성하되 중첩 밖에서 사용해야 할 때 쓰는 키워드 이다.

    	2. ```scss
        .list{
          $w: 100px;
          $h: 50px;
          li{
            width: $w;
            height: $h;
          }
          @at-root .box{
            width: $w;
            height: $h;
          }
        }
        ```

    	3. ```css
        .list li {
          width: 100px;
          height: 50px;
        }
        .box {
          width: 100px;
          height: 50px;
        }
        ```

    	4. $w, $h는 변수를 의미한다.

    	5. 변수를 사용하기 위해 @at-root를 사용하여 밖에 있는 요소의 스타일을 정의해준다.

	6. 중첩된 속성

    	1. font-, margin- 등과 같이 동일한 단어를 사용하는 속성들을 쉽게 사용하기

    	2. ```scss
        .box{
          font: {
            weight: bold;
            size: 10px;
            family: sans-serif;
          };
          margin: {
            top: 10px;
            left: 20px;
          };
          padding: {
            bottom: 40px;
            right: 30px;
          };
        }
        ```

    	3. ```css
        .box {
          font-weight: bold;
          font-size: 10px;
          font-family: sans-serif;
          margin-top: 10px;
          margin-left: 20px;
          padding-bottom: 40px;
          padding-right: 30px;
        }
        ```

	7. 변수

    	1. $변수이름 : 속성값;

    	2. ```scss
        $color-primary: #e96900;
        $url-images: "/assets/image/";
        $w: 200px;
        
        .box{
          width: $w;
          margin-left: $w;
          background: $color-primary url($url-images + "bg.jpb");
        }
        ```

    	3. ```css
        .box {
          width: 200px;
          margin-left: 200px;
          background: #e96900 url("/assets/image/bg.jpb");
        }
        ```

	8. 변수의 유효범위

    	1. 다른 언어들과 같은 중괄호 안에 선언된 변수는 그 범위 안에서만 사용이 가능하다.

    	2. !global 플래그를 사용하면 변수의 유효범위를 전역으로 설정가능

    	3. ```scss
        .box1{
          /*원래는 box1안에서만 사용되지만
            !global을 사용함으로써 다른 요소에도 적용이 가능하다.*/
          $color: #111 !global;
          background: $color;
        }
        .box2{
          background: $color;
        }
        ```

    	4. ```css
        .box1 {
          background: #111;
        }
        
        .box2 {
          background: #111;
        }
        ```

	9. !default(초깃값 설정)

    	1. 할당되지 않은 변수의 초깃값을 설정한다. 만약 할당된 값이 있음 해당 값을 사용한다.

    	2. ```scss
        $color-primary: red;
        .box{
          $color-primary: blue !default;
          background: $color-primary;
        }
        ```

    	3. ```css
        .box {
          background: red;
        }
        ```

    	4. 결과값을 확인하면 초기에 설정된 red값이 설정이 된다.

    	5. 왜 사용한다면  다른 외부 라이브러리를 사용할 때 해당 라이브러리에 변수명이 사용자가 설정한 변수명과 같으면 사용자가 원한 값이 아니라 라이브러리에서 지정된 값이 사용된다는 문제가 있기 때문에 사용된다.

	10. #{} (문자 보간)

     	1. #{}을 사용하여 코드의 어디서든지 변수 값을 사용가능

     	2. ```scss
         $family: unquote("Droid+Sans");
         @import url("html://fonts.googleapis.com/css?family=#{$family}");
         ```

     	3. ```css
         @import url("html://fonts.googleapis.com/css?family=Droid+Sans");
         ```

     	4. unquote()는 문자에서 따옴표를 제거하는 내장함수이다.

	11. @import

     	1. 외부에 있는 파일을 가져온다.

     	2. Sass의 @import는 기본적으로 Sass파일을 가져오는데 CSS @import 규칙으로 컴파일되는 경우가 있다.

         * 파일 확장자가 .css일 때

         * 파일 이름이 http://로 시작하는 경우

         * url()이 붙었을 경우

         * 미디어쿼리가 있는 경우

         * ```css
           @import "hello.css";
           @import "http://hello.com/hello";
           @import url(hello);
           @import "hello" screen;
           ```

     	3. 여러 파일을 가져올때는 ,(쉼표)로 구별한다.

	12. 파일 분할

     	1. 프로젝트의 규모가 커지면 각 기능별로 구분하여 관리하는데 scss로 컴파일 할 때 각각으로 .css로 만들면 관리나 성능차원에 문제가 생긴다.
     	2. 그러므로 파일 이름 앞에 _을 붙여서 만들면 병합하여 css가 만들어진다.
     	3. node-sass scss --output css 명령어를 통해 scss를 css를 변환하면
     	4. ![image](https://user-images.githubusercontent.com/50760015/77868314-bfa19800-7275-11ea-81a7-420b39fd70d1.png)
     	5. 대표 scss파일을 제외한 나머지 파일에 _을 붙여 scss를 만들고 같은 명령어를 사용하면
     	6. ![image](https://user-images.githubusercontent.com/50760015/77868424-2030d500-7276-11ea-971a-f2771d00e26b.png)
     	7. 대표 scss로 병합된 css가 만들어진다.
     	8. 단 일반적인 빌드툴에서는 설정된 값에 따라 빌드가 된다. 그래도 되도록 _을 사용하자

	13. 연산

     	1. +, -, *, /, %, and, or, not등 다른 언어에서의 연산자와 비슷하다.

     	2. 상대적 단위 연산

         	1. 절대값과 상대값을 계산하기 위해서는 calc가 필요하다.

         	2. ```scss
             width: 50% - 20px; //단위 모순 에러
             width: calc(50% - 20px); //연산 가능
             ```

     	3. 나누기 연산의 주의점

         	1. css에서 속성 값의 숫자를 분리하는 방법으로 /가 사용되기 때문에 안될수도 있다.

         	2. 따라서 /을 나누기 연산 기능으로 사용할려면 조건을 충족해야 한다.

             * 값 또는 그 일부가 변수에 저장되거나 함수에 의해 반환되는 경우

             * 값이 ()로 묶여있는 경우

             * 값이 다른 산술 표현식의 일부로 사용되는 경우

             * ```scss
               div{
                   $x: 100px;
                   width: $x / 2;
                   height: (100px / 2);
                   font-size: 10px + 12px / 3;
               }
               ```

     	4. 비교 연산자

         	1. | 종류 | 설명                             |
             | ---- | -------------------------------- |
             | ==   | 동등                             |
             | !=   | 부등                             |
             | <    | 대소 / 보다 작은                 |
             | >    | 대소 / 보다 큰                   |
             | <=   | 대소 및 동등 / 보다 작거나 같은  |
             | >=   | 대소 및 동등  / 보다 크거나 같은 |

     	5. 논리 연산자

         	1. and, or, not
         	2. 보통 조건문에서 많이 사용된다. 자세한 내용은 조건문에서

     	6. 문자 연산

         	1.  문자연산에는 +기호가 사용된다.

         	2. ```scss
             div::after{
               content: "Hello " + World;
               flex-flow: row + "-reverse" + " " + wrap
             }
             ```

         	3. ``` css
             div::after {
               content: "Hello World";
               flex-flow: row-reverse wrap;
             }
             ```

         	4. 위와 같이 문자 연산은 앞에 있는 값을 토대로 따옴표를 붙이거나 붙이지 않거나 한다.

     	7. 색상 연산

         	1. ```scss
             div{
               color: #123456 + #345678;
               background: rgba(50, 100, 150, .5) + rgba(10, 20, 30, .5);
             }
             ```

         	2. ```css
             div{
                 color: #123456 + #345678;
                 background: rgba(50, 100, 150, .5) + rgba(10, 20, 30, .5);
               }
             ```

         	3. rgba()을 연산할 때는 a값이 동일해야한다. a값을 연산하고 싶으면 다른 함수를 사용한다.

             	1. opacity(), transparentize()

             	2. ```scss
                 $color: rgba(10, 10, 30, .5);
                 div{
                     // 30% 불투명하게 / .5 + .3
                   color: opacify($color, .3);
                     //20% 투명하게 / .5 - .2
                   background-color: transparentize($color, .2); 
                 }
                 ```

             	3. ```css
                 div {
                   color: rgba(10, 10, 30, 0.8);
                   background-color: rgba(10, 10, 30, 0.3); 
                 }
                 ```

	14. @mixin, @include (재활용)

     	1. 스타일 시트 전체에서 재사용 할 css 선언 그룹을 정의한다.

         	1. @mixin : 정의하기

         	2. @include : 사용하기

         	3. ```scss
             @mixin size($w : 100px, $h : 100px){
               width: $w;
               height: $h;
             }
             .box1{
               @include size;
             }
             
             .box2{
               @include size($h: 300px);
             }
             .box3{
               @include size(200px, 200px);
             }
             ```

         	4. ```css
             .box1 {
               width: 100px;
               height: 100px;
             }
             
             .box2 {
               width: 100px;
               height: 300px;
             }
             
             .box3 {
               width: 200px;
               height: 200px;
             }
             ```

         	5. size라는 함수를 만들어서 w값과 h값을 받는데 기본값을 100px로 선언한다.

         	6. .box1은 둘다 기본값 .box2는 $w는 기본값 $h는 사용자 정의값 .box3은 $w와 $h 둘다 사용자 정의 값

     	2. @mixin은 선택자를 포함가능하고 상위 요소 참조(&)도 사용 가능하다.

     	3. @mixin의 인수에 가변값을 보낼때 매개변수 뒤에 ...을 붙여준다.

         	1. ```scss
             @mixin var($w, $h, $bg...){
               width: $w;
               height: $h;
               background: $bg;
             }
             
             .box{
               @include var(100px, 200px, url("img/a.png") no-repeat 10px 20px)
             }
             ```

         	2. ```css
             .box {
               width: 100px;
               height: 200px;
               background: url("img/a.png") no-repeat 10px 20px;
             }
             ```

         	3. 위처럼 여러 값이 들어가는 매개 변수 뒤에는 ... 을 붙여준다.

         	4. 반대로 mixin이 아니라 include에도 사용이 가능하다

         	5. ```scss
             @mixin font(
               $style: noma,
               $weight: nomal,
               $size: 16px,
               $family: sans-serif
             ){
               font: {
                 style: $style;
                 weight: $weight;
                 size: $size;
                 family: $family;
               };
             }
             
             
             div{
               //매개변수 순서와 개수에 맞게 전달
               //list 형식
               $font-values: italic, bold, 16px, sans-serif;
               @include font($font-values...);
             }
             
             span{
               //필요한 값만 키워드 인수로 변수에 담아 전달
               //map 형식
               $font-values: (style: italic, size: 22px);
               @include font($font-values...);
             }
             
             a{
               //필요한 값만 키워드 인수로 전달
               @include font((weight: 900, family: monospace)...);
             }
             ```

         	6. ```css
             div {
               font-style: italic;
               font-weight: bold;
               font-size: 16px;
               font-family: sans-serif;
             }
             
             span {
               font-style: italic;
               font-weight: nomal;
               font-size: 22px;
               font-family: sans-serif;
             }
             
             a {
               font-style: noma;
               font-weight: 900;
               font-size: 16px;
               font-family: monospace;
             }
             ```

     	4. @content

         	1.  선언된 Mixin에 @content가 포함되어 있다면 해당 부분에 원하는 스타일 블록을 전달 가능하다.

         	2. 기존 mixin이 가지고 있는 기능에 선택자나 속성을 추가할 떄 사용

         	3. ```scss
             @mixin icon($url){
               &::after{
                 content: $url;
                 @content;
               }
             }
             .box1{
               @include icon("image/icon1.png");
             }
             .box2{
               @include icon("image/icon2.png"){
                 display: block;
                 position: absolute;
                 width: 100px;
                 height: 100px;
               };
             }
             ```

         	4. ```css
             .box1::after {
               content: "image/icon1.png";
             }
             
             .box2::after {
               content: "image/icon2.png";
               display: block;
               position: absolute;
               width: 100px;
               height: 100px;
             }
             ```

         	5. mixin부분에 @content를 추가하고 @include로 불러오면 {}을 추가해서 추가 속성을 넣어준다.

	15. 확장

     	1. @extend 선택자; 문법이다.

     	2. 특정 선택자가 다른 선택자의 모든 속성을 가지고 있여야 할 때 사용

     	3. ```scss
         .btn{
             padding: 10px;
             margin:10px;
             background: blue;
         }
         .btn-danger{
             @extend .btn;
             background: red;
         }
         ```

     	4. ```css
         .btn, .btn-danger {
           padding: 10px;
           margin: 10px;
           background: blue;
         }
         
         .btn-danger {
           background: red;
         }
         ```

     	5. @extend를 몇가지 문제를 고려해야 한다.

         * 내 현재 선택자가 어디에 첨부될 것인가?
         * 원치 않은 부작용이 초래될 수 있는가?
         * 이 한 번의 확장으로 얼마나 큰 css가 생성되는가
         * [다중선택자로 만들어지기 떄문에 권장하지 않으며 가능하면 mixin으로 완벽하게 대체 가능하며 가능하면 mixin을 사용하자](https://sass-guidelin.es/ko/#extend)

	16. @function @return

     	1. mixin과 비슷하지만 반환되는 내용이 다르다.

     	2. 사용할 때는 다른 언어와 같다.

     	3. ```scss
         //부모 크기를 나누는 함수이다.
         @function columns($number : 1, $columns : 12, $width : 980px){
           @return $width * ($number/$columns);
         }
         
         .container{
           $width: 980px;
           width: $width;
           .item:nth-child(1){
             width: columns();
           }
           .item:nth-child(2){
             width: columns(8);
           }
           .item:nth-child(3){
             width: columns(3);
           }
         }
         ```

     	4. ```css
         .container {
           width: 980px;
         }
         .container .item:nth-child(1) {
           width: 81.6666666667px;
         }
         .container .item:nth-child(2) {
           width: 653.3333333333px;
         }
         .container .item:nth-child(3) {
           width: 245px;
         }
         ```

     	5. 위에서 만든 사용자 정의 함수와 달리 시스템 내에 있는 내장 함수가 있다.

         	1. 같은 이름의 함수를 만들면 이름이 충돌하기 때문에 별도의 접두어를 붙여 만드는게 좋다.

	17. 조건과 반복

     	1. if(함수)

         	1. 자바스크립트의 삼항 연산자와 비슷

         	2. if(조건, 표현식1, 표현식2), 맞을경우는 표현식1 틀리면 표현식2

         	3. ```scss
             $width: 555px;
             div{
               width: if($width > 300px, $width, null);
             }
             ```

         	4. ```css
             div {
               width: 555px;
             }
             ```

     	2. @if(지시어)

         	1.  자바스크립트의 if와 비슷

         	2. @if @else을 사용한다.

         	3. ```scss
             $bg: true;
             div{
               @if($bg){
                 background: url("/img/a.jpg");
                 }@else{
                   background: red;   
                 }
             }
             ```

         	4. ```css
             div {
               background: url("/img/a.jpg");
             }
             ```

     	3. @for

         	1. 스타일을 반복적으로 출력한다. for문과 비슷

         	2. @for $변수 from 시작 through 종료{} 방식과 @for $변수 from 시작 to 종료{} 방식이 있다.

         	3. ```scss
             @for $i from 1 through 3 {
               .through:nth-child(#{$i}){
                 width: 20px * $i;
               }
             }
             
             @for $i from 1 to 3{
               .to:nth-child(#{$i}){
                 width: 20px *$i;
               }
             }
             ```

         	4. ```css
             .through:nth-child(1) {
               width: 20px;
             }
             
             .through:nth-child(2) {
               width: 40px;
             }
             
             .through:nth-child(3) {
               width: 60px;
             }
             
             .to:nth-child(1) {
               width: 20px;
             }
             
             .to:nth-child(2) {
               width: 40px;
             }
             ```

         	5. through는 처음부터 끝까지이지만 to는 처음부터 끝 전까지이다.

     	4. @each

         	1. List와 Map 데이터를 반복할 때 사용한다.

         	2. for in 문과 유사함

         	3. ```scss
             //List Data
             $fruits: (apple, orange, banana, mango);
             .fruits{
               @each $fruit in $fruits{
                 li.#{$fruit} {
                   background: url("/images/#{$fruit}.png");
                 }
               }
             }
             //Map Data
             $fruits-data: (
               apple: korea, 
               orange: china,
               banana: japan
             );
             
             @each $key, $value in $fruits-data{
               .box-#{key}{
                 //map-keys($fruits-data) => (apple, orange, banana)
                 //map-values($fruits-data) => (korea, china, japan)
                 //위의 함수를 사용하여 키와 값을 가져올 수 있다.
                 background: url("/img/#{value}.png");
               }
             }
             ```

         	4. ```css
             //List Data
             .fruits li.apple {
               background: url("/images/apple.png");
             }
             .fruits li.orange {
               background: url("/images/orange.png");
             }
             .fruits li.banana {
               background: url("/images/banana.png");
             }
             .fruits li.mango {
               background: url("/images/mango.png");
             }
             //Map Daya
             .box-key {
               background: url("/img/value.png");
             }
             
             .box-key {
               background: url("/img/value.png");
             }
             
             .box-key {
               background: url("/img/value.png");
             }
             ```

         	5. index를 사용해서 만든 @each문

             	1. ```scss
                 //List Data
                 $fruits: (apple, orange, banana, mango);
                 
                 .fruits{
                   @each $fruit in $fruits{
                     $index: index($fruits, $fruit);
                     li:nth-child(#{$index}){
                       left: 50px * $index;
                     }
                   }
                 }
                 ```

             	2. ```css
                 .fruits li:nth-child(1) {
                   left: 50px;
                 }
                 .fruits li:nth-child(2) {
                   left: 100px;
                 }
                 .fruits li:nth-child(3) {
                   left: 150px;
                 }
                 .fruits li:nth-child(4) {
                   left: 200px;
                 }
                 ```

     	5.  @while

         	1. 조건이 false로 평가될 때까지 내용을 반복한다.
         	2. 단 @for @each로 가능하기 떄문에 되도록 쓰지말자

	18. 내장 함수

     	1. Sass에서 기본적으로 제공하는 [내장 함수](https://sass-lang.com/documentation/modules)의 종류가 많다.

     ​	