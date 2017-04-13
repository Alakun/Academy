 //Задание 2
        //Создайте массив styles с элементами «Джаз», «Блюз».
        var styleMusic = ['Джаз', 'Блюз'];
        console.log('1. ' + styleMusic);

        //Добавьте в конец значение «Рок-н-Ролл»
        styleMusic.push('Рок-н-Ролл');
        console.log('2. ' + styleMusic);

        //Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
        var elmnt = styleMusic.length;
        elmnt = elmnt - 2;
        styleMusic.splice(elmnt, 1, 'Классика');
        console.log('3. ' + styleMusic);

        //Удалите первое значение массива и выведите его alert.
        alert('Удалили ' + styleMusic.shift());
        console.log('4. ' + styleMusic);

        //Добавьте в начало значения «Рэп» и «Регги».
        styleMusic.unshift('Рэп', 'Регги');
        console.log('5. ' + styleMusic);