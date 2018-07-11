$(document).ready(function () {
    $('#criteriaContent').val('');
    $('#errors-table tbody').find("tr[row-type='estimating']").hide();
    $("input[name='grid-error']").click(function () {
        var rowType = $(this).val();
        $('#errors-table tbody tr').hide();
        $('#errors-table tbody').find("tr[row-type='" + rowType + "']").show();
    });
    $('.table tbody tr').click(function () {
        if ($(this).attr('is-row-selected') === undefined) {
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
    });
	
	$(".table-wrapper table tbody tr").hover(function(){
		
		$(".table-wrapper table tbody tr td:first-child i").css('display','block');},
function(){$(".table-wrapper table tbody tr td:first-child i").css('display','none');}
	);
});

function changeGridColor(tableId) {
    var colorObj = {};
    $('#color-table tbody tr').each(function () {
        var row = this;
        $(row).children().each(function () {
            if (!$(this).attr('color-type')) {
                return;
            }
            colorObj[$(row).attr('cell-cat')] = colorObj[$(row).attr('cell-cat')] || {};
            colorObj[$(row).attr('cell-cat')][$(this).attr('color-type')] = $(this).find('input').val();
        });
    });
    $(tableId + ' tbody tr').each(function () {
        var row = this;
        $(row).children().each(function () {
            if (!$(this).attr('cell-type')) {
                return;
            }
            $(this).css(colorObj[$(this).attr('cell-type')]);
        });
    });
//    console.log(colorObj);
}

function appendRow(tableId) {
    var to = $('#insert-new-to').val();
    var from = $('#insert-new-from').val();
    var prefix = $('#insert-new-prefix').val();
    var suffux = $('#insert-new-suffix').val();
    for (var i = from; i <= to; i++) {
        var row = $(tableId + ' tbody tr:first').clone(true);
        $(row).find("td[data-type='tag']").html(prefix + i + suffux);
        $(tableId + ' tbody').append(row);
        console.log(row);
    }
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
    $(tableId + ' tbody tr').each(function () {
        if ($(this).attr('is-row-selected') !== 'true') {
            return;
        }
        for (var i = 0; i < criteria.length; i++) {
            var row = $(this).clone(true);
            $(row).find("td[data-type='tag']").html(criteria[i].trim());
            $(tableId + ' tbody').append(row);
        }
    });
}

function copyFromOther(fromTableId, toTableId) {
    $(fromTableId + ' tbody tr').each(function () {
        if ($(this).children().first().find("input[type='checkbox']").is(':checked')) {
            var row = $(toTableId + ' tbody tr:first').clone(true);
            $(this).children().each(function () {
                if (!$(this).attr('data-id')) {
                    return;
                }
                $(row).children("td[data-type='" + $(this).attr('data-id') + "']").html($(this).html());
            });
            $(toTableId + ' tbody').append(row);
        }
    });
}

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