const users = [
  {
    username: "admin",
    password: "admin",
  },
];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    errorMessage.textContent = "ورود موفقیت‌آمیز بود!";
    errorMessage.style.color = "green";
    // Redirect to another page or perform any
    window.location.href = "index.html";
  } else {
    errorMessage.textContent = "نام کاربری یا رمز عبور اشتباه است.";
  }
}
