function loginBtn() {
    username = document.getElementById('user').value;

    // store the value in database
    localStorage.setItem('USERNAME',username);

    //redirect to index page
    window.location = './index.html'
}