const p = document.querySelector(".show-classdemo");
console.log("show-classdemo", p);
function showDemo(item) {
    switch (item) {
      case "w02_intro_14":
        p.innerHTML = `<iframe src='../w02-intro-14/index.html' width="100%" height="100%"></iframe>`;
        break;
      case "w03_card_14":
        p.innerHTML = `<iframe src='../w03-card-14/index.html' width="100%" height="100%"></iframe>`;
        break;
      case "w06_blog_14":
        p.innerHTML = `<iframe src='../w06-blog-14/index.html' width="100%" height="100%"></iframe>`;
        break;

      default:
        break;
    }
  }
  