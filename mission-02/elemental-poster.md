# 3주차 과제

## 과제 목표

1. 이벤트 위임을 사용하여 내부 요소에 이벤트 바인딩
2. 각 기능별로 함수를 분리하여 가독성 있는 코드로 리팩토링
3. JS를 활용한 audio 요소 컨트롤

## 목차

1. [각 기능별 함수 만들기](#각-기능별-함수-만들기)

## 각 기능별 함수 만들기

### 1. 태그 선택자 함수 생성

```js
function getNode(node, context = document) {
  if (context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node);
}
```

- `node` 와 `context` 를 인자로 받는 태그 선택자 함수를 활용하여 `document.querySelector`를 대체하였음

### 2. 배경 색상 변경 함수 생성

```js
function setBgColorToGradient(colorA, colorB = "#000", direction = "to bottom") {
  document.body.style.background = `linear-gradient(${direction}, ${colorA}, ${colorB})`;
}
```

- 두 가지의 컬러와 그라디언트 방향을 인자로 받는 `setBgColorToGradient` 함수를 활용하여 이벤트 발생 시 배경 색상이 변경되도록 하였다. `colorA`
- `colorA` 인자를 제외하곤 기본값을 설정하여 에러가 나지 않도록 하였다.

### 3. 메인 포스터 이미지 변경 함수 생성

```js
function setImage(node, dataObj) {
  const { src, alt } = dataObj;

  if (typeof node === "string") node = getNode(node);

  node.src = src;
  node.alt = alt;
}
```

- `node` 와 `dataObj` 를 받는 `setImage` 함수를 활용하여 이벤트 발생 시 메인 포스터 이미지가 변경되도록 하였다.
- `node` 가 문자열일 경우를 대비하여 `if` 조건 처리를 통한 `getNode` 함수를 활용하였다.
- 이미지 설정에 필요한 `src`, `alt` 속성을 객체로 받은 후 함수 내부에서 구조분해 할당을 진행하였다.

### 4.
