// local storage
// To get the data from local storage - getItem(key : string)

username = localStorage.getItem('user')
console.log(username);
head1.innerHTML = `Welcome ${username}`

// To remove the data from local storage - removeItem(key : string)

function logout() {
    localStorage.clear()
    window.location = './index.html'
}
