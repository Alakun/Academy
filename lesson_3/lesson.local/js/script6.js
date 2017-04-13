//Задание 6

// У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:
var obj = {
    className: 'open menu'
}

//Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)
alert(obj.className); // "open menu new me"

function removeClass(obj, cls) {
    var result = obj.className ? obj.className.split(' ') : [];

    for (var i = 0; i < result.length; i++) {
        if (result[i] == cls) {
            result.splice(i, 1);
        }
    }
    obj.className = result.join('');
}
