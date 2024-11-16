const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

// 로그인 벨리데이션 상태 기본값 false로 설정
let isIdValid = false;
let isPwValid = true;

// 상수 값으로 id, pw 구조분해 할당
const { id: ID, pw: PW } = user;

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// 클래스 명을 통해 element 가져오는 함수
/**
 *
 * @param {string} className "클래스명 아규먼트 전달"
 * @returns void
 */
function getUserData(className) {
  return document.querySelector(className);
}

const userInputId = getUserData(".user-email-input");
const userInputPw = getUserData(".user-password-input");
const loginBtn = getUserData(".btn-login");

// email 체크 핸들러 함수
function handleCheckEmail(e) {
  const userInputData = e.currentTarget.value;
  const validation = emailReg(userInputData); // 유저 입력 이메일 데이터 validation 검사

  if (!validation) {
    e.currentTarget.classList.add("is--invalid");
  } else {
    e.currentTarget.classList.remove("is--invalid");
  }
}

// password 체크 핸들러 함수
function handleCheckPw(e) {
  const userInputData = e.currentTarget.value;
  const validation = pwReg(userInputData); // 유저 입력 비밀번호 데이터 validation 검사

  if (!validation) {
    e.currentTarget.classList.add("is--invalid");
  } else {
    e.currentTarget.classList.remove("is--invalid");
  }
}

// 로그인 핸들러 이벤트
function handleLogin(e) {
  e.preventDefault(); // form 기본동작 제어

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

// 가져온 input에 이벤트 바인딩
userInputId.addEventListener("input", handleCheckEmail);
userInputPw.addEventListener("input", handleCheckPw);

// 로그인 버튼에 이벤트 바인딩
loginBtn.addEventListener("click", handleLogin);
