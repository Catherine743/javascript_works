function loginBtn() {
    username = document.getElementById('user').value;
    console.log(username);

    // add username to localstorage
    localStorage.setItem('user', username);

    // redirect to home
    window.location = './welcome.html'
    
}