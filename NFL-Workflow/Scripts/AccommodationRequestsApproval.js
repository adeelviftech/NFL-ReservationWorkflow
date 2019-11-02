$(document).ready(function () {
    if (pagename == "AccommodationRequestsApproval.aspx") {
        BlockUI();
       
        $.getScript(scriptbase + "SP.js", getListItemFromHostWeb);
        SaveApprovalFormAccommodation();
        RejectAccRequest();
        BindDatePicker();
       
    }
});



function GetAccommodationApprovalView() {
    debugger;
    AccommodationID = getParameterByName("ID");
    // Get the current context   
    var ListName = AccommodationList;
    hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));
    appWebUrl = appWebUrl.replace('#', '');
    var ctx = new SP.ClientContext(appWebUrl);

    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web();

    var ViewList = web.get_lists().getByTitle(ListName);

    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml("<View><Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>" + AccommodationID + "</Value></Eq></Where></Query></View>");
    AccommodationListForDataGet = ViewList.getItems(camlQuery);
    ctx.load(AccommodationListForDataGet);
    //ctx.executeQueryAsync(Function.createDelegate(this, this.onSucceededView), Function.createDelegate(this, this.onFailedCallback));
    ctx.executeQueryAsync(onSucceededAccommodationRequestApproval, FailedView)

}

function onSucceededAccommodationRequestApproval() {
    var enumerator = AccommodationListForDataGet.getEnumerator();
    //Formulate HTML from the list items   
    var MainResult = 'Items in the Divisions list: <br><br>';
    //Loop through all the items   
    while (enumerator.moveNext()) {
        var listItem = enumerator.get_current();

        $("#empidAcc").val(listItem.get_item("EmployeeID")).prop('readonly', true);
        $("#divisionAcc").val(listItem.get_item("Division")).prop('readonly', true);
        $("#empnameAcc").val(listItem.get_item("EmployeeName")).prop('readonly', true);
        $("#designationAcc").val(listItem.get_item("Designation")).prop('readonly', true);
        $("#deptAcc").val(listItem.get_item("Department")).prop('readonly', true);
        $("#mobileAcc").val(listItem.get_item("MobileNumber")).prop('readonly', true);
        $("#costAcc").val(listItem.get_item("CostCentreDescription")).prop('readonly', true);
        $("#gpsAcc").val(listItem.get_item("GPS")).prop('readonly', true);
        $("#comment").val(listItem.get_item("GPS")).prop('readonly', true);
        if (listItem.get_item("Status") == Pending) {
            $("#VisitDateAcc").val(convertDateTime(listItem.get_item("VisitDate"))).prop('readonly', false);
            $("#cardreturndateAcc").val(convertDateTime(listItem.get_item("CardReturnDate"))).prop('readonly', false);
            $('.submitUpateAcc').show();
        }
        else {
            $("#VisitDateAcc").val(convertDateTime(listItem.get_item("VisitDate"))).prop('readonly', true);
            $("#cardreturndateAcc").val(convertDateTime(listItem.get_item("CardReturnDate"))).prop('readonly', true);
        }
    }
    ctx.executeQueryAsync(GetAccommodationFamilyDetailsApprovalView, FailedView)
    //ExecuteOrDelayUntilScriptLoaded(GetVisitorFamilyDetailsView, "sp.js");
}

function GetAccommodationFamilyDetailsApprovalView() {
    debugger;
    AccommodationID = getParameterByName("ID");
    // Get the current context   
    var ListName = AccommodationDetailList;
    hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));
    appWebUrl = appWebUrl.replace('#', '');
    var ctx = new SP.ClientContext(appWebUrl);

    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web();

    var bList = web.get_lists().getByTitle(ListName);

    var caml = new SP.CamlQuery();
    caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='AccommodationID' /><Value Type='Lookup'>" + AccommodationID + "</Value></Eq></Where></Query></View>");
    AccommodationRequestViewForm = bList.getItems(caml);
    ctx.load(AccommodationRequestViewForm);
    //ctx.executeQueryAsync(Function.createDelegate(this, this.onSucceededFamily), Function.createDelegate(this, this.onFailedFamily));
    ctx.executeQueryAsync(onSucceededAccommodationFamily_ApprovalView, FailedView);

}

function onSucceededAccommodationFamily_ApprovalView() {
    debugger;
    var enumeratorList = AccommodationRequestViewForm.getEnumerator();
    //Formulate HTML from the list items   
    // var MainResult = 'Items in the Divisions list: <br><br>';
    //Loop through all the items 
    $("#AccommodationTableView tbody").html('');
    while (enumeratorList.moveNext()) {
        var listItem = enumeratorList.get_current();
        var hrefcnic = MainURL + SubURL + listItem.get_item("ID") + "/" + listItem.get_item("CNIC");
        var hrefnikahnama = MainURL + SubURL + listItem.get_item("ID") + "/" + listItem.get_item("NikahNama");
        $("#AccommodationTableView tbody").append(
           "<tr>" +
           "<td>" + listItem.get_item("MemberName") + "</td>" +
           "<td>" + listItem.get_item("Age") + "</td>" +
            "<td>" + listItem.get_item("Relation") + "</td>" +
            "<td><a href='" + hrefcnic + "' target='_blank'>CNIC</a></td>" +
            "<td><a href='" + hrefnikahnama + "' target='_blank'>Nikah Nama</a></td>" +
           "</tr>"
        );
    }
    UnblockUI();
}


