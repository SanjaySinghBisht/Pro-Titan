$(document).ready(function (e) {
	/*Detailed View and brief View*/
     $(".change-view").click(function(){
        $(".change-view").removeClass("active-btn");
        $(this).addClass("active-btn");
        $(".custom-search-filter tbody tr").removeClass("selected-row");
        var currentView = $(this).attr("id");
        if(currentView == "detailedView"){
            $("button[title='Select All']").css("margin-left","440px");
            $(".detail-hardware-action button[data-target='#modalInsertHardwareSet'],.detail-hardware-action button[data-target='#modalAddDoor']").hide();
        }
        else{
            $("button[title='Select All']").css("margin-left","100px");
            $(".detail-hardware-action button[data-target='#modalInsertHardwareSet'],.detail-hardware-action button[data-target='#modalAddDoor']").show();
        }
        $(".table-wrap.views").hide();
        $("div[data-attr-id="+currentView+"]").show();
     });
     /*Detailed View and brief View*/
     /*Select All Rows*/
     $("#selectAll").click(function(){
        $(".views > .custom-search-filter > tbody > tr:not(.even-row)").addClass("selected-row");
     });
     /*Select All Rows*/
     /*Unselect All Rows*/
     $("#unselectAll").click(function(){
        $(".views > .custom-search-filter > tbody > tr:not(.even-row)").removeClass("selected-row");
     });
     /*Unselect All Rows*/
     /*Delete All Rows*/
     $("#deleteAll").click(function(){
        $(".views > .custom-search-filter > tbody > tr.selected-row").next("tr").remove();
        $(".views > .custom-search-filter > tbody > tr.selected-row").remove();

     });
     /*Delete All Rows*/
      
     /*Column filter*/
     $(".filter-grid-column li input").click(function(){
        var id = $(this).attr("data-type");
        if($(this).is(":checked")){
            $("table tbody td[data-type="+id+"]").show();
        }
        else{
            $("table tbody td[data-type="+id+"]").hide();
        }
     });
	 $(".media-carousel").carousel({interval: false});
    
	   var i = null;
$(".opening-final-estimate-btn").on('click', function(event){
        var fullDate = new Date();
        var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
        var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
        var newNm = "Final Estimates" + i;
        newNm = newNm.replace(null,'');
   $('.project-change-data-table tbody').append("<tr class='data-row addedNRow'><td class='borderR'>"+newNm+"</td><td class='borderR'>Active</td><td class='borderR'>Final Estimates</td><td class='borderR'>Dawn</td><td class='borderR'>"+currentDate+"</td><td class='borderR'></td><td class='borderR'><a href='#' class='comparsion-point' title='Now'><span class='badge new'><i class='glyphicon glyphicon-screenshot'></i></span></a><a href=''#' class='comparsion-point' title='Before'><span class='badge before' style='display:inline-block'><i class='fa fa-mail-reply'></i></span></a></td></tr>");
i=i+1;
event.preventDefault();
$(".change-model").modal();
    });

$(".switch-to-change").on('click', function(){
    var tdValue = $(".project-change-data-table tbody tr.active-row td:first-child").text();
    var tdCurrentValue = $(".project-change-data-table tbody tr.current-row.active-row td:first-child").text();
    var tdEstiValue = $(".project-change-data-table tbody tr.addedNRow.active-row td:first-child").text();
    tdValue = "Change :"+tdValue;
   // console.log(tdEstiValue);
    if($(".project-change-data-table tbody tr.addedNRow.active-row td:first-child").text()){
        $(".change-status").text(tdEstiValue)
    }
    else if($(".project-change-data-table tbody tr.current-row.active-row td:first-child").text()){
        $(".change-status").text(tdCurrentValue)
    }
    else{
        $(".change-status").text(tdValue)
    }
    $(".change-model").modal('hide');
});
    
	// $("#myLists tr").click(function(){
		// $(this).popover({
			// title: '<div class="col-head"><h2>Office Room</h2></div>',
			// content : '<div class="block-content"><table class="table marginB0"><tbody><tr><td>589 EN</td><td class="width30">SA</td></tr><tr><td>537 EN</td><td class="width30">SA</td></tr><tr><td>99L 996L(Std) US26</td><td class="width30">VD</td></tr><tr><td>9927EO-F 990EO(Std) US26</td><td class="width30">VD</td></tr><tr><td>9947WDC-L 996L(Std) US26</td><td class="width30">VD</td></tr><tr><td>12 SG 36 43 55 56 8810 F US32D</td><td class="width30">SA</td></tr><tr><td>99L 996L(Std) US26</td><td class="width30">VD</td></tr><tr><td>9927EO-F 990EO(Std) US26</td><td class="width30">VD</td></tr><tr><td>9947WDC-L 996L(Std) US26</td><td class="width30">VD</td></tr><tr><td>12 SG 36 43 55 56 8810 F US32D</td><td class="width30">SA</td></tr></tbody></table></div>',
			// html: true
		// }); 
	// });
	
	$("#myLists tr").each(function(){
		$(this).hover(function(){
			 $(".hiddenBlock").removeClass('hide');
		}, function(){
			$(".hiddenBlock").addClass('hide');
		});	
	});
	$("#myLists tr").click(function(){
		 var leftSideHardwareListHead = "Office Room";
        var leftsidedetail = $(".blocktiles").html();

        var html = '<div class="selectionInfo"><div class="header">' + leftSideHardwareListHead + '</div><br/><div class="contentInfo">' + leftsidedetail + '</div><i class="fa fa-times" aria-hidden="true"></i></div>';
		  $(html).appendTo('.hwdSetpopulate');
		
	});
	
	
	$( ".favorite_setBox" ).click(function( event ) {
			if($(".favoriteBox").hasClass('hide')){
				$(".favoriteBox").removeClass('hide');
			}
			else{
				$(".favoriteBox").addClass('hide');
			}
		event.stopPropagation();
		return false;
		});
	
	// $(document).on("click", ".closePop" , function(){
        // $(this).parents(".popover").popover('hide');
    // });
	
    $(".add-list-item").click(function (e) {
        //        $(this).closest('ul li').find('input').removeClass('hidden');
        $(this).siblings('ul').find('li input').removeClass('hidden').focus();
        $(this).addClass('hidden');
        e.stopPropagation();
    });
    $(".add-list-item").siblings('ul').find('li input').blur(function (e) {
        if ($(this).val()) {
            var $li = $(this).parent().siblings('li').eq(0).clone(true);
            $li.html($(this).val());
            $(this).parent().before($li);
            $(this).val('');

        }
        $(this).addClass('hidden');
        $(".add-list-item").removeClass('hidden');
        e.stopPropagation();
    });
   
    /*$('#estimating-home-table>tbody>tr').attr('is-row-selected', 'false');
    $('#estimating-home-table>tbody>tr').first().attr('is-row-selected', 'true');
    $('#estimating-home-table>tbody>tr').first().addClass('selected-row');*/
    
    /*$('#estimating-home-table tbody tr .select-row').click(function (e) {
        if ($(this).attr('is-row-selected') === undefined) {
            return;
        }
        if ($(this).hasClass('vendor-list-toggle-row')) {
            return;
        }
        $(this).siblings().attr('is-row-selected', 'false');
        $(this).siblings().removeClass('selected-row');
        if ($(this).attr('is-row-selected') == 'true') {
            $(this).attr('is-row-selected', false);
            $(this).removeClass('selected-row');
        } else {
            $(this).attr('is-row-selected', true);
            $(this).addClass('selected-row');
        }
    });*/

    $(".opening-list>li>i").click(function () {
        $(this).parent().remove();
    })
    $('.done').hide();
    $('.backtoSearch').hide();
    //$('.groupHdwSet').hide();
    $('.proceedToGroup').click(function () {
        $('.backtoSearch').show();
        $('.done').show();
        $(this).hide();
        $('.groupHdwSet').slideDown();
        $('.searchHdwPart').slideUp();
    });

    $('.backtoSearch').click(function () {
        $(this).hide();
        $('.done').hide();
        $('.proceedToGroup').show();
        $('.searchHdwPart').slideDown();
        $('.groupHdwSet').slideUp();
        
    });

    
    $('.groupHdwSet').find('table tbody td').click(function () {
        $('.hwdSetpopulate h2').remove();
        // $('.groupHdwSet').find('table tbody td').parent('tr').removeClass('harwareselectrow');
        $(this).parent('tr').addClass('harwareselectrow');

        
        var leftSideHardwareListHead = $(this).closest('.block').find('.col-head h2').text();
        var leftsidedetail = $(this).text();

        var html = '<div class="selectionInfo clearfix"><div class="pull-left"><div class="header">' + leftSideHardwareListHead + '</div><div class="contentInfo">' + leftsidedetail + '</div></div><div class="pull-right"><input type="number"/></div><i class="fa fa-times" aria-hidden="true"></i></div>';

        $(html).appendTo('.hwdSetpopulate');
    });

    $(document).on('click', '.selectionInfo .fa.fa-times', function () {
        $(this).closest('.selectionInfo').remove();

    });


    $('.btn-toggle').click(function () {
        $(this).find('.btn').toggleClass('active');

        if ($(this).find('.btn-primary').size() > 0) {
            $(this).find('.btn').toggleClass('btn-primary');
        }
        if ($(this).find('.btn-danger').size() > 0) {
            $(this).find('.btn').toggleClass('btn-danger');
        }
        if ($(this).find('.btn-success').size() > 0) {
            $(this).find('.btn').toggleClass('btn-success');
        }
        if ($(this).find('.btn-info').size() > 0) {
            $(this).find('.btn').toggleClass('btn-info');
        }

        $(this).find('.btn').toggleClass('btn-default');



    });

    $('.leftsetInfo').hide();
    $('#showleftsetinfo').hide()
    $('#showsearchlist').change(function () {
        if ($(this).prop('checked')) {
            $(this).hide();
            $('#showleftsetinfo').show();
            $('.searchlistarea').hide();
            $('.leftsetInfo').fadeIn();
        }
        else {
            $(this).hide();
            $('#showsearchlist').show();
            $('.leftsetInfo').hide();
            $('.searchlistarea').fadeIn();
        }
    });

	$('.searchlistTab').hide();
	$('#showsearchTab').change(function () {
        if ($(this).prop('checked')) {
            $(this).hide();
            $('.searchlistTab').show();
            $('.my_lib_tab').hide();
        }
        else {
            $(this).hide();
            $('.my_lib_tab').show();
            $('.searchlistTab').hide();
        }
    });
	
	
	$("#leftTopGrid tr").on("click", function(){
			$(".del_content_btn").addClass('del_btn_active');
			$(".del_content_btn").removeAttr('disabled');
		if($(".block-content table tbody tr").hasClass('harwareselectrow')){
			$(".swap_content_btn").addClass('swap_btn_active');
			$(".swap_content_btn").removeAttr('disabled');			
			}
			else{
			$(".swap_content_btn").attr('disabled','true');
			$(".swap_content_btn").removeClass('swap_btn_active');
		}
	});
	
	$("#estimating-home-table tr").click(function(event){
		$(".del_btn").removeAttr('disabled');
	});
	
	
	$(".vendor-list-toggle-row").click(function(event){
		$(".del_btn_quickG").removeAttr('disabled');
	});
	
	$("#estimating-home-table tr").click(function(event){
		$(".del_btn_quickG").removeAttr('disabled');
	});
	
	
	
	$(".block-content table tbody tr").on("click", function(){
		$(".del_content_btn").addClass('del_btn_active');
			$(".del_content_btn").removeAttr('disabled');
		if($("#leftTopGrid tr").hasClass('harwareselectrow')){
			$(".swap_content_btn").addClass('swap_btn_active');
			$(".swap_content_btn").removeAttr('disabled');
			}
			
		else{
			$(".swap_content_btn").attr('disabled','true');
			$(".swap_content_btn").removeClass('swap_btn_active');
		}
	});
	
	
    $('#showleftsetinfo').click(function () {
       
    });

    $('.modifiers').hide();
    $('.tab-pane table tbody tr').find("td[data-type='modifiers']").click(function (event) {
        var column = $(this);
        var offset = $(this).offset();
        var offsetLeft = offset.left - 100;
        var offsetTop = offset.top - 120;
        $('.modifiers').css('left', offsetLeft).css('top', offsetTop);
        $('.modifiers').slideToggle();
		event.stopPropagation();
        $('.modifiers').find('table tbody tr').removeClass('harwareselectrow');
    });
	
		/*------ search for Hardware popup ------ */
	
	
	
	
	
	
	$("#addnewModifBtn").click(function(){
		$("#addNewModifilterBox").modal("show");
		$("#addHardwareToset").modal("hide");
	});
	$("#adModcancelbtn").click(function(){
		$("#addHardwareToset").modal("show");
	});
	
	$("#adModokbtn").click(function(){
		$("#addHardwareToset").modal("show");
	});
	$("#searchForHardwarebtn").click(function(){
		$("#addHardwareToset").modal("show");
		//$(".hardwareBtns").attr('disabled','true');
		//$(this).removeAttr('disabled');
		//$(".table-data-actions").addClass('hide');
		//$(".table-wrap").addClass('hide');
		//$(".srchForHardwareBox").removeClass('hide');
		
	});
    $("#popupHardware").click(function(){
        $("#addHardwareToset").modal("hide");
        $("#putHardwareSets").modal("show");
    });
	// $(".searchHrdDone").click(function(){
		// $(".hardwareBtns").removeAttr('disabled');
		// $(".table-data-actions").removeClass('hide');
		// $(".table-wrap").removeClass('hide');
		// $(".srchForHardwareBox").addClass('hide');
	// });
	
	/*------------------------------------------*/
	
    
});
function appendRow(tableId, actionTo) {
    var to = "";
    var from = "";
    var prefix = "";
    var suffux = "";
	
    switch (actionTo.toLowerCase()) {
        case 'hardwareset':
//            to = $('#insert-hardware-set-new-to').val();
//            from = $('#insert-hardware-set-new-from').val();
//            prefix = $('#insert-hardware-set-new-prefix').val();
//            suffux = $('#insert-hardware-set-new-suffix').val();
//            for (var i = from; i <= to; i++) {
//                var row = $(tableId + '>tbody>tr:first').clone(true);
//                row.find("td[data-type='quantityID']").html('');
////        $(row+'>th[data-type="quantity"]').html();
//                var expendedRow = $(tableId + '>tbody>tr.vendor-list-toggle-row:first').clone(true);
//                expendedRow.find('table>tbody>tr').remove();
//                $(row).find("td[data-type='hdwset']").html(prefix + i + suffux);
//                $(tableId + '>tbody').append(row);
//                $(tableId + '>tbody').append(expendedRow);
//                console.log(row);
//            }

var toVal = $('#insert-hardware-set-new-to').val();
	var fromVal = $('#insert-hardware-set-new-from').val();
	
	if(toVal == 0 || fromVal == 0){
		$("#exitsHardware").modal();
	}
	
	if(toVal >=1 && fromVal <= 8){
		$("#exitsHardware").modal();
	}



            function createCopy(data) {
                var row = $(tableId + '>tbody>tr:first').clone(true);
                row.find("td[data-type='quantityID']").html('');
                var expendedRow = $(tableId + '>tbody>tr.vendor-list-toggle-row:first').clone(true);
                expendedRow.find('table>tbody>tr').remove();
                $(row).find("td[data-type='hdwset']").html(data);
                $(tableId + '>tbody').append(row);
                $(tableId + '>tbody').append(expendedRow);
            }
            var criteria = $("#hardware-set-criteriaContent").val().split(',');
            for (var i = 0; i < criteria.length; i++) {
                var value = criteria[i].trim();
                if (value.indexOf('-') > -1) {
                    var from = Number(value.split('-')[0]);
                    var to = Number(value.split('-')[1]);
                    for (var j = from; j <= to; j++) {
                        createCopy(j);
                    }
                } else {
                    createCopy(value);
                }
            }
            break;
			

		case 'copyset':
            var to = $('#insert-new-to').val();
            var from = $('#insert-new-from').val();
            var prefix = $('#insert-new-prefix').val();
            var suffux = $('#insert-new-suffix').val();
            for (var i = from; i <= to; i++) {
                var row = $(tableId + '>tbody>tr:first').clone(true);
                row.find("td[data-type='quantityID']").html('');
//        $(row+'>th[data-type="quantity"]').html();
                var expendedRow = $(tableId + '>tbody>tr.vendor-list-toggle-row:first').clone(true);
                expendedRow.find('table>tbody>tr').remove();
                $(row).find("td[data-type='hdwset']").html(prefix + i + suffux);
                $(tableId + '>tbody').append(row);
                $(tableId + '>tbody').append(expendedRow);
                console.log(row);
            }
            break;
    }
	

}
function toggleExpand(btn, tableId) {
    var actionType = $(btn).html().toString().toLowerCase().trim();
    var $tableRows = $(tableId + ' tbody>tr.vendor-list-toggle-row');
    var $expendedIcons = $tableRows.closest('.vendor-list-toggle-btn>i');
    var $expendedIcons = $(tableId + ' tbody>tr>td>button>i');
    var buttonText = ''
    switch (actionType) {
        case 'expand all':
            $tableRows.css({'display': 'table-row'});
            $expendedIcons.removeClass('glyphicon-plus');
            $expendedIcons.addClass('glyphicon-minus');
            buttonText = 'Collapse All';
            break;
        case 'collapse all':
            $tableRows.css({'display': 'none'});
            $expendedIcons.addClass('glyphicon-plus');
            $expendedIcons.removeClass('glyphicon-minus');
            buttonText = 'Expand All';
            break;
    }
    $(btn).html(buttonText);
}

