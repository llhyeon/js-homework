/* -------------------------------------------------------------------------- */
/*                             객체의 특정 키 값을 가져오는 함수                            */
/* -------------------------------------------------------------------------- */
function getValueAtObject(obj, key) {
  // key 값이 객체 안에 있을 경우
  if (key in obj) {
    const result = obj[key];
    return result;
  } else {
    console.error("올바른 키 값을 입력하세요.");
    return;
  }
}

/* -------------------------------------------------------------------------- */
/*                           배열에서 특정 인덱스의 값을 가져오는 함수                          */
/* -------------------------------------------------------------------------- */
function getNumberAtArray(arr, index) {
  // index가 배열의 길이 범위 안에 있는 경우
  if (index >= 0 && index < arr.length) {
    const result = arr[index];
    return result;
  } else {
    console.error("올바른 인덱스 값을 입력하세요");
    return;
  }
}
