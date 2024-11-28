// Select the container element where demos will be displayed
const p = document.querySelector(".show-midterm-answer");
console.log("show-midterm-answer", p);

/**
 * Displays different demo pages within an iframe based on the selected item
 * @param {string} item - The identifier for the demo to display (e.g., 'p1_14')
 */
function showMidtermPage(item) {
    switch (item) {
      case "p1_14":
        // Load the introduction demo page
        p.innerHTML = `<iframe src='p1_14/p1_14.html' width="100%" height="100%"></iframe>`;
        break;
      case "p2_14":
        // Load the card demo page
        p.innerHTML = `<iframe src='p2_14/p2_14.html' width="100%" height="100%"></iframe>`;
        break;
      case "p3_14":
        // Load the blog demo page
        p.innerHTML = `<iframe src='p3_14/p3_14.html' width="100%" height="100%"></iframe>`;
        break;

      default:
        // Handle any unmatched cases (no action needed)
        break;
    }
}