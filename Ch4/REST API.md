# HTTP 요청 메서드

* POST : 데이터를 추가 (CREATE)
* GET : 데이터를 읽거나 조회 (READ)
* PUT : 데이터를 변경 (UPDATE)
* PATCH : 데이터를 일부만 변경
* DELETE : 데이터를 삭제

# REST API 예시

|http 메서드|URI|요청 내용|
|------|---|---|
|GET/|/categoty/2/books|카테고리 번호가 2인 책의 정보를 조회|
|POST/|/categoty/2/books|새로 들어온 책의 정보를 등록|
|PUT/|/categoty/2/books/4|책 번호가 4인 책의 정보를 변|
|DELETE/|/categoty/2/books/4|책 번호가 4인 책의 정보를 삭제|
