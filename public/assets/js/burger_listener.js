$(function(){
	console.log('test')
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