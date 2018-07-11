var permissions = [
    {
        text: 'Application Setup',
        nodes: [
            {
                text: "Tab Sheet",
                nodes: [
                    {
                        text: "Company Preference",
                        nodes: [
                            {
                                text: "Include Label In Opening Description?"
                            },
                            {
                                text: "Allow Duplicate Hdw Sets?"
                            },
                            {
                                text: "Allow Duplicate Tags?"
                            },
                            {
                                text: "Lock Projects's Date Created?"
                            },
                            {
                                text: "Door User-Defined Captions?",
                                nodes: []
                            },
                            {
                                text: "Email Options For Completed Tasks",
                                nodes: []
                            },
                            {
                                text: "Frame User-Defined Captions",
                                nodes: []
                            },
                            {
                                text: "Project Tasks",
                                nodes: []
                            },
                            {
                                text: "Measurement System"
                            }
                        ]
                    },
                    {
                        text: "User Preference",
                        nodes: []
                    }
                ]
            }
        ]
    },
    {
        text: 'Approved Products',
        nodes: []
    },
    {
        text: 'Architects/Contractors',
        nodes: []
    },
    {
        text: 'Assign Users To projects',
        nodes: []
    },
    {
        text: 'Calendar',
        nodes: []
    },
    {
        text: 'Copy Grid Views',
        nodes: []
    },
    {
        text: 'Copy Hardware To Project',
        nodes: []
    },
    {
        text: 'Hardware Ordering',
        nodes: []
    },
    {
        text: 'Hardware Sets',
        nodes: []
    },
    {
        text: 'Material Order',
        nodes: []
    },
    {
        text: 'Open Project',
        nodes: []
    },
    {
        text: 'Price Book Cleanup',
        nodes: []
    },
    {
        text: 'Process Hardware',
        nodes: []
    },
    {
        text: 'Process Material',
        nodes: []
    }
];
$(document).ready(function () {
    $('#permisions-action').hide();
    $('#permission-tree').treeview({data: permissions,selectedBackColor:'#00a0d0'});
    $('#permission-tree').on('nodeSelected', function (event, data) {
        $('#permisions-action').show();
        $('#permisions-action .box-header h3').html(data.text);
    });
    

    $('#permissions-info').hide();
    $('#projectMgmtTbl tbody tr').click(function () {
        $('#permissions-info').hide();
        $('#permissions-info').fadeIn();
    });
});