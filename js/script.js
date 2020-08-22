
$(document).ready(function () {
    $("button").click(function(e) {
        e.preventDefault();
        var seeSaw = $('.search-box-input').val();
        var resultElement =  $('#results')

        
        $.ajax({
            url: "//api.giphy.com/v1/gifs/search?q=" + seeSaw + "&api_key=2Zf3ESzIA3eYUPPmqdLntqJOO4gfPVhS",
            method: 'GET',
            data: {q:seesaw},
            dataType: 'json',
            success: function(response) {
                console.log(response.data);
            }
        });
    
         
     
    
    });

        



    
});


