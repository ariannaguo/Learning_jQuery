// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

//listing 4.3
//$(document).ready(function () {
//    var $speech = $('div.speech');
//    $('#switcher-large').click(function () {
//        var num = parseFloat($speech.css('fontSize'));
//        num *= 1.4;
//        $speech.css('fontSize', num + 'px');
//    });
//});

////listing 4.4
//$(document).ready(function () {
//    var $speech = $('div.speech');
//    $('#switcher button').click(function () {
//        var num = parseFloat($speech.css('fontSize'));
//        if(this.id=='switcher-large'){
//            num *= 1.4;
//        }else if(this.id=='switcher-small'){
//            num /=1.4
//        }
//        $speech.css('fontSize', num + 'px');
//    });
//});

//listing 4.5
//$(document).ready(function(){
//    var $speech=$('div.speech');
//    var defaultSize=$speech.css('fontSize');
//    $('#switcher button').click(function(){
//        var num= parseFloat($speech.css('fontSize'));
//        switch (this.id){
//            case 'switcher-large':
//                num *= 1.4;
//                break;
//            case 'switcher-small':
//                num /=1.4;
//                break;
//            default:
//                num = parseFloat(defaultSize);
//        }
//        $speech.css('fontSize',num + 'px');
//    });
//});

//listing 4.8
//$(document).ready(function(){
//    $('p').eq(1).hide();
//    $('a.more').click(function(event){
//        event.preventDefault();
//        $('p').eq(1).show('slow');
//        $(this).hide();
//    });
//});

//listing 4.9
//$(document).ready(function(){
//    $('p').eq(1).hide();
//    $('a.more').click(function(event){
//        event.preventDefault();
//        $('p').eq(1).fadeIn('slow');
//        $(this).hide();
//    });
//});

//listing 4.10
//$(document).ready(function(){
//    $('p').eq(1).hide();
//    $('a.more').click(function(event){
//        event.preventDefault();
//        $('p').eq(1).slideDown('slow');
//        $(this).hide();
//    });
//});

//listing 4.11
//$(document).ready(function(){
//    var $firstPara = $('p').eq(1);
//    $firstPara.hide();
//    $('a.more').click(function(event){
//        event.preventDefault();
//        if ($firstPara.is(':hidden')){
//            $firstPara.fadeIn('slow');
//            $(this).text('read less');
//        }else{
//            $firstPara.fadeOut('slow');
//            $(this).text('read more');
//        }
//    });
//});

//listing 4.12
//$(document).ready(function(){
//    var $firstPara = $('p').eq(1);
//    $firstPara.hide();
//    $('a.more').click(function(event){
//        event.preventDefault();
//        $firstPara.slideToggle('slow');
//        var $link = $(this);
//        if($link.text()=='read more'){
//            $link.text('read less');
//        }else{
//            $link.text('read more');
//        }
//    });
//});

//listing 4.14
//$(document).ready(function () {
//    var $firstPara = $('p').eq(1);
//    $firstPara.hide();
//    $('a.more').click(function (event) {
//        event.preventDefault();
//        $firstPara.animate({
//            opacity: 'toggle',
//            height: 'toggle'
//        }, 'slow');
//        var $link = $(this);
//        if ($link.text() == 'read more') {
//            $link.text('read less');
//        } else {
//            $link.text('read more');
//        }
//    });
//});

//Listing 4.16
//$(document).ready(function(){
//    $('div.label').click(function(){
//        var paraWidth=$('div.speech p').outerWidth();
//        var $switcher = $(this).parent();
//        var switcherWidth = $switcher.outerWidth();
//        $switcher.animate({
//            borderWidth:'5px',
//            left:paraWidth-switcherWidth,
//            height:'+=20px'
//        },'slow');
//    });
//});

//Listing 4.17 change position
//$(document).ready(function(){
//    $('div.label').click(function(){
//        var paraWidth=$('div.speech p').outerWidth();
//        var $switcher = $(this).parent();
//        var switcherWidth = $switcher.outerWidth();
//        $switcher.css({
//            position:'relative'
//    }).animate({
//            borderWidth:'5px',
//            left:paraWidth-switcherWidth,
//            height:'+=20px'
//        },'slow');
//    });
//});

