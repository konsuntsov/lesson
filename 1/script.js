let money,time;
function start(){
     money = +prompt('Ваш бюджет на месяц?', '0');
     time = prompt('Введите дату в формате YYYY-MM-DD', ''); 

     while(isNaN(money) || money=="" || money==null){
        money = +prompt('Ваш бюджет на месяц?', '0');
     }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};



function chooseExpenses(){
    for (let i=0; i<2; i++){
        let a = prompt('Введите обязательную строку расходов в этом месяце');
        let b = prompt('Во сколько это обойдется?');
    if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null &&
     a != '' && b != '' && a.length<50 ){
         console.log("done");
         appData.expenses[a]=b;
     } else{
         console.log("error");
         i--;
    
     }
        
    }
}

chooseExpenses();

function chooseOptExpenses() {
    for (let i=0; i<3; i++){
        let a = prompt ("Статья необязательных расходов?");
        appData.optionalExpenses[i] = a;
        console.log(appData.optionalExpenses);
    }
}

chooseOptExpenses();

function detectDayBudget(){
    appData.moneyPerDay=(appData.budget/30).toFixed(1);
    alert("Ежедневный бюджет" + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel(){
  if (appData.moneyPerDay <100){
    console.log('минимальный уровень достатка');
} else if(appData.moneyPerDay >100 && appData.moneyPerDay <2000){
    console.log('средний уровень достатка');
} else if (appData.moneyPerDay >2000){
    console.log('высокий уровень достатка');
} else {
    console.log('erorr');
}  
}

detectLevel();

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
    }
}
checkSavings();