var hidecount = 0;

$(document).ready(function () {
  // $('.show-hide-cols').click(function(){
  //   var clickedColName =[];
  //   var unclickedColName =[];
  //   $(".popup-show-hide-cols tbody tr td.activecol").each(function(i){
  //     clickedColName.push($(this).attr('data-attr-name'));
  //     $(".main-table-show-hide-cols thead tr th[data-attr-name='"+clickedColName[i]+"'],.main-table-show-hide-cols tbody tr td[data-attr-name='"+clickedColName[i]+"']").hide();
  //   });
  //   $(".popup-show-hide-cols tbody tr td.show-tags").each(function(i){
  //     unclickedColName.push($(this).attr('data-attr-name'));
  //     $(".main-table-show-hide-cols thead tr th[data-attr-name='"+unclickedColName[i]+"'],.main-table-show-hide-cols tbody tr td[data-attr-name='"+unclickedColName[i]+"']").show();
  //   });
  // });
  $('.openingCollapseRow').hide();
  $(document).on('click','.openingexpandData',function(){
    $(this).parent('tr').next('.openingCollapseRow').toggle();
    $(this).children('i').toggleClass('fa-chevron-up');
    $(this).children('i').toggleClass('fa-chevron-down')
  });
  $(document).on('click','#ExpandAllHardwareset',function(){
    $('.openingCollapseRow').show();
  });
  $(document).on('click','#collapseAllHardwareset',function(){
    $('.openingCollapseRow').hide();
  });
  
  $('.view-door-data ul li a').click(function(){
    $(this).parents('.heading-name').siblings(".detail-area").children(".card-door-data").removeClass('currentDoor');
    $(this).parents('.heading-name').siblings(".detail-area").children(".card-door-data[id=" + $(this).attr("data-attr-id") + "]").addClass('currentDoor');
  });
  $('.boothDoorData').click(function(){
    var currentOpeningName = $(this).parents('.opening-card-view-card').children('.heading-name').children('span').html();
    $('#BothDoorsdata h4.modal-title span').html(currentOpeningName);
  });
  $('.card-view-opening-data').hide();
  $('#gridViewOpening').click(function(){
    $('.card-view-opening-data').hide();
    $('.project-opening-grid').show();
    $('.expand-opening-grid').show();
    $('.projects-left-data').show();
    $('.projects-right-contanier').css('width','83.33333333%');
    $('.left-collsapse').show();
    $('.material-cell-data-container').show();    
    $('.grid-container').css('min-height','490px')
  });
  $('#cradViewOpening').click(function(){
    $('.card-view-opening-data').show();
    $('.project-opening-grid').hide();
    $('.expand-opening-grid').hide();
    $('.projects-left-data').hide();
    $('.projects-right-contanier').css('width','100%');
    $('.left-collsapse').hide();
    $('.material-cell-data-container').hide();
    $('.grid-container').css('min-height','650px')
  });
  
  $('.click-to-pick-btn').hide();
  $('.opening-card-view-card .heading-name').click(function(){
      $(this).siblings('.heading-name[data-attr-id="other"]').children('.btn').hide(); 
      $(this).siblings('.heading-name[data-attr-id="door"]').children('.view-door-data').hide();       
      $(this).siblings('.opening-card-view-card .heading-name').removeClass('active');
      $(this).addClass('active');
      $(this).siblings(".opening-card-view-card .detail-area").removeClass('expand');     
      $(this).siblings(".opening-card-view-card .detail-area[id=" + $(this).attr("data-attr-id") + "]").addClass('expand');
      
  });
  $('.heading-name[data-attr-id="other"] .btn').hide();
  $('.heading-name[data-attr-id="other"]').click(function(){
        $(this).children('.btn').show();
        $(this).parents('.opening-card-view-card').children('.opening-click-to-pick-btn').hide();
  });
  $('.heading-name[data-attr-id="door"] .view-door-data').hide();
  $('.heading-name[data-attr-id="door"]').click(function(){
        $(this).children('.view-door-data').show();
        $('.opening-click-to-pick-btn').hide();
        $('.click-to-pick-btn').hide();
        $(this).children('.view-door-data').children('.click-to-pick-btn').toggle();
        $(this).children('.click-to-pick-btn').toggle();
  });
  $('.heading-name[data-attr-id="frame"]').click(function(){
    $(this).parents('.opening-card-view-card').children('.opening-click-to-pick-btn').hide();
    $('.click-to-pick-btn').hide();
    $(this).children('.click-to-pick-btn').show();
  });
  $('.heading-name[data-attr-id="opening"]').click(function(){
    $(this).parents('.opening-card-view-card').children('.opening-click-to-pick-btn').show();
    $('.click-to-pick-btn').hide();
  });

  $(document).on('click','.openingHardwareSettable table tbody tr',function(){
    $('.openingHardwareSettable table tbody tr').removeClass('active');
    $(this).addClass('active');
  })
  $(document).on('click','#deleteSelectedHardwareset',function(){
    $('.openingHardwareSettable table tr.active').remove();
  });
  $(document).on('click','#selectAllHardwareset',function(){
    $('.openingHardwareSettable table tr').addClass('active');
  });
  $(document).on('click','#UnselectAllHardwareset',function(){
    $('.openingHardwareSettable table tr').removeClass('active');
  });

  $('.opening-card-view-card h4 span').click(function(){
    stopPropagation();
  }) 
  $(document).on('click', '.view-name-list li',function(){
    $(this).closest('.view-left-pannel').find('.view-name-list li').removeClass('active');
    $(this).addClass('active');
    $(this).closest('.view-left-pannel').next(".view-right-panel").find('table').removeClass('showTable');
    $(this).closest('.view-left-pannel').next(".view-right-panel").find('table[id="' + $(this).attr("data-attr-id") + '"]').addClass('showTable');
  });

 $(document).on('click', '#add-new-view-name',function(){
  var newViewName = $('#new-view-name').val();
  console.log(newViewName);
  $(this).parents('.view-left-pannel').children('.view-name-container').children('.view-name-list').append('<li>'+newViewName+'</li>');
 });
 $(document).on('click','#viewOptionTable1 tbody td', function(){
    $(this).toggleClass('activecol');
    if($(this).attr("data-attr-hide") == "show")
      {
        $(this).attr('data-attr-hide', 'hide');
        $(this).removeClass("show-tags");
      }
      else{
        $(this).attr('data-attr-hide', 'show');
        $(this).addClass("show-tags");
      }
    
 });
 $("#ViewFilterDone").click(function(){
  var clickedColName =[];
  var unclickedColName =[];
  $("#viewOptionTable1 tbody tr td.activecol").each(function(i){
    clickedColName.push($(this).attr('data-attr-name'));
    console.log(JSON.stringify(clickedColName));
    $(".project-opening-grid thead tr th[data-attr-name='"+clickedColName[i]+"'],.project-opening-grid tbody tr td[data-attr-name='"+clickedColName[i]+"']").hide();
  });
  $("#viewOptionTable1 tbody tr td.show-tags").each(function(i){
    unclickedColName.push($(this).attr('data-attr-name'));
    console.log(JSON.stringify(unclickedColName));
    $(".project-opening-grid thead tr th[data-attr-name='"+unclickedColName[i]+"'],.project-opening-grid tbody tr td[data-attr-name='"+unclickedColName[i]+"']").show();
  });
});

 $(document).on('click','#sampleTableThumbnail tbody td', function(){
   //alert('');
    $(this).toggleClass('popupActiveTd');
 });

$('#sampleListTable tbody td, #sampleList tbody th').attr("data-attr-hide","show")
 $(document).on('click','#sampleListTable tbody td', function(){
   //alert('');
   $(this).toggleClass('activecol');
  if($(this).attr("data-attr-hide") == "show")
  {
    $(this).attr('data-attr-hide', 'hide');
    $(this).removeClass("show-tags");
  }
  else{
    $(this).attr('data-attr-hide', 'show');
    $(this).addClass("show-tags");
  }
 });



// For Views button Popup 
    var thumbnailView ;
    var sampleView ;
    var baseTableView ;
    var detailedView ;
    var libraryMainTable ;
    var libraryOpeningTable ;
    var libraryFrameTable ;
    var libraryHdwsetTable ;
    var libraryHardwareTable ;

    $('#customproductfilter').click(function(){
        thumbnailView = true ;
        sampleView = false ;
        baseTableView = false;
        detailedView = false ;
        libraryMainTable = false;
        libraryOpeningTable = false;
        libraryFrameTable = false;
        libraryDoorTable = false;
        libraryHdwsetTable = false;
        libraryHardwareTable = false;
    });
    $('#listViewFilterBtn').click(function(){
        sampleView = true ;
        thumbnailView = false ;
        baseTableView = false;
        detailedView = false 
        libraryMainTable = false;
        libraryOpeningTable = false;
        libraryFrameTable = false;
        libraryDoorTable = false;
        libraryHdwsetTable = false;
        libraryHardwareTable = false;
    });

    $('#baseTableViewFltBtn').click(function(){
        baseTableView = true;
        sampleView = false ;
        thumbnailView = false ;
        detailedView = false;
        libraryMainTable = false;
        libraryOpeningTable = false;
        libraryFrameTable = false;
        libraryDoorTable = false;
        libraryHdwsetTable = false;
        libraryHardwareTable = false;
    });

    $('#detailedViewFilterBtn').click(function(){
        detailedView = true 
        baseTableView = false;
        sampleView = false ;
        thumbnailView = false ;
        libraryMainTable = false;
        libraryOpeningTable = false;
        libraryFrameTable = false;
        libraryDoorTable = false;
        libraryHdwsetTable == false;
        libraryHardwareTable = false; 
    });

    $('#ViewFilterOpeningFrameBtn').click(function(){
        libraryMainTable = true;
        detailedView = false ;
        baseTableView = false;
        sampleView = false ;
        thumbnailView = false ;
        libraryOpeningTable = false;
        libraryFrameTable = false;
        libraryDoorTable = false;
        libraryHdwsetTable = false;
        libraryHardwareTable = false; 
    });

    $('#ViewFilterOpeningBtn').click(function(){
        libraryOpeningTable = true;
        libraryMainTable = false;
        detailedView = false ;
        baseTableView = false;
        sampleView = false ;
        thumbnailView = false ;
        libraryFrameTable = false;
        libraryDoorTable = false;
        libraryHdwsetTable = false;
        libraryHardwareTable = false; 
    });

    $('#viewFilterFrameBtn').click(function(){
        libraryFrameTable = true;
        libraryOpeningTable = false;
        libraryMainTable = false;
        detailedView = false ;
        baseTableView = false;
        sampleView = false ;
        thumbnailView = false ;
        libraryDoorTable = false;
        libraryHdwsetTable = false;
        libraryHardwareTable = false; 
    });

    $('#viewFilterDoorBtn').click(function(){
        libraryDoorTable = true;
        libraryFrameTable = false;
        libraryOpeningTable = false;
        libraryMainTable = false;
        detailedView = false ;
        baseTableView = false;
        sampleView = false ;
        thumbnailView = false ;
        libraryHdwsetTable = false;
        libraryHardwareTable = false; 
    });

    $('#viewFilterhdwSetBtn').click(function(){
        libraryHdwsetTable = true;
        libraryDoorTable = true;
        libraryFrameTable = false;
        libraryOpeningTable = false;
        libraryMainTable = false;
        detailedView = false ;
        baseTableView = false;
        sampleView = false ;
        thumbnailView = false ;
        libraryHardwareTable = false; 
        libraryHardwareTable = false; 
    });

    $('#viewFilterhardwareBtn').click(function(){
        libraryHardwareTable = true; 
        libraryDoorTable = true;
        libraryFrameTable = false;
        libraryOpeningTable = false;
        libraryMainTable = false;
        detailedView = false ;
        baseTableView = false;
        sampleView = false ;
        thumbnailView = false ;
        libraryHdwsetTable = false;
    })


    $('#addCustomViewBtn').click(function(){
    if(thumbnailView == true ){
        var importviewlist = $('#importUserList').find('tr.active').children('td:nth-child(2)').text();
        $('#thumbnailViewFilterPopup').find('.view-name-list').append('<li data-attr-id="'+ importviewlist +'thumbnail">'+ importviewlist +'</li>')
    }
    if(sampleView == true){
        var importviewlist = $('#importUserList').find('tr.active').children('td:nth-child(2)').text();
        $('#ViewFilterPopup').find('.view-name-list').append('<li data-attr-id="'+ importviewlist +'Table">'+ importviewlist +'</li>')
    }
    if(baseTableView == true){
        var importviewlist = $('#importUserList').find('tr.active').children('td:nth-child(2)').text();
        $('#baseTableViewFltPopup').find('.view-name-list').append('<li data-attr-id="'+ importviewlist +'Table">'+ importviewlist +'</li>')
    }

    if(detailedView == true){
        var importviewlist = $('#importUserList').find('tr.active').children('td:nth-child(2)').text();
        $('#detailedViewFilterpopup').find('.view-name-list').append('<li data-attr-id="'+ importviewlist +'Table">'+ importviewlist +'</li>')
    }

    if(libraryMainTable == true){
        var importviewlist = $('#importUserList').find('tr.active').children('td:nth-child(2)').text();
        $('#ViewFilterOpeningFramePopup').find('.view-name-list').append('<li data-attr-id="'+ importviewlist +'Table">'+ importviewlist +'</li>')
    }

    if(libraryOpeningTable == true){
        var importviewlist = $('#importUserList').find('tr.active').children('td:nth-child(2)').text();
        $('#ViewFilterOpeningPopup').find('.view-name-list').append('<li data-attr-id="'+ importviewlist +'Table">'+ importviewlist +'</li>')
    }

    if(libraryFrameTable == true){
        var importviewlist = $('#importUserList').find('tr.active').children('td:nth-child(2)').text();
        $('#viewFilterFramePopup').find('.view-name-list').append('<li data-attr-id="'+ importviewlist +'Table">'+ importviewlist +'</li>')
    }

    if(libraryDoorTable == true){
        var importviewlist = $('#importUserList').find('tr.active').children('td:nth-child(2)').text();
        $('#viewFilterDoorPopup').find('.view-name-list').append('<li data-attr-id="'+ importviewlist +'Table">'+ importviewlist +'</li>')
    }

    if(libraryHdwsetTable == true){
        var importviewlist = $('#importUserList').find('tr.active').children('td:nth-child(2)').text();
        $('#viewFilterhdwSetPopup').find('.view-name-list').append('<li data-attr-id="'+ importviewlist +'Table">'+ importviewlist +'</li>')
    }

    if(libraryHardwareTable == true){
        var importviewlist = $('#importUserList').find('tr.active').children('td:nth-child(2)').text();
        $('#viewFilterhdwPopup').find('.view-name-list').append('<li data-attr-id="'+ importviewlist +'Table">'+ importviewlist +'</li>')
    }

    $('#importUserList').find('tr.active').removeClass('active');
  });
// For Views button Popup End

$(document).on('dblclick','.add-master-key-level span, .master-key-listing-bx .panel-heading span, .master-key-listing-bx .panel-collapse .panel-body span', function(){
  var editlblVal = $(this).text();
  $(this).after("<input type='text' class='data-text'>");
  $(this).parent().children('.data-text').val(editlblVal);
  $(this).parent().children('.data-text').focus();
  $(this).hide();
});
$(document).on('focusout', '.add-master-key-level label .data-text, .master-key-listing-bx .panel-heading .data-text, .master-key-listing-bx .panel-collapse .panel-body .data-text', function () {
  $(this).hide();
  var changelblVal = $(this).val();
  $(this).parent().children('span').text(changelblVal);
  $(this).parent().children('span').show();
});
$(document).on('change','.change-key-color',function(){
  var currentColor = $(this).val();
  $(this).parents('.add-change-key-btn').siblings('.master-key-listing-bx').find('.panel-heading').css('background',currentColor);
  $(this).parents('.add-change-key-btn').siblings('.master-key-listing-bx').find('.panel-body').css('background',currentColor);
});
  var settingCounter = 65;
  var mainHeading = {}; 

  var obj = {};
  obj[65] = 66;
  var countMK = 0;
  $('#addGrandMasterKey').click(function(){
    settingCounter++; 
    countMK++;
    obj[settingCounter] = 66;
    var newGMK = "<div class='master-key-level-bx'>\
                    <div class='col-md-12 no-padding'>\
                        <label class='master-key-level-label'><span class='edit-mk'>"+String.fromCharCode(settingCounter + i)+"</span></label>\
                        <img src='images/addMK.jpg' class='boximgthumbsize marginR10 marginL10 addMasterKey' data-attr-counter='0'>\
                        <img src='images/removeMK.jpg' class='boximgthumbsize removeMasterKey'>\
                        <input type='hidden' id='key' value='"+settingCounter+"'/>\
                    </div>\
                    <div class='marginT30 master-key-listing-container'>\
                        <div class='master-key-box'>\
                            <div class='col-md-8 no-padding master-key-listing-bx'>\
                                <div class='panel-group' id='accordionS"+countMK+"'>\
                                    <div class='panel panel-default'>\
                                        <div class='panel-heading'>\
                                            <h4 class='panel-title'>\
                                                <a class='allChildKey'>\
                                                <i class='more-less glyphicon glyphicon-chevron-down'></i>\
                                                </a>\
                                                <span>"+String.fromCharCode(settingCounter)+"A</span>\
                                            </h4>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class='col-md-2 no-padding add-change-key-btn marginL10'>\
                                <ul class='list-unstyled'>\
                                    <li><img src='images/addCK.jpg' class='boximgthumbsize marginB5 addChildKey'></li>\
                                    <li><img src='images/removeCK.jpg' class='boximgthumbsize removeChildKey'></li>\
                                    <li>\
                                        <input type='color' class='marginT5 change-key-color'>\
                                    </li>\
                                </ul>\
                              </div>\
                          </div>\
                        </div>\
                      </div> "
    // var GMKName = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] ;
    $('.master-key-level-container').append(newGMK);
  });

  var settingCounterMK = 65;
  $(document).on('click','.addMasterKey',function(){
    countMK++;
    var currentHeading = $(this).siblings('[id$="key"]').val();
    settingCounterMK++;
    var newMastrKey = "<div class='master-key-box'>\
                              <div class='col-md-8 no-padding master-key-listing-bx'>\
                                  <div class='panel-group' id='accordionS"+countMK+"'>\
                                      <div class='panel panel-default'>\
                                          <div class='panel-heading'>\
                                              <h4 class='panel-title'>\
                                                  <a class='allChildKey'>\
                                                  <i class='more-less glyphicon glyphicon-chevron-down'></i>\
                                                  </a>\
                                                  <span>"+$(this).siblings("label").children().html()+""+String.fromCharCode(obj[currentHeading])+"</span>\
                                              </h4>\
                                          </div>\
                                      </div>\
                                  </div>\
                              </div>\
                              <div class='col-md-2 no-padding add-change-key-btn marginL10'>\
                                  <ul class='list-unstyled'>\
                                      <li><img src='images/addCK.jpg' class='boximgthumbsize marginB5 addChildKey'></li>\
                                      <li><img src='images/removeCK.jpg' class='boximgthumbsize removeChildKey'></li>\
                                      <li>\
                                          <input type='color' class='marginT5 change-key-color'>\
                                      </li>\
                                  </ul>\
                              </div>\
                          </div>" 
    $(this).parents('.master-key-level-bx').children('.master-key-listing-container').append(newMastrKey) ;  
    obj[currentHeading] = obj[currentHeading] + 1;                                                
  });
  var countCK = 1;
  $(document).on('click','.addChildKey', function(){
    var counetrCK = $(this).parents('.add-change-key-btn').siblings('.master-key-listing-bx').find('.openingListtab').length+1;
    countCK++;
    var Childmasterkey ="<div class='panel-collapse openingListtab in'>\
                          <div class='panel-body'>\
                              <div class='panel-group' id='accordionT'>\
                                  <div class='panel'>\
                                      <a data-toggle='collapse' data-parent='#accordionT' href='#collapseTwoOne"+countCK+1+"'>\
                                          <i class='more-less glyphicon glyphicon-chevron-down'></i>\
                                      </a>\
                                      <span>"+$(this).parents('.add-change-key-btn').siblings('.master-key-listing-bx').find('h4').children('span').html()+""+counetrCK+"</span>\
                                      <div id='collapseTwoOne"+countCK+1+"' class='panel-collapse collapse'>\
                                          <div class='panel-body' style='border:0px !important;'>\
                                              <ul class='list-unstyled' style='margin:0;'>\
                                                  <li>101</li>\
                                                  <li>22</li>\
                                                  <li>47</li>\
                                                  <li>66</li>\
                                                  <li>84</li>\
                                              </ul>\
                                          </div>\
                                      </div>\
                                  </div>\
                              </div>\
                          </div>\
                      </div>"
    $(this).parents(".add-change-key-btn").siblings(".master-key-listing-bx").find(".panel-default").append(Childmasterkey);                                                             
  });

$(document).on('click','.allChildKey', function(){
    $(this).parents('.panel-heading').siblings('.openingListtab').toggle('slide');  
});  
$(document).on('click','.openingListtab span',function(){
  $(this).parents('.openingListtab').toggleClass('selectopeningkey');
});
$(document).on('click','.removeChildKey', function(){
  $(this).parents('.add-change-key-btn').siblings('.master-key-listing-bx').find('.selectopeningkey').remove();
});
$(document).on('click','.master-key-level-label span.edit-mk',function(){
  $(this).parents('.master-key-level-bx').toggleClass('slectMaster');
});
$(document).on('dblclick','.master-key-level-label span.edit-mk',function(){
  var editlblVal = $(this).text();
  $(this).after("<input type='text' class='data-text'>");
  $(this).parent().children('.data-text').val(editlblVal);
  $(this).parent().children('.data-text').focus();
  $(this).hide();
});
$(document).on('focusout', '.master-key-level-label .data-text', function () {
  $(this).hide();
  var changelblVal = $(this).val();
  $(this).parent().children('span.edit-mk').text(changelblVal);
  $(this).parent().children('span.edit-mk').show();
});
$(document).on('click','#removeGrandMasterKey',function(){
  $('.master-key-level-bx.slectMaster').remove();
});
$(document).on('click','.master-key-listing-bx .panel-heading span',function(){
  $(this).parents('.master-key-box').toggleClass('slectMK');
});
$(document).on('click','.removeMasterKey', function(){
  $(this).parents('.master-key-level-bx').find('.slectMK').remove();
}); 

function toggleIcon(e) {
  $(e.target)
    .prev('.panel-heading')
    .find(".more-less")
    .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
  $('.panel-group').on('hidden.bs.collapse', toggleIcon);
  $('.panel-group').on('shown.bs.collapse', toggleIcon);

  $('#createMasterKey').click(function () {
    $('.master-key-preview-section').hide();
    $('.master-key-create-area').show();
  });
  $('#4levelsystem img').click(function () {
    $('#masterKeySystem').modal('hide');
    $('#createMasterKeySystem').modal('show');
  });
  $(document).on('click', '#master-key-cancel', function () {
    $('#masterKeySystem').modal('show');
    $('#createMasterKeySystem').modal('hide');
  });
  $(document).on('click', '#master-key-done', function () {
    $('#createMasterKeySystem').modal('hide');
    window.location.reload();
  });

  var i = null;
  $('.create-final-estimate-btn').click(function () {

    var fullDate = new Date();
    var twoDigitMonth = ((fullDate.getMonth().length + 1) === 1) ? (fullDate.getMonth() + 1) : '0' + (fullDate.getMonth() + 1);
    var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
    var newNm = "Final Estimates" + i;
    newNm = newNm.replace(null, '');
    $('.project-change-data-table tbody').append("<tr class='data-row addedNRow'><td class='borderR'>" + newNm + "</td><td class='borderR'>Active</td><td class='borderR'>Final Estimates</td><td class='borderR'>Dawn</td><td class='borderR'>" + currentDate + "</td><td class='borderR'></td><td class='borderR'><a href='#' class='comparsion-point' title='Now'><span class='badge new marginR10'>C</span></a><a href=''#' class='comparsion-point' title='Before'><span  style='display: inline-block;' class='badge before marginR10'>B</span></a></td></tr>");
    i = i + 1;
    event.preventDefault();
  });

  $("#all-order-export-btn").click(function (e) {
    e.preventDefault();

    //getting data from our table
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('all-order-status-list');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'all_order_data' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();
  });
  $("#project-order-export-btn").click(function (e) {
    e.preventDefault();

    //getting data from our table
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('project-order-status-list');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'project_order_data' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();
  });

  /*---------------------*/
  /*Legends for Project Landing*/
  $(".legends li").click(function () {
    $(".legends li").removeClass("active-legend");
    $(this).addClass("active-legend");
    var section = $(this).attr("data-attr-section");
    $(".project-boxes").toggle();
    $(".project-boxes[data-attr-id='" + section + "']").show();
  });
  /*---------------------*/
  /*PO Buttons and Views*/
  $("#po-buttons a:not(.dropdown-toggle)").click(function () {
    $(".po-sections").hide();
    $("#po-sections div[id=" + $(this).attr("data-attr-id") + "]").show();
    $('#POseletedData').hide();
    $(".views > .custom-search-filter > tbody > tr.even-row").css("display", "none");
  });
  /*---------------------*/

  /*Expand All Rows*/
  $("button[data-attr-id='expandAll']").click(function () {
    $(".views > .custom-search-filter > tbody > tr.even-row").css("display", "table-row");
    $(".views > .custom-search-filter > tbody > tr.row-color").addClass("row-expanded");
    $(".views > .custom-search-filter > tbody > tr td button .fa").removeClass("fa-chevron-up").addClass("fa-chevron-down");
  });
  /*Expand All Rows*/
  /*collapse All Rows*/
  $("button[data-attr-id='collapseAll']").click(function () {
    $(".views > .custom-search-filter > tbody > tr.even-row").css("display", "none");
    $(".views > .custom-search-filter > tbody > tr.row-color").removeClass("row-expanded");
    $(".views > .custom-search-filter > tbody > tr td button .fa").removeClass("fa-chevron-down").addClass("fa-chevron-up");
  });
  /*collapse All Rows*/
  /*select the row*/
  $(".select-row").click(function () {
    if ($(this).parent("tr").hasClass("selected-row")) {
      $(this).parent("tr").removeClass("selected-row");

    } else {
      $("#estimating-home-table>tbody tr").removeClass("selected-row");
      $(this).parent("tr").addClass("selected-row");
    }

  });
  /*---------------------*/

  $('#orderGrid tbody tr').click(function () {
    $(this).toggleClass('active');
    $('#createPurchaseOrder').removeAttr('disabled');
  });
  $('#selectAllorders').click(function () {
    $('#orderGrid tbody tr').addClass('active');
  });
  $('#unSelectAllorders').click(function () {
    $('#orderGrid tbody tr').removeClass('active');
  });

  $('.btn-bar').hide();
  $(".order-history-detail-bx").click(function () {
    if ($(this).hasClass("selctedBX")) {
      $(this).removeClass("selctedBX");
    } else {
      $(".order-history-detail-bx").removeClass("selctedBX");
      $(this).addClass("selctedBX");
    }
  });
  /*Order status change view*/

  $("#orderPlaced").click(function () {
    if ($(".order-history-detail-bx.selctedBX").length == 0) {
      alert("Please Select Order");
      $(".po-sections").hide();
    } else if ($(".active-order-bx").hasClass("selctedBX")) {
      $(this).attr("data-attr-id", "active-order");
      $(".po-sections").hide();
      $("#active-order").show();
    } else if ($(".order").hasClass("selctedBX")) {
      $(this).attr("data-attr-id", "order");
      $(".po-sections").hide();
      $("#order").show();
    } else {
      $(".po-sections").hide();
      alert("Please Select Pemko PO 4000");
    }
  });

  /*-------------------------*/
  $('#pemkoData').click(function () {
    // $(this).toggleClass('selctedBX');
    $('#edit').hide();
    $('.btn-bar').hide();
    if ($(this).hasClass('selctedBX')) {
      $('#edit').show();
      $("#order, #ordering, #select-order-status, #project-order-status, #all-order-status, #select-order-summary, #project-order-summary, #all-order-summary, #preview, #active-order").hide();
    }
  });

  $("#po-buttons a#orderEdit").click(function () {
    //var test = $('.selctedBX').length;

    if ($('#pemkoData.selctedBX').length == 0) {
      alert('Please select Order Type');
      $(".po-sections").hide();
    } else {
      // $('#pemkoData').toggleClass('selctedBX');
      var orderPOno = $('#pemkoData .detail-head span.edit-label').html();
      $('.POnumber').val(orderPOno);
      $('.btn-bar').show();
      var total = 0;
      $('.totalcost').each(function () {
        total += parseInt($(this).attr("data-attr-val"));
        $(".total-cost").html("$" + total);
      });
      $("#edit").show();
      // $('#pemkoData').addClass('selctedBX');
    }
    /*
        else{
            alert('Please select Order Type');
            $(".po-sections").hide();
        } */
  });
  $(".pemko").click(function () {
    if ($(".order-history-detail-bx.selctedBX").length == 0) {
      alert("Please Select  Order");
      $(".po-sections").hide();
    } else if ($(".order").hasClass("selctedBX")) {
      var currentSection = $(this).attr("data-attr-id");
      $(".po-sections").hide();
      $("div[id='" + currentSection + "']").show();
    }

  });
  $('#createPurchaseOrder').click(function () {

    if ($('#orderGrid tbody tr.active').length == 0) {
      alert('Please select at least one record');
    } else {
      var vendorList = Array();
      var vendorNamelist = Array();
      $('#orderGrid tbody tr.active td[data-type="vendorName"]').each(function (i) {
        vendorNamelist[i] = $(this).html();
      });
      var dataShow;
      $('.order-history-detail-bx h3 span').each(function (i) {
        vendorList[i] = $(this).html();

        dataShow = vendorList.filter(function (value) {
          return $.inArray(value, vendorNamelist) === -1 ? false : true;
        });
        if (dataShow.length > 0) {
          $('#createPurchaseorderpopup').modal('show');
        }
      });

      if (dataShow.length <= 0) {
        var dataAppend = $("<div class='col-md-12 order-history-detail-bx preparing-order-bx' style='display:block;'><div class='detail-head col-md-12 no-padding'>Curries</h3><div class='col-md-6 pull-right text-right'>PO: <span class='edit-label'>2211</span></div></div><div class='col-md-12 no-padding order-item-list'><div class='col-md-4 order-items paddingL0'>12 Items</div><div class='col-md-4 order-number'>#</div><div class='col-md-4 order-cost text-right paddingR0'>$3,244.56</div></div></div>");
        $(dataAppend).insertAfter('.this-project .order-history-detail-bx:last-child');

      }

      $('#createPurchaseorderpopup .purchaseOrderPO').each(function (e) {
        $(this).hide();
        for (i = 0; i <= vendorNamelist.length; i++) {
          if ($(this).attr('data-type') == vendorNamelist[i]) {
            $(this).show();
          }
        }
      });
      $(document).on('click', '#createPurchaseorderpopup #pemko', function () {
        //$('#createPurchaseorderpopup .order-history-detail-bx').removeClass('selctedBX');
        $(this).toggleClass('selctedBX');
      });

      var addCount = 0;
      $(document).on('click', '.purchaseOrderPO #addToOrder', function () {
        addCount++;
        var vendorNameID = $(this).parent().parent().children('.col-md-9').children('.selctedBX').children('.detail-head').children('h3').children('span').html();
        var rowAppend = $("<tr><td class='borderR'>HS-11</td><td class='borderR'>21</td><td class='borderR'>OT-1</td><td class='borderR'>1</td><td class='borderR'>" + vendorNameID + "</td><td class='borderR'>PDL US26D/15</td><td class='borderR'>Privacy Latch</td><td class='borderR'>$30.00</td><td>$30.00</td></tr>")
        $(rowAppend).insertAfter('table.preview-existing-order tbody tr:last-child');
      });
      $(document).on('click', '#existingOrderDone', function () {
        $('#orderGrid tbody tr').removeClass('active');
        var currentItems = $('#thisProject #pemkoData .order-item-list .order-items span').html()
        $('#thisProject #pemkoData .order-item-list .order-items span').html(parseInt(currentItems) + parseInt(addCount));

      });
    }

  });

  $('#editPOdata tbody tr').click(function () {
    $(this).toggleClass('active');
  });
  $('#removePOdata').click(function () {
    $('#editPOdata tbody tr.active').remove();
  });
  $('#movePodata').click(function () {
    if ($('#editPOdata tbody tr.active').length == 0) {
      alert('Please Select Purchase Order');
    } else {
      $('#movePOdata').modal('show');
    }
  });
  $('#movePOdatalist .order-history-detail-bx').click(function () {
    $('#movePOdatalist .order-history-detail-bx').removeClass('selctedBX');
    $(this).addClass('selctedBX');
  });
  $('#movePODone').click(function () {
    var slectedDataLength = $('#editPOdata tbody tr.active').length;
    //console.log(slectedDataLength);
    var slectedVendorName = $('#movePOdatalist .preparing-order-bx.selctedBX').attr('data-attr-type');
    console.log(slectedDataLength);
    var currentvendorItem = $('#thisProject .order-history-detail-bx[data-attr-type="' + slectedVendorName + '"] .order-item-list .order-items span').html();
    var finaVendoritem = $(parseInt(currentvendorItem) + parseInt(slectedDataLength));
    $('#thisProject .order-history-detail-bx[data-attr-type="' + slectedVendorName + '"] .order-item-list .order-items span').html(parseInt(currentvendorItem) + parseInt(slectedDataLength));
    var currentItems = $('#pemkoData .order-item-list .order-items span').html();
    $('#thisProject #pemkoData .order-item-list .order-items span').html(parseInt(currentItems) - parseInt(slectedDataLength));
    //var finalt = $(currentItems - slectedDataLength);
    //console.log(finalt);
    $('#movePOdatalist .order-history-detail-bx[data-attr-type="' + slectedVendorName + '"] .order-item-list .order-items span').html(parseInt(currentvendorItem) + parseInt(slectedDataLength));
    $('#editPOdata tbody tr.active').remove();
  });
 
  $('.project-order-history-btn .btn').click(function () {
    $(this).toggleClass('active');
    var currentId = $(this).attr('data-attr-type');
    // console.log(currentId)
    $('.order-history-detail-bx.' + currentId + '').toggle();
  });
 
  $(document).on('click', '.hardware-set-id-table tr td', function () {
    // $('.hardware-set-id-table tr td').removeClass('active');
    $(this).toggleClass('active');
     
    // var selectedID = $(this).children('span').html();
    // $('.hardware-set-no h4 span').empty();
    // $('.hardware-set-no h4 span').append(selectedID);
    // $('#hardwaresetIDList').modal('hide');
  });
  $("#close-hardware-set-id").click(function(){
    $(".add-hardware-sets").empty();
    $('#hardwaresetIDList').modal('hide');
    var hardwareValues =[];
    $('.hardware-set-id-table tr td.active').each(function(){
      hardwareValues.push($(this).attr('data-attr-value'));
    });
    var totalSets = hardwareValues.length;
    for(i=0;i<= totalSets-1;i++){
      $(".add-hardware-sets").append("<div class='col-md-12 hardware-set-no marginB15 inline-elements'><span>Hardware Set: "+hardwareValues[i]+"</span>\
      <button class='btn btn-primary btn-icon' data-toggle='modal' data-target='#openingsizeList'>Opening Size</button><input type='text' Placeholder='Width' \
      class='form-control hdwopeningWidth' /><input type='text' Placeholder='Height' class='form-control hdwopeningHeight' /><label class='checkbox-inline data-toggle-label'\
      style='width:70px;'><div class='toggle btn btn-primary' data-toggle='toggle' style='width: 0px; height: 0px;'><input type='checkbox' checked='' \
      data-toggle='toggle' data-on='Single' data-off='Pair'><div class='toggle-group'><label class='btn btn-primary toggle-on'>Single</label><label\
      class='btn btn-default active toggle-off'>Pair</label><span class='toggle-handle btn btn-default'></span></div></div></label><label class='checkbox-inline\
      data-toggle-label marginL0'><div class='toggle btn btn-primary' data-toggle='toggle' style='width: 0px; height: 0px;'><input type='checkbox' checked=''\
      data-toggle='toggle'><div class='toggle-group'><label class='btn btn-primary toggle-on'>On</label><label class='btn btn-default active toggle-off'>\
      Off</label><span class='toggle-handle btn btn-default'></span></div></div><label class='text-primary'>Auto Dimensions</label></label></div>" )
    }
  });
  $(document).on('click', '.fwd-hdw-id', function () {
    var hardwareID = $('.hardware-set-no h4 span').html();
    hardwareID++;
    $('.hardware-set-no h4 span').html(hardwareID);
    $('#putHardwareSets .block-list .table tbody tr').removeClass('active');
    $('.hardware-list-selected-data .table tbody').empty();
  });
  $(document).on('click', '.back-hdw-id', function () {
    var hardwareID = $('.hardware-set-no h4 span').html();
    hardwareID--;
    $('.hardware-set-no h4 span').html(hardwareID);
    $('#putHardwareSets .block-list .table tbody tr').removeClass('active');
    $('.hardware-list-selected-data .table tbody').empty();
  });
  $(document).on('click', '#putHardwareSets .block-list .table tbody tr', function () {
    $(this).toggleClass('active');
    var Hdwtype = $(this).parent().parent().parent().parent().children('.block-head').children('h2').children('span').html();
    var HdwDescription = $(this).children('td[data-type="Description"]').html();
    //var HdwQty = $("");
    var Hdwmnf = $(this).children('td[data-type="mnf"]').html();
    var Hdwmdbtn = $(this).children('td[data-type="collbtn"]').html();; //console.log(trClassName);
    if ($(this).hasClass('active')) {
      $('.hardware-list-selected-data .table tbody.hardware-set-no-tbody').append('<tr class="accordion-active"><td>' + Hdwmdbtn + '</td><td>' + Hdwtype + '</td><td>' + HdwDescription + '</td><td>' + '<input type="text" class="form-control" />' + '</td><td>' + Hdwmnf + '</td></tr>');
    };
    if ($(this).hasClass('accordion-active')) {
      var accordinTR = $(this).next('tr.accordionTr').clone();
      $(accordinTR).insertAfter('.hardware-list-selected-data .table tbody.hardware-set-no-tbody tr.accordion-active:last-child');
      $('tr.accordionTr td:nth-child(2)').attr('colspan', '4');
    };
  });

  $(document).on('click', '.door-sizes-list-table tr td', function () {
    $('.door-sizes-list-table tr td').removeClass('active');
    $(this).addClass('active');
    var doorWidth = $(this).children('span.doorWidth').html();
    var doorheight = $(this).children('span.doorHeight').html();
    $('.data-filetrs-btn-list .hdwopeningWidth').val(doorWidth);
    $('.data-filetrs-btn-list .hdwopeningHeight').val(doorheight);
    $('#openingsizeList').modal('hide');
  });
  $(document).on('click', '.hardware-list-selected-data tr', function () {
    $(this).toggleClass('active');
    $('#putHardwareSets .block-list .table tbody tr').removeClass('active');
  });
  $(document).on('click', '#trashHdwData', function () {
    $('.hardware-list-selected-data tr.active').remove();
  });
  $(document).on('click', '#trashHwdSetData', function () {
    $('#putHardwareSets .block-list .table tbody tr.active').remove();
  });
  $(document).on('click', '#selectAllHwdSetData', function () {
    $('#putHardwareSets .block-list .table tbody tr').addClass('active');
  });
  $(document).on('click', '#UnselectAllHwdSetData', function () {
    $('#putHardwareSets .block-list .table tbody tr').removeClass('active');
  });
  $(document).on('click', '#pullHdwLibrarypage, #dataSearch', function () {
    $('#SearchHDWlibraryPage').modal('show');
  });
  $(document).on('click', '#collpseHardwareblock', function () {
    $('.hardware-block').find('.block-list').slideUp();
  });

  $(document).on('click', '#expandHardwareblock', function () {
    $('.hardware-block').find('.block-list').slideDown();
  });

  $(document).on('click', '.multiSelecttoggle > tbody > tr', function () {
    $(this).toggleClass('active');
  });

  $(document).on('click', '.singleSelecttoggle > tbody > tr', function () {
    $('.singleSelecttoggle > tbody > tr').removeClass('active');
    $(this).toggleClass('active');
  });

  $(document).on('click', '.singleSelectTd > tbody > tr > td', function () {
    if ($(this).html() != '&nbsp;') {
      $('.singleSelectTd > tbody > tr > td').removeClass('active');
      $(this).toggleClass('active');
    }
  });
  var selectedStatus
  $('.statusChangeLink').click(function (e) {
    //console.log(arguments[0]);
    selectedStatus = $(e.currentTarget);
  });

  $('#statusChangeDoneBtn').click(function () {
    var updatedStatus = $('#statusChangeList').find('tbody tr td.active').text();
    if (updatedStatus != '') {
      $(selectedStatus).text(updatedStatus);
      $('#statusChangeList').find('tbody tr td').removeClass('active');
    }
  });

  $('#primaryStatusChangeBtn').click(function () {
    selectedStatus = $(this);
  });

  $('#changeCalender').click(function () {
    $('#calenderContainer').find('.box-header h3').text($('#calenderList tr.active').text());
  });

  $('#viewUserCalender').click(function () {
    $("#calenderContainer .fc-view-container .fc-day-grid .fc-row:nth-child(1)  .fc-content-skeleton table tbody tr td:nth-child(5)").addClass('fc-event-container');
    var rr = '<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end "><div class="fc-content"> <span class="fc-title">Cruz, Lerry : <br />Meeting with,<br />  Allen George</span></div></a>';
    $(".fc-view-container .fc-day-grid .fc-row:nth-child(1)  .fc-content-skeleton table tbody tr td:nth-child(5)").append(rr);

    $("#calenderContainer .fc-view-container .fc-day-grid .fc-row:nth-child(2)  .fc-content-skeleton table tbody tr td:nth-child(5)").addClass('fc-event-container');
    var rr = '<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end "><div class="fc-content"> <span class="fc-title">Cruz, Lerry : <br />Meeting with,<br />  Saurabh Verma</span></div></a>';
    $(".fc-view-container .fc-day-grid .fc-row:nth-child(2)  .fc-content-skeleton table tbody tr td:nth-child(5)").append(rr);

  });

  // Project Landing Page
  $('.grid-pro-detail').click(function () {
    $('.card-view-detail').hide();
    $('.grid-view-detail').show();
  });
  $('.card-pro-detail').click(function () {
    $('.card-view-detail').show();
    $('.grid-view-detail').hide();
  });
  $(document).on('click', '.filter-proj-data td', function () {
    $(this).toggleClass('active');
    /*
        console.log($(this).data('type'));
        console.log($('.project-data ul li').data('type'));*/
  });
  $(document).on('click', '.show-views', function () {
    var dataType = [];
    var dataView = [];
    $('.filter-proj-data td.active').each(function (i, v) {
      dataView[i] = $(this).data('type');
    });
    $('.project-data ul li').each(function (i, v) {
      $('.project-data ul li[data-type="' + dataView[i] + '"]').show();
    });
    $('.filter-proj-data td').removeClass('active');
    // console.log(dataView);
  });

  $('.project-detail-bx h3, .project-detail-bx .project-data').click(function () {
    $(this).parent('.project-detail-bx').toggleClass('select-bx').removeClass("unselect-bx");
    $('.open-current-project').removeAttr('disabled');
  });
  $('.hide-card').click(function () {
    $('.select-bx').parent('div').hide();
  });
  $('#showhidden-card').change(function () {
    if ($(this).prop('checked')) {
      $('.select-bx').parent('div').hide();

    } else {
      $('.select-bx').parent('div').show();
    }
  });
  $('.change-numbers').click(function () {
    var currentProjectName = $(this).parent().parent().children('h3').html();
    $('.current-project-name').text(currentProjectName);
  });

  //Tags popup

  $('.tags-filter-and, .tags-filter-or').click(function () {
    $('.material-data-table').hide(600);
    $('.material-data-table').show(200);
  });

  $('.add-tags-grid tr td').click(function () {
    $(this).toggleClass('active');
  });
  $('.tags-filter-grid tr td').click(function () {
    $(this).toggleClass('active');
  });
  $('.add-selected-tags').click(function () {
    $('.add-tags-grid tr td').removeClass('active');
  });

  //Tags Grid    
  var counter = 0;
  var row;
  /*$('.Add-new-tag').click(function(){ 
        counter++;       
        var newtagVal = $('.insert-tag').val();
        console.log(counter);
        if(counter == 1){
            $('<tr><td class="borderR">'+newtagVal+'</td></tr>').insertBefore('.tags-grid tbody tr:first-child');
        }
        else if(counter == 6){
            $('<tr><td class="borderR">'+newtagVal+'</td></tr>').insertBefore('.tags-grid tbody tr:first-child');
        }
        else if(counter >= 5){
            counter = 0;
            $('.tags-grid tbody tr:first-child').append('<td class="borderR">'+newtagVal+'</td>');
        }
        else{
            $('.tags-grid tbody tr:first-child').append('<td class="borderR">'+newtagVal+'</td>');
        }
        $('.insert-tag').val('');
    });*/
  $('.add-new-tag-1').focusout(function () {
    var tagName = $(this).val();
    //$('<tr className="newRow"><td class="borderR">'+tagName+'</td></tr>').insertBefore('.tags-grid tbody tr:nth-child(2)');
    var newRowNO = $('.tags-grid tbody tr:nth-child(2) td').length;
    if (newRowNO == 5) {
      $('<tr className="newRow"><td class="borderR">' + tagName + '</td></tr>').insertBefore('.tags-grid tbody tr:nth-child(2)');
    } else if (newRowNO < 5) {
      $('.tags-grid tbody tr:nth-child(2)').append('<td class="borderR">' + tagName + '</td>');
    }
    $(this).val('');
  });

  $('.tags-grid .select-tag').click(function () {
    $(this).parent('tr').toggleClass('active');
    $('.tags-btn-list .export-tags').removeAttr('disabled');
  });
  $('.tags-grid td').dblclick(function () {
    var tagName = $(this).children('span').html();
    $(this).append("<input type='text' class='tags-text'>");
    $(this).children('.tags-text').val(tagName);
    $(this).children('.tags-text').focus();
    $(this).children('span').hide();
    $(this).removeClass('active');
  });
  $(document).on('focusout', '.tags-grid .tags-text', function () {
    $(this).hide();
    var changetagName = $(this).val();
    $(this).parent().children('span').text(changetagName);
    $(this).parent().children('span').show();
  });
  $('.tags-grid tr.mainHead').click(function () {
    $(this).removeClass('active');
  });
  $(document).on('click', '.tags-grid tr td', function () {
    $(this).toggleClass('active');
    $('.tags-btn-list .export-tags').removeAttr('disabled');
  });
  $(document).on('click', '.tags-grid tr.add-tag-row td', function () {
    $(this).removeClass('active');
  });
  $('.delete-tags').click(function () {
    $('.tags-grid tr td.active').remove();

  });
  //live-chat-option
  $(document).on('click', '.live-chat-option', function () {
    $('.live-chat-form').show('slow');
    $(this).hide('slow');
  });
  $(document).on('click', '.live-chat-form h3 .close-chat', function () {
    $('.live-chat-form').hide('slow');
    $('.live-chat-option').show('slow');
  });
  $(document).on('click', '.live-chat-form h3 .minimize-chat', function () {
    $('.live-chat-form form').toggle('slow');
  });

  //Hardware List
  $('.libraries-list-row').click(function () {
    var librariesName = $(this).children('td[data-type="name"]').html();
    $('.libraries-heading').empty();
    $('.libraries-heading').append(librariesName);
    $('.material-data-container').show();
    $('.hardware-data-container').hide();
    $('.libraries-group-container').show();
  });

  $('.hardware-list-row').click(function () {
    $('.material-data-container').hide();
    $('.hardware-data-container').show();
    $('.libraries-group-container, .exit-devices-container, .lock-sets-container, .closers-hardware-container, .hings-hardware-container, .bolts-hardware-container, .thresholds-hardware-container, .sweeps-hardware-container, .gasketing-hardware-container, .cylinders-hardware-container, .astragals-hardware-container, .stops-hardware-container').hide();
    $('.libraries-group-container').show();
  });
  $('.hardware-data-container .btn').click(function () {
    $('.hardware-data-container .btn').removeClass('btn-primary');
    $(this).addClass('btn-primary');
  });
  $('.exit-devices').click(function () {
    $('.exit-devices-container').show();
    $('.libraries-group-container, .lock-sets-container, .closers-hardware-container, .kick-plates-container, .hings-hardware-container, .bolts-hardware-container, .thresholds-hardware-container, .sweeps-hardware-container, .gasketing-hardware-container, .cylinders-hardware-container, .astragals-hardware-container, .stops-hardware-container').hide();
  });
  $('.lock-sets').click(function () {
    $('.lock-sets-container').show();
    $('.libraries-group-container, .exit-devices-container, .closers-hardware-container, .kick-plates-container, .hings-hardware-container, .bolts-hardware-container, .thresholds-hardware-container, .sweeps-hardware-container, .gasketing-hardware-container, .cylinders-hardware-container, .astragals-hardware-container, .stops-hardware-container').hide();
  });
  $('.closers-hardware').click(function () {
    $('.closers-hardware-container').show();
    $('.libraries-group-container, .exit-devices-container, .lock-sets-container, .kick-plates-container, .hings-hardware-container, .bolts-hardware-container, .thresholds-hardware-container, .sweeps-hardware-container, .gasketing-hardware-container, .cylinders-hardware-container, .astragals-hardware-container, .stops-hardware-container').hide();
  });
  $('.kick-plates').click(function () {
    $('.kick-plates-container').show();
    $('.libraries-group-container, .exit-devices-container, .lock-sets-container, .closers-hardware-container, .hings-hardware-container, .bolts-hardware-container, .thresholds-hardware-container, .sweeps-hardware-container, .gasketing-hardware-container, .cylinders-hardware-container, .astragals-hardware-container, .stops-hardware-container').hide();
  });
  $('.hings-hardware').click(function () {
    $('.hings-hardware-container').show();
    $('.libraries-group-container, .exit-devices-container, .lock-sets-container, .closers-hardware-container, .kick-plates-container, .bolts-hardware-container, .thresholds-hardware-container, .sweeps-hardware-container, .gasketing-hardware-container, .cylinders-hardware-container, .astragals-hardware-container, .stops-hardware-container').hide();
  });
  $('.bolts-hardware').click(function () {
    $('.bolts-hardware-container').show();
    $('.libraries-group-container, .exit-devices-container, .lock-sets-container, .closers-hardware-container, .hings-hardware-container, .kick-plates-container, .thresholds-hardware-container, .sweeps-hardware-container, .gasketing-hardware-container, .cylinders-hardware-container, .astragals-hardware-container, .stops-hardware-container').hide();
  });
  $('.thresholds-hardware').click(function () {
    $('.thresholds-hardware-container').show();
    $('.libraries-group-container, .exit-devices-container, .lock-sets-container, .closers-hardware-container, .hings-hardware-container, .bolts-hardware-container, .kick-plates-container, .sweeps-hardware-container, .gasketing-hardware-container, .cylinders-hardware-container, .astragals-hardware-container, .stops-hardware-container').hide();
  });
  $('.sweeps-hardware').click(function () {
    $('.sweeps-hardware-container').show();
    $('.libraries-group-container, .exit-devices-container, .lock-sets-container, .closers-hardware-container, .hings-hardware-container, .bolts-hardware-container, .thresholds-hardware-container, .kick-plates-container, .gasketing-hardware-container, .cylinders-hardware-container, .astragals-hardware-container, .stops-hardware-container').hide();
  });
  $('.gasketing-hardware').click(function () {
    $('.gasketing-hardware-container').show();
    $('.libraries-group-container, .exit-devices-container, .lock-sets-container, .closers-hardware-container, .hings-hardware-container, .bolts-hardware-container, .thresholds-hardware-container, .sweeps-hardware-container, .kick-plates-container, .cylinders-hardware-container, .astragals-hardware-container, .stops-hardware-container').hide();
  });
  $('.cylinders-hardware').click(function () {
    $('.cylinders-hardware-container').show();
    $('.libraries-group-container, .exit-devices-container, .lock-sets-container, .closers-hardware-container, .hings-hardware-container, .bolts-hardware-container, .thresholds-hardware-container, .sweeps-hardware-container, .gasketing-hardware-container, .kick-plates-container, .astragals-hardware-container, .stops-hardware-container').hide();
  });
  $('.astragals-hardware').click(function () {
    $('.astragals-hardware-container').show();
    $('.libraries-group-container, .exit-devices-container, .lock-sets-container, .closers-hardware-container, .hings-hardware-container, .bolts-hardware-container, .thresholds-hardware-container, .sweeps-hardware-container, .gasketing-hardware-container, .cylinders-hardware-container, .kick-plates-container, .stops-hardware-container').hide();
  });
  $('.stops-hardware').click(function () {
    $('.stops-hardware-container').show();
    $('.libraries-group-container, .exit-devices-container, .lock-sets-container, .closers-hardware-container, .hings-hardware-container, .bolts-hardware-container, .thresholds-hardware-container, .sweeps-hardware-container, .gasketing-hardware-container, .cylinders-hardware-container, .astragals-hardware-container, .kick-plates-container').hide();
  });

  //Assign Libraries

  $('.libraries-opening-tab-list li a').click(function (e) {
    var gettabTar = $(this).attr('aria-controls');
    $('#allTypesCard').hide();

    if ($(this).parent('li').hasClass('active') == true && $(this).hasClass('toggleAdd') == true) {
      $('#allTypesCard').hide();
      $(this).removeClass('toggleAdd');
      $("#" + gettabTar).addClass('active');
    } else if ($(this).parent('li').hasClass('active') == true) {
      $(this).addClass('toggleAdd');
      $("#" + gettabTar).removeClass('active');
      $('#allTypesCard').show();
    } else if ($(this).parent('li').hasClass('active') !== true) {
      $(this).removeClass('toggleAdd');
      $("#" + gettabTar).addClass('active');
    }
  });

  $('.libraries-item-container h4 span.opening-name').hover(function () {
    var cardName = $(this).html();
    $(this).attr("title", cardName);
  });

  $('.libraries-item-container h4').click(function () {
    $(this).parent().toggleClass('selected-card');
  });
  $('.select-all-card').click(function () {
    $(this).parent().parent().children('.libraries-group-container').children().children('.libraries-item-container').toggleClass('selected-card');
    $(this).parent().parent().children('.libraries-group-container').children().children().children('.hardware-set-box').toggleClass('active');
  });
  $('.list-view-btn').click(function () {
    $(this).addClass('active');
    $(this).parent().children('.grid-view-btn').removeClass('active');
    $(this).parent().parent().children('.libraries-group-container').hide();
    $(this).parent().parent().children('.libraries-list-view').show();
  });

  $('.grid-view-btn').click(function () {
    $(this).addClass('active');
    $(this).parent().children('.list-view-btn').removeClass('active');
    $(this).parent().parent().children('.libraries-group-container').show();
    $(this).parent().parent().children('.libraries-list-view').hide();
  });

  $('a.assign-libraries').click(function () {
    $('.libraries-item-container').removeClass('active');
    $('.unassign-close-icon').hide();
  });

  $('a.assign-btn').click(function () {
    $('.hardware-set-box ul li').removeClass('active');
    $('.hardware-set-box').removeClass('active');
    $('.unassign-hardware-btn').hide();
  });
  $('.hardware-set-box ul li').click(function () {
    $(this).toggleClass('active');
  });
  $('.hardware-set-box .hardware-heading-container h4').click(function () {
    $(this).parent().parent().toggleClass('active');
    //$(this).parent().children('.unassign-hardware-btn').show();
    $(this).parent().parent().parent().children().children('ul').children('li').removeClass('active');
  });
  $('.unassign-hardware-btn').click(function () {
    $(this).parent().parent().removeClass('active');
    $(this).hide();
  });
  /*Card Click Function*/
   $(document).on('click', '.edit-label', function () {
    var editlblVal = $(this).text();
    $(this).after("<input type='text' class='data-text'>");
    $(this).parent().children('.data-text').val(editlblVal);
    $(this).parent().children('.data-text').focus();
    $(this).hide();
  });
  $(document).on('focusout', '.data-text', function () {
    $(this).hide();
    var changelblVal = $(this).val();
    $(this).parent().children('span.edit-label').text(changelblVal);
    $(this).parent().children('span.edit-label').show();
  });
  $('.edit-value').click(function () {
    var editlblVal = $(this).text();
    $(this).after("<input type='text' class='data-value'>");
    $(this).parent().children('.data-value').val(editlblVal);
    $(this).parent().children('.data-value').focus();
    $(this).hide();
  });
  $(document).on('focusout', '.data-value', function () {
    $(this).hide();
    var changelblVal = $(this).val();
    $(this).parent().children('span.edit-value').text(changelblVal);
    $(this).parent().children('span.edit-value').show();
  });
  $('.expand-card').click(function () {
    $(this).parent().parent().parent().parent().toggleClass('card-overlay');
    $(this).parent().parent().parent('.libraries-item-container').toggleClass('expand-card');
    $(this).toggleClass('fa-compress');
  });
  /*Card Click Function*/
  $('.unassign-close-icon').click(function () {
    $(this).parent().removeClass('active');
    $(this).hide();
  });
  $('.share-user-drpdwn-btn').click(function () {
    $(this).toggleClass('open');
    $('.share-user-name').toggle();
  });
  $('.share-user-name ul li').click(function () {
    $(this).addClass('active');
  });
  $('.share-done-btn').click(function () {
    $('.share-user-name').toggle();
    $('.share-user-name ul li').removeClass('active');
    $('.share-user-drpdwn-btn').toggleClass('open');
  });

  $(document).on('click', '.id-unassign', function () {
    var idnumber = $(this).parent().children('span.idNumber').html();
    idnumber++;
    $(this).parent().children('span.idNumber').html(idnumber * 2);
  });
  $(document).on('click', '.unassign-table', function () {
    var unassignTable = $(this).parent('th').data('type');
    $('.group-list-table-container table tr td[data-type="' + unassignTable + '"] table tr td').hide();
  });
  /*Add New Group*/
  $(document).on('click', '.group-list-btn', function () {
    $(this).toggleClass('open');
    $('.group-list-item').toggle();
  });
  $(document).on('click', '.group-list-item ul li.group-item', function () {
    $('.group-list-item ul li.group-item').removeClass('active');
    $(this).addClass('active');
    var selectGroupname = $('.group-list-item ul li.group-item.active').html();
    var groupnameDataType = selectGroupname.replace(/ /g, '');
    var selctedGroupType = $('.group-list-item ul li.group-item.active').data('type');
    $('.group-list-item').toggle();
    $('.group-list-btn').removeClass('open');
    $('.group-list-btn').children('span').remove();
    $('.group-list-btn span.selected-group-name').append(selectGroupname);
    $('.group-list-btn').append('<span data-type=' + groupnameDataType + '>' + selectGroupname + '</span>');
  });

  $(document).on('click', '.add-new-group', function () {
    var newGroupName = $('.new-group-name').val();
    var newGroupNameID = newGroupName.replace(/ /g, '');
    $('.new-group-name').val('');
    $('.group-list-item ul').append("<li data-type=" + newGroupNameID + " class='group-item'>" + newGroupName + "</li>")
  });

  $(document).on('click', '.group-opening-id-list li ul li', function () {
    $(this).toggleClass('active');
    $('.assign-group-id').removeAttr('disabled')

  });
  $(document).on('click', '.assign-group-id', function () {
    var assignGroupName = $('.group-list-btn span').data('type');
    $('.group-opening-id-list li ul li').removeClass('active');
    // console.log(assignGroupName);
    $('.group-list-table-container table td, .group-list-table-container table th').hide();
    $('.group-list-table-container table tr td[data-type="' + assignGroupName + '"], .group-list-table-container table tr th[data-type="' + assignGroupName + '"], .group-list-table-container table tr td[data-type="' + assignGroupName + '"] table tr td').show();
  });
  $(document).on('click', '.multiple-group-list-btn', function () {
    $(this).toggleClass('open');
    $('.multiple-group-list-item').toggle();
  });
  $(document).on('click', '.multiple-group-list-item ul li.group-item', function () {
    $(this).toggleClass('active');
    var multiplegroup = $(this).data('type');
    $('.group-list-table-container table tr td[data-type="' + multiplegroup + '"], .group-list-table-container table tr th[data-type="' + multiplegroup + '"], .group-list-table-container table tr td[data-type="' + multiplegroup + '"] table tr td').toggle();
  });

  $('.change-record').click(function () {
    $(this).children('i').toggleClass('fa-chevron-up fa-chevron-down');
    $(this).parent().next().toggle();
  });
  $('.changes-status-row').click(function () {
    $(this).removeClass('selected-row');
  });
  $('.status-inner-row').click(function () {
    $(this).addClass('selected-row');
  });

  $(document).on('click', '.browse', function () {
    var file = $(this).parent().parent().parent().find('.file');
    file.trigger('click');
  });
  $(document).on('change', '.file', function () {
    $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
  });

  //Change Status Table Data        
  $(function () {
    $('#datetimepicker1').datepicker({}).on('changeDate', function (e) {
      $(this).datepicker('hide');
      var changeNumber = $('.change-value').val();
      var descriptionData = $('.description').val();
      var ownerName = $('.owner').val();
      var startDate = $('.start-date').val();
      $('.form-text').val('');
      /*if(changeNumber === 'estimates'){
                   $("<tr class='data-row estimated-row'><td class='borderR' data-type='change-number'>"+ changeNumber +"</td><td class='borderR status' data-type='status'>Active</td><td class='borderR'>"+ descriptionData  + "</td><td class='borderR' data-type='owner-name'>"+ ownerName +"</td><td class='borderR'data-type='start-date'>"+startDate+"</td><td class='borderR' data-type='commit-date'></td><td class='borderR' data-type='compare-change'><a href='#' class='comparsion-point' title='Start'><span class='badge start' style='display:inline-block'><i class='fa fa-arrow-circle-right'></i></span></a><a href='#' class='comparsion-point' title='Committed'><span class='badge committed'><i class='fa fa-check-circle'></i></span></a><a href='#' class='comparsion-point' title='Before'><span class='badge before' style='display:inline-block'><i class='fa fa-mail-reply'></i></span></a><a href='#' class='comparsion-point' title='After'><span class='badge after'><i class='fa fa-mail-forward'></i></span></a></td></tr>").insertAfter('.
                    tr.current-row');
                     $('.commit-change').removeAttr('disabled');                  
                }
                else{
                $(".project-change-data-table").append("<tr class='data-row'><td class='borderR' data-type='change-number'>"+ changeNumber +"</td><td class='borderR status' data-type='status'>Open</td><td class='borderR'>"+ descriptionData  + "</td><td class='borderR' data-type='owner-name'>"+ ownerName +"</td><td class='borderR'data-type='start-date'>"+startDate+"</td><td class='borderR' data-type='commit-date'></td><td class='borderR' data-type='compare-change'><a href='#' class='comparsion-point' title='Start'><span class='badge start'><i class='fa fa-arrow-circle-right'></i></span></a><a href='#' class='comparsion-point' title='Committed'><span class='badge committed'><i class='fa fa-check-circle'></i></span></a><a href='#' class='comparsion-point' title='Before'><span class='badge before'><i class='fa fa-mail-reply'></i></span></a><a href='#' class='comparsion-point' title='After'><span class='badge after'><i class='fa fa-mail-forward'></i></span></a></td></tr>");
                }*/
      $(".project-change-data-table").append("<tr class='data-row'><td class='borderR' data-type='change-number'>" + changeNumber + "</td><td class='borderR status' data-type='status'>Open</td><td class='borderR'>" + descriptionData + "</td><td class='borderR' data-type='owner-name'>" + ownerName + "</td><td class='borderR'data-type='start-date'>" + startDate + "</td><td class='borderR' data-type='commit-date'></td><td class='borderR' data-type='compare-change'><a href='#' class='comparsion-point' title='Start'><span class='badge start'><i class='fa fa-arrow-circle-right'></i></span></a><a href='#' class='comparsion-point' title='Committed'><span class='badge committed'><i class='fa fa-check-circle'></i></span></a><a href='#' class='comparsion-point' title='Before'><span class='badge before'><i class='fa fa-mail-reply'></i></span></a><a href='#' class='comparsion-point' title='After'><span class='badge after'><i class='fa fa-mail-forward'></i></span></a></td></tr>");
      $('.project-change-data-table tr.add-data').hide();
    });
  });
  $(document).on('click', 'tr.current-row a.comparsion-point', function () {
    $(this).toggleClass('selection');
    $(this).children('span').toggleClass('add-selection');
  });
  $(document).on('click', 'tr.data-row a.comparsion-point, tr.active-row a.comparsion-point', function () {
    $('tr.data-row a.comparsion-point, tr.active-row a.comparsion-point').removeClass('selection');
    $('tr.data-row a.comparsion-point, tr.active-row a.comparsion-point').children('span').removeClass('add-selection');
    $(this).addClass('selection');
    $(this).children('span').addClass('add-selection');
  });

  $(document).on('click', 'a.comparsion-point', function () {
    var selectionTime = $('.project-change-data-table a.comparsion-point.selection').length;
    // console.log(selectionTime);
    if (selectionTime === 2) {
      $('.compare-change').prop("disabled", false);
    } else if (selectionTime === 1) {
      $('.compare-change').prop("disabled", true);
    }
  });

  /*if($('.project-change-data-table a.comparsion-point').hasClass('selection').length == 2){
        alert('2');

    }*/

  $('.form-text').click(function () {
    $('.project-change-data-table tr.data-row').removeClass('active-row');
  });

  $('.drop-change').click(function () {
    var statusValue = $('.project-change-data-table tr.active-row td[data-type="status"]').text();
    // console.log(statusValue);
    if (statusValue === 'Open') {
      $('#dropData').modal('hide');
      $('.project-change-data-table tr.active-row').remove();
    } else {
      $('#dropData').modal('show');
    }
  });
  $('.drop-done').click(function () {
    $('#dropData').modal('hide');
    $('.project-change-data-table tr.active-row').remove();
  });

  $(document).on('click', '.project-change-data-table tr.data-row, .project-change-data-table tr.current-row', function () {
    $('.project-change-data-table tr.data-row, .project-change-data-table tr.current-row').removeClass('active-row');
    $(this).addClass('active-row');
    $('.start-new-change').removeAttr('disabled');
  });
  $('.start-new-change').click(function () {
    $(".project-change-data-table tr.active-row td[data-type='status']").empty();
    $(".project-change-data-table tr.active-row td[data-type='status']").append('Active');
    $('.project-change-data-table tr.active-row a.comparsion-point .start, .project-change-data-table tr.active-row a.comparsion-point .before').css('display', 'inline-block');
    $('.commit-change').removeAttr('disabled');
    $('.project-change-data-table tr.add-data').show();
  });

  $('.commit-done').click(function () {
    $('#commitData').modal('hide');
    var fullDate = new Date();
    var twoDigitMonth = ((fullDate.getMonth().length + 1) === 1) ? (fullDate.getMonth() + 1) : '0' + (fullDate.getMonth() + 1);
    var currentDate = fullDate.getDate() + "-" + twoDigitMonth + "-" + fullDate.getFullYear();
    $(".project-change-data-table tr.active-row td[data-type='commit-date']").append(currentDate);
    $('.project-change-data-table tr.active-row td[data-type="status"]').empty();
    $('.project-change-data-table tr.active-row td[data-type="status"]').append('Commit');
    $('.project-change-data-table tr.active-row a.comparsion-point .committed, .project-change-data-table tr.active-row a.comparsion-point .after').css('display', 'inline-block');
    $('.project-change-data-table tr.active-row').prop("disabled", true).css('color', '#636161');
    $('.commit-change').attr('disabled', 'disabled');
    $('.start-new-change').attr('disabled', 'disabled');
    $('.project-change-data-table tr').removeClass('active-row');

    //console.log(formattedtodaydate);

  });

  $(document).on('click', '.browse-pdf', function () {
    $('.scan-pdf').removeAttr('disabled');
  });
  $(document).on('click', '.scan-pdf', function () {
    $('.opeingListTable').show();
  });
  $(document).on('click', '#project-ID-table tr', function () {
    $('#project-ID-table tr').removeClass('active');
    $(this).addClass('active');
    $('.project-copy').removeAttr('disabled');
  });
  $(document).on('click', '.import-scan-id', function () {
    $('.IDlist-grid').hide();
    $('.IDlist-grid').show('slow');
  });
  $(document).on('click', '#openingIDstable tr', function () {
    $('#project-ID-table tr').removeClass('active');
    $(this).addClass('active');
  });
  $(document).on('click', '.select-all-scan-item', function () {
    if ($(this).is(":checked")) {
      $('#openingIDstable tr').addClass('active');
    } else {
      $('#openingIDstable tr').removeClass('active');
    }
  });

  // Only Container Scroll
  var windowHeight = $(window).height();
  var headerHeight = $('header').height();
  var navHeight = $('#ribbonMenuBar').height();
  var footerHeight = $('footer').height();
  var contentContainerHeight = (windowHeight - (headerHeight + navHeight + footerHeight));
  $('.content-container').css('height', contentContainerHeight - 191);

  // libraries page script

  $(document).on('click', '.libraries-list-table tr', function () {
    $('.libraries-list-table tr').removeClass('active');
    $(this).addClass('active');
    $('.libraries-list-table tr.pr-add-row').removeClass('active');
  });
  $('.delete-btn-pr').click(function () {
    $('.libraries-list-table tr.active').hide();
  });
  $('.prj-category').focusout(function () {
    var projectName = $(this).parent().parent().children('td').children('.prj-name').val();
    var projectDescription = $(this).parent().parent().children('td').children('.prj-description').val();
    var projectCategory = $(this).val();
    var insertTabledata = $(this).parent().parent().parent().children('tr.pr-add-row');
    //console.log(insertTabledata);
    $('.valName-lib').val('');
    $('<tr><td class="borderR">' + projectName + '</td><td class="borderR">' + projectDescription + '</td><td class="borderR">' + projectCategory + '</td></tr>').insertAfter(insertTabledata);
  });

  //get opening data in Opening panel

  $('.filter-btn-list .btn').click(function () {
    var btnclassName = $(this).text();
    var btnclassName = btnclassName.replace('(', '');
    var btnclassName = btnclassName.replace(')', '');
    var btnclassName = btnclassName.replace(/ /g, '');
    $(this).addClass(btnclassName);
    $(".material-data-table tbody tr[data-type=" + btnclassName + "]").each(function () {
      $(".material-data-table tbody tr").hide();
      $(this).toggleClass('filterOpen');
      var filterRow = $('.filterOpen').length;
      if (filterRow == 0) {
        $(".material-data-table tbody tr").show();
      }
    });
  });
  /***********Start 24/07/2017 project opening page code*************/

  $('.left-collsapse').click(function () {
    $('.projects-left-data').toggleClass('hide');
    $(this).toggleClass('position');
    $(this).children('i').toggleClass('fa-angle-double-right');
    $('.projects-right-contanier').toggleClass('col-lg-12');
  });
  $('.expand-opening-grid .collapse-grid-img').hide();
  $('.expand-opening-grid').click(function () {
    var expandHeight = $(window).height();
    $('.expand-opening-grid .collapse-grid-img').toggle();
    $('.expand-opening-grid .expand-grid-img').toggle();
    $('#expendCollapse').toggleClass('expaned-grid');
    // $('.grid-container').css({'min-height': '100px', 'height' : expandHeight - 350});
    $(this).toggleClass('position');
    $(this).children().toggleClass('fa-compress');
  });
  $(window).resize(function () {
    var expandHeight = $(window).height();
    //$('.grid-container').css({'min-height': '100px', 'height' : expandHeight - 350});
  });
  // $('.material-data-table td').dblclick(function(){
  //      var lastValue = $(this).html();
  //      $(this).html('');
  //      $(this).append('<input type="text" class="material-value" value="'+lastValue+'" >');
  //      $('.material-value').css('color', '#000000');
  //      $('.material-value').focus();
  // });
  var arr = [];

  $(document).on('focusout', '.material-value', function () {
    var updateValue = $(this).val();
    $(this).parent('td').html(updateValue);
  });
  $('.material-data-table td').click(function () {
    var slectedCell = $(this).data('value');
    $('.material-data-table td').removeClass('currentCell');
    $(this).addClass('currentCell');
    //$('.material-cell-data td[data-value="'+slectedCell+'"]').show();        
    $('.material-cell-data td').each(function () {
      $(this).hide();
      if ($(this).data('value') == slectedCell) {
        $(this).show();
      }
    })
  });
  $(document).on("focus", '.material-data-table tbody td', function () {
    var slectedCell = $(this).attr("data-value");
    $('.material-data-table td').removeClass('currentCell');
    $(this).addClass('currentCell');
    $('.material-cell-data td').each(function () {
      $(this).hide();
      if ($(this).data('value') == slectedCell) {
        $(this).show();
      }
    })
  });

  $('.material-cell-data td').click(function () {
    // debugger;
    $('.material-cell-data td').removeClass('active');
    $(this).addClass('active');
    var updateData = $(this).html();
    $('.material-data-table td.currentCell').empty();
    $('.material-data-table td.currentCell input').val("");
    $('.material-data-table td.currentCell').append(updateData);
  });

  /***********End 24/07/2017 project opening page code*************/

  $('.door-filter-row .btn').click(function () {
    $(this).find('span.close i').toggleClass('fa-check-circle');

  });
  $('.material-data-table tr').dblclick(function (e) {
    //  var test = $(this).children("td").map(function() {
    //  return $(this).text();
    //  }).get();
    // var i = 0;
    $(this).addClass("editable-row");

    $(this).children("td:not('.input-col')").each(function (i) {

      // var tableData = $(this).map(function() {
      //     var textVal = $(this).text();

      //     console.log(valNew);
      // }).get();

      var textVal = $(this).text();
      var width = $(this).width();
      var newTextVal = "";
      if ($(this).hasClass("data-split")) {
        var arr = textVal.split('\"');
        for (var i = 0; i < arr.length; i++) {
          newTextVal = newTextVal + arr[i]
        }
        console.log(newTextVal);
      } else {
        newTextVal = textVal;
      }

      textVal.replace(/["]/g, '&quot;');
      // str.replace("\"", "\\""); 
      //$(this).html("<input  style='width:"+width+"px !important' value='"+textVal+"' type='text'/>");
      $(this).html('<input  style="width:' + width + 'px !important" value="' + newTextVal + '" type="text"/>');
      // }

    });

    e.stopPropagation();
    // var lastValue = $(this).html();
    // $(this).html('');
    // $(this).append('<input type="text" class="material-value" value="'+lastValue+'" >');
    // $('.material-value').css('color', '#000000');
    // $('.material-value').focus();
  });
  $(document).on('click', function () {
    $(".material-data-table tr.editable-row").children("td:not('.input-col')").each(function (i) {
      var textVal = $(this).find("input").val();
      $(this).html(textVal);
    });
  });
  $('.material-data-table tbody tr').click(function () {
    /*Get Opening type value*/
    $('.material-data-table tbody tr').removeClass('active-row');
    $(this).addClass('active-row');
    //$('.openings-container .opening-prd').css('display', 'block');
    var openingValue = Array();
    var openingList = $('ul.opening-value-list');
    var parent = openingList.parent();
    $(".material-data-table tbody tr.active-row td:visible[data-type='openingTypeID']").each(function (i) {
      openingValue[i] = $(this).text();

    });
    /*Frame Opening type value*/
    var frameValue = Array();
    var frameList = $('ul.frame-value-list');
    var frameparent = frameList.parent();
    $(".material-data-table tbody tr.active-row td:visible[data-type='frameTypeID']").each(function (j) {
      frameValue[j] = $(this).text();
    });

    /*Doors Opening type value*/
    var doorValue = Array();
    var doorList = $('ul.door-value-list');
    var doorparent = doorList.parent();
    $(".material-data-table tr.active-row td:visible[data-type='doorTypeID']").each(function (k) {
      doorValue[k] = $(this).text();
    });
    $(".main-heading").html(openingValue[0]);
    $(".opening-value-list .opening1").html(openingValue[3] + "X" + openingValue[4]);
    $(".opening-value-list .opening2").html(openingValue[9] + "/" + openingValue[10]);
    $(".opening-value-list .opening3").html(openingValue[2]);
    $(".opening-value-list .opening4").html(openingValue[8]);
    $(".opening-value-list .opening5").html(openingValue[18]);
    $(".opening-value-list .opening6").html(openingValue[19]);
    $(".opening-value-list .opening7").html(openingValue[7]);
    // openingList.empty('li').each(function(i){            
    // for (var x = 0; x < openingValue.length; x++){ 
    //     $(this).append('<li>' + openingValue[x] + '</li>');
    //         if (x == openingValue.length - 1){
    //             $(this).appendTo(parent);
    //         }
    //     }
    // }); 
    $(".frame-value-list .frame1").html(frameValue[1]);
    $(".frame-value-list .frame2").html(frameValue[6]);
    $(".frame-value-list .frame3").html(frameValue[7]);
    $(".frame-value-list .frame4").html(frameValue[8]);
    $(".frame-value-list .frame5").html(frameValue[9]);
    $(".frame-value-list .frame6").html(frameValue[10]);
    $(".frame-value-list .frame7").html(frameValue[11]);
    $(".frame-value-list .frame8").html(frameValue[12]);
    $(".frame-value-list .frame9").html(frameValue[13]);
    $(".frame-value-list .frame10").html(frameValue[14]);
    $(".frame-value-list .frame11").html(frameValue[15]);
    $(".frame-value-list .frame12").html(frameValue[17]);
    // frameList.empty().each(function(j){
    // for (var y = 0; y < frameValue.length; y++){
    //         $(this).append('<li>' + frameValue[y] + '</li>');
    //         if (y == frameValue.length - 1){
    //             $(this).appendTo(frameparent);
    //         }
    //     }
    // });
    $(".door-value-list .door1").html(doorValue[1]);
    $(".door-value-list .door2").html(doorValue[5]);
    $(".door-value-list .door3").html(doorValue[6]);
    $(".door-value-list .door4").html(doorValue[7]);
    $(".door-value-list .door5").html(doorValue[8]);
    $(".door-value-list .door6").html(doorValue[9]);
    $(".door-value-list .door7").html(doorValue[10]);
    $(".door-value-list .door8").html(doorValue[11]);
    $(".door-value-list .door9").html(doorValue[12]);
    $(".door-value-list .door10").html(doorValue[13]);
    $(".door-value-list .door11").html(doorValue[14]);
    $(".door-value-list .door12").html(doorValue[15]);
    $(".door-value-list .door13").html(doorValue[22]);
    $(".door-value-list .door14").html(doorValue[23]);
    // doorList.empty().each(function(k){
    // for (var z = 0; z < doorValue.length; z++){
    //         $(this).append('<li>' + doorValue[z] + '</li>');
    //         if (z == doorValue.length - 1){
    //             $(this).appendTo(doorparent);
    //         }
    //     }
    // });

    // if($(".material-data-table tr").hasClass("editable-row")){
    //     var tagNumberImg = $('.material-data-table tr.active-row td[data-value="tagNumber"] input').val();
    // }
    // else{

    // }
    var tagNumberImg = $('.material-data-table tr.active-row td[data-value="tagNumber"]').html();
    $('.projects-left-data .opening-row img').each(function () {
      $(this).hide();
      if ($(this).attr('alt') == tagNumberImg) {
        $(this).show();
      }

    });

  });

  $("#assignPOArea .onoffswitch").each(function () {
    $(this).click(function () {
      $(this).find(":input").addClass('inp-checked');
    });
  });
  $(".Hhtab").click(function () {

    $("#selectHisOpt").removeClass('hide');
    $("#selectHisOpt2").addClass('hide');
  });

  $(".Mhtab").click(function () {

    $("#selectHisOpt").addClass('hide');
    $("#selectHisOpt2").removeClass('hide');
  });

  /*-------- my list  grid script ------------------ */
  $("#myLists thead tr th").click(function () {
    $("#myLists thead tr th span").removeClass('hidden');
    $("#myLists thead tr th input").addClass('hidden');
    var txtVal = $(this).find('span').addClass('hidden');
    var txtVal = $(this).find('input').removeClass('hidden');
    var txtVal = $(this).find('input').focus();
  });
  $("#myLists thead tr th input").blur(function () {
    $("#myLists thead tr th span").removeClass('hidden');
    $("#myLists thead tr th input").addClass('hidden');
  });
  $(".dropdown-menu li a").click(function () {
    $(".btntxt").text($(this).text());
  });
  $('#myLists tbody tr').click(function () {
    $('#myLists tbody tr').removeClass('selected-row');
    $(this).addClass('selected-row');
    $(".ListinfoTable").fadeOut(300);
    $(".ListinfoTable").fadeIn(100);
  });
  //        $('#myType tbody tr').click(function () {
  //        $('#myType tbody tr').removeClass('selected-row');
  //        $(this).addClass('selected-row');
  //        $(".framedoorForms").fadeOut(300);
  //        $(".framedoorForms").fadeIn(100);
  //    });
  //
  //    
  //    $("#formClns").click(function(){
  //        $("#frameForm").find('input').val('');
  //        $("#doorForm").find('input').val('');
  //        $(".framedoorForms").fadeOut();
  //        $(".framedoorForms").fadeIn();
  //    });
  /* ----- dragbar funtionality ---- */

  var dragging = false;
  $('#dragbar').mousedown(function (e) {
    e.preventDefault();
    dragging = true;
    var main = $('#panDiv');
    var tab = $('#nestedTable');
    var posMain = main.offset().top;
    var dragbar = $("#dragbar");
    var cont = $("#pbDiv");
    var ghostbar = $('<div>', {
      id: 'ghostbar',
      css: {
        height: dragbar.outerHeight(),
        width: dragbar.outerWidth(),
        top: main.offset().top,
        bottom: main.offset().bottom
      }
    }).appendTo('cont');
    $(document).mousemove(function (e) {
      ghostbar.css("top", e.pageY + 2 - posMain);
    });
  });
  $(document).mouseup(function (e) {
    var tabHei = $('#nestedTable').outerHeight();
    var posMain = $('#panDiv').offset().top;
    if (dragging) {
      $('#nestedTable').css("height", tabHei + e.pageY + 2 - posMain);
      $('#panDiv').css("top", e.pageY + 2);
      $('#ghostbar').remove();
      $(document).unbind('mousemove');
      dragging = false;
    }
  });
  /* ------------- drag - drop---------------------------------------------------
     
     $("#panDiv").on('mousedown', 'div.pform', function () {
     $(this).addClass('draggable').parents().on('mousemove', function (e) {
     
     $('.draggable').offset({
     top: e.pageY - $('.draggable').outerHeight() / 2,
     left: e.pageX - $('.draggable').outerWidth() / 2
     }).on('mouseup', function () {
     $(this).removeClass('draggable');
     });
     });
     
     }).on('mouseup', function () {
     $('.draggable').removeClass('draggable');
     });
     
     -------------------------------------------------------- */

  $("#newPfcBtn").click(function () {
    var $inputs = $('.createForm input');
    $inputs.each(function () {
      $(this).val($(this).attr('data-type'));
    });
  });

  /*===============================================================*/

  // For Sidebar Collapsable
  $('.expandBtn').hide();
  $('.collapseBtn').click(function () {
    $('.sidebar').animate({
      marginLeft: '-16.666%',
      width: '0'
    });
    $(this).parent().addClass("collapse-sidebar-section");
    $('.contentCollapsable').animate({
      width: '100%'
    });
    $(this).hide();
    $('.expandBtn').show();
  });
  $('.expandBtn').click(function () {
    $('.sidebar').animate({
      marginLeft: '0',
      width: '16.666%'
    });
    $(this).parent().removeClass("collapse-sidebar-section");
    $('.contentCollapsable').animate({
      width: '83.33333333%'
    });
    $(this).hide();
    $('.collapseBtn').show();
  });

  // For Estimation Page Tabs
  $('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  // For Estimation Content Collapse 
  $('.expandleftBtn').hide();
  $('.collapseleftBtn').click(function () {

    var rightPanelDisplayNone = false;
    $(this).hide();
    $('.expandleftBtn').show();
    $('.pos-leftpushbuttons').css('left', '16px').css('top', '0');
    $('.leftGridArea').hide();
    var exprightvisibility = $('.expandrightBtn').css('display');
    if (exprightvisibility == 'none')
      $('.centerGridArea').css({
        width: '74.6%',
        paddingLeft: '30px'
      });
    else
      $('.centerGridArea').css({
        width: '100%',
        paddingLeft: '30px'
      });
  });
  $('.expandleftBtn').click(function () {

    var rightPanelDisplayNone = false;
    $(this).hide();
    $('.collapseleftBtn').show();
    $('.pos-leftpushbuttons').css('left', '-38px');
    $('.leftGridArea').show();
    var exprightvisibility = $('.expandrightBtn').css('display');
    if (exprightvisibility == 'none')
      $('.centerGridArea').css({
        width: '41.66666667%',
        paddingLeft: '15px'
      });
    else
      $('.centerGridArea').css({
        width: '66.66666667%',
        paddingLeft: '15px'
      });
  });
  $('.expandrightBtn').hide();
  $('.collapserightBtn').click(function () {

    var leftPanelDisplayNone = false;
    $(this).hide();
    $('.expandrightBtn').show();
    $('.pos-rightpushbuttons').css('right', '16px').css('top', '0');
    $('.rightGridArea').hide();
    var exprightvisibility = $('.expandleftBtn').css('display');
    if (exprightvisibility == 'none')
      $('.centerGridArea').css({
        width: '66.66666667%'
      });
    else
      $('.centerGridArea').css({
        width: '100%'
      });
  });
  $('.expandrightBtn').click(function () {
    $(this).hide();
    $('.collapserightBtn').show();
    $('.pos-rightpushbuttons').css('right', '-38px');
    $('.rightGridArea').show();
    var exprightvisibility = $('.expandleftBtn').css('display');
    if (exprightvisibility == 'none')
      $('.centerGridArea').css({
        width: '41.66666667%'
      });
    else
      $('.centerGridArea').css({
        width: '74.6%'
      });
  });
  $('.protech-radio').click(function () {
    switch ($('input[name=importType]:checked').val()) {
      case 'PRO-TECH':
        location.href = 'uploadSuccessfully.html';
        break;
      case 'Spreadsheet - Tag Order':
        location.href = 'spreadsheet-tag-order.html';
        break;
    }
  });
  /**Show And hide for modify user details */
  $('#modify-user-details-form').hide();
  // $('#modify-user-show-details').click(function(){
  //     if($('input[name=modify-selected-user]:checked').val()){
  //         $('#modify-user-details-form').show();
  //     }
  // });
  $('input[name=modify-selected-user]').change(function () {
    if ($('input[name=modify-selected-user]:checked').val()) {
      $('#modify-user-details-form').show();
    }
  })

  /**Show And hide for disable user details */
  $('#disable-user-details-form').hide();
  // $('#disable-user-show-details').click(function(){
  //     if($('input[name=disable-selected-user]:checked').val()){
  //         $('#disable-user-details-form').show();
  //     }
  // });
  $('input[name=disable-selected-user]').change(function () {
    if ($('input[name=disable-selected-user]:checked').val()) {
      $('#disable-user-details-form').show();
    }
  })

  $('#disable-user-action').click(function () {
    var confirmAction = confirm('Are you sure you want to disable the user?');
    if (confirmAction) { }
  })

  // Alert Msg
  $('#errormsg,#successmsg').hide();
  //Progress Bar
  $('.pricebookmsg').hide();
  $('.showprogress').click(function () {
    var animatedWidth = $('.progress-bar').animate({
      width: '100%',
    }, 5000, "linear", function () {
      $('#progressBarwindow, .modal-backdrop').fadeOut();
      $('.pricebookmsg').fadeIn();
      setTimeout(function () {
        $('.pricebookmsg').fadeOut();
      }, 5000)
    });
  });
  $('#toggleBtn').removeClass('collapsetable');
  $(document).on('click', '.expandtable', function () {
    $(this).removeClass('expandtable');
    $(this).addClass('collapsetable');
    $(this).children('i').removeClass('glyphicon-resize-full');
    $(this).children('i').addClass('glyphicon-resize-small');
    $('#centerArea').hide();
    $('.leftArea').animate({
      width: '100%'
    }, 0);
    $('.moveBtn').hide();
  });
  $(document).on('click', '.collapsetable', function () {
    $(this).removeClass('collapsetable');
    $(this).addClass('expandtable');
    $(this).children('i').removeClass('glyphicon-resize-small');
    $(this).children('i').addClass('glyphicon-resize-full');
    $('#centerArea').show();
    $('.leftArea').css('width', '41.66666667%');
    $('.moveBtn').show();
  });
  $('.pdfIcon').click(function () {
    $('.pdfArea').show();
    $('.wholeLeftArea').removeClass('col-md-12').addClass('col-md-9');
  });
  $('#toggleBtnPDF').removeClass('collapsetablePDF');
  $('.pdfArea').hide();
  $(document).on('click', '.expandtablePDF', function () {
    $(this).removeClass('expandtablePDF');
    $(this).addClass('collapsetablePDF');
    $(this).children('i').removeClass('glyphicon-resize-full');
    $(this).children('i').addClass('glyphicon-resize-small');
    $('.wholeLeftArea').removeClass('col-md-9').addClass('col-md-12');
    $('.pdfArea').hide();
  });
  $(document).on('click', '.collapsetablePDF', function () {
    $(this).removeClass('collapsetablePDF');
    $(this).addClass('expandtablePDF');
    $(this).children('i').removeClass('glyphicon-resize-small');
    $(this).children('i').addClass('glyphicon-resize-full');
    $('.wholeLeftArea').removeClass('col-md-12').addClass('col-md-9');
    $('.pdfArea').show();
  });
  $('#toggleBtnBottom').removeClass('collapsetableBottom');
  $(document).on('click', '.expandtableBottom', function () {
    $(this).removeClass('expandtableBottom');
    $(this).addClass('collapsetableBottom');
    $(this).children('i').removeClass('glyphicon-resize-full');
    $(this).children('i').addClass('glyphicon-resize-small');
    $('.heightResizeTable').hide();
    $('.topgridarea .table-wrap').css('height', '265px');
    $('.bottomtGridArea .table-wrap').css('height', '215px');
    $('#centerArea .table-wrap').css('height', '530px');
  });
  $(document).on('click', '.collapsetableBottom', function () {
    $(this).removeClass('collapsetableBottom');
    $(this).addClass('expandtableBottom');
    $(this).children('i').removeClass('glyphicon-resize-small');
    $(this).children('i').addClass('glyphicon-resize-full');
    $('.topgridarea .table-wrap').css('height', '179px');
    $('.bottomtGridArea .table-wrap').css('height', '150px');
    $('#centerArea .table-wrap').css('height', '368px');
    $('.heightResizeTable').show();
  });
  $('#toggleBtnLeftTable').removeClass('collapsetableLeftTable');
  $(document).on('click', '.expandtableLeftTable', function () {
    $(this).removeClass('expandtableLeftTable');
    $(this).addClass('collapsetableLeftTable');
    $(this).children('i').removeClass('glyphicon-resize-full');
    $(this).children('i').addClass('glyphicon-resize-small');
    $('.leftArea').hide();
    $('#centerArea').animate({
      width: '100%'
    }, 0);
    $('#centerArea > div.row').css('margin-left', '-15px');
    $('.moveBtn').hide();
  });
  $(document).on('click', '.collapsetableLeftTable', function () {
    $(this).removeClass('collapsetableLeftTable');
    $(this).addClass('expandtableLeftTable');
    $(this).children('i').removeClass('glyphicon-resize-small');
    $(this).children('i').addClass('glyphicon-resize-full');
    $('.leftArea').show();
    $('#centerArea').css('width', '58.33333333%');
    $('#centerArea > div.row').css('margin-left', '30px');
    $('.moveBtn').show();
  });
  // For Revision 

  $('#addRevsion').click(function () {

    var addRowRevsion = "<tr><td>&nbsp;</td> <td><input type='checkbox' onclick='selectAll(this)' /></td><td><input type='text' class='form-control' /></td><td><input type='text' class='form-control' /></td><td><input type='text' class='form-control' /></td><td><input type='text' class='form-control' /></td><td><input type='text' class='form-control' /></td><td><input type='text' class='form-control' /></td><td><input type='text' class='form-control' /></td></tr>";
    $(addRowRevsion).appendTo($('#revisionTable tbody'));
  });
  $('#deleteRevision').click(function (e) {

    $("#revisionTable tbody tr").each(function () {
      //if ($(this).find("input[type='checkbox']").prop("checked")) {
      //        $(this).remove();
      //    }

      if ($(this).find("input.approved").prop("checked")) {
        $('#errorMsg').show();
        setTimeout(function () {
          $('#errorMsg').hide();
        }, 5000);
      }

      if ($(this).find("input").not('.approved').prop("checked")) {
        $(this).remove();
      }

    });
    return
    //        if ($('#revisionTable thead th input').is(':checked') || $('#revisionTable tbody tr input').is(':checked')) {
    //            $('#revisionTable tbody tr:last-child').remove();
    //
    //            if ($('#revisionTable thead th input').is(':checked')) {
    //                $('#revisionTable tbody tr').remove();
    //            }
    //        }

  });
  $('#masterHardwarecostTable td').click(function (id) {
    if (!$(this).find('input').length) {
      $(this).empty().append('<input type="text" class="edittext" value="' + $(this).text() + '" style="width:90%;" />');
      $('.edittext').focus();
    }
    $(document).on('blur', '.edittext', function (e) {
      var value = $(this).val();
      $(this).parent('td').text(value);
    })
  });
  $('.transfervendor li a').click(function () {
    var text = $(this).children('.vendorName').text();
    $('.columnselectmenu .appendtext').text(text);
  });
  // For Login with Admin
  $('#submitButton').click(function () {
    //        window.location.href = "landingPage.html";
    //        return;
    if ($('#usernamelogin').val() == "admin" && $('#passwordlogin').val() == "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "landingPage.html";
    }
  });

  // For Forget Password with Admin
  $('#submitemail').click(function () {
    window.location.href = "Login.html";
  });
  //Detailing Material
  $('.popoverDetails').hide();
  $('.frameTypeName').hover(function () {
    // var offset = $('.frameTypeName').offset();
    //$('.popoverDetails').css("left: " + offset.left + ", top: " + offset.top);
    $('.popoverDetails').show();
  }, function () {
    $('.popoverDetails').hide();
  });
  $('#popoverData').popover();
  $('[data-toggle=popover]').popover({
    content: $('#popoverContent').html(),
    html: true
  }).click(function () {
    $(this).popover('show');
  });
  $('.frameTypeName').click(function () {
    var val = $(this).text();
    $(this).parent().append('<select><option selected >' + val + '</option><option></option><option></option><option></option></select>')
    $(this).text('');
  });
  $('.tableRowSelection tbody tr').click(function () { //var rowIndex = $(this).index();
    //alert($(this).closest('tbody').html())
  });
  //create hardware set moving data
  $('#moveMasterSetBtn').click(function () {
    var _addedArr = [];
    //check whether any checkbox is checked
    $('#master-set tbody tr td:first-child input:checked').each(function (index, val) {
      //selcted value
      var $this = this;
      $("#centerTable > tbody").prepend($("#centerTable > tbody > tr:first-child").clone());
      $(this).closest('tr').find('td').each(function () {
        var $copiedTd = $(this);
        if ($(this).data('type')) {
          $("#centerTable  > tbody > tr:first-child td").each(function (index, _val) {
            var $modifyingTd = $(this);
            if ($copiedTd.data('type') == $modifyingTd.data('type')) {
              $modifyingTd.empty().html($copiedTd.html())
            }
          });
        }
      }).promise().done(function () {
        //after all value has been copied then process the child table data

        if ($('#subSetTable tbody tr td:first-child input:checkbox:checked').length) {
          var $firstRow = $("#centerTable > tbody > tr:first-child");
          $("#centerTable > tbody > tr:first-child td:first-child button").removeClass('invisible');
          var $childTable = $($('#subSetTableData').html());
          $firstRow.after($childTable);
          $('#subSetTable tbody tr td:first-child input:checkbox:checked').each(function (index, val) {
            var $subsetCopyTable = $($(this).closest('tr').clone());
            $subsetCopyTable.children('td:first-child').remove();
            $childTable.find('tbody').append($subsetCopyTable);
          });
        } else {
          $("#centerTable > tbody > tr:first-child td:first-child button").removeClass('invisible').addClass('invisible');
        }

      });
      //transition animation
      _addedArr.push($("#centerTable tbody tr:first-child").addClass('table-head'));
    }).promise().done(function () {
      setTimeout(function () {
        $(_addedArr).each(function (index, val) {
          $(this).removeClass('table-head');
        })
      }, 1000);
    })
  });
  $('#flipMasterSetBtn').click(function () {

    var _addedArr = [];
    //check whether any checkbox is checked
    $('#master-set tbody tr td:first-child input:checked').each(function (index, val) {
      //selcted value
      var $this = this;
      $("#centerTable > tbody > tr > td:first-child input:checkbox:checked").eq(0).closest('tr').before($("#centerTable > tbody > tr:first-child").clone());
      $(this).closest('tr').find('td').each(function () {
        var $copiedTd = $(this);
        if ($(this).data('type')) {
          $("#centerTable > tbody > tr > td:first-child input:checkbox:checked").eq(0).closest('tr').prev("tr").children("td").each(function (index, _val) {
            var $modifyingTd = $(this);
            if ($copiedTd.data('type') == $modifyingTd.data('type')) {
              $modifyingTd.empty().html($copiedTd.html())
            }
          });
        }
      }).promise().done(function () {
        //after all value has been copied then process the child table data

        if ($('#subSetTable tbody tr td:first-child input:checkbox:checked').length) {
          var $firstRow = $("#centerTable > tbody > tr > td:first-child input:checkbox:checked").eq(0).closest('tr').prev("tr")
          $("#centerTable > tbody > tr > td:first-child input:checkbox:checked").eq(0).closest('tr').prev("tr").children("td").children("button").removeClass('invisible');
          var $childTable = $($('#subSetTableData').html());
          $firstRow.after($childTable);
          $('#subSetTable tbody tr td:first-child input:checkbox:checked').each(function (index, val) {
            var $subsetCopyTable = $($(this).closest('tr').clone());
            $subsetCopyTable.children('td:first-child').remove();
            $childTable.find('tbody').append($subsetCopyTable);
          });
          //transition animation
          _addedArr.push($("#centerTable > tbody > tr > td:first-child input:checkbox:checked").eq(0).closest('tr').prev("tr").prev("tr").addClass('table-head'));
        } else {
          $("#centerTable > tbody > tr > td:first-child input:checkbox:checked").eq(0).closest('tr').prev("tr").children("td").children("button").removeClass('invisible').addClass('invisible');
          //transition animation
          _addedArr.push($("#centerTable > tbody > tr > td:first-child input:checkbox:checked").eq(0).closest('tr').prev("tr").addClass('table-head'));
        }

      });
    }).promise().done(function () {

      //now move from right to left
      var _caddedArr = [];
      //check whether any checkbox is checked
      $('#centerTable tbody tr td:first-child input:checked').each(function (index, val) {
        //selcted value
        var $this = this;
        var $rowSwapped = $("#master-set tbody tr td:first-child input:checkbox:checked").closest('tr').eq(0);
        $rowSwapped.before($rowSwapped.clone());
        $(this).closest('tr').find('td').each(function () {
          var $copiedTd = $(this);
          if ($(this).data('type')) {
            $rowSwapped.children("td").each(function (index, _val) {
              var $modifyingTd = $(this);
              if ($copiedTd.data('type') == $modifyingTd.data('type')) {
                $modifyingTd.empty().html($copiedTd.html())
              }
            })
          }
        });
        //transition animation
        _caddedArr.push($rowSwapped.addClass('table-head'));
        //TO DO for child table
        //$(this).closest('tr').next('tr.child-row').find('tbody').;

      }).promise().done(function () {

        setTimeout(function () {
          $(_caddedArr).each(function (index, val) {
            $(this).removeClass('table-head');
            $(this).find('input:checkbox').prop('checked', false);
          }).promise().done(function () {
            //removing master set
            $("#centerTable tbody tr td:first-child input:checkbox:checked").closest('tr').remove();
          })

        }, 1000);
      });
      setTimeout(function () {
        $(_addedArr).each(function (index, val) {
          $(this).removeClass('table-head');
        }).promise().done(function () {
          $("#master-set tbody tr td:first-child input:checkbox:checked").closest('tr').remove();
        })
      }, 1000);
    })
  });
  //delete hardware set
  $('#deleteMasterSetBtn').click(function () {
    //check whether any checkbox is checked
    $('#master-set tbody tr td:first-child input:checked').each(function (index, val) {
      //selcted value
      var $this = this;
      $(this).closest('tr').remove();
    })
  });
  //create hardware set moving data
  $('#moveCenterDataBtn').click(function () {
    var _addedArr = [];
    //check whether any checkbox is checked
    $('#centerTable tbody tr td:first-child input:checked').each(function (index, val) {
      //selcted value
      var $this = this;
      $("#lastSectionTable tbody").prepend($("#lastSectionTable tbody tr:first-child").clone());
      $(this).closest('tr').find('td').each(function () {
        var $copiedTd = $(this);
        if ($(this).data('type')) {
          $("#lastSectionTable tbody tr:first-child td").each(function (index, _val) {
            var $modifyingTd = $(this);
            if ($copiedTd.data('type') == $modifyingTd.data('type')) {
              $modifyingTd.empty().html($copiedTd.html())
            }
          })
        }
      });
      //transition animation
      _addedArr.push($("#lastSectionTable tbody tr:first-child").addClass('table-head'));
    }).promise().done(function () {
      setTimeout(function () {
        $(_addedArr).each(function (index, val) {
          $(this).removeClass('table-head');
        })

      }, 1000);
    });
  });
  //create hardware set moving data
  $('#flipCenterDataBtn').click(function () {
    var _addedArr = [];
    //check whether any checkbox is checked
    $('#centerTable tbody tr td:first-child input:checked').each(function (index, val) {
      //selcted value
      var $this = this;
      var $lastTableRow = $("#lastSectionTable tbody tr td:first-child input:checkbox:checked").closest('tr').eq(0);
      $lastTableRow.before($lastTableRow.clone());
      $(this).closest('tr').find('td').each(function () {
        var $copiedTd = $(this);
        if ($(this).data('type')) {
          $lastTableRow.children('td').each(function (index, _val) {
            var $modifyingTd = $(this);
            if ($copiedTd.data('type') == $modifyingTd.data('type')) {
              $modifyingTd.empty().html($copiedTd.html())
            }
          })
        }
      });
      //transition animation
      _addedArr.push($lastTableRow.addClass('table-head'));
    }).promise().done(function () {

      $(_addedArr).each(function (index, val) {
        // $(this).removeClass('table-head');
        $(this).find('input:checkbox').prop('checked', false);
      })
      var _caddedArr = [];
      //now move from last to center table
      $('#lastSectionTable tbody tr td:first-child input:checked').each(function (index, val) {
        //selcted value
        var $this = this;
        var $centerTableRow = $("#centerTable > tbody > tr > td:first-child input:checkbox:checked").closest('tr').eq(0);
        $centerTableRow.before($centerTableRow.clone());
        $(this).closest('tr').find('td').each(function () {
          var $copiedTd = $(this);
          if ($(this).data('type')) {
            $centerTableRow.children('td').each(function (index, _val) {
              var $modifyingTd = $(this);
              if ($copiedTd.data('type') == $modifyingTd.data('type')) {
                $modifyingTd.empty().html($copiedTd.html())
              }
            })
          }
        }).promise().done(function () {

          $($this).closest('tr').remove();
        });
        _caddedArr.push($centerTableRow.addClass('table-head'));
      });
      setTimeout(function () {
        $(_addedArr).each(function (index, val) {
          $(this).removeClass('table-head');
          $(this).find('input:checkbox').prop('checked', false);
        }).promise().done(function () {
          $('#lastSectionTable tbody tr td:first-child input:checked').closest('tr').remove();
        });
        $(_caddedArr).each(function (index, val) {
          $(this).removeClass('table-head');
          $(this).find('input:checkbox').prop('checked', false);
        }).promise().done(function () {
          $('#centerTable > tbody  > tr > td:first-child input:checked').closest('tr').remove();
        });
      }, 1000);
    });
  });
  //delete hardware set
  $('#deleteCenterDataBtn').click(function () {

    deleteCenterTableData();
  });
  // $('#priceCheckFilter').click(function(e){
  //     if($('#priceCheckFilter').prop('checked') == true)
  //         $('.table-cell.cut-sheet').show();
  //     else
  //         $('.table-cell.cut-sheet').hide();
  // });

  //used for showing child data in a grid
  $('.table').on('click', '.inside-grid-add', function (e) {
    var $this = $(this);
    $(this).closest('tr').next('tr.child-row').toggleClass('hide').promise().then(function () {
      $this.children('i').toggleClass('glyphicon-plus').toggleClass('glyphicon-minus');
    });
  })

  centerTableViews = {
    'original': $('#centerTableOriginal').html()
  };
  rightTableViews = {
    'original': $('#rightTableOriginal').html()
  };
  /*
     table data filter
     */
  // var tableData=[
  //     {
  //     "user_name":"John Methews",
  //     "user_id":"ABC123",
  //     "company":"Assa Abloy",
  //     "profile":"Admin"
  //     },
  //     {
  //     "user_name":"John Simmons",
  //     "user_id":"EFG1234",
  //     "company":"Assa Abloy",
  //     "profile":"Admin"
  //     },
  //     {
  //     "user_name":"John Jacob",
  //     "user_id":"HIJ454",
  //     "company":"Assa Abloy",
  //     "profile":"Non Admin"
  //     },
  //     {
  //     "user_name":"John S",
  //     "user_id":"JKL1234",
  //     "company":"Assa Abloy",
  //     "profile":"Admin"
  //     }
  // ];

  $('#user_id_filter').keyup(function () {
    var regex = $(this).val();
    regex = new RegExp(regex, 'i');
    var tableColumns = $('#user-data-table td.col2');
    tableColumns.each(function (i, col) {
      if (col.innerText.trim().toLowerCase().match(regex)) {
        $(this).parent().show();
      } else {
        $(this).parent().hide();
      }
    });
    // $("#user-data-table td.col2:contains('" + $(this).val() + "')").parent().show();
    // $("#user-data-table td.col2:not(:contains('" + $(this).val() + "'))").parent().hide();
  });
  $('.specific-project-details').hide();
  $('#by-project-main-table tbody tr').click(function () {
    $('#by-project-main-table tr').removeClass('active-row');
    $(this).addClass('active-row');
    $('.specific-project-details').show();
  });

  // $('#nestedTable tbody tr').click(function () {
  // $('#deleteSel_row').removeClass('hidden');
  // $(this).addClass('active-row');
  // });

  $(document).click(function () {
    $("#deleteSel_row").addClass('hidden');
  });
  $("#nestedTable tbody tr").click(function (e) {
    $("#deleteSel_row").removeClass('hidden');
    e.stopPropagation();
    return false;
  });

  // $('#refresh-projects-table-data,input[name=projectSelection]').click(function(){
  //     $('input[name=projectSelection]').val();
  //     switch($('input[name=projectSelection]').val()){
  //         case ''
  //     }
  // });
  $('input[name=projectSelection],#refresh-projects-table-data').click(function () {
    var value = $(this).val();
    switch (value) {
      case 'one':
        $('#by-project-main-table tbody tr').hide();
        $('#by-project-main-table tbody tr:first').show();
        break
      case 'all':
        $('#by-project-main-table tbody tr').show();
        break;
      default:
        $('input[name=projectSelection]').val('all');
        $('#by-project-main-table tbody tr').show();
        break;
    }
  });
  $('body').on('click', '.dropdown-column .dropdown-menu table tbody tr', function () {
    if ($(this).data('value'))
      var value = $(this).data('value');
    else
      var value = $(this)[0].children[1].innerText.trim();
    $(this).closest('.dropdown-column').find('.dropdown-toggle').html(value);
    //changing the row color
    if ($(this).data('color')) {
      var cssObj = ($(this).data('color'));
      $(this).closest('.dropdown-column').closest('tr').css(cssObj);
    }

  });
  $('#archiveTable th:last-child, #archiveTable td:last-child, #unarchiveTable th:last-child, #unarchiveTable td:last-child').hide();
  // Vendor listing table toggle Function
  $('body').on('click', ".vendor-list-toggle-btn", function () {
    $(this).parents("tr").toggleClass("row-expanded");
    $(this).find('.fa').toggleClass("fa-chevron-down fa-chevron-up");
    $(this).parents('tr').next(".vendor-list-toggle-row").toggle();
  });
  $(".toggle-btn").click(function () {
    $(this).find('.glyphicon').toggleClass("glyphicon-minus glyphicon-plus");
    $(this).parents('tr').next(".toggle-row").toggle();
  });
  if ($(".datepickercal").length) {
    $(".datepickercal").datepicker({
      autoclose: true,
      todayHighlight: true
    }).datepicker('update', new Date());
  }; //list of assigned ids
  //    addDoors('#hdwSetTable',$('#doorSlector').val(), $('#hardwareSetAssignId').val())
  getAssignedIdVal('#hdwSetTable', $('#doorSlector').val(), '#hardwareSetFromAssignedId');
  filterColumnByMarkup('margin', '#summaryTable', 6);
  filterColumnByMarkup('margin', '#withPhasingTable', 7);
  //admin pages links

  /*    $('body').on('click', ".change-status", function () {
            
            $.get("changePopup.html", function(data){
                $("#projectChangeTable").html(data);
            });

    });*/

  var adminPagesArr = ["createUser.html", "companyPreference.html", "companyForm.html", "databaseLocation.html", "disableUser.html", "modifyUser.html", "disableUserSearch.html", "editProfile.html", "modifyUserEdit.html", "modifyUserSearch.html", "pricebook-management.html", "vendorCrossReference.html", "addProfile.html", "assignPermissions.html", "deleteProjects.html", "assignViews.html", "assignUserToProject.html", "disableProfile.html", "codeMaintenance.html", "vendorCodeMaintenance.html", "landingPage.html", "admin.html"];
  //header templating
  var headerTemplate = "<header class='header pos-relative'>\
                            <div class='container-fluid'>\
                                <div class='row'>\
                                    <div class='col-md-12 col-sm-12 col-xs-12 clearfix welcome-strip'>\
                                        <div class='row'>\
                                            <div class='col-md-12'>\
                                                <div class='row'>\
                                                    <div class='col-md-5 paddingR15'>\
                                                        <a href='#' class='logo-login' title='Assa Abloy' tabindex='1'>\
                                                        </a>\
                                                    </div>\
                                                    <div class='col-md-4 pull-right'>\
                                                        <ul class='nav navbar-nav pull-right marginR15'>\
                                                            <li>\
                                                                <span>\
                                                                Welcome Erdmann, Dawn\
                                                                </span>\
                                                                </li>\
                                                                <li class='dropdown'>\
                                                                <a href='#' id='dropdownMenu1' data-toggle='dropdown' class='dropdown-toggle'>\
                                                                Profile\
                                                                </a>\
                                                                <ul class='dropdown-menu'>\
                                                                    <li>\
                                                                        <a href='switchUsers.html'>\
                                                                            Switch user\
                                                                        </a>\
                                                                    </li>\
                                                                    <li>\
                                                                        <a href='login.html'>\
                                                                            Logout\
                                                                        </a>\
                                                                    </li>\
                                                                </ul>\
                                                            </li>\
                                                            <li  class='dropdown'>\
                                                                <a href='#' id='dropdownMenu2' data-toggle='dropdown' class='dropdown-toggle' >\
                                                                    Help\
                                                                </a>\
                                                                <ul class='dropdown-menu'>\
                                                                    <li>\
                                                                        <a href='#'>\
                                                                            Help Forms\
                                                                        </a>\
                                                                    </li>\
                                                                    <li>\
                                                                        <a href='#'>\
                                                                            Live Chat\
                                                                        </a>\
                                                                    </li>\
                                                                    <li>\
                                                                        <a href='#'>\
                                                                            FAQ\
                                                                        </a>\
                                                                    </li>\
                                                                </ul>\
                                                            </li>\
                                                            <li>\
                                                                <a href='contactUs.html'>\
                                                                    Contact Us\
                                                                </a>\
                                                            </li>\
                                                        </ul>\
                                                    </div>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        <div class='pushbuttons pos-headerpushbuttons'>\
                            <a href='#' class='collapseheaderBtn' title='Header Collapse Button'>\
                                <i class='fa fa-chevron-up' aria-hidden='true'>\
                                </i>\
                            </a>\
                            <a href='#' class='expandheaderBtn' title='Header Expand Button'>\
                                <i class='fa fa-chevron-down' aria-hidden='true'>\
                                </i>\
                            </a>\
                        </div>\
                    </header>\
                            <div class='container-fluid'>\
                                <div class='row'>\
                                    <div class='menu-container'>\
                                        <ul class='nav nav-tabs menu-list'>\
                                            {{#menu}}\
                                                <li class='{{#active}} active current-menu {{/active}}'>\
                                                    {{#link}}\
                                                        <a href='{{link}}' title='{{name}}'>{{name}}</a>\
                                                    {{/link}}\
                                                    {{^link}}\
                                                        <a data-toggle='tab' href='#{{tabId}}'>{{name}}</a>\
                                                    {{/link}}\
                                                </li>\
                                            {{/menu}}\
                                        </ul>\
                                        <div class='indicator'>\
                                            <ul class='indicator-btn'>\
                                                <li class='list-unstyled'>\
                                                <a class='btn btn-info project-status marginR5' title='Milano Travel' type='button'>\
                                                    Milano Travel\
                                                </a>\
                                                <a class='btn btn-sucess change-status' id='curent-status' type='button' data-toggle='modal' data-target='#changePopupData'>\
                                                    Change : C0-01\
                                                </a>\
                                                <a class='btn btn-sucess change-status' id='change-project-status'  type='button' data-toggle='modal' data-target='#changePopupData'>\
                                                    Current\
                                                </a>\
                                                </li>\
                                            </ul>\
                                        <div>\
                                        <div class='tab-content menu-detail-container collapse in' id='menu-detail-container'>\
                                            {{#menu}}\
                                            <div id='{{tabId}}' class='tab-pane fade {{#active}}active in{{/active}}'>\
                                                <ul class='list-inline list-unstyled'>\
                                                    {{#submenu}}\
                                                    <li class='text-center {{#activeChild}} active current-menu {{/activeChild}}'>\
                                                        <a href='{{link}}'>\
                                                            <i class='{{icon}}' aria-hidden='true'></i>\
                                                            <span>{{name}}</span>\
                                                        </a>\
                                                    </li>\
                                                    {{/submenu}}\
                                                    <li class='pull-right progress-step'>\
                                                    <div class='show-status-bar'>\
                                                    <button class='btn btn-primary toogle-step' type='button'>\
                                                    <i class='fa fa-angle-double-left' aria-hidden='true'></i>\
                                                    </button>\
                                                    </div>\
                                                    <div class='stepwizardarea'>\
                                                        <ul class='stepwizardrow'>\
                                                                <li class='active-step' data-type='opening'>\
                                                                    <span class='step-count'></span>\
                                                                    <span class='step-name'>Openings</span>\
                                                                </li>\
                                                                <li class='default-step'>\
                                                                    <span class='step-count'></span>\
                                                                    <span class='step-name'>Groups</span>\
                                                                </li>\
                                                                <li class='default-step'>\
                                                                    <span class='step-count'></span>\
                                                                    <span class='step-name'>Hardware</span>\
                                                                </li>\
                                                                <li class='default-step'>\
                                                                    <span class='step-count'></span>\
                                                                    <span class='step-name'>Cost & Quotes</span>\
                                                                </li>\
                                                                <li class='default-step'>\
                                                                    <span class='step-count'></span>\
                                                                    <span class='step-name'>Ordering</span>\
                                                                </li>\
                                                                <li class='default-step'>\
                                                                    <span class='step-count'></span>\
                                                                    <span class='step-name'>Reports</span>\
                                                                </li>\
                                                        </ul>\
                                                    </div>\
                                                    </li>\
                                                </ul>\
                                            </div>\
                                            {{/menu}}\
                                         </div>\
                                         <button class='btn btn-default toggle-bar-btn' data-toggle='collapse' data-target='#menu-detail-container' aria-expanded='true'>\
                                            <i class='fa fa-chevron-up'></i>\
                                        </button>\
                                    </div>\
                                </div>\
                            </div>\
                             ";
  var menuJson = {
    menu: [{
      name: "home",
      tabId: "home-menu",
      link: "landingPage.html",
    }, {
      name: "Projects",
      tabId: "project-menu",
      link: "projectLanding.html",
      linkArr: ["projectLanding.html", "addArchitectContractor.html", "addContractor.html", "importProject.html", "newProject.html", "uploadSuccessfully.html", "spreadsheet-tag-order.html"],
      submenu: [{
        name: "Create Project",
        link: "newProject.html",
        linkArr: ["newProject.html"]
        /*,icon: "fa fa-plus-circle"*/
      },
      {
        name: "Import Project",
        link: "importProject.html",
        linkArr: ["spreadsheet-tag-order.html", "uploadSuccessfully.html", "importProject.html"]
        /*,icon: "fa fa-arrow-circle-o-down"*/
      },
      ]
    }, {
      name: "Utility",
      tabId: "utility-menu",
      link: "utilityLanding.html",
      linkArr: ["receiving.html", "utilityLanding.html", "accountingExportXML.html", "projectDiscount.html", "transferMaterialPriceBook.html", "projectHardwareManagement.html", "masterMaterialManagement.html"],
      submenu: [{
        name: "Master Discounts",
        link: "projectDiscount.html"
        /*,icon: "fa fa-bullhorn"*/
      },
      {
        name: "Receiving",
        link: "receiving.html"
        /*,icon: "fa fa-arrow-circle-o-up"*/
      },  
      {
        name: "Accounting Export",
        link: "accountingExportXML.html"
        /*,icon: "fa fa-book"*/
      },
      {
        name: "Custom Price Books",
        link: "transferMaterialPriceBook.html"
        /*,icon: "fa fa-arrow-circle-o-up"*/
      },  
      {
        name: "Tags",
        link: ""
        /*,icon: "fa fa-book"*/
      },
      {
        name: "Status List",
        link: ""
        /*,icon: "fa fa-arrow-circle-o-up"*/
      },  
      {
        name: "Opening Browser",
        link: ""
        /*,icon: "fa fa-book"*/
      },
      ]
    }, {
      name: "Libraries",
      tabId: "Libraries",
      link: "libraries.html",
      /*linkArr: ["list-libraries.html","component-libraries.html"],*/
      /*submenu: [
                    
                    {
                        name: "List Libraries",
                        link: "list-libraries.html",
                        linkArr: ["list-libraries.html"],
                        icon: "fa fa-university"
                    },
                    {
                        name: "Component Libraries",
                        link: "component-libraries.html",
                        linkArr: ["component-libraries.html"],
                        icon: "fa fa-university"
                    },

                ]*/
    }, {
      name: "Project Mgmt",
      tabId: "project-mgmt",
      link: "ProjectMgmt.html",
      linkArr: ["ProjectMgmt.html", "ProjectMgmt1.html", "ProjectMgmt2.html", "calendar.html"],
      submenu: [{
        name: "Calendar",
        link: "calendar.html",
        linkArr: ["calendar.html"]
        /*,
                                icon: "fa fa-calendar"*/
      },]
    },
    {
      name: "Quick Pick",
      tabId: "quick-pick",
      link: "quickEstimating_landing.html",
      linkArr: ["quickEstimating_landing.html", "createQuickEstimatingHardwareSetNew.html", "quickEstimatingMaterial.html", "quickEstimatingMaterial.html", "quickEstimatingCostingSummary.html", "quickEstimatingCostSummary.html", "quickEstimatingCostSummaryFrame.html", "quickEstimatingManagequote.html", "quickEstimatingQuoting.html", "processingHardware.html", "quickestimationOpenings.html", "quickestimationGroups.html", "quickestimationReports.html", 'assignPO.html', 'availableOrder.html', 'receiveOrder.html', 'assignShipment.html', 'availableShipment.html'],
      submenu: [{
        name: "Openings",
        link: "quickestimationOpenings.html",
        linkArr: ["quickestimationOpenings.html"]
        /*,
                                icon: "fa fa-deaf",*/
      }, {
        name: "Groups",
        link: "quickestimationGroups.html",
        linkArr: ["quickestimationGroups.html"]
        /*,
                                icon: "fa fa-book",*/
      }, {
        name: "Hardware",
        link: "createQuickEstimatingHardwareSetNew.html",
        linkArr: ["createQuickEstimatingHardwareSetNew.html", "createQuickEstimatingHardwareSetNew1.html"]
        /*,
                                icon: "fa fa-deaf",*/
      }, {
        name: "Proposals",
        link: "quickEstimatingCostSummary.html",
        linkArr: ["quickEstimatingCostSummary.html"]
        /*,
                                icon: "fa fa-sort-amount-desc"*/
      }, {
        name: "Orders",
        link: "processingHardware.html",
        linkArr: ["processingHardware.html", 'assignPO.html', 'availableOrder.html', 'receiveOrder.html', 'assignShipment.html', 'availableShipment.html']
        /*,
                                icon: "fa fa-bolt"*/
      }, {
        name: "Reports",
        link: "quickestimationReports.html",
        linkArr: ["quickestimationReports.html"]
        /*,
                                icon: "fa fa-sort-amount-desc"*/
      }]

    },
    {
      name: "Milano Travel",
      tabId: "project-name",
      link: "detailedEstimating_landing2.html",
      linkArr: ["projectSettings.html", "projectsShipments.html", "tagsManagement.html", "detailedEstimating_landing1.html", "detailedEstimating_landing_current.html", "detailedEstimating_landing2.html", "projectsOpeningsDetialView.html", "detailedEstimating.html", "detailedEstimating_landing.html", "detailEstimatingHardware.html", "detailEstimatingHardwareList.html", "detailEstimatingHardwareType.html", "detailedEstimatingMaterial.html", "detailEstimatingHardwareType1.html", "detailEstimatingCostSummary.html", "detailEstimatingCostSummaryFrame.html", "detailEstimatingQuoting.html", "detailEstimatingManagequote.html", "projectsOpenings.html", "projectsGroups.html", "projectsReports.html", "projectsOrdering.html"],
      submenu: [{
        name: "Openings",
        link: "projectsOpenings.html",
        linkArr: ["projectsOpeningsDetialView.html"]
        /*,
                                icon: "fa fa-deaf",*/
      }, {
        name: "Groups",
        link: "projectsGroups.html",
        linkArr: [""]
        /*,
                                icon: "fa fa-book",*/
      }, {
        name: "Hardware",
        link: "detailEstimatingHardware.html"
        /*,
                                icon: "fa fa-deaf",*/
      },
      {
        name: "Proposals",
        link: "detailEstimatingCostSummary.html"
        /*,
                                icon: "fa fa-sort-amount-desc"*/
      }, {
        name: "Orders",
        link: "projectsOrdering.html",
        linkArr: [""]
        /*,
                                icon: "fa fa-bolt"*/
      }, {
        name: "Shipments",
        link: "projectsShipments.html",
        linkArr: [""]
        /*,
                                icon: "fa fa-bolt"*/
      }, {
        name: "Reports",
        link: "projectsReports.html",
        linkArr: [""]
        /*,
                                icon: "fa fa-sort-amount-desc"*/
      }, {
        name: "Settings",
        link: "projectSettings.html"
        /*,
                                icon: "fa fa-wrench"*/
      },
      ]

    },
    ]
  };

  var currentUrl = window.location.pathname.split("/").pop();
  var adminMenuJson = [{
    name: "Admin",
    tabId: "admin-page",
    link: "admin.html",
    linkArr: ["admin.html"]
  },];
  //check if admin page is there
  if (adminPagesArr && adminPagesArr.length && adminPagesArr.indexOf(currentUrl) !== -1) {
    $(adminMenuJson.reverse()).each(function (index, val) {
      menuJson.menu.push(val);
    })
  }
  var menuActiveFlag = false,
    subMenuActiveFlag = false;
  var result = $.each(menuJson.menu, function (index, val) {
    if (val.link) {
      if (adminPagesArr.indexOf(currentUrl) !== -1 && val.name == 'home') {
        val.link = 'landingPage.html'
      }
      if (val.link == currentUrl && !menuActiveFlag) {
        val.active = true;
        menuActiveFlag = true;
      } else if ('linkArr' in val && val.linkArr.indexOf(currentUrl) !== -1 && !menuActiveFlag) {
        val.active = true;
        menuActiveFlag = true;
      }
    } else if (!val.link && val.submenu.indexOf()) {
      $.each(val.submenu, function (index, val1) {
        if (val1.link == currentUrl && !subMenuActiveFlag) {
          val1.activeChild = true;
          val.active = true;
          subMenuActiveFlag = true;
        } else if ('linkArr' in val1 && val1.linkArr.indexOf(currentUrl) !== -1 && !subMenuActiveFlag) {
          val1.activeChild = true;
          val.active = true;
          subMenuActiveFlag = true;
        }
      })
    }
  });

  var html = Mustache.to_html(headerTemplate, menuJson);
  $('#ribbonMenuBar').html(html);

  var hiddenMenusUrl = ['libraries.html', 'utilityLanding.html', 'projectLanding.html', 'newProject.html', 'importProject.html', 'projectLanding1.html', 'landingPage.html', 'priceBookCleanup.html', 'switchUsers.html', 'accountingExportXML.html', 'spreadsheet-tag-order.html', 'projectDiscount.html', 'transferMaterialPriceBook.html', 'projectHardwareManagement.html', 'masterMaterialManagement.html'];
  if (hiddenMenusUrl.indexOf(currentUrl) > -1) {
    $('.menu-list li').each(function (index) {
      if (index >= 4) {
        $(this).hide();
      }
    });
  }
  var progressbarmenuUrl = ['projectsShipments.html', 'detailedEstimating_landing1.html', 'detailedEstimating_landing2.html', 'detailedEstimating_landing_current.html', 'quickestimationOpenings.html', 'projectsOpenings.html', 'quickestimationGroups.html', 'createQuickEstimatingHardwareSetNew.html', 'quickEstimatingCostSummary.html', 'processingHardware.html', 'quickestimationReports.html', 'projectsGroups.html', 'detailEstimatingHardware.html', 'detailEstimatingCostSummary.html', 'projectsOrdering.html', 'projectsReports.html', 'ProjectMgmt.html', 'calendar.html', 'quickEstimating_landing.html', 'detailedEstimating_landing.html', 'projectsOpeningsDetialView.html', 'tagsManagement.html', 'projectSettings.html'];
  if (progressbarmenuUrl.indexOf(currentUrl) != -1) {
    $(".show-status-bar").show();
    $("ul.indicator-btn").show();

  }
  $('.show-status-bar').click(function () {
    $('.stepwizardarea').toggle('slow');
    $('i.fa-angle-double-left').toggleClass('fa-angle-double-right');
  });
  // For Header Collapsable 
  $('.expandheaderBtn').hide();
  $('.collapseheaderBtn').click(function () {
    $('.header').animate({
      marginTop: '-50px'
    });
    $("body").css("padding-top", "20px");
    $('.collapseheaderBtn').hide();
    $('.expandheaderBtn').show();
    $('#ribbonMenuBar').animate({
      marginTop: '-150px'
    });
    $('.pos-headerpushbuttons').animate({
      bottom: '-14px'
    });
  });
  $('.expandheaderBtn').click(function () {
    $('.header').animate({
      marginTop: '0px'
    });
    $("body").css("padding-top", "68px");
    $(this).hide();
    $('.collapseheaderBtn').show();
    $('#ribbonMenuBar').animate({
      marginTop: '-2px'
    });
    $('.pos-headerpushbuttons').animate({
      bottom: '36px'
    });
  });
  var submenuFirstActive = ['projectsOpenings.html', 'projectDiscount.html', 'quickestimationOpenings.html', 'calendar.html', 'newProject.html', 'list-libraries.html']
  if (submenuFirstActive.indexOf(currentUrl) != -1) {
    $('#menu-detail-container .active ul.list-inline li:first-child').addClass('current-menu');
  }
  var submenuSecondActive = ['receiving.html', 'importProject.html', 'quickestimationGroups.html', 'projectsGroups.html', 'component-libraries.html']
  if (submenuSecondActive.indexOf(currentUrl) != -1) {
    $('#menu-detail-container .active ul.list-inline li:nth-child(2)').addClass('current-menu');
  }
  var submenuThirdActive = ['createQuickEstimatingHardwareSetNew.html', 'detailEstimatingHardware.html', 'accountingExportXML.html']
  if (submenuThirdActive.indexOf(currentUrl) != -1) {
    $('#menu-detail-container .active ul.list-inline li:nth-child(3)').addClass('current-menu');
  }
  var submenuFourthActive = ['transferMaterialPriceBook.html', 'projectHardwareManagement.html', 'quickEstimatingCostSummary.html', 'detailEstimatingCostSummary.html', 'quickEstimatingCostSummaryFrame.html', 'quickEstimatingQuoting.html', 'quickEstimatingManagequote.html', 'detailEstimatingCostSummaryFrame.html', 'detailEstimatingQuoting.html', 'detailEstimatingManagequote.html']
  if (submenuFourthActive.indexOf(currentUrl) != -1) {
    $('#menu-detail-container .active ul.list-inline li:nth-child(4)').addClass('current-menu');
  }
  var submenuFifthActive = ['masterMaterialManagement.html', 'processingHardware.html', 'projectsOrdering.html', 'assignPO.html', 'availableOrder.html', 'receiveOrder.html', 'assignShipment.html', 'availableShipment.html']
  if (submenuFifthActive.indexOf(currentUrl) != -1) {
    $('#menu-detail-container .active ul.list-inline li:nth-child(5)').addClass('current-menu');
  }
  var submenuSixActive = ['quickestimationReports.html', 'projectsShipments.html']
  if (submenuSixActive.indexOf(currentUrl) != -1) {
    $('#menu-detail-container .active ul.list-inline li:nth-child(6)').addClass('current-menu');
  }
  var submenuSevenActive = ['projectsReports.html']
  if (submenuSevenActive.indexOf(currentUrl) != -1) {
    $('#menu-detail-container .active ul.list-inline li:nth-child(7)').addClass('current-menu');
  }
  var submenuSevenActive = ['tagsManagement.html', 'projectSettings.html']
  if (submenuSevenActive.indexOf(currentUrl) != -1) {
    $('#menu-detail-container .active ul.list-inline li:nth-child(8)').addClass('current-menu');
  }

  //code for ribbon work collapse additional control sync
  $('.menu-list>li').click(function () {
    $('#menu-detail-container').collapse("show");
  });

  //footer common on all pages
  $('footer').html('<div class="container-fluid">\
                            <div class="col-md-6 col-sm-2 col-xs-12 text-left">\
                                <div class="live-chat-option">\
                                <img src="images/live-chat-btn1.png" />\
                                </div>\
                                <div class="live-chat-form">\
                                    <h3>\
                                        Chat Now\
                                        <span>\
                                            <i class="fa fa-close pull-right close-chat">\
                                            </i>\
                                        </span>\
                                        <span>\
                                            <i class="fa fa-minus pull-right minimize-chat">\
                                            </i>\
                                        </span>\
                                    </h3>\
                                    <form class="form-horizontal">\
                                    <input type="text" class="form-control marginB10" placeholder="Name">\
                                    <input type="email" class="form-control marginB10" placeholder="Email Address">\
                                    <textarea class="form-control marginB10" rows="3"></textarea>\
                                     <button type="submit" class="btn btn-primary pull-right">Start Chat</button>\
                                    </form>\
                                </div>\
                            </div>\
                            <div class="col-md-6 col-sm-4 col-xs-12 text-right">&copy; ASSA ABLOY 2017 PRO-TECH Version 9.0.0.0</div>\
                    </div>');

  $(document).ready(function (e) {
    $('td.dropdown-column .dropdown-menu .table>tbody>tr>td>button[title="Add"]').click(function (e) {

      $('#modalOpeningName').modal('show');
      var columnIndex = $(this).closest('td.dropdown-column').index();
      var headerTitle = $(this).closest('td.dropdown-column').closest('tbody').siblings('thead').children('tr').children('th').eq(columnIndex).text().trim();
      //                alert(headerTitle)
      $('#gridSystemModalLabel').html(headerTitle);
    });
  });

  $('#addacontractorBtn').click(function (e) {
    $('#addSelectForm .modal-title span.name').text('Contractors');
    $('#addSelectForm span.contactName').text('Contractors');
    $('#addSelectForm #selectmenu').empty();
    $('#addSelectForm #selectmenu').html('<option selected >Contractors</option>')
  });

  $('#addarchitectBtn').click(function (e) {
    $('#addSelectForm .modal-title span.name').text('Architects');
    $('#addSelectForm span.contactName').text('Architects');
    $('#addSelectForm #selectmenu').empty();
    $('#addSelectForm #selectmenu').html('<option selected >Architects</option>')
  });

  $('#addownerBtn').click(function (e) {
    $('#addSelectForm .modal-title span.name').text('Facility/Owner');
    $('#addSelectForm span.contactName').text('Facility/Owner');
    $('#addSelectForm #selectmenu').empty();
    $('#addSelectForm #selectmenu').html('<option selected >Facility/Owner</option>')
  });

});

/* ----------------- selected multiple row of table ----------------------------------------------------*/
var lastSelectedRow;
var trs = $("#openingTable tbody tr");

// disable text selection
document.onselectstart = function () {
  return false;
}

function RowClick(currenttr, lock) {
  /* if (window.event.ctrlKey) {
          toggleRow(currenttr);
      }
      
      if (window.event.button === 0) {
          if (!window.event.ctrlKey && !window.event.shiftKey) {
              //clearAll();
              toggleRow(currenttr);
          }
      
          if (window.event.shiftKey) {
              selectRowsBetweenIndexes([lastSelectedRow.rowIndex, currenttr.rowIndex])
          }
      }*/

}

function toggleRow(row) {
  row.className = row.className == 'active-row' ? '' : 'active-row';
  lastSelectedRow = row;
}

function selectRowsBetweenIndexes(indexes) {
  indexes.sort(function (a, b) {
    return a - b;
  });

  for (var i = indexes[0]; i <= indexes[1]; i++) {
    trs[i - 1].className = 'active-row';
  }
}

function clearAll() {
  for (var i = 0; i < trs.length; i++) {
    trs[i].className = '';
  }
}
/* ----------------- End of selected multiple row of table ----------------------------------------------------*/

function deleteCenterTableData() {
  //check whether any checkbox is checked
  $('#centerTable tbody tr td:first-child input:checked').each(function (index, val) {
    //selcted value
    var $this = this;
    $(this).closest('tr').remove();
  })
}

//advance filters applied
function hardwareFirstTableFilter() {
  //for now only for MD there is filter
  var flagShowArr = [],
    flagShow = true,
    $el;
  $('#master-set tbody tr').each(function (index, val) {
    $el = $(this),
      flagShow = true;
    $(this).children('td').each(function (index, val) {
      var firstManufactureVal = $('#first-manufacture-filter').val();
      var firstTypeVal = $('#first-type-filter').val();
      if (flagShow && firstManufactureVal && $(this).data('type') == 'mfr' && $(this).html().trim() != firstManufactureVal) {
        flagShow = false;
        flagShowArr.push($(this).closest('tr'));
      }

      if (flagShow && firstTypeVal && $(this).data('type') == 'type' && $(this).html().trim() != firstTypeVal) {
        flagShow = false;
        flagShowArr.push($(this).closest('tr'));
      }

    })

  }).promise().done(function () {

    $('#master-set tbody tr').removeClass('hide');
    $(flagShowArr).each(function (index, val) {
      val.removeClass('hide').addClass('hide');
    })

  })

  // typeFilter('#first-type-filter', 'BO');

  // if($('#first-manufacture-filter').val() != 'AD' && $('#first-type-filter').val() != 'BO'){
  //     $('#master-set tbody tr').removeClass('hide');
  // }

  //now check for type
}

//for first table
function typeFilter(id, val) {
  if ($(id).val() == val) {
    $('#master-set tbody tr td').each(function (index, val) {
      if ($(this).data('type') == 'type' && $(this).html().trim() != 'BO') {
        $(this).closest('tr').hide();
      }
    });
  } else {
    $('#master-set tbody tr').each(function (index, val) {
      var _flg = true;
      $(this).children('td').each(function (index, val) {

        if ($('#first-manufacture-filter').val() == 'AD' && $(this).data('type') == 'mfr' && $(this).html().trim() != 'AD') {
          _flg = false;
        }

        if ($(this).data('type') == 'type' && $(this).html().trim() != 'BO' && _flg) {
          _flg = true;
        }
      }).promise().done(function () {
        if (_flg) {
          $(this).closest('tr').show();
        }
      });
    })

  }
}

function resetFilter(_this) {
  $(_this).closest('form').find(":input").each(function (index, val) {

    if ($(this).is(":text")) {
      $(this).val('');
    } else {
      if ($(this).is("select")) {
        $(this).children("option:first-child").prop("selected", "selected");
      }
    }

  }).promise().done(function () {
    hardwareFirstTableFilter();
  });
}

function checkAll(id) {
  if ($(id).length) {
    if ($(id).prop('checked'))
      $(id).closest('table').find(' tbody tr td:first-child input').prop('checked', true);
    else
      $(id).closest('table').find(' tbody tr td:first-child input').prop('checked', false);
  }
}

function checkAllDropdown(id) {
  if ($(id).length) {
    $(id).find('input:checkbox').prop('checked', true);
  }
}

//used for grid column filtering
function filterColumn(_this) {
  var $this = $(_this);
  if ($(_this).is(":checked")) {
    $(_this).closest('.control-area').next('.table-wrap').find('tr td').each(function (index, val) {
      if ($(this).data('type') && $this.data('type') == $(this).data('type')) {
        $(this).show();
      }
    });
  } else {
    $(_this).closest('.control-area').next('.table-wrap').find('tr td').each(function (index, val) {
      if ($(this).data('type') && $this.data('type') == $(this).data('type')) {
        $(this).hide();
      }
    });
  }
}

function shrinkChildGrid(id) {
  if ($(id).length) {
    $(id).find('tbody > tr > td:first-child button i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    $(id).find('tbody > tr.child-row').removeClass('hide').addClass('hide');
  }
}

function expandChildGrid(id) {
  if ($(id).length) {
    $(id).find('tbody > tr > td:first-child button i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    $(id).find('tbody > tr.child-row').removeClass('hide');
  }
}

function toggleExpand(id, _this) {
  if ($(id).length) {
    if ($(_this).length) {
      $(_this).children('i').toggleClass('glyphicon-resize-full').toggleClass('glyphicon-resize-small');
    }
    $(id).find('tbody > tr > td:first-child button i').toggleClass('glyphicon-plus').toggleClass('glyphicon-minus');
    $(id).find('tbody > tr.child-row').toggleClass('hide');
  }
}

function duplicateRecord(id) {
  if ($(id).length) {
    $(id + ' > tbody > tr > td:first-child input:checkbox:checked').closest('tr').each(function (index, val) {
      $(id + ' > tbody').prepend($(this).next('tr.child-row').clone());
      $(id + ' > tbody').prepend($(this).clone().addClass('table-head'));
    }).promise().done(function () {
      //get all selected rows
      setTimeout(function () {
        $(id).find('tbody > tr.table-head').removeClass('table-head')
      }, 1000)

    })
    // $("#lastSectionTable tbody").prepend($("#lastSectionTable tbody tr:first-child").clone())       
  }
}

function addNewRecord(id) {
  if ($(id).length) {
    var $clonedRow = $(id + ' > tbody > tr:first-child').clone();
    var htmlInput = '<input type="text" class="form-text" style="width:40px;" onblur="addedRecordEntry(this);" />';
    $clonedRow.find('td').each(function () {
      if ($(this).data('type') && $(this).data('type') != 'used' && $(this).data('type') != 'special-network' && $(this).data('type') != 'special-network' && $(this).data('type') != 'checkbox') {

        $(this).empty().append(htmlInput);
      } else {
        $(this).find('button').remove();
      }
    }).promise().done(function () {
      $(id + ' > tbody').prepend($clonedRow);
    });
  }
}

function addBlankRecord(id) {

  if ($(id).length) {
    var $headColumns = $(id + ' > thead > tr > th');
    var $clonedRow = $(id + ' > tbody > tr:first-child').clone();
    var htmlInput = '<td><input type="text" class="form-text" style="width:40px;" onblur="addedRecordEntry(this);" /></td>';
    var htmlCheckbox = '<td><input type="checkbox" class="form-text" /></td>';
    var htmlCalender = '<td><input type="text" class="datepickercal" /></td>';
    var selectBox = '<select></select>'

    var $addingRow = $('<tr></tr>');
    $headColumns.each(function (index, val) {
      switch ($(this).data('type')) {
        case 'checkbox':
          $addingRow.append(htmlCheckbox);
          break;
        case 'blank':
          $addingRow.append('<td></td>');
          break;
        case 'dropdown':

          if ($(this).data('values')) {
            var selectBoxOptions = '<td data-type="' + $(this).data("type") + '" class="dropdown-column"><div class="col-xs-12">\
                                                <span class="dropdown-toggle" data-toggle="dropdown">ED1</span>\
                                                <span class="caret"></span>\
                                                <div class="dropdown-menu">\
                                                    <table class="table">\
                                                        <thead>\
                                                            <tr>\
                                                                <td>Phrase Type</td>\
                                                            </tr>\
                                                        </thead>\
                                                        <tbody>\
                                                        </tbody>\
                                                    </table>\
                                                </div>\
                                            </div></td>\\';
            $selectBoxOptions = $(selectBoxOptions);
            for (var i in $(this).data('values')) {
              $selectBoxOptions.find('thead tr').empty().append('<td>' + i + '</td>');
              var optionsData = $(this).data('values')[i];
              $(optionsData).each(function (index, val) {
                $selectBoxOptions.find('tbody').append('<tr data-value="' + val + '"><td >' + val + '</td></tr>');
              })
            }

            $selectBoxOptions.find('dropdown-toggle').html(Object.keys($(this).data('values'))[0]);
            $addingRow.append($selectBoxOptions);
          }

          break;
        case 'date':
          $addingRow.append(htmlCalender);
          setTimeout(function () {
            if ($(".datepickercal").length)
              $(".datepickercal").datepicker({
                autoclose: true,
                todayHighlight: true
              }).datepicker('update', new Date());
          }, 1000);
          break;
        default:
          $addingRow.append(htmlInput);
          break;
      }

    }).promise().done(function () {
      $(id + ' > tbody').prepend($addingRow);
    });
  }
}

function addBlankRecord1(id) {

  if ($(id).length) {
    var $headColumns = $(id + ' > thead > tr.subheader > th');
    var $clonedRow = $(id + ' > tbody > tr:first-child').clone();
    var htmlInput = '<td><input type="text" class="form-text" style="width:40px;" onblur="addedRecordEntry(this);" /></td>';
    var htmlCheckbox = '<td><input type="checkbox" class="form-text" /></td>';
    var htmlCalender = '<td><input type="text" class="datepickercal" /></td>';
    var selectBox = '<select></select>'

    var $addingRow = $('<tr></tr>');
    $headColumns.each(function (index, val) {
      switch ($(this).data('type')) {
        case 'checkbox':
          $addingRow.append(htmlCheckbox);
          break;
        case 'blank':
          $addingRow.append('<td></td>');
          break;
        case 'dropdown':

          if ($(this).data('values')) {
            var selectBoxOptions = '<td data-type="' + $(this).data("type") + '" class="dropdown-column"><div class="col-xs-12">\
                                                <span class="dropdown-toggle" data-toggle="dropdown">ED1</span>\
                                                <span class="caret"></span>\
                                                <div class="dropdown-menu">\
                                                    <table class="table">\
                                                        <thead>\
                                                            <tr>\
                                                                <td>Phrase Type</td>\
                                                            </tr>\
                                                        </thead>\
                                                        <tbody>\
                                                        </tbody>\
                                                    </table>\
                                                </div>\
                                            </div></td>\\';
            $selectBoxOptions = $(selectBoxOptions);
            for (var i in $(this).data('values')) {
              $selectBoxOptions.find('thead tr').empty().append('<td>' + i + '</td>');
              var optionsData = $(this).data('values')[i];
              $(optionsData).each(function (index, val) {
                $selectBoxOptions.find('tbody').append('<tr data-value="' + val + '"><td >' + val + '</td></tr>');
              })
            }

            $selectBoxOptions.find('dropdown-toggle').html(Object.keys($(this).data('values'))[0]);
            $addingRow.append($selectBoxOptions);
          }

          break;
        case 'date':
          $addingRow.append(htmlCalender);
          setTimeout(function () {
            if ($(".datepickercal").length)
              $(".datepickercal").datepicker({
                autoclose: true,
                todayHighlight: true
              }).datepicker('update', new Date());
          }, 1000);
          break;
        default:
          $addingRow.append(htmlInput);
          break;
      }

    }).promise().done(function () {
      $(id + ' > tbody > tr').removeClass('active-row');
      $(id + ' > tbody').prepend($addingRow.addClass(''));
    });
  }
}

function deleteRecord(id) {
  if ($(id).length) {
    $(id + ' > tbody > tr > td:first-child input:checked').closest('tr').remove();
  }
}

function deleteRecord1(id) {
  if ($(id).length) {
    $(id + ' > tbody > tr > td:nth-child(2) input:checked').closest('tr').remove();
  }
}

function deleteRecord2(id) {
  if ($(id).length) {
    $(id + ' > tbody tr.active-row').remove();
  }
}

// Master Material Management page function
function addNewRecordMaterial(id) {
  if ($(id).length) {
    var $clonedRow = $(id + ' > tbody > tr:first-child').clone();
    var htmlInput = '<input type="text" class="form-text" />';
    $clonedRow.find('td').each(function () {
      if ($(this).data('type') && $(this).data('type') != 'used' && $(this).data('type') != 'special-network' && $(this).data('type') != 'special-network' && $(this).data('type') != 'checkbox') {

        $(this).empty().append(htmlInput);
      } else {
        $(this).find('button').remove();
      }
    }).promise().done(function () {
      $(id + ' > tbody').prepend($clonedRow);
    });
  }
}

function deleteTableDataMaterial() {
  //check whether any checkbox is checked
  $('#materialDataTable tbody tr td:first-child input:checked').each(function (index, val) {
    //selcted value
    var $this = this;
    $(this).closest('tr').remove();
  })
}

function exportGridData(_this) {
  var url = 'data:application/html,' + encodeURIComponent($(_this).children('tbody').html());
  location.href = url;
  return false
}

//_this : 
function importGridData(dropdownId, importLocationId, importArrType) {
  var file = $('<input type="file">');
  file.trigger('click');
  // var file = $(importButtonId);
  file.on('change', function (e) {
    var _fileName = e.currentTarget.value;
    var reader = new FileReader();
    //var f = file.files[0];
    reader.onload = function (e) {
      var htmlData = e.target.result;
      //this is where the csv array will be
      if (importArrType == 'centertable')
        centerTableViews[_fileName] = htmlData;
      else
        rightTableViews[_fileName] = htmlData;
      //importing data and selecting view
      $(importLocationId).html(htmlData);
      $(dropdownId).append('<option value="' + _fileName + '">' + _fileName + '</option>').promise().done(function () {
        $(dropdownId + ' option:last-child').prop('selected', true);
      });
    };
    reader.readAsText(e.target.files.item(0));
  });
}

//viewArr - centerTable
function selectView(targetId, viewName, viewType) {
  var $targetElm = $(targetId);
  if ($targetElm.length) {
    if (viewType == 'centertable' && viewName in centerTableViews) {
      var viewData = centerTableViews[viewName];
      $targetElm.empty().html(viewData)
    } else if (viewType == 'righttable' && viewName in rightTableViews) {
      var viewData = rightTableViews[viewName];
      $targetElm.empty().html(viewData)
    }

  }
}

function removeGridData(dropDownId, targetId) {
  if ($(dropDownId + ' option').length > 1)
    $(dropDownId + ' option:selected').remove().promise().done(function () {
      $(dropDownId).trigger('change');
    });
}

//copying data from one grid to another
function moveData(copyElementTableId, targetElementTableId, callback) {
  if ($(copyElementTableId).length) {
    var _tmpArr = []
    $(copyElementTableId).find('tbody tr td:first-child input:checkbox:checked').each(function (index, val) {
      var $clonedElm = $(this).closest('tr').clone();
      $(targetElementTableId).find('tbody').prepend($clonedElm.addClass('table-head'));
      _tmpArr.push($clonedElm);
    }).promise().done(function () {
      setTimeout(function () {
        $(_tmpArr).each(function (index, val) {
          val.removeClass('table-head');
        });
        if (callback) {
          callback(targetElementTableId);
        }

      }, 1000)
    })
  }
}

function filterColumnText(searchText, tableId, columnNo) {
  var regex = searchText;
  regex = new RegExp(regex, 'i');
  $(tableId).find('tbody > tr > td:nth-child(' + columnNo + ')').each(function () {
    if ($(this).html().trim().toLowerCase().match(regex)) {
      $(this).closest('tr').show();
    } else {
      $(this).closest('tr').hide();
    }
  });
}

function filterColumnByMarkup(searchText, tableId, columnNo) {
  var regex = searchText;
  regex = new RegExp(regex, 'i');
  $(tableId).find('thead > tr > th:nth-child(' + columnNo + ')').empty().text(searchText);
  $(tableId).find('tbody > tr > td:nth-child(' + columnNo + ')').each(function () {
    if ($(this).data('cell-type') && $(this).data('cell-type').toLowerCase().match(regex)) {
      $(this).closest('tr').show();
    } else {
      $(this).closest('tr').hide();
    }
  });
}

function filterColumnDropdown(searchText, tableId, columnNo) {
  var regex = searchText;
  regex = new RegExp(regex, 'i');
  $(tableId).find('tbody > tr > td:nth-child(' + columnNo + ')').each(function () {
    if ($(this).find('.dropdown-toggle').html().trim().toLowerCase().match(regex)) {
      $(this).closest('tr').show();
    } else {
      $(this).closest('tr').hide();
    }
  });
}

function cutData(cutElementTableId, targetElementTableId) {
  if ($(cutElementTableId).length) {
    var _tmpArr = []
    $(cutElementTableId).find('tbody tr td:first-child input:checkbox:checked').each(function (index, val) {
      if ($('#checkAllArchive').is(':checked') && !$(this).hasClass('failureCheckbox')) {
        var $clonedElm = $(this).closest('tr').clone();
        var $clonedElm = $(this).closest('tr').remove();
        $(targetElementTableId).find('tbody').prepend($clonedElm.addClass('table-head'));
        _tmpArr.push($clonedElm);
      } else if (!$('#checkAllArchive').is(':checked')) {
        var $clonedElm = $(this).closest('tr').clone();
        var $clonedElm = $(this).closest('tr').remove();
        $(targetElementTableId).find('tbody').prepend($clonedElm.addClass('table-head'));
        _tmpArr.push($clonedElm);
      }

    }).promise().done(function () {
      setTimeout(function () {
        $(_tmpArr).each(function (index, val) {
          val.removeClass('table-head');
        });
        //showing modal window
        //get all list of data that are not checked
        $(cutElementTableId).find('tbody tr td:first-child input:checkbox').each(function (index, val) {
          var $uncheckEl = $(this).closest('tr').clone();
          $uncheckEl.find('td:first-child, td:last-child').remove();
          $('#archiveUnarchiveList table tbody').empty().append($uncheckEl).promise().done(function () {
            $('#archiveUnarchiveList').removeClass('in').promise().done(function () {
              $('#cutDataPopup').modal('show');
              $('.progress-bar').width('0');
              var animatedWidth = $('.progress-bar').animate({
                width: '100%',
              }, 1500, "linear", function () {
                $('#cutDataPopup').modal('hide');
                if ($('#checkAllArchive').is(':checked')) {
                  $('#archiveTable th:last-child,#archiveTable td:last-child').show();
                  $('#errorMsg').show();
                  setTimeout(function () {
                    $('#errorMsg').hide();
                  }, 8000)
                } else {
                  $('#successMsg').show();
                  setTimeout(function () {
                    $('#successMsg').hide();
                  }, 8000)
                }

              });
            });
          });
        });
      })
    })
  }
}

function cutData1(cutElementTableId, targetElementTableId) {
  if ($(cutElementTableId).length) {
    var _tmpArr = []
    $(cutElementTableId).find('tbody tr td:first-child input:checkbox:checked').each(function (index, val) {
      if ($('#checkAllUnArchive').is(':checked') && !$(this).hasClass('failureCheckbox')) {
        var $clonedElm = $(this).closest('tr').clone();
        var $clonedElm = $(this).closest('tr').remove();
        $(targetElementTableId).find('tbody').prepend($clonedElm.addClass('table-head'));
        _tmpArr.push($clonedElm);
      } else if (!$('#checkAllUnArchive').is(':checked')) {
        var $clonedElm = $(this).closest('tr').clone();
        var $clonedElm = $(this).closest('tr').remove();
        $(targetElementTableId).find('tbody').prepend($clonedElm.addClass('table-head'));
        _tmpArr.push($clonedElm);
      }

    }).promise().done(function () {
      setTimeout(function () {
        $(_tmpArr).each(function (index, val) {
          val.removeClass('table-head');
        });
        //showing modal window
        //get all list of data that are not checked
        $(cutElementTableId).find('tbody tr td:first-child input:checkbox').each(function (index, val) {
          var $uncheckEl = $(this).closest('tr').clone();
          $uncheckEl.find('td:first-child, td:last-child').remove();
          $('#archiveUnarchiveList table tbody').empty().append($uncheckEl).promise().done(function () {
            $('#archiveUnarchiveList').removeClass('in').promise().done(function () {
              $('#cutDataPopup').modal('show');
              $('.progress-bar').width('0');
              var animatedWidth = $('.progress-bar').animate({
                width: '100%',
              }, 1500, "linear", function () {
                $('#cutDataPopup').modal('hide');
                if ($('#checkAllUnArchive').is(':checked')) {
                  $('#unarchiveTable th:last-child,#unarchiveTable td:last-child').show();
                  $('#errorMsg').show();
                  setTimeout(function () {
                    $('#errorMsg').show();
                  }, 1000)
                } else {
                  $('#successMsg').show();
                  setTimeout(function () {
                    $('#successMsg').hide();
                  }, 1000)
                }

              });
            });
          });
        });
      })
    })
  }
}

//used for grid column filtering
function gridfilterColumn(_this) {
  var $this = $(_this);
  if ($(_this).is(":checked")) {
    $(_this).closest('table').find('tbody tr td, thead tr th, thead tr td').each(function (index, val) {
      if ($(this).data('type') && $this.data('type') == $(this).data('type')) {
        $(this).show();
      }
    });
  } else {
    $(_this).closest('table').find('tbody tr td, thead tr th, thead tr td').each(function (index, val) {
      if ($(this).data('type') && $this.data('type') == $(this).data('type')) {
        $(this).hide();
      }
    });
  }
}

//used for grid column filtering
function gridfilterGroupColumn(_this) {
  var $this = $(_this);
  var _dataType = $(_this).data('type');
  if ($(_this).is(":checked")) {
    $(_this).closest('table').find('tbody tr td, thead tr th').each(function (index, val) {
      if (_dataType && _dataType.indexOf($(this).data('type')) >= 0) {
        $(this).show();
      }
    });
  } else {
    $(_this).closest('table').find('tbody tr td, thead tr th').each(function (index, val) {
      if (_dataType && _dataType.indexOf($(this).data('type')) >= 0) {
        $(this).hide();
      }
    });
  }
}

function selectAll(id) {

  if ($(id).length) {
    if ($(id).prop('checked'))
      $(id).closest('table').find(' tbody tr td:nth-child(2) input').prop('checked', true);
    else
      $(id).closest('table').find(' tbody tr td:nth-child(2) input').prop('checked', false);
  }
}

function checkAllEntireProject(id) {
  if ($(id).prop('checked')) {
    $('#projectFromTable tbody tr:first-child').hide();
    $(id).parents(':eq(1)').children().find('input.check').prop('checked', true).attr("disabled", "disabled");
    $(id).parents(':eq(1)').children().find('input.uncheck').prop('checked', true).removeAttr("disabled", "disabled");
  } else {
    $('#projectFromTable tbody tr:first-child').show();
    $(id).parents(':eq(1)').children().find('input.check').prop('checked', true).removeAttr("disabled", "disabled");
    $(id).parents(':eq(1)').children().find('input.uncheck').prop('checked', false).attr("disabled", "disabled");
  }

  // if ($(id).prop('checked')) {
  //     $('#projectFromTable tbody tr:first-child').hide();
  //     $(id).parents(':eq(1)').children().find('input.check').prop('checked', true).removeAttr("disabled", "disabled");
  //     $(id).parents(':eq(1)').children().find('input.uncheck').prop('checked', false).attr("disabled", "disabled");
  // }
  // else {
  //     $('#projectFromTable tbody tr:first-child').show();
  //     $(id).parents(':eq(1)').children().find('input.uncheck').prop('checked', true).removeAttr("disabled", "disabled");
  //     $(id).parents(':eq(1)').children().find('input.check').prop('checked', false).attr("disabled", "disabled");
  //     $(id).parents(':eq(1)').children().find('input.check#hardware').prop('checked', true).attr("disabled", "disabled");

  // }

}

function copyProject(id) {
  var fromTableCheckboxes = $('#projectFromTable input:checked');
  var projectCheckboxes = $('.checkProjects input:checked');
  var projectToCheckboxes = $('#projectToTable input:checked');
  if (fromTableCheckboxes.length > 0 && projectCheckboxes.length > 0 && projectToCheckboxes.length > 0) {
    // alert('both');
    $('#errormsg').hide();
    if (projectCheckboxes) {
      if (projectCheckboxes[0].value == 'Entire Project') {
        $('#successmsg').show().text('Entire Project Copied');
      } else {
        var projectCheckboxesValue = [];
        $(projectCheckboxes).each(function (index, $el) {
          projectCheckboxesValue.push($el.value);
        });
        projectCheckboxesValue = projectCheckboxesValue.toString();
        $('#successmsg').show().text(projectCheckboxesValue + " Copied");
      }
    }

  } else {
    $('#errormsg').show();
  }
}

function showUnarchive(id) {
  $('#unarchiveProjectWrap').show();
  $('#archiveProjectWrap').hide();
  $('#successMsg').text("Unarchive Successfully");
  $('#archiveProjectWrap input').prop('checked', false);
}

function showarchive(id) {
  $('#archiveProjectWrap').show();
  $('#unarchiveProjectWrap').hide();
  $('#successMsg').text("Unarchive Successfully");
  $('#unarchiveProjectWrap input').prop('checked', false);
}

function showProjectDetailsList(id) {
  $('#deleteProjectDetailsList').show();
  $('#deleteProjectEstimateList').hide();
}

function showProjectEstimateList(id) {
  $('#deleteProjectEstimateList').show();
  $('#deleteProjectDetailsList').hide();
}

function showOpenProjDetailsList(id) {
  $('#openingProjDtlsList').show();
  $('#openingProjEstimateList').hide();
}

function showOpenProjEstimateList(id) {
  $('#openingProjEstimateList').show();
  $('#openingProjDtlsList').hide();
}

function addedRecordEntry(_this) {
  var inputVal = $(_this).val();
  $(_this).addClass('hide');
  $(_this).closest('td').html(inputVal);
}

function selectedRow(id) {
  $('tr').click(function () {
    $(this).parent('tbody').find('tr').removeClass('table-head');
    $(this).addClass('table-head');
  });
}

function selectedRowCheckbox(id) {
  $('tr').click(function () {
    $(this).parent('tbody').find('tr').removeClass('table-head1');
    $(this).addClass('table-head1');
  });
}

function cutDataVendorCrossXfr(cutElementTableId, targetElementTableId) {
  if ($(cutElementTableId).length) {
    var _tmpArr = []
    $(cutElementTableId).find('tbody tr.table-head1').each(function (index, val) {
      var $clonedElm = $(this).closest('tr').clone();
      var $clonedElm = $(this).prepend('<td> &nbsp; </td>').append('<td> &nbsp; </td>');
      var $clonedElm = $(this).closest('tr').children('td:nth-child(2)').text('23' + 1);
      var $clonedElm = $(this).closest('tr').remove();
      $(targetElementTableId).find('tbody').prepend($clonedElm.addClass('table-head1'));
      _tmpArr.push($clonedElm);
    }).promise().done(function () {
      setTimeout(function () {
        $(_tmpArr).each(function (index, val) {
          val.removeClass('table-head1');
        });
      }, 1000)
    })
  }
}

function copyFromSet(copyToTableId, copyFromTableId) {
  if ($(copyToTableId).length && $(copyFromTableId).length && $(copyToTableId + ' > tbody > tr:not(".child-row") > td:first-child input:checkbox:checked').length) {
    $(copyFromTableId).find('tbody').empty();
    //getting all unchecked data
    $(copyToTableId + ' > tbody > tr:not(".child-row") > td:first-child input:checkbox:not(":checked")').closest('tr').each(function () {
      var $dataWithUncheckedTr = $(this).next('tr.child-row').clone();
      var $uncheckedTr = $(this).clone();
      //removing extra columns
      $uncheckedTr.children('td:nth-child(n+4)').remove();
      //removing plus icon
      $uncheckedTr.find('button').remove();
      $(copyFromTableId + ' > tbody').append($uncheckedTr);
      if ($dataWithUncheckedTr.length) {
        $(copyFromTableId + ' > tbody').append($dataWithUncheckedTr);
      }

    });
    $('#copyFromSet').modal('show');
    $('#copyFromSet .submit-btn').one('click', function (e) {
      $(e.currentTarget).unbind();
      // or $(this)

      //get checked elemet
      var $checkedElmArr = $(copyFromTableId + ' > tbody > tr:not(".child-row") > td:first-child input:checkbox:checked').closest('tr');
      //get all copied data
      var copyData = $checkedElmArr.next('tr.child-row').children('td').children('table').children('tbody').children('tr').clone();
      $(copyToTableId + ' > tbody > tr:not(".child-row") > td:first-child input:checkbox:checked').closest('tr').next('tr.child-row').find('tbody').append(copyData);
    });
  } else { // console.error('Elements not found in copyFromSet function');
  }
}

function copyToSet(copyToTableId, copyFromTableId) {
  if ($(copyToTableId).length && $(copyFromTableId).length && $(copyToTableId + ' > tbody > tr:not(".child-row") > td:first-child input:checkbox:checked').length) {
    //getting all unchecked data
    $('#copySetTo').modal('show');
    $('#copySetTo .submit-btn').one('click', function (e) {
      $(e.currentTarget).unbind();
      // or $(this)

      $(copyFromTableId + ' > tbody > tr:not(".child-row") > td:first-child input:checkbox:checked').closest('tr').each(function () {
        var $dataWithCheckedTr = $(this).next('tr.child-row').children("td").children("table").children("tbody").children("tr").clone();
        var $checkedTr = $(this).clone();
        if ($dataWithCheckedTr.length) {
          var copyToList = $('#copySetToIds').val();
          copyToList = copyToList && copyToList.split(",");
          $(copyToList).each(function (index, val) {
            console.log('value of val', val);
            (function (_index) {
              // console.log('value of index', _index, $(copyToTableId + ' > tbody > tr > td:nth-child(2):contains("' + _index + '")').closest("tr").next("tr.child-row").children("td").children("table").children("tbody"));
              $(copyToTableId + ' > tbody > tr > td:nth-child(2):contains("' + _index + '")').closest("tr").next("tr.child-row").children("td").children("table").children("tbody").append($dataWithCheckedTr);
            })(val);
          })

        }

      });
    });
  } else { // console.error('Elements not found in copyFromSet function');
  }
}

function getAssignedIdVal(tableId, toId, assignedFromSetIds) {
  //get assigned val
  var copySets = $(tableId + ' > tbody > tr > td:nth-child(2):contains(' + toId + ')').closest('tr').data('copy-sets');
  if (copySets) {
    $(assignedFromSetIds).val(copySets && 'length' in copySets && copySets.toString());
  } else {
    $(assignedFromSetIds).val('');
  }

}

function addDoors(tableId, toId, fromSetIds) {
  if ($(tableId).length) {
    //get content from toIds
    var fromSetIdArr = fromSetIds.trim().split(",");
    var $toSetElm = $(tableId + ' > tbody > tr > td:nth-child(2):contains(' + toId + ')').closest('tr').next('tr.child-row').children('td').children('table').children('tbody');
    var $fromSetElm = [];
    var copySets = $toSetElm.parent('table').parent('td').parent('tr.child-row').prev('tr').data('copy-sets');
    $(fromSetIdArr).each(function (index, val) {
      //            $fromSetElm.push();
      $toSetElm.append($(tableId + ' > tbody > tr > td:nth-child(2):contains(' + val + ')').closest('tr').next('tr.child-row').children('td').children('table').children('tbody').children('tr').clone());
      //containst list of assigned ids already
      if (copySets && Object.prototype.toString.call(copySets) == '[object Array]') {
        copySets.push(val);
      } else {
        copySets = [val];
      }
    }).promise().done(function () {
      copySets = '[' + copySets.toString() + ']';
      $toSetElm.parent('table').parent('td').parent('tr.child-row').prev('tr').data('copy-sets', copySets);
    });
    //        $(tableId)
    $('#addDoor').modal('hide');
  }
}

function decrementCounter(dropdownId, lowerLimit) {
  if ($(dropdownId).length && $(dropdownId).val() > lowerLimit) {
    var dropdownVal = (parseInt($(dropdownId).val()) || 0) - 1;
    $(dropdownId).val(dropdownVal);
  }
}

function incrementCounter(dropdownId, upperLimit) {
  if ($(dropdownId).length && $(dropdownId).val() < upperLimit) {
    var dropdownVal = (parseInt($(dropdownId).val()) || 0) + 1;
    $(dropdownId).val(dropdownVal);
  }
}

function getSetsFromSchedule(tableId, modalId) {
  if ($(tableId).length && $(modalId).length) {

    $(modalId).modal('show');
    $(modalId + ' .submit-btn').one('click', function (e) {
      $(e.currentTarget).unbind();
      // or $(this)

      $(modalId + ' table > tbody > tr:not(".child-row") > td:first-child input:checkbox:checked').closest('tr').each(function () {
        var addedHtml = $(tableId + ' > tbody').children('tr').not(".child-row").eq(1).clone();
        addedHtml.children('td:nth-child(2)').html(parseInt($(tableId + ' > tbody > tr ').not(".child-row").length) + 1);
        var addedChildHtml = $(tableId + ' > tbody > tr:last-child').clone();
        $(tableId + ' > tbody').append(addedHtml);
        $(tableId + ' > tbody').append(addedChildHtml);
      });
      $(modalId).modal('hide');
    });
  }
}

function loadFromCostSummary(tableId, rowsCount) {
  if ($(tableId).length) {
    for (var i = 0; i < rowsCount; i++) {
      var $addingRow = $(tableId + ' > tbody').children('tr').not('.vendor-list-toggle-row').eq(0).clone();
      var $addingRowChild = $(tableId + ' > tbody').children('tr.vendor-list-toggle-row').eq(0).clone();
      $(tableId + ' > tbody').append($addingRow).append($addingRowChild);
    }
  }
}

function addContractors(tableId, modalId) {
  if ($(tableId).length && $(modalId).length) {
    $('#architectModal').modal('show');
  }
}

function addToContractorList(fromTableId) {
  if ($(fromTableId).length) {
    var availableContractor = [];
    //get list of contractors already available
    $('.custom-contractor-list').find('tbody tr').each(function () {
      availableContractor.push($(this).data('value'));
    });
    //get all the list of contractors
    $(fromTableId).find('tbody tr td:nth-child(2):contains("Contractor")').closest('tr').find('td:nth-child(3)').each(function (index, val) {
      var contractorName = $(this).text();
      if (availableContractor.indexOf(contractorName) === -1) {
        //contractor already exists
        $('.custom-contractor-list').find('tbody').append('<tr data-value="' + contractorName + '"><td>' + contractorName + '</td></tr>');
        //                availableContractor.push(contractorName);
      }
    });
  }
}

function getPrice(attributeId, materialTableId) {
  if ($(attributeId).length) {
    $(attributeId).find('tbody > tr > td:nth-child(14)').text('12.00');
  }
}

function cutDatatransferData(cutElementTableId, targetElementTableId) {
  if ($(cutElementTableId).length) {
    var _tmpArr = []
    $(cutElementTableId).find('tbody tr input:radio:checked').each(function (index, val) {
      var $clonedElm = $(this).closest('tr').clone();
      var $clonedElm = $(this).append('<td> &nbsp; </td>');
      var $clonedElm = $(this).closest('tr').remove();
      $(targetElementTableId).find('tbody input:radio').click(function () {
        if ($(this).is(':checked')) {
          $(targetElementTableId).find('tbody tr.table-head').removeClass();
        }
      });
      $(targetElementTableId).find('tbody input:radio:checked').parents(':eq(1)').addClass('table-head');
      _tmpArr.push($clonedElm);
    }).promise().done(function () {
      setTimeout(function () {
        $(_tmpArr).each(function (index, val) {
          val.removeClass('table-head');
        });
      }, 1000)
    })
  }
}

//function dataEditSave(id) {

//    var textvalue = $(id).text();
//    var htmlInput = '<input type="text" class="form-text appendInput" value="' + textvalue + '" />';
//    $(id).empty().append(htmlInput);

//    $(document).on('click','htmlInput', function (e) {
//        e.stopPropagation();
//    })
//}

function showProgress(progressId, timeMilliSeconds) {
  if ($(progressId).length) {
    var animatedWidth = $(progressId).animate({
      width: '100%',
    }, {
        duration: timeMilliSeconds,
        step: function (now, fx) {
          $(progressId).html(now + '%');
        },
        done: function () {
          setTimeout(function () { //                                        $(progressId).html("0%");
            //                                        $(progressId).css("width","0");
          }, timeMilliSeconds)

        }
      });
  }
}

function switchUser(username, password) {
  if (username == "admin" && password == "admin") {
    window.location.href = "createUser.html";
  } else {
    window.location.href = "newProject.html";
  }

  return false;
}

function dropDownSelect(id) {
  if ($(id).length) {
    $(id + ' select').each(function (index) {
      $(this).find('option:eq(' + index + ')').prop("selected", true);
    })
  }
}

function showFormValues(idArr) {
  if (idArr && idArr.length) {
    $(idArr.toString).find('input').each(function (index, val) {
      $(this).val($(this).data('value'));
    })
  }
  $(this).addClass('table-head');
}

/* --- On selecting into form redering the form feilds - Abhishek */

function getSel(sel) {
  var selId = sel.id;
  var selVal = sel.value;
  var formId = $("#" + selId).closest('form').attr('id');
  $("#" + formId).find('input').each(function (index, val) {
    $(this).val($(this).data('value'));
  });
}

function frameTypeFrmValue(sel) {

  //var formId = $("#" + selId).closest('form').attr('id');
  $(sel).find('input').each(function (index, val) {
    $(this).val($(this).data('value'));
  });
  event.stopPropagation();
}

function openModal(mod) {
  var panId = mod.id;
  $("#fmodalbody").html("");
  $("#modtit").html($("#" + panId).text());
  var html = $("#" + panId).next().html();
  $("#fmodalbody").html(html);
  $("#formModal").modal();
  $("#fmodalbody").find('.button-container').remove();
}

function clsFrm(min) {
  $("#" + min.id).parent().parent().parent().addClass('hide');
  var idd = $("#" + min.id).parent().parent().parent().attr('id');
  $("." + idd).removeClass('hide');
  callafun(hidecount);
  event.stopPropagation();
}

function callafun(cc) {
  $('.pform').each(function () {
    if ($(this).hasClass('hide')) {
      cc = cc + 1;
    }
  });
  if (cc == 3) {
    $('.pform').removeClass('col-md-3 col-md-5').addClass('col-md-9');
  } else if (cc == 2) {
    $('.pform').removeClass('col-md-3 col-md-9').addClass('col-md-5');
  } else {
    $('.pform').removeClass('col-md-5 col-md-9').addClass('col-md-3');
  }
}

function opFrm(plu) {
  var cls = plu.id;
  cls = cls.slice(0, -1);
  $("." + cls).addClass('hide');
  $("#" + cls).removeClass('hide');
  callafun(hidecount);
}

/* ==================================================================== */

function hideForms(_this, idArr) {
  if (idArr && idArr.length) {
    idArr.forEach(function (val, index) {
      // console.log(val);
      $(val).closest('.panel-body').toggleClass('hide');
    })

    $(_this).children('i').toggleClass("fa-chevron-up fa-chevron-down");
  }
}

function swipeTable(hideElementTableId, showElementTableId) {

  if ($(hideElementTableId).length) {
    var _tmpArr = [];
    $(hideElementTableId).hide();
    $(showElementTableId).show();
  }
}

function deleteRow(id, target) {
  $(target).find('tbody input:checkbox:checked').closest('tr').remove();
}

function transferData(cutElementTableId, targetElementTableId) {
  if ($(cutElementTableId).length) {
    var _tmpArr = []
    if ($(cutElementTableId).find('tbody input:checkbox.parentCheck:checked')) {
      // $(cutElementTableId).find('tbody input:checkbox:checked').each(function (index, val) {
      //var $clonedElm = $(this).closest('tr').clone();
      //var $clonedElm = $(this).closest('tr').children('td:nth-child(2)').text('');
      //var $clonedElm = $(this).closest('tr').children('td:nth-child(3)').html($($clonedElm).next().next().next().text());
      //var $clonedElm = $(this).closest('tr').children('td:nth-child(4)').html('PE');
      //var $clonedElm = $(this).closest('tr').children('td:nth-child(5)').html('<input type="checkbox" />');
      //var $clonedElm = $(this).closest('tr').children('td:nth-child(6)').html('LO');
      //var $clonedElm = $(this).closest('tr').remove();
      $(targetElementTableId).find('tbody tr.addedRow').show().addClass('table-head');
      //_tmpArr.push($clonedElm);
      //}).promise().done(function () {

      setTimeout(function () {
        $('tr.addedRow').removeClass('table-head');
      }, 1000);
    } else if ($(cutElementTableId).find('tbody input:checkbox.childCheck:checked')) {
      $(targetElementTableId).find('tbody tr.vendor-list-toggle-row').css('display', 'block');
    }

  }
}

//function transferChildData(cutElementTableId, targetElementTableId) {
//    if ($(cutElementTableId).length) {
//        var _tmpArr = []
//        $(cutElementTableId).find('tbody input:checkbox:checked').each(function (index, val) {
//            var $clonedElm = $(this).closest('tr').clone();
//            var $clonedElm = $(this).closest('tr').remove();

//            if ($(cutElementTableId).find('tbody input:checkbox:checked') && $(targetElementTableId).find('tbody input:checkbox:checked')) {
//                //$(targetElementTableId).find('tbody input:checkbox:checked').closest('tr').insertAfter($clonedElm);

//                alert('');
//            }
//            else {
//                alert('dsf');
//            }

//        })
//    }
//}

function toggleExpandBtn(id) {
  if ($(id).length) {
    $(id).children('i').toggleClass('glyphicon-resize-full').toggleClass('glyphicon-resize-small');
  }
}

function addsummRow(id) {

  if ($(id).length) {
    var $headColumns = $(id + ' > thead > tr > th');
    var $clonedRow = $(id + ' > tbody > tr:first-child').clone();
    var htmlInput = '<td><input type="text" class="form-text" style="width:40px;height:20px;border:1px solid #c1c1c1;" onblur="addedRecordEntry(this);" /></td>';
    var selectBox = '<select></select>'

    var $addingRow = $('<tr></tr>');
    $headColumns.each(function (index) {
      switch ($(this).data('type')) {
        case 'blank':
          $addingRow.append('<td></td>');
          break;
        default:
          $addingRow.append(htmlInput);
          break;
      }

    }).promise().done(function () {
      $(id + ' > tbody > tr').removeClass('active-row');
      $(id + ' > tbody').prepend($addingRow.addClass(''));
    });
  }
}

function showVal(id) {
  var $row = $(id).closest('tr');
  $row.children('td').each(function () {
    $input = $(this).children('input[type="text"]');
    $input.val($input.parent().attr('data-type'));
    //  $(this).children('input[type="text"]').val($(this).attr('data-type'));
  });
}

function selectdropdown(id, e) {
  // console.log(arguments[0]);
  var liVal = e.target.innerText.trim()
  $(id).parent().prev('.dropdown-toggle').children('.eventName ').text(liVal);
}

function customdropdown(id, e) {
  // console.log(arguments[0]);
  var liVal = e.target.innerText.trim()
  $(id).parent().children('.dropdown-toggle').children('.eventName ').text(liVal);
}

function showSuccessMsg(id) {
  // window.location.href = "projectLanding1.html";
  window.location.href = "detailedEstimating_landing.html";
}

function chooseHisOption(id, e) {
  window.location.href = "processingHistory.html";
}

function chooseHisOption2(id, e) {
  window.location.href = "processingHistory.html";
}

// 24 July 2017 by Sapna
function getval(id, dropdownval) {
  var cellVal = $(id + ' tr.active').text();
  var empty = [];
  $(id + ' tr.active').each(function () {
    empty.push($(this).text());
    if (cellVal != '') {
      $(dropdownval).children('.eventName').text(empty.join(','));
    }
  })
   $(id + ' tr.active').removeClass('active');
}



// function viewFilter(id, targetTable, viewOptionTable){
//   debugger;
//   var dataView = [];
//   var datashow = [];
//   $(viewOptionTable +' tbody td.activecol,'+viewOptionTable+'#viewOptionTable1 tbody td.show-tags').each(function (i, j) {
//     dataView[i] = $(this).attr('data-attr-name');
//   });
  
//   $(targetTable+' thead th, tbody td').each(function (i, j) {
//     $(targetTable +' thead th[data-attr-name="'+dataView[i]+'"], tbody td[data-attr-name="'+dataView[i]+'"]').hide();    
//   });
  
//   $(targetTable+' thead th, tbody td').each(function (i, j) {
//     $(targetTable +' thead th[data-attr-name="'+dataView[i]+'"], tbody td[data-attr-name="'+dataView[i]+'"]').show();    
//   });
//   $(viewOptionTable +' tbody td.activecol').css('display','table-cell');
// }

 
function removeTrSelection(id, tableID){
  $(tableID + ' tr.active').removeClass('active');
}


function viewFilter(id, targetTable, viewOptionTable){
  //debugger;
  var clickedColName =[];
  var unclickedColName =[];
  $( viewOptionTable + " tbody tr td.activecol").each(function(i){
    clickedColName.push($(this).attr('data-attr-name'));
    console.log(JSON.stringify(clickedColName));
    $(targetTable + " thead tr th[data-attr-name='"+clickedColName[i]+"']," + targetTable + " tbody tr td[data-attr-name='"+clickedColName[i]+"']").hide();
  });
  $( viewOptionTable + " tbody tr td.show-tags").each(function(i){
    unclickedColName.push($(this).attr('data-attr-name'));
    console.log(JSON.stringify(unclickedColName));
    $(targetTable + " thead tr th[data-attr-name='"+unclickedColName[i]+"']," + targetTable + " tbody tr td[data-attr-name='"+unclickedColName[i]+"']").show();
  });
}