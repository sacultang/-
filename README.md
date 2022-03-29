# 정규표현식(RegExp)

정규식, Regular Expression

## 역할

- 문자 검색(search)
- 문자 대체(replace)
- 문자 추출(extract)

## 테스트 사이트

https://regexr.com/

## 정규식 생성

```js 
// 생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]','gi')

//리터럴
/표현/옵션
/[a-z]/gi
```

## 정규표현식 메소드

메소드 | 문법 | 설명  
--|--|--
exec | 정규석.exec(문법)|일치하는 하나의 정보(Array) 반환
test | 정규식.test(문자열) | 일치 여부(Boolean) 반환
match  | 문자열.match(정규식) | 일치하는 문자열의 배열(Array) 반환
search | 문자열.search(정규식)  | 일치하는 문자열의 인덱스(Number) 반환
replace  | 문자열.replace(정규식,대체문자)  | 일치하는 문자열을 대체하고 대체된 문자열(String) 반환
split | 문자열.split(정규식) | 일치하는 문자열을 분할하여 배열(Array)로 반환
toString  | 생성자_정규식.toString()  | 생성자 함수 방식의 정규식을 리터럴 방식의 문자열(String)로 반환

## 예제 문자

```js
  const str = `
  010-1234-5895
  thebrown@gmail.com
  http://www.omdbapi.com/?i=tt3896198&apikey=f6573a61&s=lion
  The quick brown fox jumps over the lazy dog.
  abbcccdddd
  `
```
