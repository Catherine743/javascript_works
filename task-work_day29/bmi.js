function calculateBtn() {
    weightVal = weight.value;
    heightVal = height.value;
    ageVal = age.value;
    heightMet = heightVal / 100;
    bmi = weightVal / (heightMet * heightMet);

    if (!weightVal || !heightVal || !ageVal) {
        alert("Please fill all the fields");
    }
    else {
        if (bmi < 18) {
            result.innerHTML =
                `<h2 class = "text-3xl font-semibold"> ${bmi.toFixed(2)} kg/m<sup>2</sup></h2>
        <h3 class = "text-blue-500 text-2xl font-bold"> Underweight </h3>
        <p class = "text-xl font-semibold"> Focus on nutrient-dense foods to gain weight gradually. Regular exercise can help build muscle mass. </p>`;
        }
        else if (bmi >= 18 && bmi < 25) {
            result.innerHTML =
                `<h2 class = "text-3xl font-semibold"> ${bmi.toFixed(2)} kg/m<sup>2</sup></h2>
        <h3 class = "text-green-700 text-2xl font-bold"> Healthy </h3>
        <p class = "text-xl font-semibold"> Maintain a balanced diet and regular physical activity to sustain overall health. </p>`;
        }
        else if (bmi >= 25 && bmi < 30) {
            result.innerHTML =
                `<h2 class = "text-3xl font-semibold"> ${bmi.toFixed(2)} kg/m<sup>2</sup></h2>
        <h3 class = "text-yellow-500 text-2xl font-bold"> Overweight </h3>
        <p class = "text-xl font-semibold"> Adopt healthy eating habits, increase physical activity, and consider consulting a healthcare professional for guidance. </p>`;
        }
        else {
            result.innerHTML =
                `<h2 class = "text-3xl font-semibold"> ${bmi.toFixed(2)} kg/m<sup>2</sup></h2>
        <h3 class = "text-red-500 text-2xl font-bold"> Obese </h3>
        <p class = "text-xl font-semibold"> Focus on gradual weight loss through a combination of diet changes, increased exercise, and professional support. </p>`;
        }
    }

}

function resetBtn() {
    weight.value = "";
    height.value = "";
    age.value = "";
}

