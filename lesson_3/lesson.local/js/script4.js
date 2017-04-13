//Задание 4
//Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.
var arr = ['a', 'b', 'c'];
var arrValue = 'd';
alert (find(arr, arrValue));


function find(arr, value) {
    for (i=0; i<arr.length; i++){
        if(arr[i] == value) return i;
    }
    return -1;
};