//Listing 4.18 chaining the effects
//$(document).ready(function(){
//    $('div.label').click(function(){
//        var paraWidth =$('div.speech p').outerWidth();
//        var $switcher = $(this).parent();
//        var switcherWidth = $switcher.outerWidth();
//        $switcher
//            .css({position:'relative'})
//            .animate({left:paraWidth - switcherWidth},'slow')
//            .animate({height:'+=20px'},'slow')
//            .animate({borderWidth:'5px'},'slow')
//    });
//});

////Listing 4.19
//$(document).ready(function(){
//    $('div.label').click(function() {
//        var paraWidth = $('div.speech p').outerWidth();
//        var $switcher = $(this).parent();
//        var switcherWidth = $switcher.outerWidth();
//        $switcher
//            .css({position: 'relative'})
//            .fadeTo('fast', 0.5)
//            .animate({left: paraWidth - switcherWidth}, 'slow')
//            .fadeTo('slow', 1.0)
//            .slideUp('slow')
//            .slideDown('slow');
//    });
//});

//Listing 4.20
//$(document).ready(function(){
//    $('div.label').click(function() {
//        var paraWidth = $('div.speech p').outerWidth();
//        var $switcher = $(this).parent();
//        var switcherWidth = $switcher.outerWidth();
//        $switcher
//            .css({position: 'relative'})
//            .fadeTo('fast', 0.5)
//            .animate({
//                left: paraWidth - switcherWidth
//            }, {
//                duration: 'slow',
//                queue: false //so that the animation start simultaneously with the previous one
//            })
//            .fadeTo('slow', 1.0)
//            .slideUp('slow')
//            .slideDown('slow');
//    });
//});

//Listing 4.22 manually queue
//$(document).ready(function(){
//    $('div.label').click(function() {
//        var paraWidth = $('div.speech p').outerWidth();
//        var $switcher = $(this).parent();
//        var switcherWidth = $switcher.outerWidth();
//        $switcher
//            .css({position: 'relative'})
//            .fadeTo('fast', 0.5)
//            .animate({
//                left: paraWidth - switcherWidth
//            }, {
//                duration: 'slow',
//                queue: false
//            })
//            .fadeTo('slow', 1.0)
//            .slideUp('slow')
//            .queue(function(next) {
//                $switcher.css({backgroundColor: '#f00'});
//                next();
//            })
//            .slideDown('slow');
//    });
//});

//Listing 4.27 对比4.22
//$(document).ready(function(){
//    $('div.label').click(function() {
//        var paraWidth = $('div.speech p').outerWidth();
//        var $switcher = $(this).parent();
//        var switcherWidth = $switcher.outerWidth();
//        $switcher
//            .css({position: 'relative'})
//            .fadeTo('fast', 0.5)
//            .animate({
//                left: paraWidth - switcherWidth
//            }, {
//                duration: 'slow',
//                queue: false
//            })
//            .fadeTo('slow', 1.0)
//            .slideUp('slow',function(){
//                $switcher.css({backgroundColor: '#f00'});
//            })
//            .slideDown('slow');
//    });
//});

// Listing 4.24 simultaneously
//$(document).ready(function(){
//    $('p').eq(2)
//        .css('border','1px solid #333')
//        .click(function(){
//            $(this).slideUp('slow').next().slideDown('slow');
//        });
//    $('p').eq(3).css('backgroundColor',"#ccc").hide();
//});

//Listing 4.25 P4 slidedown, then P3 slideup, with callback function
//$(document).ready(function(){
//    $('p').eq(2)
//        .css('border','1px solid #333')
//        .click(function(){
//            var $clickedItem = $(this);
//            $clickedItem.next().slideDown('slow',function(){
//                $clickedItem.slideUp('slow');
//            });
//        });
//    $('p').eq(3).css('backgroundColor','#ccc').hide();
//});
