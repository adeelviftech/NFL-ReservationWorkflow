$(document).ready(function () {
    if (pagename == "VisitRequestView.aspx") {
        BlockUI();
        $('.submitRequestView').hide();
        $.getScript(scriptbase + "SP.js", getListItemFromHostWeb);
        ValidateFormVisitViewRequest();
        SaveRequestViewForm();
        CancelForm();
        BindDatePicker();

    }
});

function GetVisitorDetailView() {
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
    oListItemsA = ViewList.getItems(camlQuery);
    ctx.load(oListItemsA);
    //ctx.executeQueryAsync(Function.createDelegate(this, this.onSucceededView), Function.createDelegate(this, this.onFailedCallback));
    ctx.executeQueryAsync(onSucceededView1, onFailedCallbackView)

}

function onFailed(sender, args) {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}

function onSucceededView1() {
    var enumerator = oListItemsA.getEnumerator();
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
        $("#comment").val(listItem.get_item("ApproverComments")).prop('readonly', true);
        if (listItem.get_item("Status") == Pending) {
            $("#VisitDate").val(convertDateTime(listItem.get_item("VisitDate"))).prop('readonly', false);
            $("#cardreturndate").val(convertDateTime(listItem.get_item("CardReturnDate"))).prop('readonly', false);
            $('.submitRequestView').show();
        }
        else {
            $("#VisitDate").val(convertDateTime(listItem.get_item("VisitDate"))).prop('readonly', true);
            $("#cardreturndate").val(convertDateTime(listItem.get_item("CardReturnDate"))).prop('readonly', true);
        }
    }
    ctx.executeQueryAsync(GetVisitorFamilyDetailsView, onFailedCallbackView)
    //ExecuteOrDelayUntilScriptLoaded(GetVisitorFamilyDetailsView, "sp.js");
}
//This function fires when the query fails   
function onFailedCallbackView(sender, args) {
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
    appWebUrl = appWebUrl.replace('#', '');
    var ctx = new SP.ClientContext(appWebUrl);

    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web();

    var bList = web.get_lists().getByTitle(ListName);

    var caml = new SP.CamlQuery();
    caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='VisitRequestID' /><Value Type='Counter'>" + VisitorID + "</Value></Eq></Where></Query></View>");
    VisitReqViewForm = bList.getItems(caml);
    ctx.load(VisitReqViewForm);
    //ctx.executeQueryAsync(Function.createDelegate(this, this.onSucceededFamily), Function.createDelegate(this, this.onFailedFamily));
    ctx.executeQueryAsync(onSucceededFamily_View, onFailedFamily);

}

function onSucceededFamily_View() {
    debugger;
    var enumeratorList = VisitReqViewForm.getEnumerator();
    //Formulate HTML from the list items   
    // var MainResult = 'Items in the Divisions list: <br><br>';
    //Loop through all the items 
    $("#ViewTable tbody").html('');
    while (enumeratorList.moveNext()) {
        var listItem = enumeratorList.get_current();
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

function SaveRequestViewForm() {
    debugger;
    $('.submitRequestView').click(function () {
        debugger;
        $('.submitRequestView').submit()
        var Valid = $("#VisitRequestFormView").data('bootstrapValidator');
        BlockUI();
        if (Valid.isValid()) {
            $.getScript(scriptbase + "SP.js", InsertRequestViewItem);
        }
        else {
            UnblockUI();
        }
    });
}
function InsertRequestViewItem() {

    ctx = new SP.ClientContext(appWebUrl);//Get the SharePoint Context object based upon the URL  
    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web(); //Get the Site   
    VisitorID = getParameterByName('ID');
    lists = web.get_lists().getByTitle(VisitRequestList); //Get the List based upon the Title  

    listItem = lists.getItemById(VisitorID);
    listItem.set_item("VisitDate", $("#VisitDate").val());
    listItem.set_item("CardReturnDate", $("#cardreturndate").val());

    listItem.update(); //Update the List Item 
    ctx.load(listItem);
    ctx.executeQueryAsync(InsertViewRequestHistory, HistoryFailedView);

}
function InsertViewRequestHistory() {

    masterid = listItem.get_id();

    lists = web.get_lists().getByTitle(VisitRequestHistory); //Get the List based upon the Title  
    listCreationInformationView = new SP.ListItemCreationInformation(); //Object for creating Item in the List  

    HistoryListItem = lists.addItem(listCreationInformationView);
    HistoryListItem.set_item("VisitRequestID", masterid);
    HistoryListItem.set_item("RequestStatus", Pending);
    HistoryListItem.set_item("RequestCommet", $("#comment").val());

    HistoryListItem.update(); //Update the List Item 
    ctx.load(HistoryListItem);
    showStatusMsgPopup("1", "Visit Request Updated successfully");
    ctx.executeQueryAsync(PageRedirectToHomeView, HistoryFailedView);
}
function HistoryFailedView() {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}
function PageRedirectToHome() {

    PageRedirect(location.href.replace(pagename, HomeView), 2000);
}
function PageRedirectToHomeView() {
    UnblockUI();
    PageRedirect(location.href.replace(pagename, HomeView), 2000);
}
var ValidateFormVisitViewRequest = function () {
    debugger;
    if ($('#VisitRequestFormView').length > 0) {

        $("#VisitDate").focus();

        $('#VisitRequestFormView').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
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
