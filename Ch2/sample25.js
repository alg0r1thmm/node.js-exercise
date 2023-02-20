function sum(a,b){
    if (typeof a !== 'number' || typeof y !== 'number') {
        throw 'type of arguments must be number type';
    }
    console.log(a+b);
}

sum(1, '4');

/*
두 개의 인자를 받아 합을 출력하는 함수 생성 시 인자 타입이 number 여야 하는데,
throw를 통해 예외 발생을 시켜 직접 정의해준 오류를 출력
*/