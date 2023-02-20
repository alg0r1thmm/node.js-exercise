let puppy = "cute";
{
    let puppy = "so cute";
}
console.log(puppy);

/*
let과 conse는 block-level-scope이며, 블록 내부에서 선언된 변수는 외부에 영향을 끼치지 않음
1행의 puppy와 5행의 puppy는 이름만 같을 뿐 다른 변수
*/