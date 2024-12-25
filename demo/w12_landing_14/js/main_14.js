const navbar = document.querySelector(".nav");
console.log("navbar", navbar);
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// 選取漢堡選單按鈕和導航連結
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// 為按鈕添加點擊事件監聽器
navToggle.addEventListener('click', () => {
    // 檢查 navLinks 當前的顯示狀態
    if (navLinks.style.display === 'block') {
        // 如果當前是 block，則設置為 none
        navLinks.style.display = 'none';
    } else {
        // 如果當前是 none 或未設置，則設置為 block
        navLinks.style.display = 'block';
    }
});