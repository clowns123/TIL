use world;

#어제 배운거
#select 컬럼 from 테이블
#where 조건절 (or, and, beteewn )
#order by (오름차순 asc, 내림차순 desc)
#limt (스킵할 수) 나타낼 수

select code, name, continent, population, gnp, gnp/population "a"
from country
where gnp >= 100000 and population >= 1000000
order by a desc
limit 5;


#quiz 6
select countrycode, language, percentage from countrylanguage
where language in("spanish", "korean", "english")
and percentage >= 95
order by percentage desc;

#quiz7
select code, name, continent, GovernmentForm, population from country
where GovernmentForm like("%republic%") and code like("A%");

#quiz 9
use sakila;
select film_id, title, description from film_text
where description like("%Drama%")
and title like("%ICE%");

#quiz 10
select title, description, category, length, price 
from film_list
where (price between 1 and 4)
and (length >= 180 )
and (category not in ("Sci-Fi", "Animation"));


#오늘 배우기
use world;
#GROUP BY HAVING
#여러개의 동일한 데이터를 가지는 특정 컬럼을 합쳐주는 문법
#그룹함수 : COUNT, MAX, MIN, VAR_SAMP, STDDEV
#city 국가별 도시의 수
select countryCode, count(countryCode) "도시 수"
from city
group by countryCode;

#전체 언어가 몇개있는지 출력
#distinct는 중복제거
select count(DISTINCT(language))
from countrylanguage;

#max : 대륙별 인구수와 gnp의 최댓값 구하기
select continent, MAX(population), max(gnp) from country
group by continent;

#sum : 대륙별 총 인구수, 총 gnp
select continent, sum(population) "a", sum(gnp)"b"
 , sum(gnp) / sum(population) "c"
from country
group by continent
order by c desc;

#having : group by 결과 데이터에 대한 조건을 입력해서 조회
#대륙별 인구수 중 5억 이상 대륙
select continent, sum(population) "population"
from country
group by continent
having population >= 500000000;

#quiz 1
use world;
select continent from country
group by continent;
select DISTINCT(continent)
from country;

#quiz 2
use sakila;
select country, count(country)
from customer_list
where country = "India";

select country, count(country) 
from customer_list
group by country
having country = "India";

#quiz 8
select first_name, count(first_name) 
from actor
group by first_name
having first_name like("DAN%");


# 데이터 베이스 생성
CREATE DATABASE test;
#데이터베이스 이동
use test;
SELECT DATABASE();
#테이블 생성
#데이터 타입은 필수 제약 조건은 추가로 기입할 수 있다.
CREATE TABLE USER1(
	user_id INT,
    name varchar(20),
    email varchar(30),
    age INT(3),
    rdate DATE
);

CREATE TABLE USER2(
	user_id INT primary key auto_increment,
    name varchar(20) not null,
    email varchar(30) not null unique,
    age INT(3) default 30,
    rdate timestamp
);
desc USER1;
desc USER2;

#ALTER : 데이터 수정
show variables like "character_set_database";
#문자 인코딩 방식 변경
ALTER DATABASE test character set = utf8;
#테이블 속성 변경
DESC USER2;
#USER2 테이블에 text 데이터 타입을 갖는 article 컬럼 추가
alter table USER2 ADD article TEXT;
#USER2 테이블의 article 컬럼을 int로 변경
alter table USER2 modify article int;
#article 컬럼 삭제
alter table USER2 DROP article;

#insert
INSERT INTO USER1 (user_id, name, email, age, rdate)
values (1, "jin", "jin@naver.com", 21, "2017-01-02");
select * from USER1;
INSERT INTO USER1 (user_id, name, email, age, rdate)
values (2, "jin", "jin@naver.com", 21, "2017-01-02"),
(3, "asd", "jin123@naver.com", 31, "2017-01-02"),
(4, "qwe", "jin123@naver.com", 41, "2017-01-02"),
(5, "zxc", "ji123n@naver.com", 51, "2017-01-02"),
(6, "ghj", "23n@naver.com", 71, now());
delete from USER1
where user_id = 1;

use world;
CREATE TABLE city_2(
name varchar(50),
countrycode char(3),
district varchar(50),
population int
);

DESC city_2;
select name, countrycode, district, population
from city
where population > 8000000;

insert into city_2
select name, countrycode, district, population
from city
where population > 8000000;
select * from city_2;


use test;
select * from USER1;

UPDATE USER1
set user_id=0, email="test", name="test"
where age=21
limit 1;

delete from USER1
where age < 25
limit 100;

truncate USER1;

#테이블 삭제
drop table USER1;
#db삭제
drop database test;


#함수에 대하여
#CEIL, ROUND, TRUNCATE, DATE_FROMAT
select ceil(12.456);
select round(12.675, 2);
select truncate(12.456, 2);

#date_format : https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html
use sakila;
select date_format(payment_date, "%Y-%m") "date",
amount
from payment;

#IF, IFNULL, CASE
use world;
#도시의 인구가 100만이 넘으면 "big_city", 아니면 "small_city""
select name, population,
if(population >= 1000000, "big_city", "small_city")
"크고 작은 도시"
from city;
#null데이터가 있는지 없는지 확인
select ifnull(indepyear, 0)
from country;
#case
#나라별로 인구가 10억 이상 1억이상 1억 미만 구분
select name, population,
case
when population >= 100000000 then "upper 1 bilion"
when population >= 10000000 then "upper 100 milion"
else "below 100 mlion"
end "result"
from country
order by population;