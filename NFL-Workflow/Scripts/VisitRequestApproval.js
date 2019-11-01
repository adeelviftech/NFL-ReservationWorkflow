$(document).ready(function () {
    if (pagename == "VisitRequestApproval.aspx") {
        //$.getScript(scriptbase + "SP.js", GetVisitorDetail);
        //ExecuteOrDelayUntilScriptLoaded(GetVisitorDetail, "sp.js");
        $.getScript(scriptbase + "SP.js", getListItemFromHostWeb);
        ValidateFormVisitApprovalRequest();
        SaveApprovalForm();
        RejectVisitRequest();
        SendBackToInitiatorReq();
        GetEmployeeDetailAginstID();
        BindDatePicker();
    }
});

function BindEmployeeDropDown()
{
    list = lists.getByTitle(Users);
    
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml("<View><Query>" +
   "<Where>" +
      "<IsNotNull>" +
         "<FieldRef Name='ID' />" +
      "</IsNotNull>" +
   "</Where>" +
   "</Query></View>");
    GetEmployeeDropDown = list.getItems(camlQuery);
    ctx.load(GetEmployeeDropDown);
    ctx.executeQueryAsync(onQuerySucceeded, onFailedCallback);

}
function onQuerySucceeded() {
    var listItemEnumerator = GetEmployeeDropDown.getEnumerator();
    $("#EMPID").append('<option>---Select Vendor---</option>')
    while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
        $("#EMPID").append('<option id="' + oListItem.get_item('ID') + '">' + oListItem.get_item('Ename') + '</option>')
    }
}
function GetEmployeeDetailAginstID() {
    $("#EMPID").on('change', function () {
        debugger;
        BlockUI();
        GetSelectedDropdownvalueID = $("#EMPID option:selected").attr('id');
        if (GetSelectedDropdownvalueID == undefined) {
            $("#empnumber").val('').prop('readonly', false);
            $("#empemail").val('').prop('readonly', false);
            $("#ContactNo").val('').prop('readonly', false);
            UnblockUI();
        }
        else {
            list = lists.getByTitle(Users);
            var camlQuery = new SP.CamlQuery();
            camlQuery.set_viewXml("<View><Query>" +
             "<Where>" +
                "<Eq>" +
                   "<FieldRef Name='ID' />" +
                   "<Value Type='Counter'>" + GetSelectedDropdownvalueID + "</Value>" +
                "</Eq>" +
             "</Where>" +
          "</Query></View>");

            GetEmpInfo = list.getItems(camlQuery);
            ctx.load(GetEmpInfo);
            ctx.executeQueryAsync(FilledEmpInfo, onFailedCallback);
        }
        

    });

}

function FilledEmpInfo() {

    var enumerator = GetEmpInfo.getEnumerator();
    //Formulate HTML from the list items   
    var MainResult = 'Items in the Divisions list: <br><br>';
    //Loop through all the items   
    while (enumerator.moveNext()) {
        var listItem = enumerator.get_current();

        $("#empnumber").val(listItem.get_item("EmpID")).prop('readonly', true);
        $("#empemail").val(listItem.get_item("Email")).prop('readonly', true);
        $("#ContactNo").val(listItem.get_item("Cell")).prop('readonly', true);
    }
    UnblockUI();
}

function GetVisitorDetail()
{
    debugger;
    VisitorID = getParameterByName('ID');
    // Get the current context   
    list = lists.getByTitle(VisitRequestList);
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml("<View><Query>" +
       "<Where>" +
          "<Eq>" +
             "<FieldRef Name='ID' />" +
             "<Value Type='Counter'>" + VisitorID +"</Value>" +
          "</Eq>" +
       "</Where>" +
    "</Query></View>");
    GetVisitReqRecord = list.getItems(camlQuery);
    ctx.load(GetVisitReqRecord);
    ctx.executeQueryAsync(onSucceededCallback, onFailedCallback);

}
 

function onSucceededCallback() {
    var enumerator = GetVisitReqRecord.getEnumerator();
    //Formulate HTML from the list items   
    var MainResult = 'Items in the Divisions list: <br><br>';
    //Loop through all the items   
    while (enumerator.moveNext()) {
    var listItem = enumerator.get_current();
  
        $("#empid").val(listItem.get_item("EmployeeID")).prop('readonly', true);
        $("#division").val(listItem.get_item("Division")).prop('readonly', true);
        $("#empname").val(listItem.get_item("EmployeeName")).prop('readonly', true);
        $("#designation").val(listItem.get_item("Designation")).prop('readonly', true);
        $("#dept").val(listItem.get_item("Department")).prop('readonly', true);
        $("#mobile").val(listItem.get_item("MobileNumber")).prop('readonly', true);
        $("#cost").val(listItem.get_item("CostCentreDescription")).prop('readonly', true);
        $("#gps").val(listItem.get_item("GPS")).prop('readonly', true);
       
        $("#VisitDate").val(listItem.get_item("VisitDate")).prop('readonly', true);
        $("#cardreturndate").val(listItem.get_item("CardReturnDate")).prop('readonly', true);

    }
    //ExecuteOrDelayUntilScriptLoaded(GetVisitorFamilyDetails, "sp.js");
    ctx.executeQueryAsync(GetVisitorFamilyDetails, onFailedCallback);
}

