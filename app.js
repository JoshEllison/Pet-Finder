console.log('sheets linked');


$(() => {

    $('form').on('submit', (event) => {
        event.preventDefault();

        const userInput = $('input[type="text"]').val();

        $.ajax(
            {
                url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput,
            }
        ).then(
            (data) => {
                console.log(data);
                $('#title').html(data.Title)
                $('#year').html(data.Year)
                $('#rating').html(data.Rated)
            },
            () => {
                console.log('bad request');
            }
        );

    });


})
