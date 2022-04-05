const inpArea = document.querySelector(".area-inp"),
  optArea = document.querySelectorAll(".area-opt"),
  btnF = document.querySelector(".btn-format"),
  btnM = document.querySelectorAll(".btn-minify");

btnF.addEventListener("click", () => {
  const fDone = JSON.stringify(JSON.parse(inpArea.value), null, 2);

  optArea.value = fDone;
});

btnM.addEventListener("click", () => {
  const fDone = JSON.stringify(JSON.parse(inpArea.value), null, 2);

  optArea.value = fDone;

});
