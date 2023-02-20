const country = {
    name : "KOREA",
    population : "5178579",
    get_name : function() {
        return this.name;
    }
}

/*
객체가 가지고 있는 특징, 정보를 프로퍼티라고 하고 위커럼 키:'값' 형태로 작성함
객체는 프로퍼티 말고도 행위를 가질 수 있으며 객체 안에 함수를 넣어 만들 수 있음
위 코드의 경우에는 get_name이 해당하며 get_name처럼 객체 안에 함수가 있는 경우 Method 라고 함
*/