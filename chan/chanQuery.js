$(document).ready(function(){
	 var $_zero = $("input#selector_zero");
	 $($_zero).on('keyup keydown change',function() {
		if ( $_zero.val() === "kamata-san") {
	 		$_zero.attr("disabled", "disabled");
	 		$_zero.hide('swing');
      	}
	 });

	 var $_one = $("input#selector_one");
	 var $_magic = $("input#magic-butt");
	 $($_magic).on('mousedown', function() {
	 	$_one.hide('blind');
	 	$_magic.val("double-click");
	 });

	 // var delayMillis = 1000;
	 // setTimeout(function() {}, delayMillis);


	 $($_magic).on('dblclick', function() {
		$_one.show('blind');
		$_magic.val("魔法のボタン");
	});


	var $_two = $("input#selector_two");
	var $_cnt = $("input#count-butt");


	// input の change イベントで発火
	// $_two.on('change', function() {
	// 	var counter = $_two.val().length;
	// 	alert(counter + "文字");
	// });


	// button 押下で発火
	$_cnt.on('mousedown' , function (){
		var len = $_two.val().length;
		if (len === 0) return false;
		alert(len + "文字");
	});



	// enter key press で発火
	// var pressEnter = function (event) {
  //   		if (event.which == 13 || event.keyCode == 13) {
  //       	//code to execute here
  //       	return false;
  //  	 		}
  //   		return true;
	// };



	// $_two.on(pressEnter, function (){
	// 	alert($_two.val().length + "文字");
	// });
	
	var $_inagon = $("img#inagon");
	$_inagon.on('mouseover', function(){
	  alert("あ！");
	});
	
});