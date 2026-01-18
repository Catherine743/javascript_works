function storeBtn() {
    car = {
        brand : carBrand.value,
        price : carPrice.value,
        key : carKey.value
    }
    if (car.key in localStorage) {
        alert("Car already exists")
    }
    else {
        localStorage.setItem(car.key, JSON.stringify(car))
        alert("Car details stored");
        carBrand.value = ""
        carPrice.value = ""
        carKey.value = ""
    }
}

function clearBtn() {
    localStorage.clear();
}

function retrieveBtn() {
    keyEle = keyValue.value
    retrieve = document.getElementById('retResult')

    if(keyEle in localStorage){
        carDetails = JSON.parse(localStorage.getItem(keyEle));
        retrieve.innerHTML = `<p> Brand : ${carDetails.brand} </p> 
        <p> Price : ${carDetails.price} </p>
        <p> Key : ${carDetails.key} </p>`
    }
    else {
        retrieve.textContent = "Car not found";
    }
        
}

function removeBtn() {
    keyEle = keyElement.value
    dlt = document.getElementById('dltResult')
    if(keyEle in localStorage) {
        localStorage.removeItem(keyEle);
        alert("Car removed");
        keyElement.value = "";
    }
    else {
        dlt.textContent = "Car not found"
    }
}