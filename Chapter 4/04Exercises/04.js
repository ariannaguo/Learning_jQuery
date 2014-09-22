//1. Alter the stylesheet to hide the contents of the page initially. When the page is loaded, fade in the contents slowly.
//2. Give each paragraph a yellow background only when the mouse is over it.
//3. Make a click of the title (<h2>) and simultaneously fade it to 25 percent opacity and grow its left-hand margin to 20px. Then, when this animation is complete, fade the speech text to 50 percent opacity.
//4. Challenge: React to presses of the arrow keys by smoothly moving the switcher box 20 pixels in the corresponding direction. The key codes for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).


$(document).ready(function(){
    //Exercise 1
    $('body').hide().fadeIn('slow');
    //Exercise 2
    var currentColor=$('p').css('backgroundColor');
    $('p').mouseover(function(){
        $(this).css('backgroundColor','yellow');
    })
        .mouseout(function(){
            $(this).css('backgroundColor',currentColor)
        });
    //Exercise 3
    $('h2').click(function(event) {
        event.preventDefault();
        $(this).animate({
            opacity: 0.25,
            marginLeft: '20px'

        }, function(){
            $('.speech p').animate({opacity:0.5});
        });
    });
    //Exercise 4
    $(document).keyup(function(event){
        if(event.keyCode==37){
            $('#switcher').animate({marginLeft:'-=20px'})
        }else if(event.keyCode==38){
            $('#switcher').animate({marginTop:'-=20px'})
        }else if(event.keyCode==39) {
            $('#switcher').animate({marginRight:'-=20px'})
        }else if(event.keyCode==40) {
            $('#switcher').animate({marginBottom:'-=20px'})
        }
    })
});