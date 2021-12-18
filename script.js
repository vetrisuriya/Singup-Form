let submitBtn = document.getElementById("form-submit");

function emptyValChecker(el) {
    if(Math.abs(el.value) == 0) {
        el.parentElement.classList.add("showError");
    }
    else {
        el.parentElement.classList.remove("showError");
    }
}

  
submitBtn.addEventListener("click", function() {

    let fName = document.querySelector("#firstName");
    let lName = document.querySelector("#lastName");
    let email = document.querySelector("#emailAddress");
    let pass = document.querySelector("#password");

    fName.addEventListener("keyup", el => emptyValChecker(el.target));
    lName.addEventListener("keyup", el => emptyValChecker(el.target));
    email.addEventListener("keyup", el => emptyValChecker(el.target));
    pass.addEventListener("keyup", el => emptyValChecker(el.target));

    emptyValChecker(fName);
    emptyValChecker(lName);
    emptyValChecker(email);
    emptyValChecker(pass);

});
