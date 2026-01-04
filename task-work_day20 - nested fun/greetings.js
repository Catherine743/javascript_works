function greetUser(name){
    function greet(){
        return `Hello ${name}, Welcome`
    }
    return greet();
}

console.log(greetUser("Catherine"));