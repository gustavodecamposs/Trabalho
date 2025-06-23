function validateForm () {
    let x = document.forms["firstname"] [""]
    if (x == "") {
        alert("O nome precisa ser preenchido");
        return false;
    }
}