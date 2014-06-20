$(document).ready(function() {
	$(".col_1 ul li").on("click", function(event){
		event.preventDefault();
		var listItem = this;
    $('.col_1 ul li').parentsUntil('body', '.col_1').siblings().children('ul').append(listItem);
	})
});



