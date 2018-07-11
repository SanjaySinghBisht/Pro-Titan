
   $(document).ready(function() {
		
	//$('.fc-button-group').find('.fc-myCustomButton2-button').addClass('.calendarTypeDropDown');
		
      var calendar = $('#calendar').fullCalendar({
	  customButtons: {
		myCustomButton2: {
            text: 'Calendar Type',
            click: function() {
                
				// if(!$(".fc-myCustomButton2-button").hasClass('selection')){
				// var htmlSel = '<div class="dropDownAllprojects"><ul><li><a href="#">Company Calendar</a></li><li><a href="#">My Calendar</a></li><li><a href="#">Shipping Calendar</a></li><li><a href="#">Bidding Calendar</a></li></ul></div>';
					// $(".fc-myCustomButton2-button").append(htmlSel);
					// $(".fc-myCustomButton2-button").addClass('selection');
				// }
				// else{
					// $('.dropDownAllprojects').remove();
					// $(".fc-myCustomButton2-button").removeClass('selection');
				// } 
				// $(".calendartype").removeClass('hide');
				// $('#calendarPopupData').addClass('in');
				$("#calendarPopupData").modal();	
				
            }
        },
		
		
		newEvents: {
            text: 'New Events',
            click: function() {
				 $("#myModalnewEvent").modal();	
				 $(".highLightTd").each(function(){
					var fdat = $(".highLightTd:first").attr('data-date');
					var ldat = $(".highLightTd:last").attr('data-date');
					$("#apptStartTime").val(fdat);
					$("#apptEndTime").val(ldat);
				});
            }
        },
		
		recurrEvents: {
            text: 'Recurring Events',
            click: function() {
					 $("#myModalrecurrEvent").modal();
				
            }
        }
		
    },

	  header: {left: 'title', center: '', right:  'newEvents,recurrEvents,myCustomButton2,prev,today,next' },
      defaultView: 'month',
      editable: false,
      selectable: true,
      //header and other values
      
    });
	
	$(".saveEventForm").on("click", function(){
		doSubmit();
	});


  function doSubmit(){
	  var postVal = $('#taskNm').val();
	  postVal = 'postVal' + $('#usrName').val();
		$("#myModalnewEvent").modal('hide');
		console.log($('#apptStartTime').val());
		console.log($('#apptEndTime').val());
		console.log($('#apptAllDay').val());
			//alert("form submitted");
        
    $("#calendar").fullCalendar('renderEvent',
        {
            title: $('#taskNm').val() +', '+ $('#usrName').val(),
            start: $('#apptStartTime').val(),
            end: 	$('#apptEndTime').val(),
            //allDay: ($('#apptAllDay').val() == "true"),
        },
        true);
   }
   
   
  $('#calendarSm1').fullCalendar({
        // put your options and callbacks here
		 header: {left: 'prev', center: 'title', right:  'next' },
		 views: { month: { titleFormat: 'MMM YYYY'}},
		 editable: true,
		selectable: true,
		dayClick: function() {

        alert('Date: ' + date.format());
        alert('Resource ID: ' + resourceObj.id);

    },
			
    });

	$('#calendarSm2').fullCalendar({
       // put your options and callbacks here
		 header: {left: 'prev', center: 'title', right:  'next' },
		 views: { month: { titleFormat: 'MMM YYYY'}}
    });
	
	
	$(".cButtons").each(function(){
		$(this).click(function(){
	   $(".cButtons").removeClass('activecBtn');
	   $(this).addClass('activecBtn');
		});
	});
	
	$('.cButtons').on("click", function(){
		if($('.slidecSideBox').hasClass('slidecSideBoxSlide')){
			 $('.slidecSideBox').removeClass('slidecSideBoxSlide');
			 $('.fullcalArea').removeClass('col-md-12');
			$('.fullcalArea').addClass('col-md-9');
		}
		else{
		$('.slidecSideBox').addClass('slidecSideBoxSlide');
		$('.fullcalArea').addClass('col-md-12');
		$('.fullcalArea').removeClass('col-md-9');
		}

	});  
	
	$(".usercPro").each(function(){
		$(this).click(function(){
		$(".usercPro").removeClass('selectuser');
		$(this).addClass('selectuser');
			if($("#calendarSm1 .fc-content-skeleton td").hasClass('highLightTd')){
			$(".fc-newEvents-button").removeAttr('disabled', 'false');
			$(".fc-recurrEvents-button").removeAttr('disabled', 'false');
			$(".fc-newEvents-button").removeClass('fc-disabled');
			$(".fc-recurrEvents-button").removeClass('fc-disabled');
			}
		});
	});

	
	$("#calendarSm1 .fc-content-skeleton td").each(function(){
		$(this).click(function(){
		//$("#calendarSm1 .fc-content-skeleton td").removeClass('highLightTd');
		if($(this).hasClass('highLightTd')){$(this).removeClass('highLightTd');}
		else{
			$(this).addClass('highLightTd');
			
			var selD = $(this).attr('data-date');
			selD=selD.split('-');
			
if(selD[2] == '03' &&  ($(".usercPro").hasClass('selectuser'))){
			$("#calendar .fc-view-container .fc-day-grid .fc-row:nth-child(1)  .fc-content-skeleton table tbody tr td:nth-child(5)").addClass('fc-event-container');
			var rr = '<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end "><div class="fc-content"> <span class="fc-title">Meeting with, Allen George</span></div></a>';
			$("#calendar .fc-view-container .fc-day-grid .fc-row:nth-child(1)  .fc-content-skeleton table tbody tr td:nth-child(5)").append(rr);
			}
			
else if(selD[2] == '09' && ($(".usercPro").hasClass('selectuser'))){
			$("#calendar .fc-view-container .fc-day-grid .fc-row:nth-child(2)  .fc-content-skeleton table tbody tr td:nth-child(4)").addClass('fc-event-container');
			var rr = '<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end "><div class="fc-content"> <span class="fc-title">Reminder for business Dineer, John  Wick</span></div></a>';
			$("#calendar .fc-view-container .fc-day-grid .fc-row:nth-child(2)  .fc-content-skeleton table tbody tr td:nth-child(4)").append(rr);
			$("#calendar .fc-view-container .fc-day-grid .fc-row:nth-child(1)  .fc-content-skeleton table tbody tr td:nth-child(5)").addClass('fc-event-container');
			var rr = '<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end "><div class="fc-content"> <span class="fc-title">Meeting with, Allen George</span></div></a>';
			$("#calendar .fc-view-container .fc-day-grid .fc-row:nth-child(1)  .fc-content-skeleton table tbody tr td:nth-child(5)").append(rr);
			}
else if(selD[2] == '15' &&  ($(".usercPro").hasClass('selectuser'))){
			$("#calendar .fc-view-container .fc-day-grid .fc-row:nth-child(3)  .fc-content-skeleton table tbody tr td:nth-child(3)").addClass('fc-event-container');
			var rr = '<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end "><div class="fc-content"> <span class="fc-title">Travel to Celay, Jamie Palmer</span></div></a>';
			$("#calendar .fc-view-container .fc-day-grid .fc-row:nth-child(3)  .fc-content-skeleton table tbody tr td:nth-child(3)").append(rr);
			}
else if(selD[2] == '21' && ($(".usercPro").hasClass('selectuser'))){
			$("#calendar .fc-view-container .fc-day-grid .fc-row:nth-child(4)  .fc-content-skeleton table tbody tr td:nth-child(2)").addClass('fc-event-container');
			var rr = '<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end "><div class="fc-content"> <span class="fc-title">Stock Exchange Time, Brett Lee</span></div></a>';
			$("#calendar .fc-view-container .fc-day-grid .fc-row:nth-child(2)  .fc-content-skeleton table tbody tr td:nth-child(2)").append(rr);
			$("#calendar .fc-view-container .fc-day-grid .fc-row:nth-child(3)  .fc-content-skeleton table tbody tr td:nth-child(3)").addClass('fc-event-container');
			var rr = '<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end "><div class="fc-content"> <span class="fc-title">Travel to Celay, Jamie Palmer</span></div></a>';
			$("#calendar .fc-view-container .fc-day-grid .fc-row:nth-child(3)  .fc-content-skeleton table tbody tr td:nth-child(3)").append(rr);
			}
else if(selD[2] == '27' && ($(".usercPro").hasClass('selectuser'))){
			$("#calendar .fc-view-container .fc-day-grid .fc-row:nth-child(5)  .fc-content-skeleton table tbody tr td:nth-child(1)").addClass('fc-event-container');
			var rr = '<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end "><div class="fc-content"> <span class="fc-title">New Startup, david beckham</span></div></a>';
			$("#calendar .fc-view-container .fc-day-grid .fc-row:nth-child(5)  .fc-content-skeleton table tbody tr td:nth-child(1)").append(rr);
			}
else {}
					
		}
		if($(".usercPro").hasClass('selectuser')){
			
			
			$(".fc-newEvents-button").removeAttr('disabled', 'false');
			$(".fc-recurrEvents-button").removeAttr('disabled', 'false');
			$(".fc-newEvents-button").removeClass('fc-disabled');
			$(".fc-recurrEvents-button").removeClass('fc-disabled');
			}
		});
	});
	
	
	
	$("#calendarSm2 .fc-content-skeleton td").each(function(){
		$(this).click(function(){
		$("#calendarSm2 .fc-content-skeleton td").removeClass('highLightTd');
		$(this).addClass('highLightTd');
		});
	});

	$(".recurrEvent").on("click", function(){
		$("#myModalnewEvent").modal('hide');
		$("#myModalrecurrEvent").modal('show');
	});
	
	$(".recurrConti").on("click", function(){
		
		$("#myModalrecurrEvent").modal('hide');
		$("#myModalnewEvent").modal('show');
	});
	
	$(".fc-newEvents-button").attr('disabled', 'disabled');
	$(".fc-recurrEvents-button").attr('disabled', 'disabled');
	$(".fc-newEvents-button").addClass('fc-disabled');
	$(".fc-recurrEvents-button").addClass('fc-disabled');

	
	$(".selectuserProfile").on("change", function(){
		$(".usercPro").fadeOut(700);
		$('.usercPro').fadeIn(500);
	});
	
	$(".calendartype ul li a").on("click", function(){
		var ctextVal = $(this).text();
		$(".fc-myCustomButton2-button").text(ctextVal);
		$(".calendartype").addClass('hide');
		$(".fc-view-container").fadeOut();
		$(".fc-view-container").fadeIn(400);
	});
	
	var dt = new Date();
	var ctime = dt.getHours() + ":" + dt.getMinutes();
	$("#deftime").val(ctime);
	
	//var cDate = $(".highLightTd").attr('data-date');
	//$("#apptStartTime").val(cDate);
});


function getCalendarval(id, dropdownval){
    var cellVal = $(id + ' tr.active').text();
    var empty = [];
    $(id + ' tr.active').each(function(){
       empty.push($(this).text());
       if(cellVal != ''){
        $(dropdownval).text(empty.join(','));
       }
    })
}