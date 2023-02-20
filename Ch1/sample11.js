const add = (a,b) => {
    return a + b;
}

console.log(add(1,4));

/*
함수를 function 대신 화살표 함수인 =>를 통해 선언 가능하며 흔히 람다식이라고 함

const add = (a, b) = a + b; 로 줄여서 사용 가능

화살표 함수에는 함수명, arguments, this 가 없으며, 익명 함수로 동작함

const func = function() {
    console.log(arguments);
}

func (1, 2, 3, 4); // [Arguments] { '0' : 1, '1': 2 , '2':3, '3':4 }

보통 함수 행성 시 자신의 스코프 안에 자기 자신을 가리키는 this와 파라미터가 담기는 arguments 가 자동 생성

화살표 함수에는 arguments가 자동 생성 되지 않기 때문에 필요 시
함수 파라미터 부분에 ...args 삽입해 파라미터를 담을 수 있음
*/