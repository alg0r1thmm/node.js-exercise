setTimeout(() => {
    console.log('todo : First Work!');
}, 3000);

setTimeout(() => {
    console.log('todo : Second Work!');
}, 3000);

/*
setTimeout() 내장 함수를 이용해 Callback 함수와 지연 시간을 인자로 받아 실행하는 함수
First Work! 실행 후 3초가 경과하였고 Second Work! 로그를 찍는 함수는 2초가 걸리기 때문에
Second Work! 함수를 먼저 실행함
*/