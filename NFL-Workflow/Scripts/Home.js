$(document).ready(function () {
    if (pagename == "Home.aspx") {
        //GetVisitorDetailForHome();
        //$.getScript(scriptbase + "SP.js", GetVisitorDetail);
        //ExecuteOrDelayUntilScriptLoaded(GetVisitorDetail, "sp.js");
        $.getScript(scriptbase + "SP.js", GetVisitorDetailForHome);
        getPendingRequest();
        getOpenRequest();
        getCompletedRequest();
        getRejectRequest();

    }
});

var HomeListItems;
function GetVisitorDetailForHome() {
    debugger;
    var AssignName = _spPageContextInfo.userDisplayName;
    // Get the current context   
    var ListName = VisitRequestList;
    hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));
    appWebUrl = appWebUrl.replace('#', '');
    var ctx = new SP.ClientContext(appWebUrl);

    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web();

    var aList = web.get_lists().getByTitle(ListName);


    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml("<View><Query>" +
   "<Where>" +
      "<Eq>" +
         "<FieldRef Name='Assigned' />" +
         "<Value Type='User'>" + AssignName + "</Value>" +
      "</Eq>" +
   "</Where>" +
"</Query></View>");
    HomeListItems = aList.getItems(camlQuery);
    ctx.load(HomeListItems);
    ctx.executeQueryAsync(onSucceededF, onFailedCallback);

}


function onSucceededF() {
    var enumerator = HomeListItems.getEnumerator();
    var counterAllList = 0;
    while (enumerator.moveNext()) {
        var listItem = enumerator.get_current();
        var tem = $('#table_custom tbody').html();
        counterAllList++;
        debugger;
        tem += '<tr>';
        tem += '<td>' + "00" + counterAllList + "" + '</td>';
        tem += '<td>' + listItem.get_item("EmployeeName") + '</td>';
        tem += '<td>' + listItem.get_item("Department") + '</td>';
        tem += '<td>' + listItem.get_item("ID") + '</td>';
        tem += '<td>' + convertDateTime(listItem.get_item("Created")) + '</td>';
        tem += '<td>' + listItem.get_item("Status") + '</td>';
        tem += '<td>';
        tem += '<a href="' + Origin + PathName + "VisitRequestApproval.aspx" + URL_Attr + "&ID=" + listItem.get_item("ID").toString() + '" title="Visit Request Approval"><i class="glyphicon glyphicon-eye-open"></i></span></a>';
        tem += '<a href="' + Origin + PathName + "VisitRequestView.aspx" + URL_Attr + "&ID=" + listItem.get_item("ID").toString() + '" title="Visit Request View"><i class="glyphicon glyphicon-eye-open"></i></span></a>';
        tem += '</td>';
        tem += '</tr>';

        $('#table_custom tbody').html(tem);
        if (listItem.get_item("Status") == Pending) {
            counterForPending++;
        }
        if (listItem.get_item("Status") == Approved) {
            counterForApprove++;
        }
        if (listItem.get_item("Status") == Reject) {
            counterForReject++;
        }
        //if (listItem.get_item("Status") == Pending) {
        //    counterForPending++;
        //}

    }
    $('.pendCount').text(counterForPending);
    $('.rejectcount').text(counterForReject);
    $('.completeCount').text(counterForApprove);
    // ExecuteOrDelayUntilScriptLoaded(GetVisitorFamilyDetails, "sp.js");
    ctx.executeQueryAsync(onSucceededLoad_PCount, onFailedCallback_PCount);
}
//This function fires when the query fails   
function onFailedCallback(sender, args) {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}
function convertDateTime(DateTime) {
    var strDateTime = DateTime;
    var myDate = new Date(strDateTime);
    var CorrectFormat = myDate.toLocaleString();
    return CorrectFormat;
}

