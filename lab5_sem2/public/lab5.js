function calculateSquare() {
    var numberInput = document.getElementById('numberInput');
    var resultDiv = document.getElementById('result');
    var value = parseFloat(numberInput.value);

    if (isNaN(value)) {
        resultDiv.innerText = "Будь ласка, введіть коректне число";
        return;
    }

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "http://localhost:3000/calculate", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                resultDiv.innerText = "Відповідь сервера: " + data.square;
                console.log("Отримано дані:", data);
            } else {
                resultDiv.innerText = "Помилка сервера: статус " + xhr.status;
            }
        }
    };

    var body = JSON.stringify({ number: value });
    xhr.send(body);
}