function SaveApprovalFormAccommodation() {
    debugger;
    $('.submitapprovalAcc').click(function () {
        debugger;
        $('.submitapprovalAcc').submit()
        //var Valid = $("#ApprovalFormAcc").data('bootstrapValidator');

        var CommentBox = $("#commentboxAcc").val();
        if (CommentBox == '') {
            $('.CommentBOX').text('Required')
        }
        else {
            $('.CommentBOX').text('')
        }
        BlockUI();
        if (CommentBox != '') {
            $.getScript(scriptbase + "SP.js", InsertApprovalItemForAccommodation);
        }
        else {
            UnblockUI();
        }
    });
}

function InsertApprovalItemForAccommodation() {

    ctx = new SP.ClientContext(appWebUrl);//Get the SharePoint Context object based upon the URL  
    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web(); //Get the Site   
    AccommodationID = getParameterByName('ID');
    lists = web.get_lists().getByTitle(AccommodationList); //Get the List based upon the Title  

    listItem = lists.getItemById(AccommodationID);
    
    listItem.set_item("Status", Approved);

    listItem.update(); //Update the List Item 
    ctx.load(listItem);
    ctx.executeQueryAsync(InsertAccommodationRequestHistory, HistoryFailed);

}

function InsertAccommodationRequestHistory() {

    masterid = listItem.get_id();

    lists = web.get_lists().getByTitle(AccommodationRequestHistoryList); //Get the List based upon the Title  
    listCreationInformation = new SP.ListItemCreationInformation(); //Object for creating Item in the List  

    HistoryListItem = lists.addItem(listCreationInformation);
    HistoryListItem.set_item("AccommodationID", masterid);
    HistoryListItem.set_item("RequestStatus", Approved);
    HistoryListItem.set_item("RequestCommet", $("#commentboxAcc").val());

    HistoryListItem.update(); //Update the List Item 
    ctx.load(HistoryListItem);
    showStatusMsgPopup("1", "Accommodation Request Approved successfully");
    ctx.executeQueryAsync(PageRedirectToHome, HistoryFailed);
}


function SendBackToInitiatorAccReq() {
    debugger;
    $('.sendbackAcc').click(function () {
        $('.sendbackAcc').submit()
        BlockUI();
        $.getScript(scriptbase + "SP.js", AssignedReqToInitiator);

    });
}

function AssignedReqToInitiator() {

    // Get the current context   
    AccommodationID = getParameterByName('ID');
    list = lists.getByTitle(AccommodationList);
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml("<View><Query>" +
   "<Where>" +
      "<Eq>" +
         "<FieldRef Name='ID' />" +
         "<Value Type='Counter'>" + AccommodationID + "</Value>" +
      "</Eq>" +
   "</Where>" +
"</Query></View>");
    itemCollectionPrevioususer = list.getItems(camlQuery);
    ctx.load(itemCollectionPrevioususer);
    ctx.executeQueryAsync(UpdateAssignedToAcc, onFailedAssignedTo);

}

function UpdateAssignedToAcc() {

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
        ctx.executeQueryAsync(InsertAccRequestSentBackHistory, RejectVisitRequestFail);
    }


}

function InsertAccRequestSentBackHistory() {

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

function RejectAccRequest() {
    debugger;
    $('.rejectAcc').click(function () {
        $('.rejectAcc').submit()
        BlockUI();
        $.getScript(scriptbase + "SP.js", RejectAccRecord);

    });
}

function RejectAccRecord() {
    debugger;
    //manageQueryStringParameter("ID");
    //masterid = Decrypt(encryptedMID, "Secret phrase");

    ctx = new SP.ClientContext(appWebUrl);//Get the SharePoint Context object based upon the URL  
    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web(); //Get the Site   
    AccommodationID = getParameterByName('ID');
    lists = web.get_lists().getByTitle(AccommodationList); //Get the List based upon the Title  

    listItem = lists.getItemById(AccommodationID);
    listItem.set_item("Status", Rejected);

    listItem.update(); //Update the List Item 
    ctx.load(listItem);
    //Execute the batch Asynchronously 
    //showStatusMsgPopup("4", "Accommodation Request Reject successfully");
    ctx.executeQueryAsync(InsertVisitRequestRejectHistory, RejectVisitRequestFail);
}

function InsertVisitRequestRejectHistory() {

    masterid = listItem.get_id();

    lists = web.get_lists().getByTitle(AccommodationRequestHistoryList); //Get the List based upon the Title  
    listCreationInformation = new SP.ListItemCreationInformation(); //Object for creating Item in the List  

    HistoryItemsForReject = lists.addItem(listCreationInformation);
    HistoryItemsForReject.set_item("AccommodationID", masterid);
    HistoryItemsForReject.set_item("RequestStatus", Rejected);
    HistoryItemsForReject.set_item("RequestCommet", $("#commentboxAcc").val());

    HistoryItemsForReject.update(); //Update the List Item 
    ctx.load(HistoryItemsForReject);
    showStatusMsgPopup("1", "Accommodation Request Reject successfully");
    ctx.executeQueryAsync(PageRedirectToHome, HistoryFailed);
}

function HistoryFailed() {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}
