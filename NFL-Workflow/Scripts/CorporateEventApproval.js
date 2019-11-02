$(document).ready(function () {
    if (pagename == "CorporateEventApproval.aspx") {
        //$.getScript(scriptbase + "SP.js", GetVisitorDetail);
        //ExecuteOrDelayUntilScriptLoaded(GetVisitorDetail, "sp.js");
        $.getScript(scriptbase + "SP.js", getListItemFromHostWeb);
        //ValidateFormVisitApprovalRequest();
        //SaveApprovalForm();
        //RejectVisitRequest();
        //SendBackToInitiatorReq();
        //GetEmployeeDetailAginstID();
        //BindDatePicker();
    }
});

function GetCorporateApprovateDetailView() {
    debugger;
    VisitorID = getParameterByName("ID");
    // Get the current context   
    var ListName = VisitRequestList;
    hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));
    appWebUrl = appWebUrl.replace('#', '');
    var ctx = new SP.ClientContext(appWebUrl);

    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web();

    var ViewList = web.get_lists().getByTitle(ListName);

    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml("<View><Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>" + VisitorID + "</Value></Eq></Where></Query></View>");
    ApprovtListItems = ViewList.getItems(camlQuery);
    ctx.load(ApprovtListItems);
    //ctx.executeQueryAsync(Function.createDelegate(this, this.onSucceededView), Function.createDelegate(this, this.onFailedCallback));
    ctx.executeQueryAsync(onSucceededCorpApprovView, onFailedCallbackApprvView)

}

function onFailed(sender, args) {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}

function onSucceededCorpApprovView() {
    var enumeratorsApprv = ApprovtListItems.getEnumerator();
    //Formulate HTML from the list items   
    var MainResult = 'Items in the Divisions list: <br><br>';
    //Loop through all the items   
    while (enumeratorsApprv.moveNext()) {
        var listItemapprv = enumeratorsApprv.get_current();

        $("#EmpID").val(listItemapprv.get_item("EmployeeID")).prop('readonly', true);
        $("#Division").val(listItemapprv.get_item("Division")).prop('readonly', true);
        $("#Name").val(listItemapprv.get_item("EmployeeName")).prop('readonly', true);
        $("#Designation").val(listItemapprv.get_item("Designation")).prop('readonly', true);
        $("#department").val(listItemapprv.get_item("Department")).prop('readonly', true);
        $("#MblNumber").val(listItemapprv.get_item("MobileNumber")).prop('readonly', true);
        $("#CostCenterDescription").val(listItemapprv.get_item("CostCentreDescription")).prop('readonly', true);
        $("#GPS").val(listItemapprv.get_item("GPS")).prop('readonly', true);
        $("#NameOfEvent").val(listItemapprv.get_item("Nameofevent")).prop('readonly', true);
        $("#NumberofAttendees").val(listItemapprv.get_item("Numberofattendees")).prop('readonly', true);
        if (listItemapprv.get_item("Status") == Pending) {
            $("#Datefrom").val(convertDateTime(listItemapprv.get_item("DateFrom"))).prop('readonly', false);
            $("#Dateto").val(convertDateTime(listItemapprv.get_item("DateTo"))).prop('readonly', false);
            $('.submitRequestView').show();
        }
        else {
            $("#Datefrom").val(convertDateTime(listItemapprv.get_item("DateFrom"))).attr("disabled", true);
            $("#Dateto").val(convertDateTime(listItemapprv.get_item("DateTo"))).attr("disabled", true);
        }
        $("#TimeDuration").val(listItemapprv.get_item("Timeduration")).prop('readonly', true);
        $("#Accommdationtype1").val(listItemapprv.get_item("NumberofChalet")).attr("disabled", true);
        $("#Accommdationtype2").val(listItemapprv.get_item("NumberofChalet")).attr("disabled", true);
        $("#meetingRoom1").val(listItemapprv.get_item("MeetingRoomRequired")).attr("disabled", true);
        $("#meetingRoom2").val(listItemapprv.get_item("MeetingRoomRequired")).attr("disabled", true);
        $("#numofCabana").val(listItemapprv.get_item("NumberofCabana")).prop('readonly', true);
        $("#numofmeetingRoomReq").val(listItemapprv.get_item("MeetingRoom")).prop('readonly', true);


    }
    // ctx.executeQueryAsync(GetVisitorFamilyDetailsView, onFailedCallbackView)
    //ExecuteOrDelayUntilScriptLoaded(GetVisitorFamilyDetailsView, "sp.js");
}
//This function fires when the query fails   
function onFailedCallbackApprvView(sender, args) {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}