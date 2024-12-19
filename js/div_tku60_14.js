var x = document.querySelector(".player");
console.log(x);
function changerTKU60(video) {
  switch (video) {
    case 1:
      x.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc?si=OPiYOFDC0_dJSR4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      break;
    case 2:
      x.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew?si=UXCgXWXZ5KJ7qYwr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      break;
    case 3:
      x.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw?si=LLP5eaVpFjp0WNmR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      break;
    case 4:
      x.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo?si=oMXksmg2GVxAnPrN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      break;
    case 5:
      x.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA?si=X1ONm1KPczMWSSD1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      break;
    default:
      break;
  }
}
