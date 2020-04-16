SELECT * FROM world.city;
use world;
#and : 양 조건이 맞는것을 출력한다.
SELECT Name, Countrycode, population
FROM world.city
WHERE population >= 8000000 AND population <=9000000;

SELECT Name, Countrycode, population
FROM world.city
WHERE population BETWEEN 8000000 AND 9000000;

#or : 조건 중 하나만 맞아도 출력한다.
SELECT *
FROM country
WHERE continent = "Asia" or continent = "Africa";

SELECT *
FROM country
WHERE continent IN("Asia", "Africa");

#Like : 특정 문자열이 포함되는 문자열을 출력
SELECT *
FROM country
WHERE GovernmentForm LIKE "%Republic";

#정렬 : order by
#ASC : 오름차순
#DESC : 내림차순

SELECT *
FROM country
ORDER BY Population ASC;

SELECT *
FROM country
WHERE Population < 1000000000000
ORDER BY Population DESC;

##앞의 정렬을 한 뒤 같으면 뒤의 정렬을 한다.
SELECT * FROM city
ORDER BY CountryCode ASC, Populatuion DESC;

#LIMIT : 데이터 수를 제한하여 출력
SELECT * FROM country
order by population desc
limit 5;

## 앞의 5는 5개를 생략 후 3개의 도시를 출력하라
SELECT * FROM country
order by population desc
limit 5, 3;

#퀴즈
select name, population from city
where countryCode="KOR" and population >= 1000000
order by population desc;

select 	name, countrycode, population from city
where population between 8000000 and 10000000;