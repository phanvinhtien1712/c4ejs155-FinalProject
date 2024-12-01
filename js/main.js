//Show ra menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
carthide = document.getElementsByClassName("cart");
//click show menu và ẩn icon cart
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    carthide[0].style.display = "none";
  });
}
//Ẩn menu hiện cart ra
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    carthide[0].style.display = "block";
  });
}
// Xóa Menu khi nhấp vào liên kết
const navLink = document.querySelectorAll(".nav_link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
/* Giỏ Hàng */
// Chọn các nút giỏ hàng
const cartButtons = document.querySelectorAll(".popular_button");

// Chọn phần hiển thị số lượng trong giỏ hàng
const cartCount = document.getElementById("cart-count");

// Chọn thông báo toast
const toast = document.getElementById("toast");

// Chọn biểu tượng giỏ hàng
const cartIcon = document.querySelector(".cart");

// Biến lưu số lượng sản phẩm
let count = 0;

// Hàm hiển thị thông báo
function showToast() {
  toast.className = "toast show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
  carthide[0].style.display = "block";
}

// Hàm tăng số lượng và cập nhật UI
function addToCart() {
  count += 1;
  cartCount.textContent = count;

  // Hiển thị thông báo
  showToast();

  // Thêm hiệu ứng nảy cho giỏ hàng
  cartIcon.classList.add("animate");
  setTimeout(() => {
    cartIcon.classList.remove("animate");
  }, 500);
}

// Thêm sự kiện click cho tất cả các nút giỏ hàng
cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    addToCart();
  });
});

/* chức năng SoundEgine */
navLink.forEach((n) => n.addEventListener("click", linkAction));
// Phát âm thanh khởi động xe khi nhấn nút home_button
const homeButton = document.querySelector(".home_button");
const porscheSound = document.getElementById("porscheSound");
// Kiểm tra giá trị của porscheSound
console.log("porscheSound:", porscheSound);
console.log("homeButton:", homeButton);
if (homeButton) {
  homeButton.addEventListener("click", (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
    if (porscheSound) {
      porscheSound.play(); // Phát âm thanh
      console.log("Phát âm thanh thành công.");
    } else {
      console.error(
        "Phần tử audio không tồn tại hoặc không được tải đúng cách."
      );
    }
  });
} else {
  console.error("Không tìm thấy nút home_button");
}
// Chọn các phần tử h2 và h3 với lớp home_car-number và home_car-name
const carNumbers = document.querySelectorAll(".home_car-number");
const carNames = document.querySelectorAll(".home_car-name");
// Chọn nút Start
const startButton = document.querySelector(".home_button");

if (startButton) {
  startButton.addEventListener("click", (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
    // Phát âm thanh nếu có
    if (porscheSound) {
      porscheSound.play();
      console.log("Phát âm thanh thành công.");
    } else {
      console.error(
        "Phần tử audio không tồn tại hoặc không được tải đúng cách."
      );
    }

    // Thêm lớp animate để áp dụng hiệu ứng fadeInUp (nếu cần)
    carNumbers.forEach((el) => el.classList.add("animate"));
    carNames.forEach((el) => el.classList.add("animate"));

    // Thêm lớp shake để áp dụng hiệu ứng rung động
    carNumbers.forEach((el) => el.classList.add("shake"));
    carNames.forEach((el) => el.classList.add("shake"));
  });
} else {
  console.error("Không tìm thấy nút Start");
}

/*==================== Thay đổi BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById("header");
  // Khi cuộn xuống lớn hơn 50 chiều cao cửa sổ, thêm lớp scroll-header vào thẻ header
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*Sản phẩm nổi bật slide */
let swiperPopular = new Swiper(".popular_container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 40,
    },
  },
});

/*==================== MIXITUP FILTER LOGO BRANDS chức năng lọc sản phẩm xe theo logo ====================*/
let mixerBrands = mixitup(".brands_content", {
  selectors: {
    target: ".brands_card",
  },
  animation: {
    duration: 300,
  },
});
/*==================== LINK ACTIVE Brands ====================*/
const linkBrands = document.querySelectorAll(".brands_item");
function activeBrands() {
  linkBrands.forEach((n) => n.classList.remove("active-brands"));
  this.classList.add("active-brands");
}
linkBrands.forEach((n) => n.addEventListener("click", activeBrands));

