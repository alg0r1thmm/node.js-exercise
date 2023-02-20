function workP(sec){
    //Promise의 인스턴스 반환
    //then에서 반환한 것을 받음

    return new Promise((resolve, reject) => {
        //Promise 생성 시 넘기는 callback = resolve, reject
        //resolve 동작 완료 시 호출, 오류 발생 시 reject

        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
}

workP(1).then((result) => {
    console.log('첫 번째 작업', result);
    return (workP(1));
}).then((result) => {
    console.log('두 번째 작업', result);
    return (workP(1));
}).then((result) => {
    console.log('세 번째 작업', result);
});

/*
workP() 함수는 new 키워드를 통해 Promise 인스턴스를 생성하여 반환 (인스턴스 코드에 구현된 객체가 실제 메모리에 할당)
Promise 생성 시 resolve 와 reject를 넘기는데, resolve 함수는 callback 함수와 비슷한 것이라고 생각
workP() 요청 성공 시 resolve 함수 호출, 실패 시 reject 함수 호출

then()은 Chaining 해서 사용 가능하며 callback을 순차적으로 지정하여 비동기 처리
첫 번째 then()에서 두 번째 then()에서 받고 싶은 겨로가 갑승ㄹ 반환 후 두 번째 then()에서 이어받음
*/