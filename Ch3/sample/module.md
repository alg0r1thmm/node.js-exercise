# 모듈을 내보내는 방식

|구분|정의 방식|require() 호출|
|------|---|---|
|exports|값 자체 할당이 아닌, 외부로 보낼 요소를 exports 객체의 프로퍼티 또는 메서드로 추가|프로퍼티와 메서드가 담긴 exports 객체를 require()로 받음|
|module.exports|객체에 하나의 값(원시 타입, 함수, 객체)만 할당 가능|module.exports 객체에 할당된 값 자체를 require()를 통해 전달|

<br/>

```
project/
├── app.js
└── module/
    ├── index.js
    ├── calc.js
    └── print.js

const Root = require('./module');
```
<br/>
* module/ directory 하나만 require 할 시 내부에있는 index.js, calc.js, priont.js 모두 사용 가능
