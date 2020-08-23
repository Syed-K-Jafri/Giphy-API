  $(document).ready(function(){
        
        $("button").click(function(){

            event.preventDefault();
            let searchBox = $('#getter').val();
            apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchBox}&api_key=i3eLWc366RmPZHe8Ff1rCrqWafjU1V7p&limit=10`

            $.ajax({
                url: apiUrl,
                dataType: 'json',
                type: 'GET',
                cache: false,
                success: function(data) {
                    console.log('success', data);

                    if (searchBox === "") {
                        alert(`Search Field is Empty.`);
                    }
                    
                    for(var i = 0; i < data.data.length; i++) {
                        var newImg = document.createElement("img");
                            newImg.src = data.data[i].images.original.url;
                    document.body.appendChild(newImg);


                    }   


                }

                

            });

        });


  });


    




  
    













        
    








//https://api.giphy.com/v1/gifs/search?api_key=i3eLWc366RmPZHe8Ff1rCrqWafjU1V7p&q=cats
//var apikey = 'i3eLWc366RmPZHe8Ff1rCrqWafjU1V7p';




// $.getJSON(url, function(data) {
    //console.log(data);
   




    // let api =  'https://api.giphy.com/v1/gifs/search?api_key=';
//let apiKey = 'i3eLWc366RmPZHe8Ff1rCrqWafjU1V7p';
//let query = '&q=cats';
//let url1 = api + apiKey + query;
//let searchbox = $('#getter').val();