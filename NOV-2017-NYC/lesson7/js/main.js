// When the value in #hats changes
$('#hats').change(function() {
	// Get the hat type from the dropdown
	const hatType = $(this).val();
	
	// Hide all the hats
	$('.hat').hide();

	// Show the hat we want
	// if (hatType === 'straw') {
	// 	$('.straw').show();
	// } else if (hatType === 'propeller') {
	// 	$('.propeller').show();
	// } else if (hatType === 'top') {
	// 	// Default to a top hat.
	// 	$('.top').show();
	// }

	// Show the hat we want
	$('.' + hatType).show();

});















// switch(hatType) {
	// 	case 'straw':
	// 		alert('straw hat');
	// 		break;
	// 	case 'propeller':
	// 		alert('propeller hat');
	// 		break;
	// 	case 'top':
	// 		// Fallthrough to default is intentional.
	// 	default:
	// 		alert('top hat');
	// }