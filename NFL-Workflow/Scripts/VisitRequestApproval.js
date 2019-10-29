$(document).ready(function () {
    if (pagename == "VisitRequestApproval.aspx") {
        //$.getScript(scriptbase + "SP.js", GetVisitorDetail);
        ExecuteOrDelayUntilScriptLoaded(GetVisitorDetail, "sp.js");
    }
});
var oListItems;
function GetVisitorDetail()
{
    debugger;
    var VisitorID = 54;
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
         "<FieldRef Name='ID' />" +
         "<Value Type='Counter'>" + VisitorID +"</Value>" +
      "</Eq>" +
   "</Where>" +
"</Query></View>");
    itemCollection = list.getItems(camlQuery);
    ctx.load(itemCollection);
    ctx.executeQueryAsync(Function.createDelegate(this, this.onSucceededCallback), Function.createDelegate(this, this.onFailedCallback));

}
 

function onSucceededCallback(sender, args) {
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
    ExecuteOrDelayUntilScriptLoaded(GetVisitorFamilyDetails, "sp.js");
}
//This function fires when the query fails   
function onFailedCallback(sender, args) {
    showStatusMsgPopup("3", args.get_message());
}
var AListItems;
function GetVisitorFamilyDetails() {
    debugger;
    var VisitorParentID = 54;
    // Get the current context   
    var ListName = VisitRequestFamilylist;
    hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));

    var ctx = new SP.ClientContext(appWebUrl);

    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web();

    var aList = web.get_lists().getByTitle(ListName);

    var caml = new SP.CamlQuery();
    caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='VisitRequestID' /><Value Type='Counter'>" + VisitorParentID + "</Value></Eq></Where></Query></View>");
    AListItems = aList.getItems(caml);
    ctx.load(AListItems);
    ctx.executeQueryAsync(Function.createDelegate(this, this.onSucceededFamily), Function.createDelegate(this, this.onFailedFamily));

}
function onSucceededFamily(sender, args) {
    var enumerator = AListItems.getEnumerator();
    //Formulate HTML from the list items   
    var MainResult = 'Items in the Divisions list: <br><br>';
    //Loop through all the items   
    while (enumerator.moveNext()) {
        var listItem = enumerator.get_current();

        $(".Name").val(listItem.get_item("MemberName")).prop('readonly', true);
        $(".relation").val(listItem.get_item("Relation")).prop('readonly', true);
        $(".Age").val(listItem.get_item("Age")).prop('readonly', true);
    }
}
//This function fires when the query fails   
function onFailedFamily(sender, args) {
    showStatusMsgPopup("3", args.get_message());
}

