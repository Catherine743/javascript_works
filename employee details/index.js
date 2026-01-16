username = localStorage.getItem('USERNAME');
head1.innerHTML = `Welcome ${username}`

function addEmployee() {
    employee = {
        id: empId.value,
        name: empName.value,
        addr: empAddr.value,
        desg: empDesg.value,
        exp: empExp.value,
        sal: empSal.value
    }
    if(employee.id in localStorage) {
        alert("Already exists")
    }
    else {
        localStorage.setItem(employee.id,JSON.stringify(employee))
        alert("Employee details created");
        empId.value = ""
        empName.value = ""
        empAddr.value = ""
        empDesg.value = ""
        empExp.value = ""
        empSal.value = ""
    }
}

function searchBtn() {
    key = emp.value;
    employee = JSON.parse(localStorage.getItem(key));

    result.innerHTML = `
      <div class="flex justify-center text-center">
        <div class="bg-white w-1/3 border-2 rounded-lg">
            <h1 class="text-3xl text-center">Employee Details</h1>
             <ul class="space-y-5 m-5">
                <li class="text-xl ">ID : ${employee.id}</li>
                <li class="text-xl ">Name : ${employee.name}</li>
                <li class="text-xl ">Address : ${employee.addr}</li>
                <li class="text-xl ">Designation :${employee.desg}</li>
                <li class="text-xl ">Experience : ${employee.exp}</li>
                <li class="text-xl ">Salary : ${employee.sal}</li>
             </ul>
        </div>
        </div>
    `
}

function logout() {
    localStorage.clear();
    window.location = './login.html'

}