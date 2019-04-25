
let money=+prompt('Ваш бюджет на месяц?','0');
let time=prompt('Введите дату в формате YYYY-MM-DD','');
let appData={
    budget:money,
    timeData:time,
    expenses:{},
    optoinalExpenses: {},
    income: [],
    savings: false
};
let dopRashod=+prompt('Введите обязательную строку расходов в этом месяце');
let moneyRashod=+prompt('Во сколько это обойдется?');

appData.expenses.dopRashod=moneyRashod;
    

    alert("Бюджет на месяц - "+(appData.budget-moneyRashod)/30);