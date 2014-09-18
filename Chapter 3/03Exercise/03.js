
// Exercises
//1. When Charles Dickens is clicked, apply the selected style to it.
//2. When a chapter title (<h3 class="chapter-title">) is double-clicked,
//toggle the visibility of the chapter text.
//3. When the user presses the right arrow key, cycle to the next body class. The
//key code for the right arrow key is 39.
//4. Challenge: Use the console.log() function to log the coordinates of the mouse as it moves across any paragraph.
// (Note: console.log() displays its results via the Firebug extension for Firefox, Safari's Web Inspector,
// or the Developer Tools in Chrome).
//5. Challenge: Use .mousedown() and .mouseup() to track mouse events anywhere on the page.
// If the mouse button is released above where it was pressed, then add the hidden class to all paragraphs.
// If it is released below where it was pressed, then remove the hidden class from all paragraphs.

$(document).ready(function(){
    $('.author').click(function(){
        $('.author').addClass('selected');
    });
    $('.chapter-title').dblclick(function(){
        $(this).nextAll().toggleClass('hidden')
    });

    var toggleSwither = function(event){
        if(!$(event.target).is('button')){
            $('#switcher button').toggleClass('hidden');
        }
    };
    $('#switcher').on('click',toggleSwither);

    //The setBodyClass()function changes the page style
    //The style switcher state is also updated
    var setBodyClass = function(className){
        $('body').removeClass().addClass(className);
        $('#switcher button').removeClass('selected');
        $('#switcher-'+className).addClass('selected');
        $('#switcher').off('click',toggleSwither);
        if(className=='default'){
            $('#switcher').on('click',toggleSwither);
        }
    };
    //Begin with the switcher-default button "selected"
    $('#switcher-default').addClass('selected');

    var i=0;
    $(document).keyup(function(event){
        var bodyClass = ["default","narrow","large"];
//        var key = String.fromCharCode(event.keyCode);
            if(event.keyCode==39){
                i=(i+1)%3;
//                console.log(i);
                setBodyClass(bodyClass[i]);
            }
    });
});