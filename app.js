const loginInput = document.querySelector("#login-form input:first-child");
const loginButton = document.querySelector("#login-form input:last-child");

function handleBtnClick() {
    const username = loginInput.value;
    console.log(username);
}

loginButton.addEventListener("click", handleBtnClick);