function onSucceededLoad_PCount() {
    debugger;
    var AssignName = _spPageContextInfo.userDisplayName;
    // Get the current context   
    var ListName = VisitRequestList;
    hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));
    appWebUrl = appWebUrl.replace('#', '');
    var ctx = new SP.ClientContext(appWebUrl);

    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web();

    var aList = web.get_lists().getByTitle(ListName);


    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml("<View><Query>" +
   "<Where>" +
    "<And>" +
      "<Eq>" +
         "<FieldRef Name='Assigned' />" +
         "<Value Type='User'>" + AssignName + "</Value>" +
      "</Eq>" +
      "<Eq>" +
        "<FieldRef Name='Status' />" +
         "<Value Type='Choice'>" + Pending + "</Value>" +
       "</Eq>" +
       "</And>" +
   "</Where>" +
"</Query></View>");

    PendingListItems = aList.getItems(camlQuery);
    ctx.load(PendingListItems);
    ctx.executeQueryAsync(onSucceeded_CountPending, onFailedCallback_PCountx);
}
function onSucceeded_CountPending() {
    var enumerator_New = PendingListItems.getEnumerator();
    //var counterPendingList = 0;
    counterForPending = enumerator_New.$2J_0;
    UnblockUI();
    // ExecuteOrDelayUntilScriptLoaded(GetVisitorFamilyDetails, "sp.js");
}

function onFailedCallback_PCountx(sender, args) {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}
function onFailedCallback_PCount(sender, args) {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}

