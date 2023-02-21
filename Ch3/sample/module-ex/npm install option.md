# 모듈을 내보내는 방식

|옵션|설명|
|------|---|
|npm install [package name]| - 일반적인 설치로 현재 프로젝트 폴더 안의 node_nodules/ 에 설치 <br/> - package.json의 'dependencies'에 기록|
|npm install -D [package name]| - 개발 모드에서만 사용할 모듈 설치 시 사용하는 옵션 <br/> - package.json의 'devDependencies'에 기록|
|npm install - g [package name]| - 전역 설치 시 사용하는 명령어로 현 프로젝트 안의 모든 프로젝트에 사용하고 싶을 때 사용 <br/> - node_vmodules/ 파일에 패키지가 설치되고, package.json에는 기록되지 않음|
|npm install -O [package name]|- package.json의 'optionDependencies'에 기록|
|npm install --force [package name]|- 복사본이 있는 경우에도 강제로 설치|