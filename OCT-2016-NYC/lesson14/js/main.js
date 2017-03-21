$("#add-item-btn").click(function() {
	var newItem = $("#new-item").val();

	$("#items").append("<li>" + newItem + "<button class=\"delete\">X</button>" + "</li>");
});

// Can't do this! There's no .delete buttons yet!
// $(".delete").click(function() {
// 	// Remove the li that is the parent of this button.
// 	$(this).parent().remove();
// });

$(document).on('click', '.delete', function() {
	$(this).parent().remove();
});