function validateCriteria(actionTo) {
    var to = undefined;
    var from = undefined;
    var prefix = "";
    var suffux = "";
    var criteria = [];
    switch (actionTo.toLowerCase()) {
        case 'hardwareset':
            to = $('#insert-hardware-set-new-to').val();
            from = $('#insert-hardware-set-new-from').val();
            prefix = $('#insert-hardware-set-new-prefix').val();
            suffux = $('#insert-hardware-set-new-suffix').val();
            for (var i = from; i <= to; i++) {
                criteria.push(prefix + i + suffux);
            }
            $('#hardware-set-criteriaContent').val($('#hardware-set-criteriaContent').val() + criteria.join(', '))
            break;
        case 'copyset':
            to = $('#insert-copy-to').val();
            from = $('#insert-copy-from').val();
            prefix = $('#insert-copy-prefix').val();
            suffux = $('#insert-copy-suffix').val();
            for (var i = from; i <= to; i++) {
                criteria.push(prefix + i + suffux);
            }
            $('#criteriaContent').val(criteria.join(', '))
            break;
    }
}

function clearCriteria() {
    $('#insert-copy-to').val('');
    $('#insert-copy-from').val('');
    $('#insert-copy-prefix').val('');
    $('#insert-copy-suffix').val('');
    $('#criteriaContent').val('');
}

