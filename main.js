const loginBtn = document.querySelectorAll(".login-btn");
const loginPage = document.querySelector(".login");
const homePage = document.querySelector(".home");
const signUpPage = document.querySelector(".signup");
const signUpBtn = document.querySelectorAll(".Sign-btn");
const registerBtn = document.querySelector(".register-btn");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const logUsername = document.querySelector(".log-username");
const logPassword = document.querySelector(".log-password");
const confirmPassword = document.querySelector(".confirm-password");
const feedBack = document.querySelector(".feedBack");
const access = document.querySelector(".access");
const show = document.querySelector(".show");
const success = document.querySelector(".success");

const storedData = JSON.parse(localStorage.getItem("userInfo")) || undefined;

const data = {
  userName: "",
  password: "",
};



// Handling login Button
loginBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    homePage.style.display = "none";
    signUpPage.style.display = "none";
    success.style.display = "none";
    loginPage.style.display = "block";
  });
});


// Handling signUp Button
signUpBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    loginPage.style.display = "none";
    homePage.style.display = "none";
    signUpPage.style.display = "block";
  });
});


// Handling Registration
registerBtn.addEventListener("click", (event) => {
  event.preventDefault();
  registerBtn.innerHTML = `
    <div class='loaderDiv'>
        <span class="loader"></span>
    </div>
     `;
     feedBack.innerText = "";
  
  setTimeout(() => {
    if (
      username.value.length !== 0 &&
      password.value.length !== 0 &&
      confirmPassword.value.length !== 0
    ) {
      if (
        confirmPassword.value === password.value &&
        username.value.length >= 3 &&
        /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?@"]).*$/.test(
          password.value
        )
      ) {
        data.userName = username.value;
        data.password = password.value;
        localStorage.setItem("userInfo", JSON.stringify(data));
        feedBack.innerText = "";
        console.log(`name : ${data.userName}, pass : ${data.password}`);
        signUpPage.style.display = "none";
        success.style.display = 'flex';
        username.value = '';
        password.value = '';
        confirmPassword.value = '';
      } else if (username.value.length < 3) {
        feedBack.innerText = "username must contain more than 3 letter";
      } else if (confirmPassword.value !== password.value) {
        feedBack.innerText = `both passwords does not match`;
      } else if (!/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?@"]).*$/.test(password.value)) {
        feedBack.innerText = `password must be 8 characters long, it must contain at least one uppercase letter, one lowercase letter, one number and one special character `;
      }
     
    } else {
      feedBack.innerText = "form must be filled";
    }
    registerBtn.innerHTML = `Register`;
  }, 2000);
});



// Handling login
access.addEventListener("click", (e) => {
  e.preventDefault();
  const feedBack1 = document.querySelector(".feedBack1");
  storedData.length === 0 ? alert("hello") : console.log(storedData);

  if (logUsername.value !== "" && logPassword.value !== "") {
    access.innerHTML = `
   <div class='loaderDiv'>
    <span class="loader"></span>
  </div>
   `;
    setTimeout(() => {
      access.innerHTML = `Login`;
      if (storedData !== undefined) {
        if (
          storedData.userName === logUsername.value &&
          storedData.password === logPassword.value
        ) {
          feedBack1.innerText = ``;
          alert("logged in");
          logUsername.value = '';
          logPassword.value = '';
        } else {
          feedBack1.innerText = `You entered Incorrect data, you can click the sign up button below to create an account with us`;
          show.style.display = "none" ? (show.style.display = "block") : "";
        }
      } else {
        feedBack1.innerText = `Account does not exist, click the sign up button below to create an account with us`;
        show.style.display = "none" ? (show.style.display = "block") : "";
      }
    }, 2000);
  } else {
    feedBack1.innerText = `form must be fill`;
  }
});
