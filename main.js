const loginBtn = document.querySelectorAll(".login-btn");
const loginPage = document.querySelector(".login");
const homePage = document.querySelector(".home");
const signUpPage = document.querySelector(".signup");
const signUpBtn = document.querySelector(".Sign-btn");
const registerBtn = document.querySelector(".register-btn");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const logUsername = document.querySelector(".log-username");
const logPassword = document.querySelector(".log-password");
const confirmPassword = document.querySelector(".confirm-password");
const feedBack = document.querySelector(".feedBack");
const access = document.querySelector(".access");

const storedData = JSON.parse(localStorage.getItem('userInfo') ) || undefined;

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
        // storedData.length === 0 ? alert('hello') : console.log(storedData);
        console.log(`name : ${data.userName}, pass : ${data.password}`);
      } else {
        feedBack.innerText = `both passwords does not match`;
      }
    } else {
      feedBack.style.display = "form must be filled";
    }
    registerBtn.innerHTML = `Register`;
  }, 2000);
});

access.addEventListener('click', (e)=> {
  e.preventDefault()

  if (logUsername.value.length !== 0  &&  logPassword.value.length !== 0) {
    if (storedData !== undefined) {
      if (storedData.userName === logUsername.value && storedData.password === logPassword.value ) {
        alert('logged in')
      } else {
        feedBack.innerText = `You entered Incorrect data`
      }
    } else {
      feedBack.innerText = `Account does not exist`
    }
  } else {
    feedBack.innerText = `form must be fill`
  }
})