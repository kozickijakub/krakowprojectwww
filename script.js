// Funkcja do przełączania zakładek
function showTab(tabId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));
    
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// Funkcja kalkulatora
function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = 'Wprowadź poprawne liczby!';
    } else {
        switch (operation) {
            case 'add':
                result = number1 + number2;
                break;
            case 'subtract':
                result = number1 - number2;
                break;
            case 'multiply':
                result = number1 * number2;
                break;
            case 'divide':
                result = number2 !== 0 ? number1 / number2 : 'Nie można dzielić przez zero!';
                break;
            default:
                result = 'Nieznana operacja.';
        }
    }

    document.getElementById('result').textContent = result;
}
