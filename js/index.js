


$(function(){
    $(".emoji ").click(function(e){
        $('#CommentBox').val($('#CommentBox').val()+e.target.innerHTML);
    });
});


var isScrolling;

// Get the navba
var navbar = document.getElementById("nav");



window.addEventListener('scroll', function ( event ) {

    // Clear our timeout throughout the scroll
    window.clearTimeout( isScrolling );
    navbar.classList.add("transparent")
    navbar.classList.remove("transparent-out");
    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function() {

        // Run the callback
        navbar.classList.remove("transparent");
        navbar.classList.add("transparent-out");

    }, 90);

});