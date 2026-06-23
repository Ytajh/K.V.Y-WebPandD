document.getElementById("btn-1").onclick = function () {
    let i = 2;
    let result = "";

    while (i <= 100) {
        let isPrime = true;
        let j = 2;

        while (j <= Math.sqrt(i)) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
            j++;
        }

        if (isPrime) {
            result += i + " ";
        }
        i++;
    }

    document.getElementById("res-1").textContent = result;
}

document.getElementById("btn-2").onclick = function () {
    let i = 0;
    let result = ""

    do {
        if (i === 0) {
            result += i + " - це нуль\n";
        }
        else if (i % 2 === 0) {
            result += i + " - парне число\n"
        }
        else {
            result += i + " - непарне число\n"
        }
        i++;
    }
    while (i <= 10);

    document.getElementById("res-2").textContent = result;
}

document.getElementById("btn-3").onclick = function () {
    let numb = 10000;
    let counter = 0;
    let result;

    while (numb >= 50) {
        counter++;
        numb = numb / 2;
        result = numb;
    }
    console.log("Результат " + result)
    console.log("Кількість ітерацій " + counter)
    document.getElementById("res-3").textContent = "Результат " + result + "\nКількість ітерацій " + counter;
}

document.getElementById("btn-4").onclick = function () {
    let input = prompt("Введіть номер місяця")
    let month = Number(input)
    let monthName = ""
    let season = ""
    if (month < 1 || month > 12 || isNaN(month)) {
        alert("Помилка. Введіть коректне число від 1 до 12.");
        return;
    }

    switch (month) {
        case 1: monthName = "Січень"; break;
        case 2: monthName = "Лютий"; break;
        case 3: monthName = "Березень"; break;
        case 4: monthName = "Квітень"; break;
        case 5: monthName = "Травень"; break;
        case 6: monthName = "Червень"; break;
        case 7: monthName = "Липень"; break;
        case 8: monthName = "Серпень"; break;
        case 9: monthName = "Вересень"; break;
        case 10: monthName = "Жовтень"; break;
        case 11: monthName = "Листопад"; break;
        case 12: monthName = "Грудень"; break;
    }

    if (month === 12 || month <= 2) {
        season = "Зима";
    }
    else if (month <= 5) {
        season = "Весна";
    }
    else if (month <= 8) {
        season = "Літо";
    }
    else {
        season = "Осінь";
    }
    alert("Місяць " + monthName + "\nПора року " + season)
}

document.getElementById("btn-5").onclick = function () {
    let t = prompt("Введіть температуру за шкалою Цельсія");
    let temp = Number(t);
    if (t === null || t === "" || isNaN(temp)) {
        alert("Введено некоректну температуру. Спробуйте ще раз");
        return;
    }
    let f_t = (9 / 5) * temp + 32
    alert("Температура за шкалою Фаренгейта " + f_t.toFixed(1))
}

document.getElementById("btn-6").onclick = function () {
    let input = prompt("Введіть число від 1 до 7");
    let day = Number(input);
    let result = "";
    if (day < 1 || day > 7 || isNaN(day)) {
        alert("Введено некоректне число. Введіть число в діапазоні від 1 до 7.")
        return;
    }

    switch (day) {
        case 1: result = "Понеділок"; break;
        case 2: result = "Вівторок"; break;
        case 3: result = "Середа"; break;
        case 4: result = "Четвер"; break;
        case 5: result = "П'ятниця"; break;
        case 6: result = "Субота"; break;
        case 7: result = "Неділя"; break;
    }
    document.getElementById("res-6").textContent = result;
}