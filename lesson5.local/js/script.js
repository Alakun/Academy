$(document).ready(function () {
    $('#go1').on('click', function () {

        $.ajax({
            url: 'js/1.html',
            method: 'GET'
        }).done(function (result) {
            $('.class1').html(result);
        });
    });

    $('#go2').on('click', function () {

        $.ajax({
            url: 'js/1.json',
            method: 'GET'
        }).done(function (result) {
            console.log(result.top);
        });
    });

    $('#go3').on('click', function () {

        $.ajax({
            url: 'js/1.php',
            method: 'GET',
            data: {
                param1: 'text',
                param2: 100
            }
        }).done(function (result) {
             $('.class1').text(result);
        });
    });
    
});
