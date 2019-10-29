$(document).ready(function () {

    if (pagename == "VisitRequest.aspx") {
        debugger;
        //BlockUI();
        AddNewFamilyMemberRow();
        ValidateFormVisitRequest();
        SaveVisitRequestForm();
        BindDatePicker();
    }
});

function SaveVisitRequestForm() {
    $('.submit').click(function () {
        //block of code that runs when the click event triggers
        debugger;
        ValidateFamilyMemberInfo();
        $('.submit').submit()
        var valid = $("#VisitRequestForm").data('bootstrapValidator');
        BlockUI();
        if (valid.isValid() && Name != '' && Age != '')
        {
            $.getScript(scriptbase + "SP.js", InsertItemToVisitRequestList);
            
        }
        else
        {
            UnblockUI();
        }

    });
}
function InsertItemToVisitRequestList() {

    var listTitle = VisitRequestList;
    //Get the current client context  
    //context = SP.ClientContext.get_current();

    ctx = new SP.ClientContext(appWebUrl);//Get the SharePoint Context object based upon the URL  
    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web(); //Get the Site   


    var airportList = web.get_lists().getByTitle(listTitle);
    //Create a new record  
    var listItemCreationInformation = new SP.ListItemCreationInformation();
    listItem = airportList.addItem(listItemCreationInformation);
    //Set the values
    var d = new Date();
    var strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();

    listItem.set_item('EmployeeID', $("#empid").val());
    listItem.set_item('Division', $("#division").val());
    listItem.set_item('EmployeeName', $("#empname").val());
    listItem.set_item('Designation', $("#designation").val());
    listItem.set_item('Department', $("#dept").val());
    listItem.set_item('MobileNumber', $("#mobile").val());
    listItem.set_item('CostCentreDescription', $("#cost").val());
    listItem.set_item('GPS', $("#gps").val());
    listItem.set_item('VisitDate', $("#VisitDate").val());
    listItem.set_item('CardReturnDate', $("#cardreturndate").val());
    listItem.update();
    ctx.load(listItem);
    ctx.executeQueryAsync(Function.createDelegate(this, FamilyMemberInformationSave), Function.createDelegate(this, AddListItemFailed));
}

function FamilyMemberInformationSave() {
    masterid = listItem.get_id();

    lists = web.get_lists().getByTitle(VisitRequestFamilylist); //Get the List based upon the Title  
    listCreationInformation = new SP.ListItemCreationInformation(); //Object for creating Item in the List  

    var detailItems = tblToJson($("[id$=MedicalTable] tbody tr"));

    for (var i = 0; i < detailItems.length; i++) {
        DetaillistItem = lists.addItem(listCreationInformation);

        DetaillistItem.set_item("VisitRequestID", masterid);
        DetaillistItem.set_item("MemberName", detailItems[i][0]);
        DetaillistItem.set_item("Age", detailItems[i][1]);
        DetaillistItem.set_item("Relation", detailItems[i][2]);


        DetaillistItem.update(); //Update the List Item 
        ctx.load(DetaillistItem);

        results.push(DetaillistItem);


    }
    showStatusMsgPopup("1", "Visit Request added successfully");
    ctx.executeQueryAsync(PageRedirectToHome, AddListItemFailed);
}

function PageRedirectToHome()
{
    UnblockUI();
    PageRedirect(location.href.replace(pagename, HomeView), 2000);
}

var ValidateFormVisitRequest = function () {

    if ($('#VisitRequestForm').length > 0) {

        $("#empid").focus();

        $('#VisitRequestForm').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                empid: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                division: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                empname: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                designation: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                dept: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                mobile: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                cost: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                gps: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                VisitDate: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                cardreturndate: {
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


function AddListItemFailed(sender, args) {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}

function AddNewFamilyMemberRow() {
    debugger;
    $(".addnewMedicalRow").on('click', function () {
        var clone_area = $($(".tr_MedicalTable").html());
        $('<tr>').addClass("tr_MedicalTable").append(clone_area).appendTo($("[id$=MedicalTable] tbody"));
        showStatusMsgPopup("1", "Row Added !");
    });
}