//Code For PendingList//
function getPendingRequest() {
    $(".pending-img a").click(function () {
        debugger;
        $(".pending-img a").submit()
        // var Valid = $("#VisitRequestFormView").data('bootstrapValidator');
        BlockUI();
        $.getScript(scriptbase + "SP.js", PendingList);
    });
}
function PendingList() {
    debugger;
    var AssignName = _spPageContextInfo.userDisplayName;
    // Get the current context   
    var ListName = VisitRequestList;
    hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));
    appWebUrl = appWebUrl.replace('#', '');
    var ctx = new SP.ClientContext(appWebUrl);

    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web();

    var aList = web.get_lists().getByTitle(ListName);


    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml("<View><Query>" +
   "<Where>" +
    "<And>" +
      "<Eq>" +
         "<FieldRef Name='Assigned' />" +
         "<Value Type='User'>" + AssignName + "</Value>" +
      "</Eq>" +
      "<Eq>" +
        "<FieldRef Name='Status' />" +
         "<Value Type='Choice'>" + Pending + "</Value>" +
       "</Eq>" +
       "</And>" +
   "</Where>" +
"</Query></View>");

    PendingListItems = aList.getItems(camlQuery);
    ctx.load(PendingListItems);
    ctx.executeQueryAsync(onSucceededPending, onFailedPendingCallback);

}
function onSucceededPending() {
    var enumerator_New = PendingListItems.getEnumerator();
    var counterPendingList = 0;
    $('#table_custom tbody').html("");
    while (enumerator_New.moveNext()) {
        var listItem_New = enumerator_New.get_current();

        var tem = $('#table_custom tbody').html();
        counterPendingList++;
        debugger;
        tem += '<tr>';
        tem += '<td>' + "00" + counterPendingList + "" + '</td>';
        tem += '<td>' + listItem_New.get_item("EmployeeName") + '</td>';
        tem += '<td>' + listItem_New.get_item("Department") + '</td>';
        tem += '<td>' + listItem_New.get_item("ID") + '</td>';
        tem += '<td>' + convertDateTime(listItem_New.get_item("Created")) + '</td>';
        tem += '<td>' + listItem_New.get_item("Status") + '</td>';
        tem += '<td>';
        tem += '<a href="' + Origin + PathName + "VisitRequestApproval.aspx" + URL_Attr + "&ID=" + listItem_New.get_item("ID").toString() + '" title="Visit Request Approval"><i class="glyphicon glyphicon-eye-open"></i></span></a>';
        tem += '<a href="' + Origin + PathName + "VisitRequestView.aspx" + URL_Attr + "&ID=" + listItem_New.get_item("ID").toString() + '" title="Visit Request View"><i class="glyphicon glyphicon-eye-open"></i></span></a>';
        tem += '</td>';
        tem += '</tr>';

        $('#table_custom tbody').html(tem);
    }
    UnblockUI();
    // ExecuteOrDelayUntilScriptLoaded(GetVisitorFamilyDetails, "sp.js");
}
function onFailedPendingCallback(sender, args) {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}
//Code For OpenList//
function getOpenRequest() {
    $(".Open-img a").click(function () {
        debugger;
        $(".Open-img a").submit()
        // var Valid = $("#VisitRequestFormView").data('bootstrapValidator');
        BlockUI();
        $.getScript(scriptbase + "SP.js", OpenList);
    });
}
function OpenList() {
    debugger;
    var AssignName = _spPageContextInfo.userDisplayName;
    // Get the current context   
    var ListName = VisitRequestList;
    hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));
    appWebUrl = appWebUrl.replace('#', '');
    var ctx = new SP.ClientContext(appWebUrl);

    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web();

    var aList = web.get_lists().getByTitle(ListName);


    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml("<View><Query>" +
   "<Where>" +
    "<And>" +
      "<Eq>" +
         "<FieldRef Name='Author' />" +
         "<Value Type='User'>" + AssignName + "</Value>" +
      "</Eq>" +
      "<Eq>" +
        "<FieldRef Name='Status' />" +
         "<Value Type='Choice'>" + Pending + "</Value>" +
       "</Eq>" +
       "</And>" +
   "</Where>" +
"</Query></View>");

    OpenListItems = aList.getItems(camlQuery);
    ctx.load(OpenListItems);
    ctx.executeQueryAsync(onSucceededOpen, onFailedOpenCallback);

}
function onSucceededOpen() {
    var enumerator_Open = OpenListItems.getEnumerator();
    var counter = 0;
    $('#table_custom tbody').html("");
    while (enumerator_Open.moveNext()) {
        var listItem_Open = enumerator_Open.get_current();

        var tem = $('#table_custom tbody').html();
        counter++;
        debugger;
        tem += '<tr>';
        tem += '<td>' + "00" + counter + "" + '</td>';
        tem += '<td>' + listItem_Open.get_item("EmployeeName") + '</td>';
        tem += '<td>' + listItem_Open.get_item("Department") + '</td>';
        tem += '<td>' + listItem_Open.get_item("ID") + '</td>';
        tem += '<td>' + convertDateTime(listItem_Open.get_item("Created")) + '</td>';
        tem += '<td>' + listItem_Open.get_item("Status") + '</td>';
        tem += '<td>';
        tem += '<a href="' + Origin + PathName + "VisitRequestApproval.aspx" + URL_Attr + "&ID=" + listItem_Open.get_item("ID").toString() + '" title="Visit Request Approval"><i class="glyphicon glyphicon-eye-open"></i></span></a>';
        tem += '<a href="' + Origin + PathName + "VisitRequestView.aspx" + URL_Attr + "&ID=" + listItem_Open.get_item("ID").toString() + '" title="Visit Request View"><i class="glyphicon glyphicon-eye-open"></i></span></a>';
        tem += '</td>';
        tem += '</tr>';

        $('#table_custom tbody').html(tem);
    }
    UnblockUI();
    // ExecuteOrDelayUntilScriptLoaded(GetVisitorFamilyDetails, "sp.js");
}
function onFailedOpenCallback(sender, args) {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}
//Code For OpenList//
function getCompletedRequest() {
    $(".Complete-img a").click(function () {
        debugger;
        $(".Complete-img a").submit()
        // var Valid = $("#VisitRequestFormView").data('bootstrapValidator');
        BlockUI();
        $.getScript(scriptbase + "SP.js", CompletedList);
    });
}
function CompletedList() {
    debugger;
    var AssignName = _spPageContextInfo.userDisplayName;
    // Get the current context   
    var ListName = VisitRequestList;
    hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));
    appWebUrl = appWebUrl.replace('#', '');
    var ctx = new SP.ClientContext(appWebUrl);

    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web();

    var aList = web.get_lists().getByTitle(ListName);


    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml("<View><Query>" +
   "<Where>" +
    "<And>" +
      "<Eq>" +
         "<FieldRef Name='Author' />" +
         "<Value Type='User'>" + AssignName + "</Value>" +
      "</Eq>" +
      "<Eq>" +
        "<FieldRef Name='Status' />" +
         "<Value Type='Choice'>" + Approved + "</Value>" +
       "</Eq>" +
       "</And>" +
   "</Where>" +
"</Query></View>");

    CompletedListItems = aList.getItems(camlQuery);
    ctx.load(CompletedListItems);
    ctx.executeQueryAsync(onSucceededCompleted, onFailedcompltCallback);

}
function onSucceededCompleted() {
    var enumerator_Complt = CompletedListItems.getEnumerator();
    var counter = 0;
    $('#table_custom tbody').html("");
    while (enumerator_Complt.moveNext()) {
        var listItem_Complt = enumerator_Complt.get_current();

        var tem = $('#table_custom tbody').html();
        counter++;
        debugger;
        tem += '<tr>';
        tem += '<td>' + "00" + counter + "" + '</td>';
        tem += '<td>' + listItem_Complt.get_item("EmployeeName") + '</td>';
        tem += '<td>' + listItem_Complt.get_item("Department") + '</td>';
        tem += '<td>' + listItem_Complt.get_item("ID") + '</td>';
        tem += '<td>' + convertDateTime(listItem_Complt.get_item("Created")) + '</td>';
        tem += '<td>' + listItem_Complt.get_item("Status") + '</td>';
        tem += '<td>';
        tem += '<a href="' + Origin + PathName + "VisitRequestApproval.aspx" + URL_Attr + "&ID=" + listItem_Complt.get_item("ID").toString() + '" title="Visit Request Approval"><i class="glyphicon glyphicon-eye-open"></i></span></a>';
        tem += '<a href="' + Origin + PathName + "VisitRequestView.aspx" + URL_Attr + "&ID=" + listItem_Complt.get_item("ID").toString() + '" title="Visit Request View"><i class="glyphicon glyphicon-eye-open"></i></span></a>';
        tem += '</td>';
        tem += '</tr>';

        $('#table_custom tbody').html(tem);
    }
    UnblockUI();
    // ExecuteOrDelayUntilScriptLoaded(GetVisitorFamilyDetails, "sp.js");
}
function onFailedcompltCallback(sender, args) {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}
//Code For RejectList//
function getRejectRequest() {
    $(".Cancelled-img a").click(function () {
        debugger;
        $(".Cancelled-img a").submit()
        // var Valid = $("#VisitRequestFormView").data('bootstrapValidator');
        BlockUI();
        $.getScript(scriptbase + "SP.js", RejectList);
    });
}
function RejectList() {
    debugger;
    var AssignName = _spPageContextInfo.userDisplayName;
    // Get the current context   
    var ListName = VisitRequestList;
    hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));
    appWebUrl = appWebUrl.replace('#', '');
    var ctx = new SP.ClientContext(appWebUrl);

    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web();

    var aList = web.get_lists().getByTitle(ListName);


    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml("<View><Query>" +
   "<Where>" +
    "<And>" +
      "<Eq>" +
         "<FieldRef Name='Author' />" +
         "<Value Type='User'>" + AssignName + "</Value>" +
      "</Eq>" +
      "<Eq>" +
        "<FieldRef Name='Status' />" +
         "<Value Type='Choice'>" + Rejected + "</Value>" +
       "</Eq>" +
       "</And>" +
   "</Where>" +
"</Query></View>");

    RejectListItems = aList.getItems(camlQuery);
    ctx.load(RejectListItems);
    ctx.executeQueryAsync(onSucceededReject, onFailedRejectCallback);

}
function onSucceededReject() {
    var enumerator_Reject = RejectListItems.getEnumerator();
    var counter = 0;
    $('#table_custom tbody').html("");
    while (enumerator_Reject.moveNext()) {
        var listItem_Reject = enumerator_Reject.get_current();

        var tem = $('#table_custom tbody').html();
        counter++;
        debugger;
        tem += '<tr>';
        tem += '<td>' + "00" + counter + "" + '</td>';
        tem += '<td>' + listItem_Reject.get_item("EmployeeName") + '</td>';
        tem += '<td>' + listItem_Reject.get_item("Department") + '</td>';
        tem += '<td>' + listItem_Reject.get_item("ID") + '</td>';
        tem += '<td>' + convertDateTime(listItem_Reject.get_item("Created")) + '</td>';
        tem += '<td>' + listItem_Reject.get_item("Status") + '</td>';
        tem += '<td>';
        tem += '<a href="' + Origin + PathName + "VisitRequestApproval.aspx" + URL_Attr + "&ID=" + listItem_Reject.get_item("ID").toString() + '" title="Visit Request Approval"><i class="glyphicon glyphicon-eye-open"></i></span></a>';
        tem += '<a href="' + Origin + PathName + "VisitRequestView.aspx" + URL_Attr + "&ID=" + listItem_Reject.get_item("ID").toString() + '" title="Visit Request View"><i class="glyphicon glyphicon-eye-open"></i></span></a>';
        tem += '</td>';
        tem += '</tr>';

        $('#table_custom tbody').html(tem);
    }
    UnblockUI();
    // ExecuteOrDelayUntilScriptLoaded(GetVisitorFamilyDetails, "sp.js");
}
function onFailedRejectCallback(sender, args) {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}


