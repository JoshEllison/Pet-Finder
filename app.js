let pets = {};

pets.apiKey = "266448db5145b91a83605ba714f92e12";
pets.apiToken ="7b70676a5b76f2ceee6488f96f4ab4c6";
pets.petUrl = "https://api.petfinder.com/pet.find";
// pets.availablePets = $('#availablePets');
pets.availablePets = $('.container');


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
			count: 100,
			age: petAge,
			status: 'A',
      output: 'full'
		}
	}).then(function(results){
  	let petResults = results.petfinder.pets.pet;
		console.log(petResults);
		for (let i = 0; i < petResults.length; ++i) {
    	let petName = petResults[i].name.$t;
      let petPhoto = petResults[i].media.photos.photo[3].$t;
      let petPhone = petResults[i].contact.phone.$t;
      // let petEmail = petResults[i].contact.email.$t;
      let petDescription = petResults[i].description.$t;

//seperate divs for each dog
//click into for more info
//carosel for each dog
// overall carosel
// carosel with articles about benefits etc
// foodsense.io look up for styling
// $('<div id="foo" class="bar">text</div>').appendTo('body');

			let $dogContainer = $('<div>').addClass('dog-box')
			$('.container').append($dogContainer);

			let $dogPic = $('<img>').addClass('dog-img');
			$dogPic.attr('src', petPhoto);
			$dogContainer.append($dogPic);

			// let $name = $('<div>').addClass('name');
			// $name.text(petName);
			// $dogContainer.append($name);

			let $infoBtn = $('<button>').addClass('modalBtn').text('Click to learn more!');
			$dogPic.append($infoBtn);

      // $dogContainer.append('<li>' + petDescription + '</li>');







		//
			// let name = ('<div id="nameDiv">' + petName + '</div>')
    	// $('.availablePets').append(name);
			// let photo = ('<div><img src="' + petPhoto + '"></div>');
      // $('.availablePets').append(photo);
			//
      // $('.availablePets').append('<li>' + petPhone + '</li>');








    }
	});
};
$(() => {
	pets.form();
});

			//  const $recipes = $('<a>').addClass('recipe-name').attr('href', recipeUrl);
			//  $recipes.text(label)
			//  $recipeContainer.append($recipes);

// if logic for undefined to remove undefined
