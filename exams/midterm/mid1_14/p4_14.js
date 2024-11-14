const p = document.querySelector('.show-midterm-answer')
console.log('show-midterm-answer', p)

function showMidtermPage(item) {
  switch (item) {
    case 'p1_14':
      p.innerHTML = `<iframe src='./p1_14/p1_14.html' width="100%" height="100%" />`
      break
    case 'p2_14':
      p.innerHTML = `<iframe src='./p2_14/p2_14.html' width="100%" height="100%" />`
      break
    case 'p3_14':
      p.innerHTML = `<iframe src='./p3_14/p3_14.html' width="100%" height="100%" />`
      break
    case 'p4_14':
      p.innerHTML = `<iframe src='./p4_14/p4_14.html' width="100%" height="100%" />`
      break
  }
}
