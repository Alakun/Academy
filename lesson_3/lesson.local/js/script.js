var task = prompt('Введите номер задания от 2-6:');
switch (task) {
    case 2:

       

        break;

    case 3:

        //Задание 3 Напишите код, который
        //Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве
        do {
            var result;
            result = prompt(result);
        } while (result == number);
        break;
    case 4:
        //Задание 4
        // Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.
        var arr = ['a', 'b', 'c'];
        var arrValue = 'c';
        find(arr, arrValue);


        function find(arr, value) {
            arr.forEach(function (item, i, arr) {

                if (item == value) {
                    var a = item;
                }

                if (a != null) {
                    alert(i);

                }
            });
        };

        break;
    case 5:

        break;
    case 6:

        break;
}
