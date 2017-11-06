var ChanQuery = ChanQuery || (function() {

	function ChanQuery(params) {
		this.inputZero = params.input.zero;
	};

    ChanQuery.prototype.initialize = function() {

		 var $_zero = $(this.inputZero);
		 $($_zero).on('keyup keydown change',function() {
			if ( $_zero.val() === "kamata-san") {
		 		$_zero.attr("disabled", "disabled");
		 		$_zero.hide('swing');
	      	}
		 });

		 var $_one = $("input#selector_one");
		 var $_magic = $("input#magic-butt");
		 $($_magic).on('mousedown', function() {
		 	$_one.hide('swing');
		 	$_magic.val("ボタンの魔法");
		 });

		 // var delayMillis = 1000;
		 // setTimeout(function() {}, delayMillis);


		 $($_magic).on('dblclick', function() {
			$_one.show('swing');
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
		$_cnt.on('mousedown' , function() {
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

	    var $great = $("input#great-butt");
		var $three = $("input#selector_thr");
		$great.on('mousedown', function() {
			$three.toggle('blind');
		});

		var $great2 = $("input#great-butt2");
		var $four = $("input#selector_four");
		$great2.on('mousedown', function() {
			if($four.is(':visible')) {
				$four.hide('swing');
			} else {
				$four.show('swing');
			}
		});
		
		var $inagon = $("img#inagon");
		$inagon.on('mouseover', function() {
		  $inagon.draggable();
		  $inagon.css({'opacity' : '0.8'});
		}).on('mouseout', function(){
			$inagon.css({'opacity' : '1.0'});
		});
  	}

	return ChanQuery;
})();