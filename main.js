const loginBtn = document.querySelectorAll(".login-btn");
const loginPage = document.querySelector(".login");
const homePage = document.querySelector(".home");
const signUpPage = document.querySelector(".signup");
const signUpBtn = document.querySelector(".Sign-btn");
const registerBtn = document.querySelector(".register-btn");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const feedBack = document.querySelector(".feedBack");

const storedData = JSON.parse(localStorage.getItem('userInfo') || {}) 

const data = {
  userName: "",
  password: "",
};

loginBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    homePage.style.display = "none";
    signUpPage.style.display = "none";
    loginPage.style.display = "block";
  });
});

signUpBtn.addEventListener("click", (event) => {
  event.preventDefault();
  homePage.style.display = "none";
  signUpPage.style.display = "block";
});

registerBtn.addEventListener("click", (event) => {
  event.preventDefault();
  registerBtn.innerHTML = `
    <div class='loaderDiv'>
        <span class="loader"></span>
    </div>
     `;
  setTimeout(() => {
    if (
      username.value.length !== 0 &&
      password.value.length !== 0 &&
      confirmPassword.value.length !== 0
    ) {
      if (confirmPassword.value === password.value) {
        data.userName = username.value;
        data.password = password.value;
        localStorage.setItem('userInfo', JSON.stringify(data))
        storedData.length === 0 ? alert('hello') : console.log(storedData);
        console.log(`name : ${data.userName}, pass : ${data.password}`);
      } else {
        feedBack.style.display = "block";
        feedBack.innerText = `both passwords does not match`;
      }
    } else {
      feedBack.style.display = "block";
    }
    registerBtn.innerHTML = `Register`;
  }, 2000);
});
