$(document).ready(function () {
	
	$(".submitComm").on("click", function(){
	var USname = $(".userNm_call").val();
	var USdate = $(".date_call").val();
	var pieces = USdate.split('-');
	pieces.reverse();
	var USdate = pieces.join('-');
	var UScomment = $(".userComm_call").val();
	var commentRow = '<div class="row clearfix"><div class="col-md-4">'+USname+'</div><div class="col-md-3">'+USdate+'</div><div class="col-md-5">'+UScomment+'</div></div>';
	$(".contentTag_call").prepend(commentRow);
	
	});
	
	$(".clsP").each(function(){
	 $(this).click(function(){
	  if($(this).text() =='+')
	   {
			$(this).text('x');
		}
		else{
			$(this).text('+');
			}
		});
	});

    $('input[name="optiongraph"]').click(function () {
        if ($(this).val() == "optiontasks") {
            window.location.href = 'ProjectMgmt.html';
        }
        if ($(this).val() == "optionResources") {
            window.location.href = 'ProjectMgmt1.html';
        }
        if ($(this).val() == "optionDueDates") {
            window.location.href = 'ProjectMgmt2.html';
        }
    });


    $('.projectSidebar').find('li a').click(function () {
        $('.projectSidebar').find('li').removeClass('active');
        $(this).closest('li').addClass('active');
    });
	
	$(".myAllbtn").click(function(){
		if($(".myAllbtn").hasClass('btn-unselected')){
			$(".myAllbtn").removeClass('btn-unselected');
			$(".myProBtn").removeClass('btn-selected');
			$(".myProBtn").addClass('btn-unselected');
			$(".myAllbtn").addClass('btn-selected');
		}
		$(".allProPart").removeClass('hide');
		$(".myproPart").addClass('hide');
	});
	
	$(".myProBtn").click(function(){
		if($(".myProBtn").hasClass('btn-unselected')){
			$(".myProBtn").removeClass('btn-unselected');
			$(".myProBtn").addClass('btn-selected');
			$(".myAllbtn").removeClass('btn-selected');
			$(".myAllbtn").addClass('btn-unselected');
		}
		$(".allProPart").addClass('hide');
		$(".myproPart").removeClass('hide');	
	});
	
	$(".myAllbtn-2").click(function(){
		
		
		
		$(".taskallPro").removeClass('hide');
		$(".taskM").addClass('hide');	
		if($(".myAllbtn-2").hasClass('btn-unselected')){
			$(".myAllbtn-2").removeClass('btn-unselected');
			$(".myProBtn-2").removeClass('btn-selected');
			$(".myProBtn-2").addClass('btn-unselected');
			$(".myAllbtn-2").addClass('btn-selected');
		}
	});
	
	$(".myProBtn-2").click(function(){
		$(".taskallPro").addClass('hide');
		$(".taskM").removeClass('hide');	
		if($(".myProBtn-2").hasClass('btn-unselected')){
			$(".myProBtn-2").removeClass('btn-unselected');
			$(".myProBtn-2").addClass('btn-selected');
			$(".myAllbtn-2").removeClass('btn-selected');
			$(".myAllbtn-2").addClass('btn-unselected');
		}
	});
	$(document).on('click','.projectInfoEdit', function(){
		$('.projectInfo').find('input, select').removeAttr('disabled');
		$(this).text('Save');
		$(this).removeClass('projectInfoEdit');
		$(this).addClass('projectInfoSave');
		//alert('')
	});
	$(document).on('click','.projectInfoSave', function(){
		$('.projectInfo').find('input, select').attr('disabled','disabled');
		$(this).text('Edit');
		$(this).removeClass('projectInfoSave');
		$(this).addClass('projectInfoEdit');
		//alert('')
	});

	$(document).on('click','.jobdetailEdit', function(){
		$('.JobsiteDetail').find('input, select').removeAttr('disabled');
		$(this).text('Save');
		$(this).removeClass('jobdetailEdit');
		$(this).addClass('jobdetailSave');
		//alert('')
	});
	$(document).on('click','.jobdetailSave', function(){
		$('.JobsiteDetail').find('input, select').attr('disabled','disabled');
		$(this).text('Edit');
		$(this).removeClass('jobdetailSave');
		$(this).addClass('jobdetailEdit');
		//alert('')
	});


	$(document).on('click','.projectNoteEdit', function(){
		$('.projectNotes ').find('input, select').removeAttr('disabled');
		$(this).text('Save');
		$(this).removeClass('projectNoteEdit');
		$(this).addClass('projectNoteSave');
		//alert('')
	});
	$(document).on('click','.projectNoteSave', function(){
		$('.projectNotes').find('input, select').attr('disabled','disabled');
		$(this).text('Edit');
		$(this).removeClass('projectNoteSave');
		$(this).addClass('projectNoteEdit');
		//alert('')
	});
	
	$(".promgmtEdit").click(function(){
		
		// if($(".lableM").hasClass('hide')){
		// 	$(".lableM").removeClass('hide');
		// $(".inpM").addClass('hide');
		
		//}
		// else{
		// 	$(".lableM").addClass('hide');
		// $(".inpM").removeClass('hide');
		
		// }
		// if($(".promgmtEdit").text() == 'Edit'){
		// 	$(".promgmtEdit").text('Save');
		// }
		// else{
		// 	$(".promgmtEdit").text('Edit');
		// }
		
	});
	
	$(".JobDetailM").click(function(){
		$(".myProBtn-2").addClass('hide');
			$(".myAllbtn-2").addClass('hide');
			$(".myProBtn-3").addClass('hide');
			$(".myAllbtn-3").addClass('hide');
			$(".myProBtn").removeClass('hide');
			$(".myAllbtn").removeClass('hide');
		
		$(".projectInfo").addClass('hide');
		$(".JobsiteDetail").removeClass('hide');
		$(".projectNotes").addClass('hide');
		$(".documentListM").addClass('hide');
		$(".buttonM").removeClass('hide');	
		$(".taskM").addClass('hide');	
		$(".costCataM").addClass('hide');
		$(".myProBtn").removeClass('hide');
		$(".myAllbtn").removeClass('hide');
		$(".callmyPro").addClass('hide');
		$(".callmyProAll").addClass('hide');
		$(".archiveProjectArea").addClass('hide');

		$('.promgmtEdit').addClass('jobdetailEdit');
		$('.promgmtEdit').removeClass('projectNoteEdit, projectInfoEdit');
	});

	$(".proInfoM").click(function(){
			$(".myProBtn-2").addClass('hide');
			$(".myAllbtn-2").addClass('hide');
			$(".myProBtn-3").addClass('hide');
			$(".myAllbtn-3").addClass('hide');
			$(".myProBtn").removeClass('hide');
			$(".myAllbtn").removeClass('hide');
		
			$(".projectInfo").removeClass('hide');
			$(".JobsiteDetail").addClass('hide');
			$(".projectNotes").addClass('hide');
			$(".documentListM").addClass('hide');
			$(".buttonM").removeClass('hide');
			$(".taskM").addClass('hide');
			$(".costCataM").addClass('hide');
			$(".callmyPro").addClass('hide');
			$(".callmyProAll").addClass('hide');
			$(".taskallPro").addClass('hide');
			$(".archiveProjectArea").addClass('hide');


			$('.promgmtEdit').addClass('projectInfoEdit');
			$('.promgmtEdit').removeClass('projectNoteEdit, jobdetailEdit');
	});

	$(".PronotesM").click(function(){
			$(".myProBtn-2").addClass('hide');
			$(".myAllbtn-2").addClass('hide');
			$(".myProBtn-3").addClass('hide');
			$(".myAllbtn-3").addClass('hide');
			$(".myProBtn").removeClass('hide');
			$(".myAllbtn").removeClass('hide');
			
			$(".projectInfo").addClass('hide');
			$(".JobsiteDetail").addClass('hide');
			$(".projectNotes").removeClass('hide');
			$(".documentListM").addClass('hide');
			$(".buttonM").removeClass('hide');
			$(".taskM").addClass('hide');
			$(".costCataM").addClass('hide');
			$(".callmyPro").addClass('hide');
			$(".callmyProAll").addClass('hide');
			
			$(".taskallPro").addClass('hide');
			$(".archiveProjectArea").addClass('hide');

			$('.promgmtEdit').addClass('projectNoteEdit');
			$('.promgmtEdit').removeClass('projectInfoEdit, jobdetailEdit');
	});
	
	$(".fileDocs").click(function(){
			$(".myProBtn-2").addClass('hide');
			$(".myAllbtn-2").addClass('hide');
			$(".myProBtn-3").addClass('hide');
			$(".myAllbtn-3").addClass('hide');
			$(".myProBtn").removeClass('hide');
			$(".myAllbtn").removeClass('hide');
			
			$(".projectInfo").addClass('hide');
			$(".JobsiteDetail").addClass('hide');
			$(".projectNotes").addClass('hide');
			$(".documentListM").removeClass('hide');
			$(".buttonM").addClass('hide');
			$(".taskM").addClass('hide');
			$(".costCataM").addClass('hide');
			
			$(".callmyPro").addClass('hide');
			$(".callmyProAll").addClass('hide');
			$(".archiveProjectArea").addClass('hide');
	});
	
	$(".costM").click(function(){
		$(".myProBtn-2").addClass('hide');
		$(".myAllbtn-2").addClass('hide');
		$(".myProBtn-3").addClass('hide');
		$(".myAllbtn-3").addClass('hide');
		$(".myProBtn").removeClass('hide');
		$(".myAllbtn").removeClass('hide');
		 $(".costCataM").removeClass('hide');
		 $(".projectInfo").addClass('hide');
		$(".JobsiteDetail").addClass('hide');
		$(".projectNotes").addClass('hide');
		$(".documentListM").addClass('hide');
		$(".buttonM").addClass('hide');
		$(".taskM").addClass('hide');
		$(".highcharts-container").css('width', '100%');
		$(".archiveProjectArea").addClass('hide');
		$(".callmyPro").addClass('hide');
		$(".callmyProAll").addClass('hide');
	});
	
	$(".Taskgraph").click(function(){
		$(".myProBtn").addClass('hide');
		$(".myAllbtn").addClass('hide');
		$(".myProBtn-3").addClass('hide');
		$(".myAllbtn-3").addClass('hide');
		
		$(".myProBtn-2").removeClass('hide');
		$(".myAllbtn-2").removeClass('hide');
		
		
		
		$(".taskM").removeClass('hide');
		$(".projectInfo").addClass('hide');
		$(".JobsiteDetail").addClass('hide');
		$(".projectNotes").addClass('hide');
		$(".documentListM").addClass('hide');
		$(".buttonM").addClass('hide');
		$(".costCataM").addClass('hide');
		$(".archiveProjectArea").addClass('hide');
		$(".callmyPro").addClass('hide');
		$(".callmyProAll").addClass('hide');
		
	});
	
	$(".callproM").click(function(){
		$(".myProBtn").addClass('hide');
		$(".myAllbtn").addClass('hide');
		
		$(".myProBtn-2").addClass('hide');
		$(".myAllbtn-2").addClass('hide');
		
		$(".myProBtn-3").removeClass('hide');
		$(".myAllbtn-3").removeClass('hide');
		
		$(".taskM").addClass('hide');
		$(".taskallPro").addClass('hide');
		$(".callmyPro").removeClass('hide');
		$(".projectInfo").addClass('hide');
		$(".JobsiteDetail").addClass('hide');
		$(".projectNotes").addClass('hide');
		$(".documentListM").addClass('hide');
		$(".buttonM").addClass('hide');
		$(".costCataM").addClass('hide');
		$(".archiveProjectArea").addClass('hide');
		
	});


	$(".archiveProject").click(function () {
	    $(".myProBtn").addClass('hide');
	    $(".myAllbtn").addClass('hide');

	    $(".myProBtn-2").addClass('hide');
	    $(".myAllbtn-2").addClass('hide');

	    $(".taskM").addClass('hide');
	    $(".projectInfo").addClass('hide');
	    $(".JobsiteDetail").addClass('hide');
	    $(".projectNotes").addClass('hide');
	    $(".documentListM").addClass('hide');
	    $(".buttonM").addClass('hide');
	    $(".costCataM").addClass('hide');
	    $(".archiveProjectArea").removeClass('hide');

	});


	
	$(".expandPro").click(function(){
		if($(".expandedData").hasClass('hide')){
			$(".expandedData").removeClass('hide');
			$(".expandPro").text('Collapse');
		}
		else{
			$(".expandedData").addClass('hide');
			$(".expandPro").text('Expand');
		}
	});
	
	$("#selectVendor").change(function(){
		$(".costChart").addClass('hide');
		var aa =$(this).children('option:selected').index();
		//alert(aa);
		aa= aa+1;
		var idVal = "container"+aa;
		idVal = "#"+idVal;
		$(idVal).removeClass('hide');
		$(".costChart svg").css('width', '100%');
	});
	
	$(".myAllbtn-3").click(function(){
		
		if($(".callproM").parent('li').hasClass('active')){
		$(".myProBtn").addClass('hide');
		$(".myAllbtn").addClass('hide');
		$(".callmyPro").addClass('hide');
		$(".callmyProAll").removeClass('hide');
		$(".taskallPro").addClass('hide');
		$(".projectInfo").addClass('hide');
		$(".JobsiteDetail").addClass('hide');
		$(".projectNotes").addClass('hide');
		$(".documentListM").addClass('hide');
		$(".buttonM").addClass('hide');
		$(".costCataM").addClass('hide');
		$(".archiveProjectArea").addClass('hide');
		}
	});
	
	$(".myProBtn-3").click(function(){
		
		if($(".callproM").parent('li').hasClass('active')){
		$(".myProBtn").addClass('hide');
		$(".myAllbtn").addClass('hide');
		$(".callmyPro").removeClass('hide');
		$(".callmyProAll").addClass('hide');
		$(".taskallPro").addClass('hide');
		$(".projectInfo").addClass('hide');
		$(".JobsiteDetail").addClass('hide');
		$(".projectNotes").addClass('hide');
		$(".documentListM").addClass('hide');
		$(".buttonM").addClass('hide');
		$(".costCataM").addClass('hide');
		$(".archiveProjectArea").addClass('hide');
		}
	});
	
	
});

	