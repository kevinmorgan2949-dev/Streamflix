let currentBalance = 250000;
let balanceVisible = true;


/* LOGIN */

function login() {
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("loginError");
  
  if (username === "" || password === "") {
    error.textContent = "Please enter your username and password.";
    return;
  }
  
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("appPage").classList.remove("hidden");
  
  document.getElementById("userNameDisplay").textContent =
    username;
  
}


/* LOGOUT */

function logout() {
  
  document.getElementById("appPage").classList.add("hidden");
  
  document.getElementById("loginPage").classList.remove("hidden");
  
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  
}


/* SHOW PASSWORD */

function showPassword() {
  
  const password = document.getElementById("password");
  
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
  
}


/* BALANCE */

function toggleBalance() {
  
  balanceVisible = !balanceVisible;
  
  const balance = document.getElementById("balance");
  
  if (balanceVisible) {
    
    balance.textContent =
      "₦" + currentBalance.toLocaleString("en-NG", {
        minimumFractionDigits: 2
      });
    
  } else {
    
    balance.textContent = "₦••••••";
    
  }
  
}


/* TRANSFER */

function openTransfer() {
  
  document
    .getElementById("transferModal")
    .classList.remove("hidden");
  
}


function closeTransfer() {
  
  document
    .getElementById("transferModal")
    .classList.add("hidden");
  
}


/* SEND MONEY */

function transferMoney() {
  
  const account =
    document.getElementById("accountNumber").value;
  
  const amount =
    Number(document.getElementById("transferAmount").value);
  
  const description =
    document.getElementById("description").value;
  
  
  if (account.length < 10) {
    
    showMessage("Enter a valid account number.");
    
    return;
    
  }
  
  
  if (!amount || amount <= 0) {
    
    showMessage("Enter a valid amount.");
    
    return;
    
  }
  
  
  if (amount > currentBalance) {
    
    showMessage("Insufficient demo balance.");
    
    return;
    
  }
  
  
  currentBalance -= amount;
  
  document.getElementById("balance").textContent =
    "₦" + currentBalance.toLocaleString("en-NG", {
      minimumFractionDigits: 2
    });
  
  
  closeTransfer();
  
  showMessage(
    "₦" +
    amount.toLocaleString("en-NG") +
    " transfer successful!"
  );
  
  
  document.getElementById("accountNumber").value = "";
  document.getElementById("transferAmount").value = "";
  document.getElementById("description").value = "";
  
}


/* MESSAGE */

function showMessage(message) {
  
  const toast = document.getElementById("toast");
  
  toast.textContent = message;
  
  toast.style.display = "block";
  
  setTimeout(function() {
    
    toast.style.display = "none";
    
  }, 2500);
  
}


/* TRANSACTIONS */

function showAllTransactions() {
  
  showMessage("Showing all transactions...");
  
}