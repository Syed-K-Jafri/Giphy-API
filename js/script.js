
$(document).ready(function(){

    
    var $input = $("#input");
    var $submit = $("#submit");
    

    $submit.on('click', function (event) {
        event.preventDefault();
        var inputVal = $input.val();
        getGiphys(inputVal);

    });

// Make a get request to the giphy api with the input value

function getGiphys() {
    
    

});