//This function fires when the query fails   
function onFailedCallback(sender, args) {
    showStatusMsgPopup("3", args.get_message());
}

function GetVisitorFamilyDetails() {
    debugger;
    
    // Get the current context   
    VisitorID = getParameterByName('ID');
    list = lists.getByTitle(VisitRequestFamilylist);

    var caml = new SP.CamlQuery();
    caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='VisitRequestID' /><Value Type='Lookup'>" + VisitorID + "</Value></Eq></Where></Query></View>");
    itemCollectionFamilyMemberList = list.getItems(caml);
    ctx.load(itemCollectionFamilyMemberList);
    //ctx.executeQueryAsync(Function.createDelegate(this, this.onSucceededFamily), Function.createDelegate(this, this.onFailedFamily));
    ctx.executeQueryAsync(onSucceededFamily, onFailedFamily);

}

function onSucceededFamily() {
    var enumerator = itemCollectionFamilyMemberList.getEnumerator();
    //Formulate HTML from the list items   
    var MainResult = 'Items in the Divisions list: <br><br>';
    //Loop through all the items 
    $("#FamilyTable tbody").html('');
    while (enumerator.moveNext()) {
        var listItem = enumerator.get_current();
        $("#FamilyTable tbody").append(
           "<tr>" +
           "<td>" + listItem.get_item("MemberName") + "</td>" +
           "<td>" + listItem.get_item("Age") + "</td>" +
            "<td>" + listItem.get_item("Relation") + "</td>" +
           "</tr>"
        );
    }
}

//This function fires when the query fails   
function onFailedFamily(sender, args) {
    showStatusMsgPopup("3", args.get_message());
}

function SaveApprovalForm() {
    debugger;
    $('.submitapproval').click(function () {
        debugger;
        $('.submitapproval').submit()
        var Valid = $("#VisitRequestApprovalForm").data('bootstrapValidator');
        BlockUI();
        if (Valid.isValid()) {
            $.getScript(scriptbase + "SP.js", InsertApprovalItem);
        }
        else {
            UnblockUI();
        }
    });
}

function InsertApprovalItem() {

    ctx = new SP.ClientContext(appWebUrl);//Get the SharePoint Context object based upon the URL  
    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web(); //Get the Site   
    VisitorID = getParameterByName('ID');
    lists = web.get_lists().getByTitle(VisitRequestList); //Get the List based upon the Title  

    listItem = lists.getItemById(VisitorID);
    listItem.set_item("Cardhandoverdate", $("#cardhandoverdate").val());
    listItem.set_item("CardReturnD", $("#cardreturn").val());
    listItem.set_item("CardSerialNumber", $("#cardserial").val());
    listItem.set_item("EmployeeCardName", $("#employeename").val());
    listItem.set_item("EmployeeNumber", $("#empnumber").val());
    listItem.set_item("Email", $("#empemail").val());
    listItem.set_item("ContactNo", $("#ContactNo").val());
    listItem.set_item("Status", Approved);

    listItem.update(); //Update the List Item 
    ctx.load(listItem);
    ctx.executeQueryAsync(InsertVisitRequestHistory, HistoryFailed);

}

function InsertVisitRequestHistory() {

    masterid = listItem.get_id();

    lists = web.get_lists().getByTitle(VisitRequestHistory); //Get the List based upon the Title  
    listCreationInformation = new SP.ListItemCreationInformation(); //Object for creating Item in the List  

    HistoryListItem = lists.addItem(listCreationInformation);
    HistoryListItem.set_item("VisitRequestID", masterid);
    HistoryListItem.set_item("RequestStatus", Approved);
    HistoryListItem.set_item("RequestCommet", $("#commentbox").val());

    HistoryListItem.update(); //Update the List Item 
    ctx.load(HistoryListItem);
    showStatusMsgPopup("1", "Visit Request Approved successfully");
    ctx.executeQueryAsync(PageRedirectToHome, HistoryFailed);
}



function RejectVisitRequest() {
    debugger;
        $('.reject').click(function () {
            $('.reject').submit()
        BlockUI();
        $.getScript(scriptbase + "SP.js", RejectRecord);

    });
}

