var people = {
    name : 'Seungwon',
    say : function (){
        console.log(this);
    }
}

people.say();

var sayPeople = people.say.bind(people);
sayPeople();

/*
this를 객체로 고정하고 싶으면 bint 함수를 이용해 고정
this가 존재하지 않기 때문에 화살표 함수에서는 bind를 사용해도 this를 주입 불가
생성자인 new를 사용해 화살표 함수로 만들어진 객체의 인스턴스를 생성 불가능
화살표 함수로 만들어진 객체에 this 사용 시 일반적인 인자나 변수와 동일하게 취급
내부 Scope에 this가 없기 때문에 상위 함수의 this나 Gloabl 객체의 this를 불러오게 됨
*/