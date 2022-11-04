let game = [
    {
        question: "Что иллюстрирует эмблема автомобиля BMW",
        answers: {answer_1: "Цвета флага баварии", answer_2: "Ничего не иллюстрирует", answer_3: "Песочные часы в круге", answer_4: "Вращающийся пропеллер самолета"},
        right_answer: "Вращающийся пропеллер самолета",
        win: "500"
    },
    {
        question: "Как в линейке BMW называется кузов типа 'Универсал'",
        answers: {answer_1: "Wagon", answer_2: "Touring", answer_3: "Universal", answer_4: "Van"},
        right_answer: "Touring",
        win: "1000"
    },
    {
        question: "Какой используется индекс линейки внедорожников у концерна BMW",
        answers: {answer_1: "X", answer_2: "4x4", answer_3: "Jeep", answer_4: "M"},
        right_answer: "X",
        win: "2000"
    },
    {
        question: "Как 'в народе' называется решетка радиатора BMW",
        answers: {answer_1: "Ноздри", answer_2: "Забрало", answer_3: "Нос", answer_4: "Клюв"},
        right_answer: "Ноздри",
        win: "3000"
    },
    {   question: "Как называется спортивный обвес BMW",
        answers: {answer_1: "X-tech", answer_2: "M-tech", answer_3: "W-tech", answer_4: "N-tech"},
        right_answer: "M-tech",
        win: "5000"
    },
    {   
        question: "Как называется система полного привода в автомобилях BMW",
        answers: {answer_1: "X-Drive", answer_2: "4x4", answer_3: "AWD", answer_4: "AllRoad"},
        right_answer: "X-Drive",
        win: "8000"
    },
    {   
        question: "Какой из указанных двигателей BMW 4х цилиндровый",
        answers: {answer_1: "M43", answer_2: "M52", answer_3: "M30", answer_4: "M50"},
        right_answer: "M43",
        win: "10000"
    },
    {   
        question: "Какой кузов BMW имеет в базовой комплектации передний привод",
        answers: {answer_1: "U06", answer_2: "E36", answer_3: "E20", answer_4: "G20"},
        right_answer: "U06",
        win: "13000"
    },
    {
        question: "Как называется система изменения фаз газораспределения компании БМВ",
        answers: {answer_1: "ValveTronic", answer_2: "Vanos", answer_3: "VTEC", answer_4: "N-VCT"},
        right_answer: "Vanos",
        win: "15000"
    },
    {
        question: "Какой серией представлены родстеры марки BWM",
        answers: {answer_1: "Z-Series", answer_2: "3-Series", answer_3: "X-Series", answer_4: "I-Series"},
        right_answer: "Z-Series",
        win: "25000"
    },
    {
        question: "В виде чего построена штаб-квартира BMW в Мюнхене",
        answers: {answer_1: "Логотипа BMW", answer_2: "4х цилиндрового двигателя", answer_3: "Цилиндра двигателя", answer_4: "Обычное здание"},
        right_answer: "4х цилиндрового двигателя",
        win: "50000"
    },
    {
        question: "Какой из этих двигателей BMW дизельный V8",
        answers: {answer_1: "M67", answer_2: "M57", answer_3: "N67", answer_4: "M70"},
        right_answer: "M67",
        win: "100000"
    },
    {
        question: "Девиз компании BMW",
        answers: {answer_1: "Freude am Fahren", answer_2: "The power of dreams", answer_3: "Das Auto", answer_4: "Wir leben Autos"},
        right_answer: "Freude am Fahren",
        win: "250000"
    },
    {
        question: "Назовите известного дизайнера классических моделей BMW",
        answers: {answer_1: "Клаус Люте", answer_2: "Джулио Партисани", answer_3: "Робер Опрон", answer_4: "Горден Вагенер"},
        right_answer: "Клаус Люте",
        win: "500000"
    },
    {
        question: "Как называется элемент экстерьера классических автомобилей BMW",
        answers: {answer_1: "Изгиб Хофмайстера", answer_2: "Изгиб Люте", answer_3: "Изгиб Стефенсона", answer_4: "Изгиб Брюгге"},
        right_answer: "Изгиб Хофмайстера",
        win: "1000000"
    },

]

let finalPrice = 0;
let randomAnswer = []

alert("Добро пожаловать в игру")
for (let i = 0; i < game.length; i++) {
    randomAnswer = Object.values(game[i].answers).sort(()=>Math.random()-0.5)
    let enterAnswer = prompt(`
Вопрос №"${i + 1}: ${game[i].question}  
a) ${randomAnswer[0]} 
б) ${randomAnswer[1]}  
в) ${randomAnswer[2]} 
г) ${randomAnswer[3]}`)
    //Проверка ответа
    switch (enterAnswer) {
        case ("а"):
            enterAnswer = randomAnswer[0]
            break;
        case ("б"):
            enterAnswer = randomAnswer[1]
            break;
        case ("в"):
            enterAnswer = randomAnswer[2]
            break;
        case ("г"):
            enterAnswer = randomAnswer[3]
            break;
    }
    if (enterAnswer == game[i].right_answer) {
        alert(`Поздравляем! Вы выиграли ${game[i].win}грн`)
        //  Фиксация несгораемой суммы
        switch (game[i].win) {
            case("5000"):
            finalPrice = game[i].win;
            alert(`Поздравляем! Вы дошли до несгораемой суммы в ${game[i].win}грн`);
            break;
            case("25000"):
            finalPrice = game[i].win;
            alert(`Поздравляем! Вы дошли до несгораемой суммы в ${game[i].win}грн`);
            break;
            case("1000000"):
            finalPrice = game[i].win;
            alert(`Поздравляем! Вы дошли до несгораемой суммы в ${game[i].win}грн`);
            break;
        }

        let goOn = confirm("Желаете продолжить далее?")
        if (goOn) { continue }
        else {
            alert(`Вы закончили игру. Ваш выигрыш: ${game[i].win}грн`)
            break;
        }

    }
    else {
        alert(`Вы ответили не правильно. Ваш выигрыш: ${finalPrice}`)
        break;
    }
}