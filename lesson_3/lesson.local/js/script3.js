//Задание 3 Напишите код, который:
//
//Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
//Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
//При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
//Выводит сумму всех значений массива.


//Массив
var arr = [];
//Вводим массив до ограничительных свойств
do {
    arr.push(result = prompt('Введите число'));
}
while (result !== '' && result !== null);

sum = 0;
//Считаем сумму массива
for (i = 0; i < arr.length; i++) {
    sum = sum + +arr[i];

}
alert(sum);
