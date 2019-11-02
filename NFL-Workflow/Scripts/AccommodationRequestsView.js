$(document).ready(function () {
    if (pagename == "AccommodationRequestsView.aspx") {
        BlockUI();
        $('.submitUpateAcc').hide();
        //ValidateFormVisitViewRequest();

        $.getScript(scriptbase + "SP.js", getListItemFromHostWeb);
        SaveRequestViewFormAccommodation();
        CancelAccommodationForm();
        BindDatePicker();
       

    }
});

function SaveRequestViewFormAccommodation() {
    debugger;
    $('.submitUpateAcc').click(function () {
        debugger;
        $('.submitUpateAcc').submit()
        var Valid = $("#viewAccForm").data('bootstrapValidator');
        BlockUI();
        $.getScript(scriptbase + "SP.js", UpdateAccommoadtionList);
        //if (Valid.isValid()) {
        //    $.getScript(scriptbase + "SP.js", UpdateAccommoadtionList);
        //}
        //else {
        //    UnblockUI();
        //}
    });
}
function UpdateAccommoadtionList() {

    ctx = new SP.ClientContext(appWebUrl);//Get the SharePoint Context object based upon the URL  
    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web(); //Get the Site   
    VisitorID = getParameterByName('ID');
    lists = web.get_lists().getByTitle(AccommodationList); //Get the List based upon the Title  

    listItem = lists.getItemById(VisitorID);
    listItem.set_item("VisitDate", $("#VisitDateAcc").val());
    listItem.set_item("CardReturnDate", $("#cardreturndateAcc").val());

    listItem.update(); //Update the List Item 
    ctx.load(listItem);
    showStatusMsgPopup("1", "Visit Request Updated successfully");
    ctx.executeQueryAsync(PageRedirectToHomeView, FailedView);

}

function GetAccommodationViewGetAccommodationView()
{
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
    ctx.executeQueryAsync(onSucceededViewAccommodationRequest, FailedView)

}

function onSucceededViewAccommodationRequest() {
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
    ctx.executeQueryAsync(GetAccommodationFamilyDetailsView, FailedView)
    //ExecuteOrDelayUntilScriptLoaded(GetVisitorFamilyDetailsView, "sp.js");
}

function GetAccommodationFamilyDetailsView() {
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
    ctx.executeQueryAsync(onSucceededAccommodationFamily_View, FailedView);

}

function onSucceededAccommodationFamily_View() {
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

function CancelAccommodationForm() {

    $(".submitcancelAcc").click(function () {
        debugger;
        $('.submitcancelAcc').submit()
        BlockUI();
        PageRedirectToHome();
    });
}

function PageRedirectToHome() {

    PageRedirect(location.href.replace(pagename, HomeView), 2000);
}

var ValidateFormVisitViewRequest = function () {
    debugger;
    if ($('#viewAccForm').length > 0) {

        $("#VisitDateAcc").focus();

        $('#viewAccForm').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
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

function FailedView() {
    UnblockUI();
    showStatusMsgPopup("3", args.get_message());
}