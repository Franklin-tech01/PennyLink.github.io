// // import { displayBalance } from "./amount";
// // import { generateVirtualCards } from "./createNewcard";

// displayBalance();
// generateVirtualCards();



document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("login-btn").addEventListener("click", login);
  document.getElementById("sign-out").addEventListener("click", signOutUser);
  document.getElementById("show-PopUp").addEventListener("click", showPopUpForm);
  document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") hidePopUpForm();
  });
});

const signUpUser = document.getElementById("signup-btn");

function signUp() {
  const userEmail = document.getElementById("email").value;
  const userName = document.getElementById("username-signup").value;
  const userPassword = document.getElementById("userpassword-signup").value;

  localStorage.setItem("email", userEmail);
  localStorage.setItem("username-signup", userName);
  localStorage.setItem("userpassword-signup", userPassword);


  // Check if user already exist
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = existingUsers.some((user) => user.email === userEmail);
  if(userExists){
    alert("this useer already exist")
  }else{
    // Add user to local storage
    existingUsers.push({email: userEmail, username: userName, password: userPassword});
   localStorage.setItem("users", JSON.stringify(existingUsers))
   
    alert("Account Created successfully you'll be redirected shortly");
    location.href = "user.html";
  }
}

function login() {
  const userName = document.getElementById("username").value;
  const userPassword = document.getElementById("userpassword").value;

  const currentUsername = localStorage.getItem("username-signup");
  const currentPassword = localStorage.getItem("userpassword-signup");

  if (currentUsername === userName && currentPassword === userPassword) {
      window.location.href = "user.html";
  } else {
      alert("Invalid user, please sign up chief");
  }
}



function signOutUser() {
  window.location.href = "index.html";
}

function showPopUpForm() {
  document
      .getElementById("PopUpform__container")
      .classList.remove("hide");
  document
      .getElementById("PopUpform__container")
      .classList.add("show");
}

function hidePopUpForm() {
  document
      .getElementById("PopUpform__container")
      .classList.remove("show");
  document
      .getElementById("PopUpform__container")
      .classList.add("hide");
}
