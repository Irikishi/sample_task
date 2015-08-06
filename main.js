$(document).ready(function(){
    $('.type').chosen();

    $('#form-footer').on('click', 'a', function(){
        var selector = $(this).attr('href');
        $(selector).css('display', 'block');
        $(selector).find('.chosen-container').css('width', $(selector).children('div').innerWidth() + 'px');
        $(this).css('display', 'none');
    });


    $('#regions').on('click', '.close', function(){
        $(this).parents('.area').css('display', 'none');
        var selector = $(this).parents('.area').attr('id');
        selector = '#' + selector;

        $('#form-footer > a').each(function() {
            if ($(this).attr('href') == selector) $(this).css('display', 'inline-block');
        })

        console.log();
    });


});
