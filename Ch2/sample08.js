const coffee = [];

coffee.push({ name : 'Americano' })
coffee.push({ name : 'Latte' })

console.log(coffee);
console.log(coffee[0]);
console.log(coffee.length);

/*
배열은 index를 기준으로 0 부터 증가하게 되며 숫자, 문자열, 객체 등 어떤 것이든 요소로 넣을 수 있음
위 예제는 객체를 요소에 넣어 객체 배열을 생성한 것
요소를 추가하고 싶으면 .push() 내장 함수를 이용해 원하는 요소를 밀어 넣을 수 있음
*/