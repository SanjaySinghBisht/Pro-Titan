$(document).ready(function(){
    //debugger;
    $('.hardware-block .block-head h2').click(function(){
        $(this).parents(':eq(1)').find('.block-list').slideToggle();
    });

     $('.hardware-block > .block-list > table > tbody > tr').click(function(){
        $(this).addClass('accordion-active');
     });

    $('#collpseHardwareBtn').click(function(){
        $('.hardware-block').find('.block-list').slideUp();
    });

    $('#expandHardwareBtn').click(function(){
        $('.hardware-block').find('.block-list').slideDown();
    });

    $('#deleteHdwListBtn').click(function(){
        $('.hardware-block').find('.block-list > table > tbody > tr.accordion-active').remove();
    });

    // Vendor Selection Action
    $('.vendor-selection-ouput').hide();
    $('#pdtLineList').hide();
    $('#selectvndType li[data-value="Corbin Russwin"]').click(function(){
        $(this).addClass('active');
    });

    $('#selectHdwType li[data-value="Closers"]').click(function(){
        $(this).addClass('active');
        if($('#selectvndType li[data-value="Corbin Russwin"]').hasClass('active')){
            // $('.vendor-selection-ouput').show();
             $('#pdtLineList').show();
        }
    });

    // Search Result Output
    $('.search-result-output').hide();
    $('#pdtLineList li[data-value="DC6000"]').click(function(){
        $('#pdtLineList li, #fnLineList li').removeClass('active');
        $(this).addClass('active');
        $('#finishList li, #fnLineList li').show();
        $('#fnLineList .fnLineHeading').show();
        $('.vendor-selection-ouput').show();
    });

     $('#pdtLineList li[data-value="Drop Plates"]').click(function(){
        clickCount = 0;
        $('#fnLineList .fnLineHeading').hide();
        $('#finishList li, #fnLineList li').hide();
        $('#pdtLineList li').removeClass('active');
        $('.accordion-active.swap-list').removeClass();
        $('.prod-box').removeClass('swapthumb','swapthumbActive');
        $('.swapbtn').removeClass('swapbtnActive')
        $(this).addClass('active');
                $('.search-result-output').show();
                $('.prod-box').each(function(){
                var headingTxt = $(this).children('h4.box-heading').attr('data-drop-type');
                var priceData = $(this).find('.pricedata').attr('data-drop-type');

                $(this).children('h4.box-heading').get(0).lastChild.nodeValue = headingTxt ;
                $(this).find('.pricedata').text(priceData);
                $(this).find('.product-img').children('img').attr('src','images/dropplate.png');
               
            });
            $('#list-view table > tbody tr').each(function(){

                    var tdPartDesc =  $(this).find('td[data-type="Part Description"]').attr('data-drop-type');
                    var tdListPrice =  $(this).find('td[data-type="List Price"]').attr('data-drop-type');
                    var tdCost =  $(this).find('td[data-type="Cost"]').attr('data-drop-type');

                    $(this).find('td[data-type="Part Description"]').text(tdPartDesc);
                    $(this).find('td[data-type="List Price"]').text(tdListPrice);
                    $(this).find('td[data-type="Cost"]').text(tdCost);
                });

             $('.search-result-output .product-list').find('.active').removeClass('active');
             $('.search-result-output #list-view table > tbody tr').removeClass('active');
    });

    $('#fnLineList li[data-value="DC6200"]').click(function(){
        $(this).addClass('active');
        clickCount=0;
            if($('#pdtLineList li[data-value="DC6000"]').hasClass('active')){
                $('.search-result-output').show();
                $('.prod-box').each(function(){
                    var headingTxt = $(this).children('h4.box-heading').attr('data-dc6000-type');
                    var priceData = $(this).find('.pricedata').attr('data-dc6000-type');
                    $(this).children('h4.box-heading').get(0).lastChild.nodeValue = headingTxt ;
                    $(this).find('.pricedata').text(priceData);
                    $(this).find('.product-img').children('img').attr('src','images/product-img.png');
                });
                $('#list-view table > tbody tr').each(function(){

                    var tdPartDesc =  $(this).find('td[data-type="Part Description"]').attr('data-dc6000-type');
                    var tdListPrice =  $(this).find('td[data-type="List Price"]').attr('data-dc6000-type');
                    var tdCost =  $(this).find('td[data-type="Cost"]').attr('data-dc6000-type');

                    $(this).find('td[data-type="Part Description"]').text(tdPartDesc);
                    $(this).find('td[data-type="List Price"]').text(tdListPrice);
                    $(this).find('td[data-type="Cost"]').text(tdCost);
                });

                $('.search-result-output .product-list').find('.active').removeClass('active');
                $('.search-result-output #list-view table > tbody tr').removeClass('active');
            }

          
    });

    // Search Result Select Product
    //debugger;
    var clickCount=0;
    $('.prod-box[data-value="DC6220613E"]').on('click', function(){
        if(clickCount==0){
            $('.product-list .prod-box').removeClass('swapthumbActive');
            $(this).addClass('active');
            $('#closers .block-list > .table > tbody tr').removeClass('active');
            $('#closers .block-list > .table > tbody tr.accordion-active.swap-list').removeClass();
            $('.swapbtn').removeClass('swapbtnActive');
               var prodName = $(this).children('.box-heading').text();
               $('.selected-hardware-list .style-scroll').animate({ scrollTop: 600 }, 300);
               $('#closers .block-list > .table > tbody').prepend('<tr class="active"><td class="width20"><button class="btn btn-link btn-icon hideaccordionBtn" id="modifierList"><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></button></td><td>'+ prodName +'</td><td class="width30">NO</td></tr>')
        }
       
        clickCount++;
    });

    // Search Result Select Product
    $('#list-view .table tbody tr[data-type="188F65 689"]').on('click', function(){
       // alert('');
       
         $(this).addClass('active');
         var prodDesc = $(this).children('td[data-type="Part Description"]').text();
         var mfr = $(this).children('td[data-type="Mfr"]').text();

         $('#closers .block-list > .table > tbody tr').removeClass('active');
         $('.selected-hardware-list .style-scroll').animate({ scrollTop: 600 }, 300);
         $('#closers .block-list > .table > tbody').prepend('<tr class="active"><td class="width20"><button class="btn btn-link btn-icon hideaccordionBtn" id="modifierList"><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></button></td><td>'+ prodDesc +'</td><td class="width30">'+ mfr +'</td></tr>');
        
    });


    $('.swapbtn').on('click',function(){
        $(this).toggleClass('swapbtnActive','');
        $('#closers').toggleClass('swapEnable','');
    });
    
    $(document).on('click','.swapEnable .block-list .table > tbody > tr', function(){
        $('.swapEnable .block-list .table > tbody > tr').removeClass('swap-list');
        $(this).addClass('swap-list');
        $('.prod-box[data-value="DC6220 625"]').addClass('swapthumb');
    });

    $(document).on('click','.swapthumb', function(){
        $(this).addClass('swapthumbActive');
        var swapthumbtxt =  $(this).children('h4.box-heading').text();
        $('.swapEnable .swap-list td:nth-child(2)').text(swapthumbtxt);
    });


    $('#refreshBtn').click(function(){
        $('.swapEnable').removeClass();
        $('.swapbtn').removeClass('swapbtnActive');
        $('.selected-hardware-list .style-scroll').animate({ scrollTop: 0 }, 300);
        $('.vendor-selection-ouput').find('.active').removeClass();
        $('.vendor-selection-ouput').hide();
        $('#selectvndType').find('.active').removeClass();
        $('#selectHdwType').find('.active').removeClass();
        $('.search-result-output .product-list').find('.active').removeClass('active');
        $('.search-result-output').hide();
        $('#closers').find('tbody tr.active, tbody tr.accordionTr').remove();
        $('.hardware-block').find('.block-list > table > tbody > tr.accordion-active').removeClass();
        $('#list-view').find('table > tbody > tr').removeClass('active');
        $('.product-list').find('.prod-box').removeClass('active');
        clickCount=0;
    });


    // Add Modifier Button Function
    $('#addmodifierbtn').click(function(e){
        event.stopPropagation();
        $('#addmodifierPopup').modal('show');
    });


    $(document).on('click','.modifier-list li', function(){
        $(this).addClass('active');
    });

    $('#donemodifierbtn').click(function(){
        $('#addmodifierPopup').modal('hide');
        
       // $('#closers').find('tbody tr.active td:first-child').append('<button class="btn btn-link btn-icon" id="modifierList"><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></button>');

       //$('#closers').find('tbody').append('<button class="btn btn-link btn-icon" id="modifierList"><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></button>');
        var accordionhtml  =  
        '<tr class="accordionTr">' +
            '<td class="width20">&nbsp;</td>' +
            '<td colspan="2">' +
                '<table cellpadding="0" cellspacing="0" border="0" class="table accordionTable" style="margin-bottom:0;">';

       $('.modifier-list li.active').each(function(){
           accordionhtml +=
                '<tr><td>' + $(this).children('span').text() + '</td><td class="width30">'+ $(this).children('label').text() +'</td></tr>' ;
       });

       accordionhtml +=
       '</table></td></tr>' ;
       $('#modifierList').removeClass('hideaccordionBtn');
        $('#closers').find('tbody tr.active').first().after(accordionhtml);
        $('table#closers').find('tbody tr.active').first().after(accordionhtml);
    });

    $(document).on('click','#modifierList' , function(){
        // alert('');
         $(this).closest('tr').next('.accordionTr').toggle();
    });


    // Create Custom Modifier Popup
    $('#createcstmModifierBtn').click(function(){
        $('#addmodifierPopup').modal('hide');
        $('#createcstmModifier').modal('show');
        $('.modifier-list li').removeClass('active');
    });
    $('#cancelmodifierBtn').click(function(){
        $('#addmodifierPopup').modal('show');
        $('#createcstmModifier').modal('hide');
    });

    $('#okmodifierBtn').click(function(){
        $('#addmodifierPopup').modal('show');
        $('#createcstmModifier').modal('hide');
        var customPrtCode = $('#cstprtCode').val();
        var customPrtdesc =  $('#cstprtdesc').val();
        var listPrice =  $('#listprice').val();
        $('#addmodifierPopup .modal-body .style-scroll > .col-md-6:first-child .modifier-list ul').prepend('<li><label class="label-code">'+ customPrtCode +'</label><span>'+ customPrtdesc +'</span><span>' + listPrice +'</span></li>')
    });


    // list view and Card View
    $('#list-view').hide();
    $('.hidebtncardview').hide();
    $('#listviewbtn').click(function(){
        $('#card-view').hide();
        $('#list-view').show();
       // $('.hidebtncardview').show();
        $('#customproductfilter').hide();
    });

    $('#cardviewbtn').click(function(){
        $('#card-view').show();
        $('#list-view').hide();
        $('.hidebtncardview').hide();
         $('#customproductfilter').show()
       
    });

    var thumbnailView ;
    var sampleView ;
    $('#customproductfilter').click(function(){
        thumbnailView = true ;
        sampleView = false ;
    });
    $('#listViewFilterBtn').click(function(){
        sampleView = true ;
        thumbnailView = false ;
    });
    $('#addCustomViewBtn').click(function(){
    if(thumbnailView == true ){
        var importviewlist = $('#importUserList').find('tr.active').children('td:nth-child(2)').text();
        $('#thumbnailViewFilterPopup').find('.view-name-list').append('<li data-attr-id="'+ importviewlist +'thumbnail">'+ importviewlist +'</li>')
    }
    if(sampleView == true){
        var importviewlist = $('#importUserList').find('tr.active').children('td:nth-child(2)').text();
        $('#ViewFilterPopup').find('.view-name-list').append('<li data-attr-id="'+ importviewlist +'Table">'+ importviewlist +'</li>')
    }
    $('#importUserList').find('tr.active').removeClass('active');
  });


    // Search Result Top Buttons
    $('#selectAllProductList').click(function(){
        if($('.product-list').css('display') != 'none'){
             $('.product-list').find('.prod-box').addClass('active');
        }
        else if ($('#list-view').css('display') != 'none'){
           $('#list-view').find('table > tbody > tr').addClass('active');
        }
    });

    $('#unselectAllProductList').click(function(){
        if($('.product-list').css('display') != 'none'){
             $('.product-list').find('.prod-box').removeClass('active');
        }
        else if ($('#list-view').css('display') != 'none'){
           $('#list-view').find('table > tbody > tr').removeClass('active');
        }
    });

    // $('#selectViewsProduct li').click(function(){
    //     var liDataType = $(this).attr('data-type');
    //      $('.product-list .prod-box.active label').each(function(){
    //         if($(this).text() == liDataType ){
    //             $(this).parent('.row').remove();
    //         }
    //     });
    // });

    // Switch Popup to Add-Edit Hardware popup
    $('#switchAddHdwSetPoup').click(function(){
        $('#addHardwareToset').modal('hide');
        $('#putHardwareSets').modal('show');
    });

    $('#listviewmodifierbtn').click(function(e){
        event.stopPropagation();
        $('#addmodifierPopup').modal('show');
    });

    $('#listviewPdfbtn, #thumnbPdfBtn').click(function(E){
         event.stopPropagation();
         $('#listviewPdfPopup').modal('show');
    });


   


    // $('.switch-button-container input:checkbox').change(function(){
    //     var isChecked = [] ;

    //     var checkbox = $('.switch-button-container input:checkbox');
    //     $(checkbox).each(function(){
    //         isChecked.push($(this).is(':checked'));

    //         if(isChecked == false){
    //             alert('true')
    //         }
    //     });

    //    // alert(isChecked);
       
    // });
});

function sampleThumbnailFilter( id, targetTable){
    var tdActiveDataType = [] ;
    var tdInactiveDataType = [] ;
    $(targetTable + ' tbody > tr > td.popupActiveTd').each(function(){
        tdActiveDataType.push($(this).attr('data-attr-name'));
        //tdInactiveDataType = tdActiveDataType.splice($(targetTable + ' tbody > tr > td.popupInactiveTd').attr('data-attr-name'));
    });

    for (var i = 0; i < tdActiveDataType.length; i++) {
        //console.log(tdActiveDataType[i]);
         $('.product-list .prod-box label').each(function(){
            if($(this).text() == tdActiveDataType[i] ){
                $(this).parent('.row').hide();
            }
        });
    }

    
}
