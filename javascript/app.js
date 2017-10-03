$(document).ready(function(){

    $('button').on('click', function() {
        var kardashian = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + kardashian + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {


                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var kardashianDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var kardashianImage = $('<img/>');

                    kardashianImage.addClass('anImg')

                    kardashianImage.attr('src', results[i].images.fixed_height.url);

                    kardashianImage.attr('data-still', results[i].images.fixed_height_still.url)

                    kardashianImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    kardashianDiv.append(p);

                    kardashianDiv.append(kardashianImage);

                    kardashianDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var kardashians = [''];

    
        //This function "adds" the buttons 

        // handles the event when clicked
        $('#theButton').on('click', function(){
            var kardashianButton = $("#gif-input").val();
            //adds the new kardashian

            var newButton = $("<button/>").addClass( "btn btn-info kardashian").attr('data-name',kardashianButton).html(kardashianButton).css({'margin': '5px'});
            
            $("#kardashiansbuttons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + kardashianButton + "&api_key=dc6zaTOxFJmzC&limit=10";
                console.log(kardashianButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var kardashianDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var kardashianImage = $('<img/>');

                    kardashianImage.addClass('anImg')

                    kardashianImage.attr('src', results[i].images.fixed_height_still.url);

                    kardashianImage.attr('data-still', results[i].images.fixed_height_still.url)

                    kardashianImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    kardashianDiv.append(p);

                    kardashianDiv.append(kardashianImage);

                    kardashianDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});