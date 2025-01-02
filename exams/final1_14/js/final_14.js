const final_player = document.querySelector('.final_player')
console.log('final_player', final_player)
const mobileBtn = document.getElementById('hamburger-icon')
const mobileMenu = document.getElementById('mobile-menu')
const mobileMenuicon = document.querySelector('#hamburger-icon i')

let navbar = document.querySelector('.header')
console.log('header', navbar)

window.addEventListener('scroll', function () {
  if (this.window.scrollY > 100) {
    navbar.classList.add('navbar-fixed')
  } else {
    navbar.classList.remove('navbar-fixed')
  }
})

mobileBtn.addEventListener('click', () => {
  // Open/hide mobile menu
  mobileMenu.classList.toggle('hidden')

  // Change mobile toggler icon on open/close
  if (!mobileMenu.classList.contains('hidden')) {
    mobileMenuicon.classList.remove('fa-bars')
    mobileMenuicon.classList.add('fa-xmark')
  } else {
    mobileMenuicon.classList.remove('fa-xmark')
    mobileMenuicon.classList.add('fa-bars')
  }
})

function final_showTKU60(num) {
  switch (num) {
    case 1:
      final_player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc?si=-KuAfbwkrpLL2BtB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
              ></iframe>`
      break
    case 2:
      final_player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew?si=fiQN6zhaM1xyEr3j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
      break
    case 3:
      final_player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw?si=z-5rvUro3jPmBAsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
      break

    case 4:
      final_player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo?si=reFRJhjio5K_6aGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
      break
    case 5:
      final_player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA?si=EZa-zgWDxzheFUAx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
      break
  }
}

function final_changeTKU60(video) {
  switch (video) {
    case 1:
      final_player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc?si=-KuAfbwkrpLL2BtB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
              ></iframe>`
      break
    case 2:
      final_player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew?si=fiQN6zhaM1xyEr3j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
      break
    case 3:
      final_player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw?si=z-5rvUro3jPmBAsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
      break

    case 4:
      final_player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo?si=reFRJhjio5K_6aGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
      break
    case 5:
      final_player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA?si=EZa-zgWDxzheFUAx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
      break
  }
}
