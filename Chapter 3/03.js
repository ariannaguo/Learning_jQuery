// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
//$(document).ready(function () {
//    $('#switcher-default')
//        .addClass('selected')
//        .on('click', function () {
//            $('body').removeClass();
//        });
//    $('#switcher-narrow').on('click', function () {
//        $('body').removeClass().addClass('narrow');
//    });
//    $('#switcher-large').on('click', function () {
//        $('body').removeClass().addClass('large');
//    });
//    $('#switcher button').on("click", function () {
//        $('#switcher button').removeClass('selected');
//        $(this).addClass('selected');
//    });
//});
//    $(document).ready(function () {
//        $('#switcher-default').addClass('selected');
//        $('#switcher button').on('click',function () {
//            var bodyClass = this.id.split('-')[1];
//            $('body').removeClass().addClass(bodyClass);
//            $('#switcher button').removeClass('selected');
//            $(this).addClass('selected');
//            });
//    });
//$(document).ready(function(){
//    $('#switcher-default').addClass('selected');
//    $('#switcher').click(function(event){
//        if($(event.target).is('button')){
//            var bodyClass= event.target.id.split('-')[1];
//            $('body').removeClass().addClass(bodyClass);
//            $('#switcher button').removeClass('selected');
//            $(event.target).addClass('selected');
//        }else{
//         $('#switcher button').toggleClass('hidden') ;
//        }
//    });
//});
$(document).ready(function () {
    $('#switcher-default').addClass('selected');
    $('#switcher').on('click', 'button', function () {
        var bodyClass = event.target.id.split('-')[1];
        $('body').removeClass().addClass(bodyClass);
        $('#switcher button').removeClass('selected');
        $(this).addClass('selected');
    });
});

