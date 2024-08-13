const userAge = prompt("What is your age?");
const userCity = prompt("What is your city?");
const userSport = prompt("What is your sport?");

let userSportMessage;
let userCityMessage;
let userAgeMessage;

switch (userCity) {
    case 'Київ':
        userCityMessage = 'Ти живеш у столиці України';
        break;
    case 'Лондон':
        userCityMessage = 'Ти живеш у столиці Великої Британії';
        break;
    case 'Вашингтон':
        userCityMessage = 'Ти живеш у столиці США';
        break;
    default:
        userCityMessage = `Ти живеш у місті ${userCity}.`;
}

switch (userSport) {
    case 'футбол':
        userSportMessage = 'Круто! ти бажаєш бути як Мессі?';
        break;
    case 'баскетбол':
        userSportMessage = 'Круто! ти бажаєш бути як Майкл Джордан?';
        break;
    case 'спорт зал':
        userSportMessage = 'Круто! ти бажаєш бути як Роні Колеман?';
        break;
    default:
        userSportMessage = `Чудовий спорт ${userSport}.`;
}

const currentYear = new Date().getFullYear();
let age;
if (userAge !== null && userAge !== "") {
    age = currentYear - parseInt(userAge);
    userAgeMessage = `Ваш вік ${age}`;
} else {
    userAgeMessage = 'Ви не захотіли ввести свій вік';
}

if (userCity === null || userCity === "") {
    userCityMessage = 'Шкода, що Ви не захотіли ввести своє місто';
}

if (userSport === null || userSport === "") {
    userSportMessage = 'Шкода, що Ви не захотіли ввести свій спорт';
}

alert(`${userAgeMessage}, ${userCityMessage}, ${userSportMessage}`);
