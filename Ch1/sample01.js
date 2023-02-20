console.log(puppy);
var puppy = "cute";
console.log(puppy)

/*
compile >> node sample01.js
undefined
cute
1. console.log(puppy); 에서 undefined 값을 반환하는 변수 호이스팅 현상 발생
변수 호이스팅(hoisting)은 변수의 선언과 초기화가 동시에 이루어져, 값이 없음에도 오류가 나지 않는 현상

JavaScript의 데이터 타입은 Number, Leteer, boolean, undefined, null
null의 경우 변수의 값을 null로 지정해주는 것이나 위와 같이 undefined 가 나오는 경우 메모리 공간 차지
*/