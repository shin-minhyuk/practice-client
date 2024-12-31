# Practice Login 클라이언트

React 클라이언트와 Express 서버를 활용한 간단한 로그인 시스템 연습 프로젝트입니다.

---

## 클라이언트 설정

1. 저장소를 클론한 후 클라이언트 디렉토리로 이동합니다.
2. 의존성 설치:
   ```bash
   npm install
   ```
3. 개발 서버 실행:
   ```bash
   npm run dev
   ```

- 클라이언트 포트 : `3000`

---

## 서버 설정

1. 서버 저장소를 클론합니다:
   ```bash
   git clone https://github.com/shin-minhyuk/practice-server.git
   ```
2. 서버 디렉토리로 이동:
   ```bash
   cd practice-server
   ```
3. 의존성 설치:
   ```bash
   npm install
   ```
4. 서버 실행:
   ```bash
   npm run dev
   ```

- 서버 포트 : `3010`

---

## 테스트 계정

로그인을 테스트하려면 다음 계정을 사용하세요:

- 이메일: `test@test.com`
- 비밀번호: `test0000`

---

## 참고 사항

- 클라이언트와 서버를 동시에 실행해야 정상적으로 작동합니다.
- 클라이언트는 서버와 HTTP 요청을 통해 통신합니다.
- 서버는 `http://localhost:3000`에서 요청을 수락하도록 CORS 설정이 되어 있습니다.