function copyRow(tableId) {
    var to = $('#insert-copy-to').val();
    var from = $('#insert-copy-from').val();
    var prefix = $('#insert-copy-prefix').val();
    var suffux = $('#insert-copy-suffix').val();
//    var row;
//    $(tableId + 'tbody tr').each(function () {
//        if ($(this).attr('is-row-selected') !== 'true') {
//            return;
//        }
//        for (var i = from; i <= to; i++) {
//            var row = $(this).clone(true);
//            $(row).find("td[data-type='tag']").html(prefix + i + suffux);
//            $(tableId + ' tbody').append(row);
//            console.log(row)
//        }
//    });
//    var criteria = $('#criteriaContent').val().split(',');
    $(tableId + '>tbody>tr').each(function () {
        if ($(this).attr('is-row-selected') !== 'true') {
            return;
        }
//        for (var i = 0; i < criteria.length; i++) {
        for (var i = from; i <= to; i++) {
            var row = $(this).clone(true);
            var expendedRow = $(tableId + '>tbody>tr.vendor-list-toggle-row:first').clone(true);
            $(row).find("td[data-type='hdwset']").html(prefix + i + suffux);
            $(tableId + '>tbody').append(row);
            $(tableId + '>tbody').append(expendedRow);
        }
    });
}
function insertRow(tableId) {
    var row = $(tableId + '>tbody>tr:first').clone(true);
    
    var expendedRow = $(tableId + '>tbody>tr.vendor-list-toggle-row:first').clone(true);
    expendedRow.find('table>tbody>tr').remove();
    $(row).removeClass('selected-row');
    $(row).attr('is-row-selected','false');
    var $input="<input type='text' class='form-control'>";
    $(row).children().each(function (index){
        if(index==0 || $(this).attr('data-type')=="usedID"){
            return 
        }
        $(this).html($input);
    });
    
    //$(row).find("td[data-type='hdwset']").html($input);
    $(tableId + '>tbody>tr:first').before(row);
    $(tableId + '>tbody>tr:first').after(expendedRow);
}
function deleteRow(tableId){
    $(tableId + '>tbody>tr').each(function (){
        if($(this).attr('is-row-selected')=='true'){
            $(this).next().remove();
            $(this).remove();
        }
    });


}

