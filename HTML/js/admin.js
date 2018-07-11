$(document).ready(function () {
    $('#detelePriceBook .block-content table tbody tr').click(function () {
        $('.searchBar').find('.searchbtn').removeClass('opacity05');
    });

    $('#selectEditCompany li').click(function () {
        $('#companyForm input').val($('#companyForm input').attr('data-type'));
    });

    $('#saveCompanyForm').click(function () {
        $('#companyForm input').val('');
    });
});
function getevent(id, e) {
    //console.log(arguments[0]);
    $(e.currentTarget).find('li').removeClass('active');
    var target = $(e.target).parent('li');
        target.addClass('active');
    var classDiv = $(target).find('a').attr('class').split('-')[0];

        $('#toggleArea > div').addClass('hide')
    var contentDIv = $('#toggleArea > div').filter('.' + classDiv + '-area').removeClass('hide');
}

function rowselection(id, e) {
    console.log(arguments[0]);
    $(e.target).parent('tr').addClass('table-head');
}

function selectValue(id, e) {
    if ($(id).val() == 'Current Only') {
        $('#archieveBtn').removeClass('hide');
		$('#unarchieveBtn').addClass('hide');
    }
	
	else if ($(id).val() == 'Archived Only') {
        $('#archieveBtn').addClass('hide');
		$('#unarchieveBtn').removeClass('hide');
    }

}

function selectUserNm(id, e) {
    if ($(id).val() == 'Brian Schmitt') {
        $('.btn-unassign').removeClass('hidden');
		$('.btn-assign').addClass('hidden');
    }
	
	else {
        $('.btn-assign').removeClass('hidden');
		$('.btn-unassign').addClass('hidden');
    }

}

//function addRowTable(id, sourceTarget, targetTable) {

//    // Source Target to Get Data
    

//    // Add Row Target  Table
//    var trhtml = '<tr>td data-category="username"></td><td data-category="full_name"></td><td data-category="email_id"></td><td data-category="profile"></td><td data-category="status" class="width100"><span class="statuslabel bgcolorGreen">Enabled</span></td><td data-category="action" class="width100"><span class="actionbutton"><a class="viewbtn"  title="View"><i class="fa fa-eye" aria-hidden="true"></i></a><a class="editBtn"  title="Edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a><a class="deleteBtn" title="Delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a> </span></td></tr>'

    
//    $(trhtml + 'td').each(function () {
//        var dataCategory = trhtml.find('td').attr('data-category');
//        var sourceInputVal = $(sourceTarget).find('input').attr('data-type');
//        $(dataCategory).filter(sourceInputVal).text(dataCategory);

//    });

//    $(targetTable + '> tbody ').append(trhtml);
//}

function addRowTable(id, targetTable) {
    $(targetTable).find('tbody > tr.hide').removeClass('hide');

    setTimeout(function () {
        $(targetTable).find('tbody > tr.table-head').removeClass('table-head')
    }, 3000)
}

function deteleRowTable(id) {
    $(id).closest('tr').remove();
}