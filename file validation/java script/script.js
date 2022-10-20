'use strict';


const formEl = document.getElementById("form");
const UsernameEl = document.getElementById("User name");
const emailEl = document.getElementById("email");
const mobilenumberEl = document.getElementById("Movilenumber");
const PasswordEl = document.getElementById("Password");
const ConfirmpasswordEl = document.getElementById("Confirmpassword");



formEl.addEventListener("submit" , function (event) {
    event.preventDefault();
    if(UsernameEl.value == " ") {
        const formControlEl = UsernameEl.parentElement;
        formControlEl.classList.add("error");
    }else{
        const formControlEl = UsernameEl.parentElement;
        formControlEl.classList.add("sucess")
    }
    if (emailEl.value === "") {
        const formControlEl = emailEl.parentElement;
        formControlEl.classList.add("error");
      } else {
        const formControlEl = emailEl.parentElement;
        formControlEl.classList.add("success");
      }
        if (mobileEl.value === "") {
          const formControlEl = mobileEl.parentElement;
          formControlEl.classList.add("error");
        } else {
          const formControlEl = mobileEl.parentElement;
          formControlEl.classList.add("success");
        }
        if (newpasswordEl.value === "") {
          const formControlEl = newpasswordEl.parentElement;
          formControlEl.classList.add("error");
        } else {
          const formControlEl = newpasswordEl.parentElement;
          formControlEl.classList.add("success");
        }
        if (confirmpasswordEl.value === "") {
          const formControlEl = confirmpasswordEl.parentElement;
          formControlEl.classList.add("error");
        } else {
          const formControlEl = confirmpasswordEl.parentElement;
          formControlEl.classList.add("success");
        }
      });