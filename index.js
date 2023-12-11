var isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

let bodyEl = document.body;

if (isMobile === true) {
  console.log("mobile");
  bodyEl.classList.add("mobile");
}
