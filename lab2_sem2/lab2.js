function getImageWidth() {
    const width = this.offsetWidth;
    console.log("Ширина цієї картинки " + width + " px");
    document.getElementById("res-1").textContent = "Ширина цієї картинки " + width + " px";
}

function updateTitle(event) {
    const link = event.target;
    link.title = link.href
    console.log("Додано title для " + link.href);
    link.removeEventListener("mouseenter", updateTitle);
}

function showValue(event) {
    const current_input = event.target;
    let text = current_input.value;
    if (text.trim() === "") {
        document.getElementById("demo").textContent = "Поле порожнє. Спершу напишіть щось";
    }
    else {
        document.getElementById("demo").textContent = text;
    }
}

function firstClick(event) {
    const input = event.target;
    let text = input.value;
    if (text.trim() === "") {
        document.getElementById("warning").textContent = "Поле порожнє. Спершу напишіть щось"
    }
    else {
        document.getElementById("warning").textContent = ""
        console.log("Перше натискання. Записано значення: " + text)
        input.removeEventListener("click", firstClick);
        input.addEventListener("click", secondClick);
    }
}

function secondClick(event) {
    const input = event.target
    let text = input.value;
    if (text.trim() === "") {
        document.getElementById("warning").textContent = "Поле порожнє. Спершу напишіть щось"
    }
    else {
        document.getElementById("warning").textContent = ""
        alert("Наступне натискання. Записано значення: " + text)
    }
}

function solveTask5(event) {
    const p = event.target;
    const rawText = p.textContent.toLowerCase().trim();
    const cleanText = rawText.replace(/[!?]/g, "");

    function ukrainianToNumber(text) {
        const checkDirectNum = parseFloat(text.replace(',', '.'));
        if (!isNaN(checkDirectNum)) {
            return checkDirectNum;
        }
        const words = text.split(/\s+/);
        const numbersMap = {
            'нуль': 0,
            'один': 1, 'одна': 1,
            'два': 2, 'дві': 2,
            'три': 3,
            'чотири': 4,
            'п\'ять': 5,
            'шість': 6,
            'сім': 7,
            'вісім': 8,
            'дев\'ять': 9,
            'десять': 10,
            'одинадцять': 11,
            'дванадцять': 12,
            'тринадцять': 13,
            'чотирнадцять': 14,
            'п\'ятнадцять': 15,
            'шістнадцять': 16,
            'сімнадцять': 17,
            'вісімнадцять': 18,
            'дев\'ятнадцять': 19,
            'двадцять': 20,
            'тридцять': 30,
            'сорок': 40,
            'п\'ятдесят': 50,
            'шістдесят': 60,
            'сімдесят': 70,
            'вісімдесят': 80,
            'дев\'яносто': 90,
            'сто': 100,
            'двісті': 200,
            'триста': 300,
            'чотириста': 400,
            'п\'ятсот': 500,
            'шістсот': 600,
            'сімсот': 700,
            'вісімсот': 800,
            'дев\'ятсот': 900,
            'тисяча': 1000,
            'тисячі': 1000,
            'тисяч': 1000,
            'мільйон': 1000000,
            'мільйона': 1000000,
            'мільйонів': 1000000
        };

        let result = 0;
        let currentNumber = 0;

        for (const word of words) {
            if (word === 'і' || word === 'й' || word === 'та') {
                result += currentNumber;
                currentNumber = 0;
                continue;
            }

            const value = numbersMap[word];
            if (value === undefined) continue;

            if (value >= 1000) {
                currentNumber = currentNumber === 0 ? value : currentNumber * value;
                result += currentNumber;
                currentNumber = 0;
            } else if (value >= 100) {
                currentNumber += value;
            } else {
                currentNumber += value;
            }
        }

        result += currentNumber;
        return result;
    }
    const num = ukrainianToNumber(cleanText);
    if (num !== undefined && num !== null && !isNaN(num)) {
        const result = num * num;
        p.textContent = result;
        console.log(`Розпізнано число: ${num}. Квадрат: ${result}`);
    } else {
        console.warn("Не вдалося розпізнати число у тексті:", cleanText);
        p.textContent = cleanText;
    }
}

function setRed(event) {
    const el = event.target;
    el.style.backgroundColor = 'red';
    el.removeEventListener('click', setRed);
    el.addEventListener('click', setGreen);
}

function setGreen(event) {
    const el = event.target;
    el.style.backgroundColor = 'green';
    el.removeEventListener('click', setGreen);
    el.addEventListener('click', setRed);
}

document.getElementById("cat").onclick = getImageWidth;
document.getElementById("dog").onclick = getImageWidth;
document.getElementById("han").onclick = getImageWidth;

const all_links = document.querySelectorAll(".links");

all_links.forEach(link => {
    link.addEventListener("mouseenter", updateTitle);
});

const all_inputs = document.querySelectorAll(".another_task")
all_inputs.forEach(input => {
    input.addEventListener("click", showValue)
});

const all_task_input = document.querySelectorAll(".task");
all_task_input.forEach(task => {
    task.addEventListener("click", firstClick)
});

document.querySelectorAll(".num-p").forEach(el => {
    el.addEventListener("click", solveTask5);
});

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', setRed);
});
