$(document).ready(function (e) {
    $('#myType>tbody>tr').attr('is-row-selected', 'false');
    $('#myType>tbody>tr:nth-child(3)').first().attr('is-row-selected', 'true');
    $('#myType>tbody>tr:nth-child(3)').addClass('selected-row');
    $('#myType>tbody>tr').click(function (e) {
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
        $('#frameForm,#doorForm').find('input').each(function (){
            $(this).val($(this).attr('data-value'));
        });
    });

   
});

function validateCriteria() {
    var to = $('#insert-copy-to').val();
    var from = $('#insert-copy-from').val();
    var prefix = $('#insert-copy-prefix').val();
    var suffux = $('#insert-copy-suffix').val();
    var criteria = [];
    for (var i = from; i <= to; i++) {
        criteria.push(prefix + i + suffux);
    }
    $('#criteriaContent').val(criteria.join(', '))
}

function clearCriteria() {
    $('#insert-copy-to').val('');
    $('#insert-copy-from').val('');
    $('#insert-copy-prefix').val('');
    $('#insert-copy-suffix').val('');
    $('#criteriaContent').val('');
}

function copyRow(tableId) {
//    var to = $('#insert-copy-to').val();
//    var from = $('#insert-copy-from').val();
//    var prefix = $('#insert-copy-prefix').val();
//    var suffux = $('#insert-copy-suffix').val();
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
    var criteria = $('#criteriaContent').val().split(',');
    $(tableId + '>tbody>tr').each(function () {
        if ($(this).attr('is-row-selected') !== 'true') {
            return;
        }
        for (var i = 0; i < criteria.length; i++) {
            var row = $(this).clone(true);
//            var expendedRow = $(tableId + '>tbody>tr.vendor-list-toggle-row:first').clone(true);
//            $(row).find("td[data-type='hdwset']").html(criteria[i].trim());
            $(tableId + '>tbody').append(row);
//            $(tableId + '>tbody').append(expendedRow);
        }
    });
}
function resetFrameAndDoors() {
    $("#frameForm,#doorForm").find('input').val('');
    $('#myType>tbody>tr').attr('is-row-selected', 'false');
    $('#myType>tbody>tr').removeClass("selected-row");
}

function createOrUpdateFrameDoor(formId, tableId) {
    
    $(formId).find('input').val('');
    switch (formId) {
        case '#frameForm':
            var $row = $(tableId + '>tbody>tr:nth-child(2)').clone(true);
            $(tableId + '>tbody').append($row);
            break;
        case '#doorForm':
            var $row = $(tableId + '>tbody>tr:nth-child(1)').clone(true);
            $(tableId + '>tbody').append($row);
            break;
        default :
            var $row1 = $(tableId + '>tbody>tr:nth-child(3)').clone(true);
//            var $row2 = $(tableId + '>tbody>tr:nth-child(1)').clone(true);
//            $(tableId + '>tbody').append($row1);
            $(tableId + '>tbody').append($row1);
    }
    
}

function selectTableForm(id, e, targerAccordion) {
    //console.log(arguments[0]);
    $(e.currentTarget).find('tbody > tr').removeClass('selected-row');
    $(e.target).parent('tbody > tr').addClass('selected-row');
    // $(targerAccordion).find();

    var targetTdDataType = $(e.target).parent('tr').attr('data-type') ;
    var targetPanelDataCategroy = $(targerAccordion).find('.panel-collapse').attr('data-category');

    $(targerAccordion).find('.panel-collapse').removeClass('in');
    var targetAccordionData = $(targerAccordion).find('.panel-collapse[data-category="' + targetTdDataType + '"]').addClass('in')
        targetAccordionData.attr('aria-expanded', 'true');
        targetAccordionData.removeAttr('style');

      

    var targetAccordionHeading = targetAccordionData.prev('.panel-heading').children('h4').children('a[data-toggle="collapse"]').attr('aria-expanded', 'true');
        targetAccordionHeading.removeClass('collapsed');


        if (targetTdDataType == 'Opening Type') {
            //targetAccordionData = $(targerAccordion).find('.panel-collapse').addClass('in')
            //targetAccordionData.attr('aria-expanded', 'true');
            //targetAccordionData.removeAttr('style');
        }

        $(targerAccordion).find('.formpagination').addClass('hide');
        $(targerAccordion).find('input').each(function () {
            $(this).val($(this).attr('data-value'));
        });
  
}

function customValues(id, e, targetForm) {
    //selectTableForm();
    $(e.target).addClass('selected-row');
    var tdText = $(e.target).text();
    var tableHead = $(e.target).closest('.block-content').prev('.col-head').children('h2').text();

    $(targetForm).find('input').each(function (index, el) {
        if ($(this).attr('data-type') == tableHead) {
            $(this).val(tdText).focus();
        }

        if (tableHead == 'UOM' ) {
            //var randomnumber = Math.floor(Math.random() * 11);
            if (tdText == 'PRA/PRI' || tdText == 'PR') {
                $(targetForm).find('input[data-type="qty"]').val('2');
                $(targetForm).closest('.panel').find('.formpagination').removeClass('hide')
            }
            else {
                $(targetForm).find('input[data-type="qty"]').val('1')
            }
        }
    });

  
}


function formfadeIn(id, targetForm) {
    $(targetForm).fadeOut().fadeIn();
}

function toggleDiv(id, targetDiv) {
    $(targetDiv).toggle();
}