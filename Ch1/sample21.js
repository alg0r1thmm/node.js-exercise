function work(sec, callback){
    setTimeout(() => {
        callback(new Date().toISOString());
    }, sec * 1000);
};
/*code 1*/
// work(1, (result) => {
//     console.log('첫 번째 작업', result);
// });

// work(1, (result) => {
//     console.log('두 번째 작업', result);
// });

// work(1, (result) => {
//     console.log('세 번째 작업', result);
// });

/*code 2*/
// work(1, (result) => {
//     console.log('첫 번째 작업', result);

//     work(1, (result) => {
//         console.log('두 번째 작업', result);
        
//         work(1, (result) => {
//             console.log('세 번째 작업', result);
//         });
//     });
// });

/*code 3*/
work(1, (result) => {
    console.log('첫 번째 작업', result);

    work(1, (result) => {

        work(1, (result) => {
            console.log('세 번째 작업', result);
        })

        console.log('두 번째 작업', result);
    })
});

/*
code 3를 살펴보면 1-3-2 방식으로 진행 될 것 같지만 실제 동작 순서는 1-2-3임
이럴 때 사용하는것이 Promise 이다.
*/