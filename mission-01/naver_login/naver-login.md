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
3. [이벤트 바인딩](#이벤트-바인딩)
4. [과제 회고](#과제-회고)

---

## 이메일, 패스워드 핸들링 함수

- 이벤트 객체를 인자로 받는 `handleCheckEmail`, `handleCheckPw` 함수를 사용하였다.

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

- 전체 코드는 아래와 같다.

  ```js
  // email 체크 핸들러 함수
  function handleCheckEmail(e) {
    const userInputData = e.currentTarget.value;
    const validation = emailReg(userInputData);

    if (!validation) {
      e.currentTarget.classList.add("is--invalid");
    } else {
      e.currentTarget.classList.remove("is--invalid");
    }
  }

  // password 체크 핸들러 함수
  function handleCheckPw(e) {
    const userInputData = e.currentTarget.value;
    const validation = pwReg(userInputData);

    if (!validation) {
      e.currentTarget.classList.add("is--invalid");
    } else {
      e.currentTarget.classList.remove("is--invalid");
    }
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

- 이메일과 패스워드의 `Validation State`를 갖고 있는 객체를 만든 후 유저가 입력한 값과 비교하여 `true` 또는 `false` 의 값을 전달하였다.(기본값은 false)

  - `user` 객체를 미리 구조분해할당하여 ID, PW 변수를 사용하였다.

  ```js
  const { id: ID, pw: PW } = user;
  ```

  ```js
  const validation = {
    isIdValid: false,
    isPwValid: false,
  };
  ```

  ```js
  let { isIdValid, isPwValid } = validation;

  if (userInputId.value === ID) isIdValid = true;
  if (userInputPw.value === PW) isPwValid = true;
  ```

- `Validation State` 값이 모두 `true` 이면 페이지 이동을 할 수 있게 설정하였고, 둘 중 하나라도 `false` 상태라면 `alert` 창을 통해 유저에게 invalid한 값임을 알려주고 `focus` 함수를 통해 다시 아이디 입력창에 포커스가 되도록하였다.
  ```js
  if (isIdValid && isPwValid) {
    window.location.href = "welcome.html";
  } else {
    alert("올바르지 않은 유저 정보입니다.");
    userInputId.value = "";
    userInputPw.value = "";
    userInputId.focus();
  }
  ```
- 전체 코드는 아래와 같다.

  ```js
  function handleLogin(e) {
    e.preventDefault(); // form 기본동작 제어

    let { isIdValid, isPwValid } = validation;
    if (userInputId.value === ID) isIdValid = true;
    if (userInputPw.value === PW) isPwValid = true;

    if (isIdValid && isPwValid) {
      window.location.href = "welcome.html";
    } else {
      alert("올바르지 않은 유저 정보입니다.");
      userInputId.value = "";
      userInputPw.value = "";
      userInputId.focus();
    }
  }
  ```

## 이벤트 바인딩

- 위에 만들어 놓은 함수들을 각각의 엘리먼트 요소에 `addEventListener` 메서드를 통해 바인딩하였다.

  - 미리 만들어 둔 `getUserData` 함수를 사용해 해당 클래스의 DOM Element를 가져왔다. `getUserData` 함수는 `className`을 파라미터로 받는다.

    ```js
    function getUserData(className) {
      return document.querySelector(className);
    }
    ```

  ```js
  const userInputId = getUserData(".user-email-input");
  const userInputPw = getUserData(".user-password-input");
  const loginBtn = getUserData(".btn-login");

  userInputId.addEventListener("input", handleCheckEmail);
  userInputPw.addEventListener("input", handleCheckPw);
  loginBtn.addEventListener("click", handleLogin);
  ```

## 과제 회고

1. 과제를 진행하며 가장 크게 느꼈던 부분은 `함수를 기능별로 작게 분리하는 것은 생각보다 쉽지 않다` 였다.

   - **_함수의 기능을 어디까지로 설정할지_**
   - **_함수를 나눴을 때의 리턴값과 인자값 처리_**

   에 대한 부분이 아직 스스로 명확히 세워지지 않았음을 많이 느꼈다.

### 과제 파일 링크

[네이버 로그인 구현 과제 JS 파일링크](./js/main.js)
