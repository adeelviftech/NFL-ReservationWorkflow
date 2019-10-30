$(document).ready(function () {
    if (pagename == "Home.aspx") {
        //$.getScript(scriptbase + "SP.js", GetVisitorDetail);
        //ExecuteOrDelayUntilScriptLoaded(GetVisitorDetail, "sp.js");
        $.getScript(scriptbase + "SP.js", GetVisitorDetailForHome);
    }
});

var oListItems;
function GetVisitorDetailForHome() {
    debugger;
    var AssignName = _spPageContextInfo.userDisplayName;
    // Get the current context   
    var ListName = VisitRequestList;
    hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));

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
    oListItems = aList.getItems(camlQuery);
    ctx.load(oListItems);
    ctx.executeQueryAsync(onSucceededF, onFailedCallback);

}


function onSucceededF() {
    var enumerator = oListItems.getEnumerator();
    var counter = 0;
    while (enumerator.moveNext()) {
        var listItem = enumerator.get_current();

        var tem = $('#table_custom tbody').html();
        counter++;
        debugger;
        tem += '<tr>';
        tem += '<td>' + "00" + counter + "" + '</td>';
        tem += '<td>' + listItem.get_item("EmployeeName") + '</td>';
        tem += '<td>' + listItem.get_item("Department") + '</td>';
        tem += '<td>' + listItem.get_item("ID") + '</td>';
        tem += '<td>' + convertDateTime(listItem.get_item("Created")) + '</td>';
        tem += '<td>' + listItem.get_item("Status") + '</td>';
        tem += '<td>';
        tem += '<a href="' + Origin + PathName + "VisitRequestApproval.aspx" + URL_Attr + "&ID=" + listItem.get_item("ID").toString() + '"><i class="glyphicon glyphicon-eye-open"></i></span></a>';
        tem += '<a href="' + Origin + PathName + "VisitRequestView.aspx" + URL_Attr + "&ID=" + listItem.get_item("ID").toString() + '"><i class="glyphicon glyphicon-eye-open"></i></span></a>';
        tem += '</td>';
        tem += '</tr>';

        $('#table_custom tbody').html(tem);
    }
    // ExecuteOrDelayUntilScriptLoaded(GetVisitorFamilyDetails, "sp.js");
}
//This function fires when the query fails   
function onFailedCallback(sender, args) {
    showStatusMsgPopup("3", args.get_message());
}
function convertDateTime(DateTime) {
    var strDateTime = DateTime;
    var myDate = new Date(strDateTime);
    var CorrectFormat = myDate.toLocaleString();
    return CorrectFormat;
}