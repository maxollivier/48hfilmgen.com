function passWord() {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Password', ' ');
    while (testV < 3) {
        if (!pass1)
            history.go(-1);
        if (pass1.toLowerCase() == "olivebadger") {
            window.open('admin.html');
            break;
        }
        testV += 1;
        var pass1 =
            prompt('Access Denied - Password Incorrect, Please Try Again.', 'Password');
    }
    if (pass1.toLowerCase() != "password" & testV == 3)
        history.go(-1);
    return " ";
}

function alpha() {
    genre.sort();
    phrase.sort();
    prop.sort()
}
