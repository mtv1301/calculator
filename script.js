$(document).ready(function() {
	$('.buttonNumber').click(function() {
		$('#monitor').append($(this).val());	
	});
	
	$('#cleanAllBtn').click(function(){
		$('#monitor').empty();
	});
	
	$('#division, #multiplication, #subtraction, #summary').click(function() {
		$('#monitor').append($(this).text());	
	});

})
/*
var monitor = 125 + (36+10*(25 + (3+2)*5));
function readString(str){
	if(str.contains('(')){
		var index1 = str.getFirstIndex(str);
		var index2 = str.getLastIndex(str);
		var newStr = str.substring(index1, index2);
		if(newStr.length>0){
			readString(newStr);
		}
	} else{
		return calculate(str);
	}
}
*/
