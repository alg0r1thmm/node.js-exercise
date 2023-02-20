function outer() {
    var a = 'A';
    var b = 'B';

    function inner(){
        var a = 'AA';
        console.log(b);
    }
    return inner;
}

var outerFunc = outer();
outerFunc();

/*
클로저 (closure) 는 내부 함수가 외부 함수의 Scope 범위 내에 접근 할 수 있는 것을 말함
JavaScript 의 Scope 는 함수 단위로 생성되는데 위 코드의 경우에는 inner() 함수의 Scope가 outer() 함수의
스코프를 참조하고 있고 ouiter()의 실행이 끝나고 소멸된 이후에도 inner() 함수가 outer() 함수의
스코프에 접근 할 수 있는 것을 클로저 라고 함
*/