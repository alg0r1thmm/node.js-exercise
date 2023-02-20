function func() { }
console.log(func.prototype);

func.prototype.name = 'Seungwon';
console.log(func.prototype);

/*
JavaScript에서 기본 데이터 타입을 제외한 모든 것이 객체
해당 객체의 원형인 prototype을 이용해 새로운 객체를 만들어내고 이렇게 생성된 객체는
다른 객체의 원형이 되어 새로운 객체를 만들 수 있음
prototype은 객체의 프로퍼티 중 용도가 약속되어 있는 특수한 프로퍼티이며 해당 객체도 마찬가지
*/