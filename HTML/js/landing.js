$(document).ready(function () {
    $('#desktop-calendar').fullCalendar({
        height:460,
        header: {
               left: 'prev,next today',
               center: 'title',
               right: 'prevYear,nextYear'
           },
        events: [
            {
                title: 'Meeting',
                start: '2017-08-14'
            },
            {
                title: 'Meeting',
                start: '2017-08-12'
            },
            {
                title: 'Meeting',
                start: '2017-08-20'
            },
            {
                title: 'Meeting',
                start: '2017-08-05'
            },
            {
                title: 'Meeting',
                start: '2017-08-25'
            }
        ]
    });
});