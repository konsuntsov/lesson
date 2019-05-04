let money = +prompt('Ваш бюджет на месяц?', '0');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optoinalExpenses: {},
    income: [],
    savings: false
};
let dopRashod1 = +prompt('Введите обязательную строку расходов в этом месяце');
let moneyRashod1 = +prompt('Во сколько это обойдется?');
let dopRashod2 = +prompt('Введите обязательную строку расходов в этом месяце');
let moneyRashod2 = +prompt('Во сколько это обойдется?');


appData.expenses.dopRashod1 = moneyRashod1;
appData.expenses.dopRashod2 = moneyRashod2;

alert("Бюджет на месяц - " + (appData.budget) / 30);