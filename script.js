
let helloBtn = document.getElementById("helloBtn");
let helloText = document.getElementById("helloText");

helloBtn.addEventListener("click", function() {
  helloText.innerHTML = "Hello! You have successfully clicked the button.";
});


let modeBtn = document.getElementById("modeBtn");
modeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

let count = 0;
let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");
let countSpan = document.getElementById("count");

addBtn.addEventListener("click", function() {
  count++;
  countSpan.innerHTML = count;
});

clearBtn.addEventListener("click", function() {
  count = 0;
  countSpan.innerHTML = count;
});

// Form Validation
let form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop refresh

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let nameErr = document.getElementById("nameErr");
  let emailErr = document.getElementById("emailErr");
  let passErr = document.getElementById("passErr");
  let formMsg = document.getElementById("formMsg");

  let ok = true;

  // check the name
  if (name === "") {
    nameErr.innerHTML = "Name is required";
    ok = false;
  } else {
    nameErr.innerHTML = "";
  }

  // check the email
  if (email.indexOf("@") === -1) {
    emailErr.innerHTML = "Email must have @";
    ok = false;
  } else {
    emailErr.innerHTML = "";
  }

  // check the password
  if (password.length < 6) {
    passErr.innerHTML = "Password must be 6+ characters";
    ok = false;
  } else {
    passErr.innerHTML = "";
  }

  if (ok) {
    formMsg.innerHTML = "Form submitted!";
    form.reset();
  } else {
    formMsg.innerHTML = "";
  }
});
