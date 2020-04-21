drop database fds;
create database test;
use test;
CREATE TABLE user (
user_id int(11) unsigned NOT NULL AUTO_INCREMENT,
name varchar(30) DEFAULT NULL,
PRIMARY KEY (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE addr (
 id int(11) unsigned NOT NULL AUTO_INCREMENT,
 addr varchar(30) DEFAULT NULL,
user_id int(11) DEFAULT NULL,
 PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

desc user;
INSERT INTO user(name)
VALUES ("jin"),
 ("po"),
 ("alice"),
 ("petter");
INSERT INTO addr(addr, user_id)
VALUES ("seoul", 1),
 ("pusan", 2),
 ("deajeon", 3),
 ("deagu", 5),
 ("seoul", 6); 
 
 select * from addr;
 select * from user;
 
 #inner join
 select user.user_id, user.name, addr.addr
 from user
 join addr
 on user.user_id = addr.user_id;
 
 select user.user_id, user.name, addr.addr
 from user, addr
 where user.user_id = addr.user_id;
 
 #world 데이터에서 도시이름과 국가 이름을 출력
 #국가 코드, 국가 이름, 도시 이름 출력
 use world;
 select city.countryCode, country.name as country_name, city.name "city_name"
 from city
 join country
 on city.CountryCode = country.code;
 
 
 #left join
 use test;
 select user.user_id, user.name, addr.addr
 from user
 left join addr
 on user.user_id = addr.user_id;
  
 #right join
  select user.user_id, user.name, addr.addr
 from user
 right join addr
 on user.user_id = addr.user_id;
 
#world : 지역과 대륙별로 사용하는 언어
use world;

select distinct country.region, country.continent, countrylanguage.language
from country
join countrylanguage
on countrylanguage.countrycode = country.code;

#국가별 도시별 언어 사용률
select country.name "나라 이름", city.name "도시 이름",
countrylanguage.language "언어", countrylanguage.percentage "퍼센트",
country.population,
round(country.population * countrylanguage.percentage/100)
from country
join city
on country.code = city.countrycode
join countrylanguage
on country.code = countrylanguage.countrycode;

select country.name "나라 이름", city.name "도시 이름",
countrylanguage.language "언어", countrylanguage.percentage "퍼센트",
country.population,
round(country.population * countrylanguage.percentage/100)
from country, city, countrylanguage
where country.code = city.countrycode
and country.code = countrylanguage.countrycode;

# union : 결과 데이터를 합쳐서 출력 중복 제거
# union all : 중복을 제거하지 않고 모두 출력
use test;
select name from user
union all
select addr from addr;

#full outer join
select user.user_id, user.name, addr.addr
from user
left join addr
on user.user_id = addr.user_id
union
select addr.user_id, user.name, addr.addr
from user
right join addr
on user.user_id = addr.user_id;

#서브 쿼리(sub query) : select
use world;

#전체 나라 수, 전체 도시 수, 전체 언어수 를 출력
select 
(select count(name) from country) "나라 수",
(select count(name) from city) "도시 수",
(select count(distinct(language)) from countrylanguage) "언어 수"
from dual;

# 800만 이상이 되는 도시의 국가코드, 국가이름, 도시이름, 도시인구수 출력
select city.countrycode, city.name, city.population, country.name
from (
	select countrycode, name, population
	from city
	where population > 8000000
) as city
join(
select code, name
from country
)as country
on city.countrycode = country.code;

#sub query : where
#800만 이상 도시의 국가코드, 국가이름, 대통령이름 출력
select code, name, headofstate
from country
where code in(
select distinct(countrycode)
from city
where population >= 8000000
);

#view
#가상테이블, 실제 데이터 저장 x
#복잡한 쿼리를 단순하게 만들어 주는 기능
#수정 및 인덱스 설정 x

create view big_city as
select distinct(countrycode)
from city
where population >= 8000000;

#view이다.
select * from big_city;


select code, name, headofstate
from country
where code in(
select distinct(countrycode)
from city
where population >= 8000000
);


#index
#테이블에서 데이터를 검색할때 빠르게 찾을 수 있게 해주는 기능
#장점 : 검색속도 빨라짐
#단점 1 : 테이블의 저장공간의 약 10% 정도를 더 사용
#단점 2 : insert, update, delete의 경우는 더 느려진다.
#사용범 : select 쿼리 실행시 where에 들어가는 컬럼을 index로 설정하면 좋다.

use employees;
#explain : 실행 계획 확인

explain
select *
from salaries
where to_date < "1986-01-01";

show index from salaries;

create index tdate
on salaries(to_date);

drop index tdate
on salaries;