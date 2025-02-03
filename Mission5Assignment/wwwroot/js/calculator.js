$(document).ready(function () {
    $("#calculateBtn").click(function () {
        // Get input values
        var rate = 30.00;
        var hours = parseFloat($("#hours").val());

        // Ensure values are valid numbers
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid number.");
            return;
        }

        // Calculate total cost
        var total = rate * hours;

        // Display the result
        $("#totalCost").val(`$${total.toFixed(2)}`);
    });
});
