$(document).ready(function() {
	$("#amount-100").hide();
	$("#amount-200").hide();
	$("#amount-300").hide();
	$('#100').on('click', function() {
    	$("#submit").hide();
    	$("#amount-200").hide();
		$("#amount-300").hide();
    	$("#amount-100").show();
	});
	$('#200').on('click', function() {
    	$("#submit").hide();
    	$("#amount-100").hide();
    	$("#amount-300").hide();
    	$("#amount-200").show();
	});
	$('#300').on('click', function() {
    	$("#submit").hide();
    	$("#amount-100").hide();
    	$("#amount-200").hide();
    	$("#amount-300").show();
	});
})