const titleCursorPosition = document.querySelector("#title-cursor-position");

document.body.addEventListener("mousemove", (event) => {
  titleCursorPosition.innerHTML = `x:${event.clientX}, y:${event.clientY}`;
});
