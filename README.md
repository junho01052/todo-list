# React 1주차 과제

[배포 링크](https://todo-list-ftduasep8-junho01052.vercel.app/)

## 실행 방법 (로컬 환경)
1. npm install
2. npm run start

## 과제 설명
* 서버와 데이터를 주고 받기 위해 / 페이지가 리랜더링 되어도 데이터 값을 그대로 유지시키기 위해 json-server 사용
* json-server는 glitch를 통해 배포
* 가독성을 높이고 CSS in JS를 위해 styled-component 사용
* 비동기 HTTP 통신, fetch를 사용하는 코드 보다의 높은 가독성을 위해 axios 사용
* TodoList를 추가하면 제목 입력 부분에 다시 포커싱 하기 위해 useRef 사용
* 데이터가 변경될 때마다 페이지 리랜더링을 위해 useState(setReFetch) 사용
* 추후 확장성을 위해 로그인(메인)페이지, 회원가입 페이지 구성(기능구현x)

## 사용 라이브러리
* axios
* styled-components
