// Select the container element where demos will be displayed
const p = document.querySelector(".show-classdemo");
console.log("show-classdemo", p);

/**
 * Displays different demo pages within an iframe based on the selected item
 * @param {string} item - The identifier for the demo to display (e.g., 'w02_intro_14')
 */
function showDemo(item) {
    switch (item) {
      case "w02_intro_14":
        // Load the introduction demo page
        p.innerHTML = `<iframe src='../w02-intro-14/index.html' width="100%" height="100%"></iframe>`;
        break;
      case "w03_card_14":
        // Load the card demo page
        p.innerHTML = `<iframe src='../w03-card-14/index.html' width="100%" height="100%"></iframe>`;
        break;
      case "w06_blog_14":
        // Load the blog demo page
        p.innerHTML = `<iframe src='../w06-blog-14/index.html' width="100%" height="100%"></iframe>`;
        break;

      default:
        // Handle any unmatched cases (no action needed)
        break;
    }
  }