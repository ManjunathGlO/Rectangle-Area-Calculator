function calculateArea() {
    // Get values from input fields
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);

    // Calculate area
    var area = length * width;

    // Display result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "Area: " + area.toFixed(2);
}
