let pets = {};

pets.apiKey = "266448db5145b91a83605ba714f92e12";
pets.apiToken ="7b70676a5b76f2ceee6488f96f4ab4c6";
pets.petUrl = "https://api.petfinder.com/pet.find";
pets.availablePets = $('#availablePets');

pets.form = function() {
	$('#petForm').on('submit', function(e){
		e.preventDefault();
		let userLocation = $('.currentLocation').val();
    let petAge = $('select#petAge option:checked').val();
    let petSex = $('select#petSex option:checked').val();
    console.log('click');
		pets.petsCall(userLocation, petAge, petSex);
	});
}

pets.petsCall = function(userLocation, petAge, petSex) {
	console.log(userLocation, petAge, petSex);
	$.ajax({
		url: pets.petUrl,
		method: 'GET',
    crossDomain: true,
		dataType: 'jsonp',
		data : {
			key: pets.apiKey,
			location: userLocation,
      animal: 'dog',
      sex: petSex,
			format: 'json',
			count: 20,
			age: petAge,
			status: 'A',
      output: 'full'
		}
	}).then(function(results){
  	let petResults = results.petfinder.pets.pet;
		console.log(petResults);
		for (let i = 0; i < petResults.length; ++i) {
    	let petName = petResults[i].name.$t;
      let petPhoto = petResults[i].media.photos.photo[0].$t;
      let petPhone = petResults[i].contact.phone.$t;
      let petEmail = petResults[i].contact.email.$t;
      let petDescription = petResults[i].description.$t;
      console.log(petName);
      console.log(petPhoto);
      console.log(petPhone);
    	$('#availablePets').append('<p>' + petName + '</p>');
      $('#availablePets').append('<div><img src="' + petPhoto + '"></div>');
      $('#availablePets').append('<li>' + petPhone + '</li>');
      $('#contact').append('<li>' + petEmail + '</li>');
      $('#availablePets').append('<li>' + petDescription + '</li>');

    }
	});
};

$(document).ready(function() {
	pets.form();
});
