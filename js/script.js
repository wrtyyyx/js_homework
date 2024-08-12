const userAge = prompt("What is your age?");
const userCity = prompt("What is your city?");
const userSport = prompt("What is your sport?");

let userSportMessege
let userCityMessege;
let userAgeMessege;
switch (userCity){
    case 'Kиїв':
         userCityMessege = 'Ти живеш у столиці Украіни';
        break
    case 'Лондон':
        userCityMessege = 'Ти живеш у столиці Велико Британії'
        break
    case 'Вашингтон':
        userCityMessege = 'Ти живеш у столиці США'
        break
    default:
        userCityMessege = `Ти живеш у місті ${userCity}.`

}



switch (userSport){
    case 'футбол':
         useSportMessege = 'Круто! ти бажаєш бути як мессі?';
        break
    case 'баскетбол':
        userSportMessege = 'Круто! ти бажаєш бути як майкл джордан?'
        break
    case 'спорт зал':
        userSportMessege = 'Круто! ти бажаєш бути як рони колейман?'
        break
    default:
        userSportMessege = `Чудовий спорт ${userSport}.`

}

if (userAge === null){
    userAgeMessege = 'Ви не захотіли ввести'
}else if(userCity === null){
    userCityMessege = 'Шкода, що Ви не захотіли ввести своє місто'
}else if(userSport === null){
    userSportMessege === 'Шкода, що Ви не захотіли ввести свій спорт'
}

alert(`Ваш вік ${userAgeMessege},${userCityMessege},${userSportMessege} `)