/*==================== Show scroll up ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // Khi cuộn lớn hơn 350 chiều cao cửa sổ, thêm lớp show-scroll vào thẻ a có id scroll-up
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("#home, #about, #popular, #brands");

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    sectionId = section.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*==================== SCROLL REVEAL ANIMATION Chức năng cuộn hiển thị ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});
sr.reveal(`.home_title,.popular_container,.features_img,.brands_filters`);
sr.reveal(`.home_subtitle`, { delay: 500 });
sr.reveal(`.home_elec`, { delay: 600 });
sr.reveal(`.home_img`, { delay: 800 });
sr.reveal(`.home_car-data`, { delay: 1000, interval: 200, origin: "bottom" });
sr.reveal(`.home_button`, { delay: 1000, interval: 200, origin: "bottom" });
sr.reveal(`.about_group,.offer_data`, { origin: "left" });
sr.reveal(`.about_data,.offer_img`, { origin: "right" });
sr.reveal(`.features_map`, { delay: 600, origin: "bottom", interval: 200 });
sr.reveal(`.features_card,.logos_content,.footer_content`, { interval: 300 });
sr.reveal(`.brands_card`, { interval: 200 });
/*=============== Chức năng đổi nền trắng/đen  ===============*/
const themeButton = document.getElementById("theme-button");
const themeIcon = document.getElementById("theme-icon");
const darkTheme = "dark-theme";
const lightTheme = "light-theme";

// Kiểm tra nếu người dùng đã chọn giao diện trước đó
const selectedTheme = localStorage.getItem("selected-theme");

// Lấy chủ đề hiện tại bằng cách kiểm tra lớp của body
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "light" : "dark";

// Nếu người dùng đã chọn giao diện, áp dụng nó
if (selectedTheme) {
  document.body.classList[selectedTheme === "light" ? "add" : "remove"](
    lightTheme
  );
  themeIcon.classList[selectedTheme === "light" ? "remove" : "add"](
    "ri-moon-line"
  );
  themeIcon.classList[selectedTheme === "light" ? "add" : "remove"](
    "ri-sun-line"
  );
}

// Lắng nghe sự kiện click để chuyển đổi giao diện
themeButton.addEventListener("click", () => {
  // Toggle lớp 'light-theme' cho body
  document.body.classList.toggle(lightTheme);

  // Thay đổi biểu tượng
  if (document.body.classList.contains(lightTheme)) {
    themeIcon.classList.replace("ri-moon-line", "ri-sun-line");
  } else {
    themeIcon.classList.replace("ri-sun-line", "ri-moon-line");
  }

  // Lưu lựa chọn của người dùng vào localStorage
  localStorage.setItem("selected-theme", getCurrentTheme());
});
// Kiểm tra trạng thái đăng nhập và hiển thị thông tin
document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navMenu = document.querySelector(".nav_menu");

  if (isLoggedIn && currentUser) {
    // Xóa nút Đăng Nhập
    const loginLink = navMenu.querySelector(".sign-in");
    if (loginLink) {
      loginLink.remove();
    }

    // Thêm thông báo chào mừng
    const welcomeItem = document.createElement("li");
    welcomeItem.classList.add("nav_link");
    welcomeItem.innerHTML = `<span class="nav_link">Xin chào, ${currentUser.username}</span>`;
    navMenu.appendChild(welcomeItem);
    //giao diện không nằm dưới menu
    welcomeItem.style.position = "absolute";
    welcomeItem.style.right = "50px";
    welcomeItem.style.top = "10px";
    welcomeItem.style.color = "white";
    welcomeItem.style.fontWeight = "bold";
    // Thêm nút Đăng Xuất
    const logoutItem = document.createElement("li");
    logoutItem.classList.add("nav_item");
    logoutItem.innerHTML = `<a href="#" class="nav_link" id="logout-button">Đăng Xuất</a>`;
    navMenu.appendChild(logoutItem);
    logoutItem.style.position = "absolute";
    logoutItem.style.right = "50px";
    logoutItem.style.top = "40px";
    logoutItem.style.color = "white";
    logoutItem.style.fontWeight = "bold";
    // Xử lý sự kiện Đăng Xuất
    const logoutButton = document.getElementById("logout-button");
    if (logoutButton) {
      logoutButton.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        alert("Đã đăng xuất.");
        window.location.href = "index.html";
      });
    }
  }
});
