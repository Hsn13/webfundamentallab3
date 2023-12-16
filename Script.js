function calculateBMI(Height, Weight) {
    var bmi = ((Weight) / (Height*Height));
    var category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    return {
        bmi: bmi,
        category: category
    };
}

function calculateAndDisplayBMI() {
    var Height = parseFloat(document.getElementById('HeightInput').value);
    var Weight = parseFloat(document.getElementById('WeightInput').value);

    if (isNaN(Height) || isNaN(Weight)) {
        alert("Please enter valid numeric values for height and weight.");
        return;
    }

    var result = calculateBMI(Height, Weight);

    document.getElementById('BMILabel').innerText = "Your BMI index is: " + result.bmi.toFixed(2);
    document.getElementById('CategoryLabel').innerText = "Your Weight Category is: " + result.category;
}
