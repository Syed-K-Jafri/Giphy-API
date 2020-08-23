
$("button").click(function() {

    var myRequest = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=i3eLWc366RmPZHe8Ff1rCrqWafjU1V7p&limit=15");

    myRequest.done(
        function(data) { 
    
            //console.log("success got data", data); 
            for(var i = 0; i < data.data.length; i++) {
                var newImg = document.createElement("img");
                    newImg.src = data.data[i].images.original.url;
                document.body.appendChild(newImg);
            }
        }            
    );
    

}) //click handler parens
















        
    








//https://api.giphy.com/v1/gifs/search?api_key=i3eLWc366RmPZHe8Ff1rCrqWafjU1V7p&q=cats
//var apikey = 'i3eLWc366RmPZHe8Ff1rCrqWafjU1V7p';




// $.getJSON(url, function(data) {
    //console.log(data);
   




    // let api =  'https://api.giphy.com/v1/gifs/search?api_key=';
//let apiKey = 'i3eLWc366RmPZHe8Ff1rCrqWafjU1V7p';
//let query = '&q=cats';
//let url1 = api + apiKey + query;
//let searchbox = $('#getter').val();