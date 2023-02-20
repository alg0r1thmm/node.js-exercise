setTimeout(() => {
    setTimeout(() => {
        console.log('todo : Second Work!');
    }, 2000);
    console.log('todo : First Work!');
}, 3000);

/*
First Work! 로그를 찍는 setTimeout() 함수와 Second Work! 로그를 찍는 함수가
순차적으로 처리되지 않기 때문에 '비동기' 작업이라고 함
CallBack 함수를 이용해 비동기 작업을 동기적으로 처리해 Second Work! 로그를 찍는 함수를 싱랭 가능
*/