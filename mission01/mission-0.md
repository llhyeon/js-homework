# 1주차 과제 회고록

## 목차

- [getValueAtObject 함수 만들기](#getvalueatobject-함수-만들기)
- [getNumberAtArray 함수 만들기](#getnumberatarray-함수-만들기)

## getValueAtObject 함수 만들기

1. `obj`와 `key`를 파라미터로 받는 `getValueAtObject` 함수의 기본 틀 작성

   ```javascript
   function getValueAtObject(obj, key) {
     return;
   }
   ```

2. `if`문을 사용하여 키 값이 올바를 때만 `value`를 `return`하도록 작성

   ```javascript
   if (key in obj) {
     const result = obj[key];
     return result;
   }
   ```

3. `new Error`를 통해 올바른 키 값이 아닐 경우 에러객체 생성 후 `return`하도록하였음

   ```javascript
   const error = new Error("올바른 키 값을 입력하세요");
   return error;
   ```

---

## getNumberAtArray 함수 만들기

1. `arr`와 `idx`를 파라미터로 받는 `getValueAtObject` 함수의 기본 틀 작성

   ```javascript
   function getNumberAtArray(arr, index) {
     return;
   }
   ```

2. `if`문을 사용하여 인덱스 값이 올바를 때만 해당 인덱스의 값을 `return`하도록 작성

   ```javascript
   if (index >= 0 && index < arr.length) {
     const result = arr[index];
     return result;
   }
   ```

3. `new Error`를 통해 올바른 키 값이 아닐 경우 에러객체 생성 후 `return`하도록하였음

   ```javascript
   const error = new Error("올바른 인덱스 값을 입력하세요");
   return error;
   ```

---

## 과제를 진행하며..

- `Error`를 발생시키기 위하여 처음에는 `console.error`를 사용하였음
  - `Error`를 `return`하는 것이 아니라 콘솔에 출력하게 되면 에러의 콘솔 출력 이후 `return`값이 없기에 `undefined`를 리턴한다는 것을 알게 되었음.
    - `new Error`키워드를 통해 새로운 애러 객체를 생성하였고 이를 반환하므로 해결하였음.
