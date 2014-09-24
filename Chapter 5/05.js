// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

//Listing 5.3
//$(document).ready(function() {
//    // Use attr() to add an id, rel, and title.
//    $('div.chapter a').attr({
//        rel: 'external',
//        title: 'Learn more at Wikipedia',
//        id: function(index, oldValue) {
//            return 'wikilink-' + index;
//        }
//    });
//});

//Listing 5.5
//$(document).ready(function(){
//    $('div.chapter a[href*="wikipedia"]').attr({
//        rel:'external',
//        title: function(){
//            return'Learn more about '+$(this).text()+' at Wikipedia.';
//        },
//        id:function(index,oldValue){
//            return 'wikilink-' +index;
//        }
//    })
//});

//Listing 5.7
//$(document).ready(function() {
//    // Use attr() to add an id, rel, and title.
//    $('div.chapter a[href*="wikipedia"]').attr({
//        rel: 'external',
//        title: function() {
//            return 'Learn more about ' + $(this).text() + ' at Wikipedia.';
//        },
//        id: function(index, oldValue) {
//            return 'wikilink-' + index;
//        }
//    });
//
//    // Add "back to top" links.
//    $('<a href="#top">back to top</a>').insertAfter('div.chapter p');
//    $('<a id="top"></a>');
//});

//Listing 5.10
//$(document).ready(function(){
//    $('span.footnote')
//        .insertBefore('#footer')
//        .wrapAll('<ol id="notes"></ol>')
//        .wrap('<li></li>');
//});

//Listing 5.12
//$(document).ready(function(){
//    //insert an empty <ol> before #footer.
//    var $notes=$('<ol id="notes"></ol>').insertBefore('#footer');
//    //insert index (from 1) before each footnote in the paragraph.
//    $('span.footnote').each(function(index){
//        $('<sup>'+(index+1)+'</sup>').insertBefore(this);
//        //append the footnotes to the empty <ol>
//        $(this).appendTo($notes).wrap('<li></li>');
//    });
//});

////Listing 5.16
//$(document).ready(function(){
//    var $notes=$('<ol id="notes"></ol>').insertBefore('#footer');
//    $('span.footnote').each(function(index){
//        $(this)
//            .before([
//                '<a href="#footnote-',
//                index+1,
//                '"id="context-',
//                index+1,
//                '" class="context">',
//                '<sup>',
//                index+1,
//                '</sup></a>'
//            ].join(''))
//            .appendTo($notes)
//            .append([
//                '&nbsp;(<a href="context-',
//                index+1,
//                '">context</a>)'
//            ].join(''))
//            .wrap('<li id="footnote-'+(index+1)+'"></li>');
//    });
//});

//complete
$(document).ready(function() {
    // Use attr() to add an id, rel, and title.
    $('div.chapter a[href*="wikipedia"]').attr({
        rel: 'external',
        title: function() {
            return 'Learn more about ' + $(this).text() + ' at Wikipedia.';
        },
        id: function(index, oldValue) {
            return 'wikilink-' + index;
        }
    });

    // Add "back to top" links.
    $('<a href="#top">back to top</a>').insertAfter('div.chapter p');
    $('<a id="top"></a>').prependTo('body');

    // Create footnotes.
    var $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
    $('span.footnote').each(function(index) {
        $(this)
            .before([
                '<a href="#footnote-',
                    index + 1,
                '" id="context-',
                    index + 1,
                '" class="context">',
                '<sup>',
                    index + 1,
                '</sup></a>'
            ].join(''))
            .appendTo($notes)
            .append([
                '&nbsp;(<a href="#context-',
                    index + 1,
                '">context</a>)'
            ].join(''))
            .wrap('<li id="footnote-' + (index + 1) + '"></li>');
    });
// Style pull quotes
    $('span.pull-quote').each(function(index){
        var $parentParagraph = $(this).parent('p');
        $parentParagraph.css('position','relative');
        var $clonedCopy = $(this).clone();
        $clonedCopy
            .addClass('pulled')
            .find('span.drop')
            .html('&hellip;')
            .end()
            .text($clonedCopy.text())
            .prependTo($parentParagraph);
    });
});


