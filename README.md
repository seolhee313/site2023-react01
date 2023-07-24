## React.js 사이트 만들기
Node.js를 통해 CMD에서 터미널을 설정하고 NPM으로 JS라이브러리를 설치한 후, 컴퍼넌트를 생성하여 싱글페 이지를 출력시켜 만든 React를 사이트입니다.<br>
API를 이 용한 유튜브 페이지에서 동영상 목록과 검색이 가능하며 영화페이지에선 영화 목록과 검색이 가능합니다. REACT HOOK함수도 사용했습니다.

![image](https://github.com/seolhee313/site2023-react01/assets/125417882/193534a5-e1ca-4e32-bb52-371312c41b02)

- Live Demo : https://sitecheon-react01.netlify.app/
- 작업 기간 : 7일


## 사용 스택

- React 18.2.0
- Swiper 9.4.1
- SASS 1.63.3

## 특징

- [YOUTUBE](https://console.cloud.google.com/apis/) API를 이용한 목록, 검색 기능 구현
- [UNSPLASH](https://www.postman.com/downloads/) API를 이용한 목록, 검색, 이미지 슬라이드 구현
- [MOVIE](https://www.themoviedb.org/?language=ko) API를 이용한, 목록, 검색, 이미지 슬라이드 구현


## 학습

- 컴포넌트 기반 아키텍처를 사용하여 독립적이고 재사용이 더욱 쉽습니다. UI의 작은 부분을 캡슐화하여 개발하고 관리하기 쉽게 합니다.
- JSX를 사용하여 컴포넌트의 구조를 선언적이고 직관적으로 표현할 수 있으며, 컴포넌트의 렌더링을 쉽게 구성할 수 있습니다.
- 가상 DOM을 사용하여 DOM 조작을 최소화하고 변경 사항을 효율적으로 감지하여 불필요한 렌더링을 방지합니다.
- 리액트는 단방향 데이터 흐름을 지원합니다. 데이터는 상위 컴포넌트에서 하위 컴포넌트로만 전달되며, 하위 컴포넌트는 상위 컴포넌트의 데이터를 수정할 수 없습니다. 이로 인해 데이터의 흐름이 예측 가능하고 유지 보수가 용이해집니다.


## 개발 환경 프로젝트 실행 방법 

1. **레포지토리 클론 :** `git clone https://github.com/seolhee313/site2023-react01`
2. **Node.js와 npm 설치 :** `Node.js 공식 웹사이트에서 Node.js를 다운로드하고 설치. Node.js를 설치하면 npm도 함께 설치됩니다.`([ Node.js ](https://nodejs.org))
3. **React 프로젝트 생성 :** `npx create-react-app my-react-app`
4. **scss 설치 :** `npm install node-sass`
5. **router 설치 :** `npm install react-router-dom`
6. **swiper 설치 :** `npm install swiper`
7. **프로젝트 시작 :** `npm run start`

## API 요청
1. **YOUTUBE :** ([ YouTube Data API v3 ](https://console.cloud.google.com/apis/)에서 API Key 발급 필요)
1. **UNSPLASH :** ([ postman ](https://www.postman.com/downloads/)에서 API Key 발급 필요)
1. **MOVIE :** ([ themoviedb ](https://www.themoviedb.org/?language=ko)에서 API Key 발급 필요)


## Screenshots

![image](https://github.com/seolhee313/site2023-react01/assets/125417882/925a3aeb-51f4-4131-8a37-8296b62817b7)
![image](https://github.com/seolhee313/site2023-react01/assets/125417882/cfd14920-6c5d-45f6-9252-4c5533a2d76d)
![image](https://github.com/seolhee313/site2023-react01/assets/125417882/1cc35930-2eda-462e-a3cc-ca0b17f06b64)