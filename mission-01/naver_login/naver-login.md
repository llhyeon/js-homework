# 2주차 과제

## 과제 목표

1. **email 정규표현식을 활용하여 email validation checking**
2. **password 정규표현식을 활용하여 password validation checking**
3. **로그인 상태 변수 관리**
4. **input, click 이벤트 바인딩**

---

## 목차

1. [이메일, 패스워드 핸들링 함수](#이메일-패스워드-핸들링-함수)
2. [로그인 핸들링 함수](#로그인-핸들링-함수)
3. 이벤트 바인딩
4. 과제 회고

---

## 이메일, 패스워드 핸들링 함수

- 이벤트 객체를 인자로 받는 `handleCheckEmail` 함수를 사용하였다.

  ```js
  function handleCheckEmail(e) {}
  function handleCheckPw(e) {}
  ```

- 이벤트 객체의 `currentTarget` 프로퍼티를 사용하여 유저가 입력한 input 데이터를 가져온 후 미리 만들어져 있는 `emailReg`, `pwReg` 함수를 통해 각각의 validation 검사를 진행하였다.

  ```js
  const userInputData = e.currentTarget.value;
  // 이메일의 경우
  const validation = emailReg(userInputData);
  // 패스워드의 경우
  const validation = pwReg(userInputData);
  ```

- validation 값이 `true` 면 `is--invalid` 클래스를 추가하였고, validation 값이 `false` 면 `is--invalid` 클래스를 제거하였다.

  ```js
  if (!validation) {
    e.currentTarget.classList.add("is--invalid");
  } else {
    e.currentTarget.classList.remove("is--invalid");
  }
  ```

## 로그인 핸들링 함수

- 마찬가지로 이벤트 객체를 인자로 받는 `handleLogin(e) {}` 함수를 만들어 사용하였다.

  ```js
  function handleLogin(e) {}
  ```

- `form` 요소를 다루는 이벤트이기에 e.preventDefault() 메서드를 사용하여 `form` 요소의 기본 동작을 막았다.

  ```js
  function handleLogin(e) {
    e.preventDefault();
  }
  ```

- 이메일과 패스워드의 `Validation State`를 갖고 있는 변수를 만든 후 유저가 입력한 값과 비교하여 `true` 또는 `false` 의 값을 전달하였다.(기본값은 false)

  - `user` 객체를 미리 구조분해할당하여 ID, PW 변수를 사용하였다.

  ```js
  const { id: ID, pw: PW } = user;
  ```

  ```js
  let isIdValid = false;
  let isPwValid = true;
  ```

  ```js
  if (userInputId.value === ID) isIdValid = true;
  if (userInputPw.value === PW) isPwValid = true;
  ```

<!-- - 미리 만들어 둔 `getUserData` 함수를 사용해 해당 클래스의 DOM Element를 가져왔다.

  ```js
  function getUserData(className) {
    return document.querySelector(className);
  }
  ```

- -->
