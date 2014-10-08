//1. Alter the code that introduces the back to top links so that the links only appear after the fourth paragraph.
//2. When a back to top link is clicked, add a new paragraph after the link containing the message You were here. Ensure that the link still works.
//3. When the author's name is clicked, turn it bold (by adding an element, rather than manipulating classes or CSS attributes).
//4. Challenge: On a subsequent click of the bolded author's name, remove the <b> element that was added (thereby toggling between bold and normal text).
//5. Challenge: Add a class of inhabitants to each of the chapter's paragraphs without calling .addClass(). Make sure to preserve any existing classes.

$(document).ready(function(){
    //Exercise 1
    $('<a href="#top">back to top</a>').insertAfter('div.chapter p:eq(3)');
    $('<a id="top"></a>').prependTo('body');

    //Exercise 2
    $('a[href*="top"]').click(function(){
        $(this).after('<p>You were here.</p>');
    });

    //Exercise 3
//   $('#f-author').click(function(){
//       $(this).wrap('<b></b>')
//   });

    //Exercise 4
    $('#f-author').click(function(){
        //use.parent() to check any element wrapping the inside element
        if($(this).parent().is("b")){
            $(this).unwrap()
        }else{
            $(this).wrap('<b></b>')
        }
    });

    //Exercise 5



});