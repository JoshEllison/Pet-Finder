let pets = {};

pets.apiKey = "266448db5145b91a83605ba714f92e12";
pets.apiToken ="7b70676a5b76f2ceee6488f96f4ab4c6";
pets.petUrl = "https://api.petfinder.com/pet.find";
pets.availablePets = $('#availablePets');

pets.form = function() {
	$('#petForm').on('submit', function(e){
		e.preventDefault();
		var userLocation = $('.currentLocation').val();
    var petType = $('select#petType option:checked').val();
    var petSex = $('select#petSex option:checked').val();
    console.log('click');
		pets.petsCall(userLocation, petType, petSex);
	});
}
// method chain the filters
pets.petsCall = function(userLocation, petType, petSex) {
	console.log(userLocation, petType, petSex);
	$.ajax({
		url: pets.petUrl,
		method: 'GET',
    crossDomain: true,
		dataType: 'jsonp',
		data : {
			key: pets.apiKey,
			location: userLocation,
      animal: petType,
      sex: petSex,
			format: 'json',
			count: 10,
			age:"",
			status: 'A'
		}
	}).then(function(results){
  	var petResults = results.petfinder.pets.pet;
		console.log(petResults);
		for (var i = 0; i < petResults.length; ++i) {
    	var petName = petResults[i].name.$t;
      var petPhoto = petResults[i].media.photos.photo[0].$t;
      console.log(petName);
      console.log(petPhoto);
    	pets.availablePets.append('<p>' + petName + '</p>');
      pets.availablePets.append('<div><img src="' + petPhoto + '"></div>')
  	}
	});
};

$(document).ready(function() {
	pets.form();
});

// $(() => {
//
//     $('form').on('submit', (event) => {
//         event.preventDefault();
//
//         const userInput = $('input[type="text"]').val();
//
//         $.ajax(
//             {
//               "Authorization: Bearer {eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU1OGQ0NWIwNmJmNjFmNmFmZDNmYTc3Yzk1NzQ0MWNhYmZkY2JlODRhMjYwYzJlNGNlNmQ4NTI4MWY2NDUyMDU1ZTBiYThjMWVlZjY5OWQxIn0.eyJhdWQiOiJhdk9TUUhlVHN5TERqQ1FpZXV3RnVjaFNMUjhiRHVMRE1Ja2FDY2ZuQkZLR3BLRTVzZiIsImp0aSI6IjU1OGQ0NWIwNmJmNjFmNmFmZDNmYTc3Yzk1NzQ0MWNhYmZkY2JlODRhMjYwYzJlNGNlNmQ4NTI4MWY2NDUyMDU1ZTBiYThjMWVlZjY5OWQxIiwiaWF0IjoxNTU1MzQzMjYwLCJuYmYiOjE1NTUzNDMyNjAsImV4cCI6MTU1NTM0Njg2MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.aVyTBe8NV9bSuscQXZMUTz4WPMK588NkQyV6GXopQX_XplP9TODzs01PUPUi2QlCaMK8HLGjeclL1QGRpiZ2XZt_2l1l8chLwlWra1BbUVesK9ehTNa_x5syWnvea-EN0Z_vdLfqS6_2E3PCtvNLX7XUrsY77lhYlROv0Hggh_K0GEDlM0bcoUS8GOdmN4w-qiZEr34Ny510dQL6P4sNAv0prWHl2_pqlzxxuE8F7hKTf1mwoI2gPL6wbsShx_0rEigsY3UaojjprOZFLhkEoqbHuQ_jrQs5QPx7OZ6bzQPt5YRqNFUaOSsBakAFNxPEhT3TfMzVrJMCvTf9ytwhhw}" "https://api.petfinder.com/v2/animals?type=dog/"
//
//                 // url:'https://api.petfinder.com/v2/animals?type=dog&' + userInput,
//             }
//         ).then(
//             (data) => {
//                 console.log(data);
//                 // $('#title').html(data.Title)
//                 // $('#year').html(data.Year)
//                 // $('#rating').html(data.Rated)
//             },
//             () => {
//                 console.log('bad request');
//             }
//         );
//
//     });
//
//
// })
