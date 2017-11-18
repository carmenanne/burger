$(function(){
	
	//still getting POST 404 error, pulling correct id and 'devoured' state from table database, but not updating with the ajax request...
	$('.change-devour').on('click', function(event){
		console.log('YUUUMMMM')
		var id = $(this).data('id');
		var newDevoured = $(this).data('newdevour');

		if (newDevoured===false){
			var newState = true
		}


		console.log(id)
		console.log($(this).data())
		console.log(newDevoured)
		console.log(newState)


		var newDevouredState = {
			devoured: newState
		};
		console.log(newDevouredState)

		$.ajax('/api/burgers' + id, {
			type: "PUT",
			data: newDevouredState
		}).then(
		function(){
			console.log('changed devoured to', newDevoured)

			location.reload();
		}
		);
	});

	//taking data from input field in form, posting it to burgers table w/ property burger_name, and reloading the page so new burger appears in browser
	$('.create-form').on('submit', function(event){
		event.preventDefault();

		var newBurger = {
			burger_name: $("#burger").val().trim()
		};
		console.log(newBurger)

		$.ajax('/api/burgers', {
			type: 'POST',
			data: newBurger
		}).then(
		function(){
			console.log('created new burger');

			location.reload();
		}
		);
		
	});

	
})