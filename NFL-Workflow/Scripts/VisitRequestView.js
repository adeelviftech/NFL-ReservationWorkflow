$(document).ready(function () {
    if (pagename == "VisitRequestView.aspx") {
        BlockUI();
        $.getScript(scriptbase + "SP.js", getListItemFromHostWeb);
        //$.getScript(scriptbase + "SP.js", GetVisitorDetail);
        //ExecuteOrDelayUntilScriptLoaded(GetVisitorDetailView, "sp.js");
        CancelForm();
    }
});
var oListItems;
function GetVisitorDetailView() {
    debugger;
    VisitorID = getParameterByName("ID");
    // Get the current context   
    var ListName = VisitRequestList;
    hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));

    var ctx = new SP.ClientContext(appWebUrl);

    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web();

    var ViewList = web.get_lists().getByTitle(ListName);

    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml("<View><Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>" + VisitorID + "</Value></Eq></Where></Query></View>");
    oListItems = ViewList.getItems(camlQuery);
    ctx.load(oListItems);
    //ctx.executeQueryAsync(Function.createDelegate(this, this.onSucceededView), Function.createDelegate(this, this.onFailedCallback));
    ctx.executeQueryAsync(onSucceededView, onFailedCallback)

}

function onFailed(sender, args) {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}

function onSucceededView(sender, args) {
    var enumerator = oListItems.getEnumerator();
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
    ctx.executeQueryAsync(GetVisitorFamilyDetailsView, onFailedCallback)
    //ExecuteOrDelayUntilScriptLoaded(GetVisitorFamilyDetailsView, "sp.js");
}
//This function fires when the query fails   
function onFailedCallback(sender, args) {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}

function GetVisitorFamilyDetailsView() {
    debugger;
    VisitorID = getParameterByName("ID");
    // Get the current context   
    var ListName = VisitRequestFamilylist;
    hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));

    var ctx = new SP.ClientContext(appWebUrl);

    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web();

    var bList = web.get_lists().getByTitle(ListName);

    var caml = new SP.CamlQuery();
    caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='VisitRequestID' /><Value Type='Counter'>" + VisitorID + "</Value></Eq></Where></Query></View>");
    VisitReqViewForm = bList.getItems(caml);
    ctx.load(VisitReqViewForm);
    //ctx.executeQueryAsync(Function.createDelegate(this, this.onSucceededFamily), Function.createDelegate(this, this.onFailedFamily));
    ctx.executeQueryAsync(onSucceededFamilyView, onFailedFamily);

}

function onSucceededFamilyView() {
    debugger;
    var enumerator = VisitReqViewForm.getEnumerator();
    //Formulate HTML from the list items   
    var MainResult = 'Items in the Divisions list: <br><br>';
    //Loop through all the items 
    $("#ViewTable tbody").html('');
    while (enumerator.moveNext()) {
        var listItem = enumerator.get_current();
        $("#ViewTable tbody").append(
           "<tr>" +
           "<td>" + listItem.get_item("MemberName") + "</td>" +
           "<td>" + listItem.get_item("Age") + "</td>" +
            "<td>" + listItem.get_item("Relation") + "</td>" +
           "</tr>"
        );
    }
    UnblockUI();
}


//This function fires when the query fails   
function onFailedFamily(sender, args) {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}

function CancelForm() {

    $(".cancle").click(function () {
        debugger;
        $('.cancle').submit()
        BlockUI();
        PageRedirectToHome();
    });
}


function PageRedirectToHome() {
    
    PageRedirect(location.href.replace(pagename, HomeView), 2000);
}