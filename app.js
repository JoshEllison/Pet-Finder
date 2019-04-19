let pets = {};

pets.apiKey = "266448db5145b91a83605ba714f92e12";
pets.apiToken ="7b70676a5b76f2ceee6488f96f4ab4c6";
pets.petUrl = "https://api.petfinder.com/pet.find";
pets.availablePets = $('.container');

// filters
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
//api call
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
			count: 300,
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
      let petDescription = petResults[i].description.$t;
			let moreInfo = petDescription;
			let $dogContainer = $('<div>').addClass('dog-box')
			$('.container').append($dogContainer);



//Modal
			let $dogPic = $('<img>').addClass('dog-img').on('click', () => {
				$('#modal-header').empty();
				$('.dog-img').css('z-index', 0);
				$('.info').css('z-index', -1);
				$('<p>').text(petName).addClass('modal-info').appendTo('#modal-header');
				$('<p2>').text(moreInfo + "\n").addClass('modal-info').appendTo('#modal-header');
				$('<p3>').text(petPhone).addClass('modal-info').appendTo('#modal-header');

				$('#modal').css('display', 'block');
			});


				$dogPic.attr('src', petPhoto);
				$dogContainer.append($dogPic);
				let $dogInfo = $('<div>').addClass('info');
				$dogInfo.text(moreInfo);



// exit modal
		 $('#close').on('click', (event) => {
		 event.preventDefault();
		 $('#modal').css('display', 'none');
		 $('.info').css('z-index', 0);
		 $('.dog-img').css('z-index', 1);
		 });


    }
	});
};
$(() => {
	pets.form();
});
