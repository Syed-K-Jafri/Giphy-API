



$(document).ready(function(){
    $("#button").click(function(){
        event.preventDefault();
        let searchBox = $('#getter').val();

        $.getJSON(`https://api.giphy.com/v1/gifs/search?q=${searchBox}&api_key=i3eLWc366RmPZHe8Ff1rCrqWafjU1V7p&limit=20`, function(){
            

        }); //get json function
       
        
          
       
      
       
    }); // second function

    

}); // first function










//https://api.giphy.com/v1/gifs/search?api_key=i3eLWc366RmPZHe8Ff1rCrqWafjU1V7p&q=cats
//var apikey = 'i3eLWc366RmPZHe8Ff1rCrqWafjU1V7p';




// $.getJSON(url, function(data) {
    //console.log(data);
   




    // let api =  'https://api.giphy.com/v1/gifs/search?api_key=';
//let apiKey = 'i3eLWc366RmPZHe8Ff1rCrqWafjU1V7p';
//let query = '&q=cats';
//let url1 = api + apiKey + query;
//let searchbox = $('#getter').val();