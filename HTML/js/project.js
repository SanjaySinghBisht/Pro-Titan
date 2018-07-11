var hiddenColumns = ['Date Created', 'Date Started', 'Users', 'Architects Project #'];
var initialShownColumns = ['Project ID', 'Description', 'Project Manager', 'Stage', 'Details'];
$(document).ready(function (e) {
    //$("#project-table>tbody>tr").hide();
    //$("#project-table>tbody>tr[data-category='My Projects Only']").show();

    /*
     * initially show the specific columns
     */
    // var showSpecificCols = function () {
        // $("#project-table th,#project-table td").not(':first-of-type').hide();
        // $('#project-table>thead>tr>th').each(function (index, columnObj) {
            // if (initialShownColumns.indexOf($(this).attr('data-type')) > -1) {
                // $(this).show();
                // $('#project-table>tbody>tr').each(function (rowIndex, rwObj) {
                    // $(this).children().eq(index).show();
                // });
            // }
        // });
    // };

    // 25 July 2017 by Sapna

    // for Architect List
    $('#addForm, #addNewForm, #saveArchitectDetail, #addContactList').hide();
    $('#addArchitectDetail').click(function(){
         $('#architectList').hide();
         $('#addForm').slideDown();
         $(this).hide();
         $('#saveArchitectDetail, #addNewForm').show();
         $('#addnewname_list').val('');
    });

    $('#addMoreContactBtn').click(function () {
        $('#parentList').slideDown();
        $('#parentList').find('input').val('');
        $('#addContactList').slideDown();
    });

    $('#saveArchitectDetail').click(function(){
        var listAddedName = $('#addnewname_list').val();

        if( listAddedName != '')
        {
            $('#architectList tbody').append('<tr><td>'+ listAddedName +'</td></tr>')
        }

        $('#addForm, #addNewForm').hide();
        $('#architectList').slideDown();
        $('#addArchitectDetail').show();
        $(this).hide();
    });

    

    $('#addNewForm').click(function () {
        $('#parentList').slideDown();
        $('#parentList').find('input').val('');
        $('#contactListfields').hide();
        $('#showContactList').hide();
        $('#addMoreContactBtn').show();
        $('#contactListfields, #addContactList').hide();
    });
    

    // For Contractor List
    $('#addContractor, #addNewContractorForm, #saveContractorDetail, #addContractorList').hide();
    $('#addContractorDetail').click(function(){
         $('#contractorList').hide();
         $('#addContractor').slideDown();
         $(this).hide();
         $('#saveContractorDetail, #addNewContractorForm').show();
         $('#addnewcontractor_list').val('');
    });

     $('#addMoreContractorBtn').click(function () {
        $('#addContractorList').slideDown();
    });

    $('#saveContractorDetail').click(function(){
        var listAddedName = $('#addnewcontractor_list').val();

        if( listAddedName != '')
        {
            $('#contractorList tbody').append('<tr><td>'+ listAddedName +'</td></tr>')
        }

        $('#addContractor, #addNewContractorForm').hide();
        $('#contractorList').slideDown();
        $('#addContractorDetail').show();
        $(this).hide();
    });

    $('#addNewContractorForm').click(function () {
        $('#parentList_contractor').slideDown();
        $('#parentList_contractor').find('input').val('');
        $('#addContractorList').hide();
    });


    // For Facility List
    // For Contractor List
    $('#addFacility, #addNewFacilityForm, #saveFacilityDetail, #addFacilityList').hide();
    $('#addFacilityDetail').click(function(){
         $('#facilityList').hide();
         $('#addFacility').slideDown();
         $(this).hide();
         $('#saveFacilityDetail, #addNewFacilityForm').show();
         $('#addnewfacility_list').val('');
    });

     $('#addMorefacilityBtn').click(function () {
        $('#addFacilityList').slideDown();
    });

    $('#saveFacilityDetail').click(function(){
        var listAddedName = $('#addnewfacility_list').val();

        if( listAddedName != '')
        {
            $('#facilityList tbody').append('<tr><td>'+ listAddedName +'</td></tr>')
        }

        $('#addFacility, #addNewFacilityForm').hide();
        $('#facilityList').slideDown();
        $('#addFacilityDetail').show();
        $(this).hide();
    });

    $('#addNewFacilityForm').click(function () {
        $('#parentList_facility').slideDown();
        $('#parentList_facility').find('input').val('');
        $('#addFacilityList').hide();
    });




    // Common function for List
    $(document).on('click','.savecontact',function(){
        var contactname = $(this).closest('tr').find('.contactname').val();
        var contactemail = $(this).closest('tr').find('.contactemail').val();
        var contactphone = $(this).closest('tr').find('.contactphone').val();
        var contactlist = $("<tr><td>" + contactname + "</td><td>" + contactemail + "</td><td>"+ contactphone + "</td><td><div class='action'><a class='editcontact marginL5'> <i class='fa fa-pencil' aria-hidden='true'></i></a><a class='deletecontact marginL5'> <i class='fa fa-trash-o' aria-hidden='true'></i></a></div></td></tr>")
        
        $(this).closest('tbody').append(contactlist);
        $(this).closest('tr').find('input').val('');

    });

    $(document).on('click','.deletecontact', function(){
        $(this).closest('tr').remove();
    });

    $(document).on('click','.editcontact', function(){
        var contactname = $(this).closest('tr').find('td:nth-child(1)').text();
        var contactemail = $(this).closest('tr').find('td:nth-child(2)').text();
        var contactphone = $(this).closest('tr').find('td:nth-child(3)').text();

        $(this).closest('tr').find('td:nth-child(1)').html('<input type="text" value="'+ contactname +'" class="form-control"/>');
        $(this).closest('tr').find('td:nth-child(2)').html('<input type="text" value="'+ contactemail +'" class="form-control"/>');
        $(this).closest('tr').find('td:nth-child(3)').html('<input type="text" value="'+ contactphone +'" class="form-control"/>');

        $(this).hide();
        $(this).closest('tr').find('.action').prepend('<a class="saveEdit marginL5"> <i class="fa fa-check-circle" aria-hidden="true"></i></a>');
        
    });
    

    $(document).on('click','.saveEdit',function(){

            var contactname = $(this).closest('tr').find('td:nth-child(1)').children('input').val();
            var contactemail = $(this).closest('tr').find('td:nth-child(2)').children('input').val();
            var contactphone = $(this).closest('tr').find('td:nth-child(3)').children('input').val();
            
            $(this).closest('tr').find('td:nth-child(1)').text(contactname);
            $(this).closest('tr').find('td:nth-child(2)').text(contactemail);
            $(this).closest('tr').find('td:nth-child(3)').text(contactphone);

            $(this).hide();
            $(this).closest('tr').find('.action').prepend('<a class="editcontact marginL5"> <i class="fa fa-pencil" aria-hidden="true"></i></a>');

    });



    $(".show-details-btn").click(function (e) {
        var actionType = $(this).attr("action-type");
        switch (actionType) {
            case 'show':
                $("#project-table th,#project-table td").show();
                break;
            case 'hide':
                showSpecificCols()
                break;
        }
        $(this).hide();
        $(this).siblings().show();
    });
    $("#project-table>tbody>tr>td[data-type='Details']").click(function () {
        $("#project-detail-popup").modal('show');
    });


    $('.dropdownEditDeleteList').click(function (event) {
        event.stopPropagation();
    });


    $('#contactListfields, #showContactList').hide();

 

	$(".smIcon").each(function(){
		$(this).click(function(){
		  if($(this).hasClass('glyphicon-chevron-up')){
			 $(this).removeClass('glyphicon-chevron-up');
			 $(this).addClass('glyphicon-chevron-down');
		}

		else{
		$(this).addClass('glyphicon-chevron-up');
			 $(this).removeClass('glyphicon-chevron-down');
		}
		})
	});
	
	$("#vendQuoBtn").click(function(){
		
		$("#vender_quote_modal").show();
	});

});

