//Задание 5

//В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
var obj = {
  className: 'open menu'
}

//Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'
alert( obj.className ); // "open menu new me"

function addClass(obj, cls) {
  var result = obj.className ? obj.className.split(' ') : [];

  for (var i = 0; i < result.length; i++) {
    if (result[i] == cls) return; 
  }

  result.push(cls); 

  obj.className = result.join(' ');
}