function RejectRecord() {
    debugger;
     //manageQueryStringParameter("ID");
    //masterid = Decrypt(encryptedMID, "Secret phrase");

    ctx = new SP.ClientContext(appWebUrl);//Get the SharePoint Context object based upon the URL  
    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web(); //Get the Site   
    VisitorID = getParameterByName('ID');
    lists = web.get_lists().getByTitle(VisitRequestList); //Get the List based upon the Title  

    listItem = lists.getItemById(VisitorID);
    listItem.set_item("Status", Rejected);

    listItem.update(); //Update the List Item 
    ctx.load(listItem);
    //Execute the batch Asynchronously 
    showStatusMsgPopup("4", "Visit Request Reject successfully");
    ctx.executeQueryAsync(InsertVisitRequestRejectHistory, RejectVisitRequestFail);
}

function InsertVisitRequestRejectHistory() {

    masterid = listItem.get_id();

    lists = web.get_lists().getByTitle(VisitRequestHistory); //Get the List based upon the Title  
    listCreationInformation = new SP.ListItemCreationInformation(); //Object for creating Item in the List  

    HistoryItemsForReject = lists.addItem(listCreationInformation);
    HistoryItemsForReject.set_item("VisitRequestID", masterid);
    HistoryItemsForReject.set_item("RequestStatus", Rejected);
    HistoryItemsForReject.set_item("RequestCommet", $("#commentbox").val());

    HistoryItemsForReject.update(); //Update the List Item 
    ctx.load(HistoryItemsForReject);
    showStatusMsgPopup("1", "Visit Request Reject successfully");
    ctx.executeQueryAsync(PageRedirectToHome, HistoryFailed);
}

function HistoryFailed() {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}

function SendBackToInitiatorReq() {
    debugger;
    $('.sendback').click(function () {
        $('.sendback').submit()
        BlockUI();
        $.getScript(scriptbase + "SP.js", AssignedReqToInitiator);

    });
}

function AssignedReqToInitiator() {
    
    // Get the current context   
    VisitorID = getParameterByName('ID');
    list = lists.getByTitle(VisitRequestList);
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml("<View><Query>" +
   "<Where>" +
      "<Eq>" +
         "<FieldRef Name='ID' />" +
         "<Value Type='Counter'>" + VisitorID + "</Value>" +
      "</Eq>" +
   "</Where>" +
"</Query></View>");
    itemCollectionPrevioususer = list.getItems(camlQuery);
    ctx.load(itemCollectionPrevioususer);
    ctx.executeQueryAsync(UpdateAssignedTo, onFailedAssignedTo);

}

function UpdateAssignedTo() {

    var enumerator = itemCollectionPrevioususer.getEnumerator();
    //Formulate HTML from the list items   
    var MainResult = 'Items in the Divisions list: <br><br>';
    //Loop through all the items   
    while (enumerator.moveNext()) {
         listItem = enumerator.get_current();
        ID = listItem.get_item("ID");
        PreviousUser = listItem.get_item("Author");


        ctx = new SP.ClientContext(appWebUrl);//Get the SharePoint Context object based upon the URL  
        appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
        web = appCtxSite.get_web(); //Get the Site   

        lists = web.get_lists().getByTitle(VisitRequestList); //Get the List based upon the Title  

        listItem = lists.getItemById(ID);
        listItem.set_item("Assigned", PreviousUser);

        listItem.update(); //Update the List Item 
        ctx.load(listItem);
        showStatusMsgPopup("2", "Visit Request Sent Back To Initiator successfully");
        ctx.executeQueryAsync(InsertVisitRequestSentBackHistory, RejectVisitRequestFail);
    }
        

}

function InsertVisitRequestSentBackHistory() {

    masterid = listItem.get_id();

    lists = web.get_lists().getByTitle(VisitRequestHistory); //Get the List based upon the Title  
    listCreationInformation = new SP.ListItemCreationInformation(); //Object for creating Item in the List  

    HistoryListItem = lists.addItem(listCreationInformation);
    HistoryListItem.set_item("VisitRequestID", masterid);
    HistoryListItem.set_item("RequestStatus", SentBack);
    HistoryListItem.set_item("RequestCommet", $("#commentbox").val());

    HistoryListItem.update(); //Update the List Item 
    ctx.load(HistoryListItem);
    showStatusMsgPopup("1", "Visit Request Sent Back To Initiator successfully");
    ctx.executeQueryAsync(PageRedirectToHome, HistoryFailed);
}

var ValidateFormVisitApprovalRequest = function () {
    debugger;
    if ($('#VisitRequestApprovalForm').length > 0) {

        $("#cardhandoverdate").focus();

        $('#VisitRequestApprovalForm').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                cardhandoverdate: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                cardreturn: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                cardserial: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                employeename: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                empnumber: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                empemail: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                ContactNo: {
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                },
                commentbox: {
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

function onFailedAssignedTo() {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}
function PageRedirectToHome() {
    UnblockUI();
    PageRedirect(location.href.replace(pagename, HomeView), 2000);
}

function RejectVisitRequestFail(sender, args) {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}

