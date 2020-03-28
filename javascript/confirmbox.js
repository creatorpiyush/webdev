function myfun() {
    var confirmation = confirm("Do you want to visit website");
    if (confirmation == true) {
        window.open("https://www.youtube.com/");
        return true;
    } else {
        document.write("User doesn't want to visit the page");
        return false;
    }
}