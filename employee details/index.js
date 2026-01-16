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
    if (employee.id in localStorage) {
        alert("Already exists")
    }
    else {
        localStorage.setItem(employee.id, JSON.stringify(employee))
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
        <div class="bg-white w-1/2 border-2 rounded-lg p-2">
            <h1 class="text-3xl text-center text-blue-500">Employee Details</h1>
            <table class="w-full text-left mt-5">
                <tbody>
                    <tr class="border-b">
                        <th class="p-3 bg-gray-100">ID</th>
                        <td class="p-3">${employee.id}</td>
                    </tr>
                    <tr class="border-b">
                        <th class="p-3 bg-gray-100">Name</th>
                        <td class="p-3">${employee.name}</td>
                    </tr>
                    <tr class="border-b">
                        <th class="p-3 bg-gray-100">Address</th>
                        <td class="p-3">${employee.addr}</td>
                    </tr>
                    <tr class="border-b">
                        <th class="p-3 bg-gray-100">Designation</th>
                        <td class="p-3">${employee.desg}</td>
                    </tr>
                    <tr class="border-b">
                        <th class="p-3 bg-gray-100">Experience</th>
                        <td class="p-3">${employee.exp}</td>
                    </tr>
                    <tr>
                        <th class="p-3 bg-gray-100">Salary</th>
                        <td class="p-3">${employee.sal}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    `
}

function logout() {
    localStorage.clear();
    window.location = './login.html'

}