function removeRow(id) {
    $(this).parent().parent().parent().remove();
}

function saveContactList(dataField, targetTable) {

    var data = $(dataField).find('input');
    var row = "<tr>";

    data.each(function (index, value) {
        var col = "<td>" + $(this).val() + "</td>";
        row += col ;
        
    });
    row += '<td data-category="action"> <div class="action clearfix"> <a class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a> <a class="remove marginL5" onclick="removeRow(this)"> <i class="fa fa-trash-o" aria-hidden="true"></i></a></div></td></tr>';
    $(row).appendTo(targetTable + '> tbody');
    $(targetTable).show();

    data.val('');

   
}



function removeUser(id, targetDiv) {
    $(id).closest('.form-group').remove();
    var length = $(targetDiv).find('div.form-group').length;
    $('.dropdownEditDeleteBtn').text(length);
}
function addUser(id, target, e) {
    $cloneEle = $(target).find('.form-group').first().clone();
    $cloneEle.find('input:text').val('');
    $cloneEle.prependTo('.dropdown-menu');
    $cloneEle.find('input:text').focus();
    var length = $(target).find('div.form-group').length;
    $('.dropdownEditDeleteBtn').text(length);

    //console.log(e);
}
function filterProjectWiseData(e, btnObj, tableId) {
    e.preventDefault();
    var recordType = $(btnObj).attr('name');
    $(btnObj).addClass('btn-primary').removeClass('btn-default');
    $(btnObj).siblings().removeClass('btn-primary').addClass('btn-default');
    $(tableId + '>tbody>tr').each(function () {
        if ($(this).attr('data-category') == recordType) {
            $(this).show()
        } else {
            $(this).hide()
        }
    });
    switch (recordType) {
        case 'My Projects Only':
            $('.table-actions>button[name="Hide"]').html('Hide');
            $('.table-actions>button[name="Archive"]').html('Archive');
            break;
        case 'Show Hidden':
            $('.table-actions>button[name="Hide"]').html('Unhide');
            $('.table-actions>button[name="Archive"]').html('Archive');
            break;
        case 'Show Archived':
            $('.table-actions>button[name="Hide"]').html('Hide');
            $('.table-actions>button[name="Archive"]').html('Unarchive');
            break;
    }
}
    function showSuccessMsg(msg) {
        setTimeout(function () {
            $(".export-success-msg-section").show();
            $(".export-success-msg-section>div").html(msg);
            setTimeout(function () {
                $(".export-success-msg-section").hide();
            }, 5000);
        }, 2000);

    }
    function archiveProject() {
        $("#cutDataPopup").modal('show');
        $('.progress-bar').width('0');
        var animatedWidth = $('.progress-bar').animate({
            width: '100%',
        }, 2500, "linear", function () {
            $('#cutDataPopup').modal('hide');
            showSuccessMsg('Project has been Archived successfully')
        });
    }

