$(document).ready(function () {

    if (pagename == "AccommodationRequests.aspx") {
        debugger;
        BlockUI();
        AddNewAccFamilyMemberRow();
        ValidateFormAccommodataionRequest();
        SaveVisitRequestForm();
        BindDatePicker();
    }
});

function SaveVisitRequestForm() {
    $('.submitAccommodation').click(function () {
        //block of code that runs when the click event triggers
        debugger;
        ValidateFamilyMemberInfoAccommodation();
        $('.submitAccommodation').submit()
        var Valid = $("#AccommodationRequestForm").data('bootstrapValidator');
        BlockUI();
        if (Valid.isValid() && Name != '' && Age != '' && CheckImageAvailability()) {
            $.getScript(scriptbase + "SP.js", InsertMasterDetailAccommodationList);
        }
        else {
            UnblockUI();
        }

    });
}
function InsertMasterDetailAccommodationList() {

    var listTitle = AccommodationList;
    //Get the current client context  
    //context = SP.ClientContext.get_current();

    ctx = new SP.ClientContext(appWebUrl);//Get the SharePoint Context object based upon the URL  
    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web(); //Get the Site   


    var Accommodationlist = web.get_lists().getByTitle(listTitle);
    //Create a new record  
    var listItemCreationInformation = new SP.ListItemCreationInformation();
    listItem = Accommodationlist.addItem(listItemCreationInformation);

    listItem.set_item('EmployeeID', $("#empidAcc").val());
    listItem.set_item('Division', $("#divisionAcc").val());
    listItem.set_item('EmployeeName', $("#empnameAcc").val());
    listItem.set_item('Designation', $("#designationAcc").val());
    listItem.set_item('Department', $("#deptAcc").val());
    listItem.set_item('MobileNumber', $("#mobileAcc").val());
    listItem.set_item('CostCentreDescription', $("#costAcc").val());
    listItem.set_item('GPS', $("#gpsAcc").val());
    listItem.set_item('Status', Pending);
    listItem.set_item('AssignedTo', _spPageContextInfo.userId);
    listItem.set_item('VisitDate', $("#VisitDateAcc").val());
    listItem.set_item('CardReturnDate', $("#cardreturndateAcc").val());
    listItem.update();
    ctx.load(listItem);
    ctx.executeQueryAsync(SaveAccommodationFamilyMemberInfo, AddListItemFailed);
}

function SaveAccommodationFamilyMemberInfo() {
    masterid = listItem.get_id();

    lists = web.get_lists().getByTitle(AccommodationDetailList); //Get the List based upon the Title  
    listCreationInformation = new SP.ListItemCreationInformation(); //Object for creating Item in the List  

    var detailItems = tblToJson($("[id$=AccommodationTable] tbody tr"));

    for (var i = 0; i < detailItems.length; i++) {
        DetailListForAccommodationRequest = lists.addItem(listCreationInformation);

        DetailListForAccommodationRequest.set_item("AccommodationID", masterid);
        DetailListForAccommodationRequest.set_item("MemberName", detailItems[i][0]);
        DetailListForAccommodationRequest.set_item("Age", detailItems[i][1]);
        DetailListForAccommodationRequest.set_item("Relation", detailItems[i][2]);
        if (detailItems[i][3] != undefined) {
            DetailListForAccommodationRequest.set_item("CNIC", CreateGuid() + detailItems[i][3][0].name);
        }
        if (detailItems[i][4].length > 0) {
            DetailListForAccommodationRequest.set_item("NikahNama", CreateGuid() + detailItems[i][4][0].name);
        }


        DetailListForAccommodationRequest.update(); //Update the List Item 
        ctx.load(DetailListForAccommodationRequest);

        results.push(DetailListForAccommodationRequest);


    }
    ctx.executeQueryAsync(SaveCNIC, AddListItemFailed);
}

function SaveCNIC() {

    var detailItems = tblToJson($("[id$=AccommodationTable] tbody tr"));

    results.forEach(function (item, index) {
        var timecninc = 2000;
        if (index > 0) {
            timecninc = 0000;
        }
        setTimeout(
                function () {
                    uploadFile(AccommodationDetailList, item.get_id(), detailItems[index][3], item.get_item("CNIC")).then(
                            function () {
                            },
                            function (sender, args) {
                                UnblockUI();
                                console.log("Error uploading");
                            }
                        );
                }, timecninc);

    });

   
    ctx.executeQueryAsync(SaveNikahNama, AddListItemFailed);
    

}

function SaveNikahNama() {
    var detailItems = tblToJson($("[id$=AccommodationTable] tbody tr"));
    results.forEach(function (item, index) {
        var timenikahnama = 2000;
        if (index > 0) {
            timenikahnama = 0000;
        }

        setTimeout(
                function () {
                    uploadFile(AccommodationDetailList, item.get_id(), detailItems[index][4], item.get_item("NikahNama")).then(
                            function () {
                            },
                            function (sender, args) {
                                UnblockUI();
                                console.log("Error uploading");
                            }
                        );
                }, timenikahnama);

    });

    showStatusMsgPopup("1", "Accommodation Request Added Successfully");
    ctx.executeQueryAsync(PageRedirectToHome, AddListItemFailed);
}

function PageRedirectToHome() {
    UnblockUI();
    PageRedirect(location.href.replace(pagename, HomeView), 2000);
}

function AddListItemFailed(sender, args) {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}

var ValidateFormAccommodataionRequest = function () {
    debugger;
    if ($('#AccommodationRequestForm').length > 0) {

        $("#empid").focus();

        $('#AccommodationRequestForm').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                empidAcc: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                empnameAcc: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                divisionAcc: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                designationAcc: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                deptAcc: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                gpsAcc: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                mobileAcc: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                costAcc: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                VisitDateAcc: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                cardreturndateAcc: {
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

function AddNewAccFamilyMemberRow() {
    debugger;
    $(".addnewAccommodationRow").on('click', function () {
        var clone_area = $($(".tr_AccommodationTable").html());
        $('<tr>').addClass("tr_AccommodationTable").append(clone_area).appendTo($("[id$=AccommodationTable] tbody"));
        showStatusMsgPopup("1", "Row Added !");
    });
}

