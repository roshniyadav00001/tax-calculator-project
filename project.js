
$(document).ready(function() {
    $('#taxForm').submit(function(e) {
        e.preventDefault();
        $('.error-icon').hide();
        var age = $('#age').val();
        var income = parseFloat($('#income').val());
        var extraIncome = parseFloat($('#extraIncome').val());
        var deductions = parseFloat($('#deductions').val());
        
        if (!age) {
            $('#ageError').show();
            return;
        }

        if (isNaN(income) || isNaN(extraIncome) || isNaN(deductions)) {
            $('#incomeError').show();
            $('#extraIncomeError').show();
            $('#deductionsError').show();
            return;
        }

        var totalIncome = income + extraIncome - deductions;
        var tax = 0;
        if (totalIncome > 8) {
            if (age === '<40') {
                tax = 0.3 * (totalIncome - 8);
            } else if (age === '>=40&<60') {
                tax = 0.4 * (totalIncome - 8);
            } else if (age === '>=60') {
                tax = 0.1 * (totalIncome - 8);
            }
        }
        
        $('#resultMessage').text('after tax deductions: ' + tax.toFixed(2) + ' Lakhs');
        $('#resultModal').modal('show');
    });
});