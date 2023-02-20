var people = {
    name : 'Seungwon',
    say : function (){
        console.log(this);
    }
}

people.say();

var sayPeople = people.say;
sayPeople();

/*
poeple.say() 에서는 people 객체가 say()를 호출했기 때문에 this는 poeple 객체가 됨
sayPeople 변수에 people.say를 넣고 호출한 경우 Gloabl이 호출한 주체가 되므로
this는 Global 객체가 됨
*/