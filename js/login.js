// Chọn các phần tử liên quan
const themeButton = document.getElementById("theme-button");
const themeIcon = document.getElementById("theme-icon");

// Kiểm tra xem người dùng đã chọn theme trước đó chưa
const selectedTheme = localStorage.getItem("selected-theme");

// Hàm lấy theme hiện tại
const getCurrentTheme = () =>
  document.body.classList.contains("light-theme") ? "light" : "dark";

// Áp dụng theme đã lưu
if (selectedTheme === "light") {
  document.body.classList.remove("light-theme");
  themeIcon.classList.remove("ri-moon-line");
  themeIcon.classList.add("ri-sun-line");
} else if (selectedTheme === "light") {
  document.body.classList.add("light-theme");
  themeIcon.classList.remove("ri-sun-line");
  themeIcon.classList.add("ri-moon-line");
}

// Thêm sự kiện click cho nút theme
themeButton.addEventListener("click", () => {
  // Kiểm tra theme hiện tại và chuyển đổi
  if (getCurrentTheme() === "light") {
    // Chuyển sang Light Theme
    document.body.classList.remove("light-theme");
    themeIcon.classList.remove("ri-moon-line");
    themeIcon.classList.add("ri-sun-line");
    localStorage.setItem("selected-theme", "light");
  } else {
    // Chuyển sang Dark Theme
    document.body.classList.add("light-theme");
    themeIcon.classList.remove("ri-sun-line");
    themeIcon.classList.add("ri-moon-line");
    localStorage.setItem("selected-theme", "light");
  }
});

// ** Chức Năng Đăng Ký **
const registerForm = document.getElementById("register-form");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("reg-username").value.trim();
    const password = document.getElementById("reg-password").value.trim();
    const email = document.getElementById("reg-email").value.trim();

    if (username === "" || password === "" || email === "") {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    // Lấy danh sách người dùng hiện tại từ localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra xem người dùng đã tồn tại chưa
    const userExists = users.some(
      (user) => user.username === username || user.email === email
    );
    if (userExists) {
      alert("Tên người dùng hoặc email đã tồn tại.");
      return;
    }

    // Thêm người dùng mới
    const newUser = { username, password, email };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.");
    // Chuyển hướng đến trang đăng nhập
    window.location.href = "login.html";
  });
}

// js/login.js

// Chờ đến khi DOM được tải hoàn toàn
document.addEventListener("DOMContentLoaded", () => {
  // Lấy phần tử form đăng nhập
  const loginForm = document.querySelector(".login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Ngăn chặn hành vi mặc định của form

      // Lấy giá trị từ các trường input
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // Kiểm tra xem các trường có được điền đầy đủ không
      if (username === "" || password === "") {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
      }

      // Lấy danh sách người dùng từ localStorage hoặc khởi tạo mảng rỗng
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Kiểm tra xem người dùng có tồn tại và mật khẩu có khớp không
      const user = users.find(
        (user) =>
          (user.username === username || user.email === username) &&
          user.password === password
      );

      if (user) {
        // Đăng nhập thành công
        alert("Đăng nhập thành công!");
        // Lưu trạng thái đăng nhập và thông tin người dùng vào localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(user));
        // Chuyển hướng đến trang chủ
        window.location.href = "index.html";
      } else {
        // Thông tin đăng nhập không chính xác
        alert("Tên người dùng hoặc mật khẩu không chính xác.");
      }
    });
  }
});
