//var thumbnailSliderOptions =
//        {
//            sliderId: "single-slider-frame",
//            orientation: "horizontal",
//            thumbWidth: "auto",
//            thumbHeight: "60px",
//            showMode: 1,
//            autoAdvance: true,
//            selectable: true,
//            slideInterval: 3000,
//            transitionSpeed: 1500,
//            shuffle: false,
//            startSlideIndex: false, //0-based
//            pauseOnHover: true,
//            initSliderByCallingInitFunc: false,
//            rightGap: 0,
//            keyboardNav: true,
//            mousewheelNav: false,
//            before: null,
//            license: "mylicense"
//        };
//function generateSider(options){
//    var mcThumbnailSlider = new ThumbnailSlider(options);
//}
//generateSider(thumbnailSliderOptions);
var filterOptions = {};
$(document).ready(function () {
    filterOptions.doorType = 'single';
    filterOptions.frameType = 'single';
    filterOptions.selectedDoor = 'HMD';
    filterOptions.selectedFrame = 'HMF';

    $('.door-menu-tabs>li').click(function () {

        filterOptions.doorType = $(this).attr('data-menu-type');
    });

    $('.frame-menu-tabs>li').click(function () {

        filterOptions.frameType = $(this).attr('data-menu-type');
    });

    $('.thumb').click(function () {
        $(this).siblings().removeClass('selected-submenuItems');
        $(this).addClass('selected-submenuItems');
    });

    $('.door-pills>li').click(function () {
        filterOptions.selectedDoor = $(this).attr('data-submenu-id');
    });

    $('.frame-pills>li').click(function () {
        filterOptions.selectedFrame = $(this).attr('data-submenu-id');
    });

    $('#filter-options tbody tr td').click(function () {
        var cellType = $(this).attr('cell-type');
        $("#filter-options tbody tr td[cell-type='" + cellType + "']").removeClass('selected-column');
        $(this).addClass('selected-column');
        filterOptions[cellType] = $(this).html();
    });
    $('#filter-options tfoot').click(function (){
        var $footerColumn=$(this).find('td').eq(0)
        switch ($footerColumn.html().toString().toLowerCase().trim()){
            case 'see more':
                $(this).siblings('tbody').find('tr').each(function (){
                        $(this).children().removeClass('selected-column');
                        $(this).parent().append($(this).clone(true));
                });
                $footerColumn.html('See less')
//                $(this).siblings('tbody').append($(this).siblings('tbody').html().clone(true))
                break;
            case 'see less':
                $(this).siblings('tbody').find('tr').each(function (index){
                    if(index>4){
                        $(this).remove();
                    }
                       
                });
                $footerColumn.html('See more')
                break;
        }
    });
    calculateCost()

    $("#single-hollow-metal-frame").als({
        visible_items: 12,
        scrolling_items: 1,
        orientation: "horizontal",
        circular: "no",
        autoscroll: "no"
    });
    $("#single-hollow-metal-door").als({
        visible_items: 12,
        scrolling_items: 1,
        orientation: "horizontal",
        circular: "no",
        autoscroll: "no"
    });
});

function calculateCost() {
    var totalDataTypes = [ 'cost', 'Amount', 'Extended'];
    for (var i = 0; i < totalDataTypes.length; i++) {
        var total = 0;
        $("#final-table tbody tr td[data-type='" + totalDataTypes[i] + "']").each(function () {
            total += Number($(this).html());
        });
        $("#final-total-table tbody tr td[data-type='" + totalDataTypes[i] + "']").html(total);
//        $("#final-table tfoot tr td[data-type='" + totalDataTypes[i] + "']").html(total);
        $("#final-table thead th").each(function (index){
                $("#final-total-table tbody tr td").eq(index).width($(this).width())
        });
    }
//    var quantityTotal = 0;
//    $("#final-table tbody tr td[data-type='Quantity']").each(function () {
//        quantityTotal += Number($(this).html());
//    });
//    $("#final-table tfoot tr td[data-type='Quantity']").html(quantityTotal);
}

function addCost() {
    console.log(filterOptions);
    var $rowStart = "<tr>";
    var $doorType = "<td data-type='Door Type'>" + filterOptions.doorType + "</td>";
    var $frameType = "<td data-type='Door Type'>" + filterOptions.frameType + "</td>";
    var $item = "<td data-type='Item'>" + filterOptions.selectedFrame + "</td>";
    var $partDetails = "<td data-type='Part Details'></td>";
    var $quantity = "<td data-type='Quantity'>1</td>";
    var $amount = "<td data-type='Amount'>250</td>";
    var $cost = "<td data-type='cost'>250</td>";
    var $extended = "<td data-type='Extended'>2</td>";
    var $rowEnd = "</tr>";
    $("#final-table tbody").append($rowStart + '<td></td>' + $doorType + $frameType + $item + $partDetails + $quantity + $amount + $cost + $extended + $rowEnd);
    calculateCost();
}

function addFrame() {
    var reader = new FileReader();
    var file = $("input[id='frame-image']")[0].files[0];
    reader.onload = function (e) {
        var $listElement = '<li class="als-item thumb"><img src="' + e.target.result + '"></li>'
//        console.log($listElement)
        $('#single-hollow-metal-frame ul li').eq(0).before($listElement);
        $("#single-hollow-metal-frame").als({
            visible_items: 12,
            scrolling_items: 1,
            orientation: "horizontal",
            circular: "no",
            autoscroll: "no"
        });
    };
    reader.readAsDataURL(file);
}
function addDoor() {
    var reader = new FileReader();
    var file = $("input[id='door-image']")[0].files[0];
    reader.onload = function (e) {
        var $listElement = '<li class="als-item thumb"><img src="' + e.target.result + '"></li>'
//        console.log($listElement)
        $('#single-hollow-metal-door ul li').eq(0).before($listElement);
        $("#single-hollow-metal-door").als({
            visible_items: 12,
            scrolling_items: 1,
            orientation: "horizontal",
            circular: "no",
            autoscroll: "no"
        });
    };
    reader.readAsDataURL(file);
}

function seeAllOptions(tableId){
    $('#'+tableId+' tbody').append($('#'+tableId+' tbody').html());
};
