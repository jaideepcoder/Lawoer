$(function() {

	$('#subject1').focus();


    $('#initial-form').submit(function (event) {
    	$('#submit-form').fadeIn('slow');
    	$('#initial-form').slideUp('slow');
    	$('#subject2').val($('#subject1').val())
    	event.preventDefault();
    });
});