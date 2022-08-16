const getResultBtn = document.querySelector (".user-form__button");
const inputField = document.querySelector (".input");
const inputValue = document.querySelector (".input__control");








getResultBtn.onclick = function(e) {
if (inputValue.value === "") {
 inputField.classList.add("input--error");
 e.preventDefault();
}


}


// inputField.classList.add("input--error")
