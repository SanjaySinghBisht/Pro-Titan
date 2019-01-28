$(document).ready(function () {


    var companyDetailsObj = {
        "company_name": "",
        "address1": "",
        "address2": "",
        "city": "",
        "state": "",
        "country": "",
        "zip": "",
        "phone": "",
        "cell": "",
        "email": "",
        "web_url": ""
    }

    $('#edit-comapny-details').hide();

    $('#save-comapny-details').click(function (e) {
        e.preventDefault();
        for (var key in companyDetailsObj) {
            if (!$('#' + key).val()) {
                companyDetailsObj[key] = '--';
                $('#' + key).val('--');
            } else {
                companyDetailsObj[key] = $('#' + key).val();
            }
            $('#' + key).addClass('disabled-input')
        }
        $('#edit-comapny-details').show();
        $('#cancel-comapny-details').hide();
        $('#save-comapny-details').hide();
    });

    $('#edit-comapny-details').click(function (e) {
        e.preventDefault();
        for (var key in companyDetailsObj) {
            if ($('#' + key).val() == '--') {
                companyDetailsObj[key] = '';
                $('#' + key).val('');
            } else {
                companyDetailsObj[key] = $('#' + key).val();
            }
            $('#' + key).removeClass('disabled-input')
        }
        $('#edit-comapny-details').hide();
        $('#cancel-comapny-details').show();
        $('#save-comapny-details').show();
    })

    $('.browse').click(function(){
        var file=$(this).parent().parent().parent().find('.file');
        file.trigger('click');
    });
    $('.file').change(function(){
        // var path=$(this).val();
        // $(this).siblings().children().find('.form-control').val(path);
        // console.log(($(this).siblings().children().find('.form-control')).val())
        $(this).parent().find('.form-control').val($(this).val());
    });
    

    /**
     * company preference
     */
    $('.default-project-tasks-popup').hide();
    $('#task-list-toggle,#task-list-ok,#task-list-close').click(function(){
        $('.default-project-tasks-popup').toggle();
    });


    $('#export-folder-action').click(function(){
        var file=$('#default-export-folder-input');
        file.trigger('click');
    });
    $('#default-export-folder-input').change(function(){
        $('#default-export-folder-path').val($('#default-export-folder-input').val());
    })

    /**task filter */

    $('#task-list-filter li').click(function(){
        var listValue=$(this).find('a')[0].innerText;
        switch (listValue.trim().toLowerCase()) {
            case 'all':
                $('.task-list-body .checkbox').each(function(key,domObj){
                    $(this).show();
                    $(this).removeClass('margin-v-10');
                    // console.log(domObj.innerText);
                });
                break;
            default:
                $('.task-list-body .checkbox').each(function(key,domObj){
                    if(domObj.innerText.trim().toLowerCase()===listValue.toLowerCase()){
                        $(this).show();
                        $(this).addClass('margin-v-10');
                    }else{
                        $(this).removeClass('margin-v-10');
                        $(this).hide();
                    }
                    // console.log(domObj.innerText);
                });
                break;
        }
    });
});
