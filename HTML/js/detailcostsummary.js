$(document).ready(function () {
	
	// $('[data-toggle="popover"]').popover();
	 $('[data-toggle="tooltip"]').tooltip(); 
	
	
	$('#cof').hide();
	$('.awardBtn').click(function(){
		$('#cof').show();
		$('#conV').hide();
		
	});
	$('#cancelAward').click(function(){
		$('#cof').hide();
		$('#conV').show();
		
	});
	
	$("#winAwardBtn").on("click",function(){
		$("#contractorModal").modal()
	});
	$(".QuoteBoxDiv").each(function(){
		$(this).click(function(){
		$(this).addClass('bgChange');
		});
	});
	
	$(".btn-quo").each(function(){
	$(this).click(function(){
	$(".btn-quo").removeClass('activeB');
	  $(this).addClass('activeB');
	});
	});
	
	$("document").on("change", "updateSt select", function(){
		$(this).on("change", function(){
			var statVal = $(this).val();
			var statID = $(this).attr('id');
			$("."+statID).text(statVal).append('<span class="glyphicon glyphicon-check staticon">'+'</span>');
		});
	});
			
    
	
$(document).on("change", "input.awardChk:checkbox", function() {
     var group = ":checkbox[name='"+ $(this).attr("name") + "']";
   if($(this).is(':checked')){
     $(group).not($(this)).attr("checked",false);
   }
});
				
		


		
		
				
	// $(".mnbtn").each(function(){
	// 	$(this).click(function(){
	// 		$(".mnbtn").removeClass('active');
	// 		$(this).addClass('active');
	// 		$(".detailedMpanel").fadeOut('700');
	// 		$(".detailedMpanel").fadeIn('600');
	// 	});
	// });
	
	
	$(".qview").each(function(){
		$(this).click(function(){
			if($(this).parent().hasClass('selectQuote')){
				$(this).parent().removeClass('selectQuote');
			}
			else{
			$(this).parent().addClass('selectQuote');
			$('.btn-shad').removeAttr('disabled');
			}
			});
		});
	
					$('.multi-item-carousel').carousel({
				  interval: false
				});

			// for every slide in carousel, copy the next slide's item in the slide.
			// Do the same for the next, next item.
			$('.multi-item-carousel .item').each(function(){
			  var next = $(this).next();
			  if (!next.length) {
				next = $(this).siblings(':first');
			  }
			  next.children(':first-child').clone().appendTo($(this));
			  
			  if (next.next().length>0) {
				next.next().children(':first-child').clone().appendTo($(this));
			  } else {
				$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
			  }
			});
			
			

});

function createNewQuo(){
	window.location.href = "detailEstimatingCostSummary.html";
}

function resendMail(){
	window.location.href = "mailto:abhishekmishra@nagarro.com";
}

function getTabEvent(id, e) {
    //console.log(arguments[0]);
		//alert(e.currentTarget);
   	$(e.currentTarget).find('a').removeClass('active');
    var target = $(e.target);
        target.addClass('active');
    var idDiv = $(target).attr('id').split('-')[0];

        $('.navcontentPanel div.proposalpanel').addClass('hide')
   		 var contentDIv = $('.navcontentPanel div.proposalpanel').filter('#' + idDiv + '-panel').removeClass('hide');
}	