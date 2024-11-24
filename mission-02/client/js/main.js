/* ----------------------- 이벤트를 바인딩 할 변수 선언 및 할당 ----------------------- */
const nav = getNode(".nav > ul");

/* ------------------------------ 태그 선택하는 함수 사용 ----------------------------- */
function getNode(node, context = document) {
  if (context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node);
}

/* ----------------------------- 배경 색상 변경 함수 생성 ----------------------------- */
function setBgColorToGradient(colorA, colorB = "#000", direction = "to bottom") {
  document.body.style.background = `linear-gradient(${direction}, ${colorA}, ${colorB})`;
}

/* ----------------------------- 메인 이미지 변경 함수 생성 ---------------------------- */
function setImage(node, dataObj) {
  const { src, alt } = dataObj;

  if (typeof node === "string") node = getNode(node);

  node.src = src;
  node.alt = alt;
}

/* ---------------------------- 텍스트 컨텐츠 변경 함수 생성 ---------------------------- */
function setNameText(node, text) {
  if (typeof text !== "string" || text === "") throw new Error(`${text}는 유효한 값이 아닙니다.`);
  if (typeof node === "string") node = getNode(node);
  node.textContent = text;
}

/* ---------------------------- 모든 클래스명 제거 함수 생성 ---------------------------- */
function removeAllClass(list, className) {
  if (typeof className !== "string") throw new Error("className의 인자 값으로는 문자열만 가능합니다.");
  list.forEach((li) => li.classList.remove(className));
}

/* ------------------------------ 클래스명 추가 함수 생성 ----------------------------- */
function addClass(node, className) {
  if (typeof node === "string") node = getNode(node);

  node.classList.add(className);
}

/* ------------------------------ 오디오 시작 함수 생성 ------------------------------ */
function startAudio(src) {
  const audio = new AudioPlayer(src);
  if (!audio.isPlaying()) audio.play();
}

/* ---------------------------- Click 핸들러 이벤트 생성 ---------------------------- */
function handleClick(e) {
  const target = e.target.closest("li");
  if (!target) return;

  const index = target.dataset.index - 1;
  const colorTop = data[index].color[0];
  const colorBottom = data[index].color[1];
  setBgColorToGradient(colorTop, colorBottom);

  const dataObj = {
    src: `./assets/${data[index].name}.jpeg`,
    alt: data[index].alt,
  };

  setImage(".visual img", dataObj);

  const textContent = data[index].name;
  setNameText("h1", textContent);

  removeAllClass([...this.children], "is-active");
  addClass(target, "is-active");

  const audioSrc = `./assets/audio/${data[index].name.toLowerCase()}.m4a`;
  startAudio(audioSrc);
}

nav.addEventListener("click", handleClick);
