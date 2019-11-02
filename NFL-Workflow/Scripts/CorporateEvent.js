$(document).ready(function () {

    if (pagename == "CorporateEvent.aspx") {
        debugger;
        addnewMedicalRow();
        ValidateFormCorporateEvent();
        SaveCorporateEventForm();
        BindDatePicker();
    }
});
function SaveCorporateEventForm() {
    debugger;
    $('.submit').click(function () {
        debugger;
        ValidateDayplandetails();
        $('.submit').submit()
        var Valid = $("#CorporateEventForm").data('bootstrapValidator');
        BlockUI();
        if (Valid.isValid()) {
            $.getScript(scriptbase + "SP.js", AddListItem);
        }
        else {
            UnblockUI();
        }
    });
}
function AddListItem() {
    debugger;

    var listTitle = CorporateEvent;
    hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));
    appWebUrl = appWebUrl.replace('#', '');
    ctx = new SP.ClientContext(appWebUrl);//Get the SharePoint Context object based upon the URL  
    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web(); //Get the Site   
    var airportList = web.get_lists().getByTitle(listTitle);
    //Create a new record  
    var listItemCreationInformation = new SP.ListItemCreationInformation();
    listItem = airportList.addItem(listItemCreationInformation);
    var d = new Date();
    var strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    listItem.set_item('EmployeeID', $("#EmpID").val());
    listItem.set_item('Division', $("#Division").val());
    listItem.set_item('EmployeeName', $("#Name").val());
    listItem.set_item('Designation', $("#Designation").val());
    listItem.set_item('Department', $("#department").val());
    listItem.set_item('MobileNumber', $("#MblNumber").val());
    listItem.set_item('CostCentreDescription', $("#CostCenterDescription").val());
    listItem.set_item('GPS', $("#GPS").val());
    listItem.set_item('Nameofevent', $("#NameOfEvent").val());
    listItem.set_item('Numberofattendees', $("#NumberofAttendees").val());
    listItem.set_item('DateFrom', $("#Datefrom").val());
    listItem.set_item('DateTo', $("#Dateto").val());
    listItem.set_item('Timeduration', $("#TimeDuration").val());
    listItem.set_item('NumberofChalet', $("#Accommdationtype1").val());
    listItem.set_item('MeetingRoomRequired', $("#meetingRoom1").val());
    listItem.set_item('NumberofCabana', $("#numofCabana").val());
    listItem.set_item('MeetingRoom', $("#numofmeetingRoomReq").val());
    listItem.update();
    ctx.load(listItem);
    ctx.executeQueryAsync(Function.createDelegate(this, CorporateDetailListSave), Function.createDelegate(this, AddListItemFailed)
   );
}

function CorporateDetailListSave() {
    masterid = listItem.get_id();

    lists = web.get_lists().getByTitle(CorporateDetailList); //Get the List based upon the Title  
    listCreationInformation = new SP.ListItemCreationInformation(); //Object for creating Item in the List  

    var detailItems = tblToJson($("[id$=MedicalTable] tbody tr"));

    for (var i = 0; i < detailItems.length; i++) {
        listItem = lists.addItem(listCreationInformation);

        listItem.set_item("CorporateID", masterid);
        listItem.set_item("Date", detailItems[i][0]);
        listItem.set_item("Time", detailItems[i][1]);
        listItem.set_item("Description", detailItems[i][2]);

        listItem.update(); //Update the List Item 
        ctx.load(listItem);

        results.push(listItem);

    }
    showStatusMsgPopup("1", "Corporate Details added successfully");
    ctx.executeQueryAsync(PageRedirectToHome, AddListItemFailed);

}

function PageRedirectToHome() {
    //UnblockUI();
    PageRedirect(location.href.replace(pagename, HomeView), 2000);
}

function AddListItemFailed(sender, args) {

    showStatusMsgPopup("3", args.get_message());
}

function addnewMedicalRow() {
    $(".addnewMedicalRow").on('click', function () {
        debugger;
        var clone_area = $($(".tr_MedicalTable").html());
        $('<tr>').addClass("tr_MedicalTable").append(clone_area).appendTo($("[id$=MedicalTable] tbody"));
        showStatusMsgPopup("1", "Row Added !");
    });
}

var ValidateFormCorporateEvent = function () {
    debugger;
    if ($('#CorporateEventForm').length > 0) {

        $("#NameOfEvent").focus();

        $('#CorporateEventForm').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                NameOfEvent: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                NumberofAttendees: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                Datefrom: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                Dateto: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                TimeDuration: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                numofCabana: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                numofmeetingRoomReq: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
            }
        });
    }
}
function ValidateDayplandetails() {

    //$('.plansdate').each(function (i, e) {
    //    Name = $(e).val();
    //    if (Name == '') {
    //        $($('.Name_error')[i]).text('Required')
    //    }
    //    else {
    //        $($('.Name_error')[i]).text('')
    //    }
    //});

    //$('.planstime').each(function (i, e) {
    //    Age = $(e).val();
    //    if (Age == '' || Age == '0') {
    //        $($('.Date_error')[i]).text('Required')
    //    }
    //    else {
    //        $($('.Date_error')[i]).text('')
    //    }
    //});
    $('.PlansDescription').each(function (i, e) {
        Relation = $(e).val();
        if (Relation == '') {
            $($('.Description_error')[i]).text('Required')
        }
        else {
            $($('.Description_error')[i]).text('')
        }
    });
}