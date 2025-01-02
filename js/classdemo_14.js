// Select the container element where demos will be displayed
const p = document.querySelector('.show-classdemo')
const q = document.querySelector('.tictactoe')
console.log('show-classdemo', p)

/**
 * Displays different demo pages within an iframe based on the selected item
 * @param {string} item - The identifier for the demo to display (e.g., 'p1_14')
 */
function showClassDemo(item) {
  switch (item) {
    case 'w02_intro_14':
      // Load the introduction demo page
      p.innerHTML = `<iframe src='./demo/w02-intro-14/index.html' width="100%" height="100%"></iframe>`
      break
    case 'w03_card_14':
      // Load the card demo page
      p.innerHTML = `<iframe src='./demo/w03-card-14/index.html' width="100%" height="100%"></iframe>`
      break
    case 'w06_blog_14':
      // Load the blog demo page
      p.innerHTML = `<iframe src='./demo/w06-blog-14/index.html' width="100%" height="100%"></iframe>`
      break

    case 'w07_nav_14':
      // Load the blog demo page
      p.innerHTML = `<iframe src='./demo/w07_showdemo_14/w07_showdemo_14.html' width="100%" height="100%"></iframe>`
      break
    //w11_navbar_14
    case 'w11_navbar_14':
      // Load the blog demo page
      p.innerHTML = `<iframe src='./demo/w11_navbar_14/index.html' width="100%" height="100%"></iframe>`
      break

    case 'w12_landing_14':
      // Load the blog demo page
      p.innerHTML = `<iframe src='./demo/w12_landing_14/index.html' width="100%" height="100%"></iframe>`
      break

    case 'w12_navbar_14':
      // Load the blog demo page
      p.innerHTML = `<iframe src='./demo/w12_navbar_14/index.html' width="100%" height="100%"></iframe>`
      break

    case 'w13_multipage_14':
      // Load the blog demo page
      p.innerHTML = `<iframe src='./demo/w13_multipage_14/index.html' width="100%" height="100%"></iframe>`
      break

    case 'tictoctoe':
      // Load the blog demo page
      p.innerHTML = `<iframe src='./tictoctoe_14.html' width="100%" height="100%"></iframe>`
      break
    case 'Final_14':
      // Load the blog demo page
      p.innerHTML = `<iframe src='./exams/final1_14/final_p1_14.html' width="100%" height="100%"></iframe>`
      break

    default:
      // Handle any unmatched cases (no action needed)
      break
  }
}
