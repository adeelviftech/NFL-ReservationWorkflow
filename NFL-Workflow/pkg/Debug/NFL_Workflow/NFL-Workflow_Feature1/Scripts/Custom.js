'use strict';

var context;
var user;
var hostWebUrl;
var appWebUrl;
var itemCollection;
var itemCollectionExpenseTypeID;
var itemCollectionHistory;
var ApproveritemCollection;
var SecretaryitemCollection;
var AdminManageritemCollection;
var lists;
var ctx;
var appCtxSite;
var listEnumerator;
var currentlist;
var list;
var ExpenseTypeIDlist;
var currentListItems;
var HistoryListItems;
var itemTitle = "";
var web;
var siteUrl;
var listCreationInformation;
var listItem;
var DetaillistItem;
var UserBusniess;
var txtpcc;
var results = [];
var BusniessHRApprover;
var BusniessAdminManager;
var BusniessLineManager;
var BusniessHOD;
var BusniessHOD_ID;
var masterid;
var State;
var CurrentStatus;
var Pending = "Pending";
var Approved = "Approved";
var Rejected = "Rejected";
var HomeView = "Home.aspx";
var VisitRequestList = "Visit Request List";
var VisitRequestFamilylist = "Visit Request Family Detail list";
var AccommodationList = "Accommodation List";
var AccommodationDetailList = "Accommodation Detail List";
var CorporateEvent = "Corporate Event";
var CorporateDetailList = "Corporate Detail List";
var Origin = location.origin;
var PathName = "/sites/vfdev/NFL-Workflow/Pages/";
var URL_Attr = "?" + document.URL.split("?")[1].split("&")[0] + "&" +
    document.URL.split("?")[1].split("&")[1] + "&" +
    document.URL.split("?")[1].split("&")[2] + "&" +
    document.URL.split("?")[1].split("&")[3] + "&" +
    document.URL.split("?")[1].split("&")[4]; //location.href.split('.aspx')[1];
var scriptbase = document.URL.split('sites')[0] + "_layouts/15/";
var pagename = location.pathname.split('/')[5];
var UserloginName = '';
var CurrentUserID = 0;
var CompanyCode = '';
var TokenNo = '3PPltHwTSdOkJT9E5Uum4w==';
var UserStaffNo = '';
var UserDepartment = '';



$(document).ready(function () {
    $("#USERNAME").html(_spPageContextInfo.userDisplayName);
    ChangePage_Menu();
    $.getScript(scriptbase + "SP.js", getListItemFromHostWeb);
});

function showStatusMsgPopup(MsgType, Msg) {

    var Position = "top-right";
    switch (MsgType) {
        case '1':
            $.toast({
                heading: 'Success',
                text: Msg,
                icon: 'success',
                position: Position,
                showHideTransition: 'plain',
                stack: 5,
                hideAfter: 5000,
            });
            break;
        case '2':
            $.toast({
                heading: 'Warning',
                text: Msg,
                icon: 'warning',
                position: Position,
                showHideTransition: 'plain',
                stack: 5,
                hideAfter: 5000,
                //  hideAfter: false
            });
            break;
        case '3':
            $.toast({
                heading: 'Error',
                text: Msg,
                icon: 'error',
                position: Position,
                showHideTransition: 'plain',
                stack: 5,
                hideAfter: 5000,
                //  hideAfter: false
            });
            break;
        case '4':
            $.toast({
                heading: 'Information',
                text: Msg,
                icon: 'info',
                position: Position,
                //hideAfter: false,
                showHideTransition: 'plain',
                stack: 5,
                hideAfter: 10000,
            });
            break;
        default:
            $.toast({
                text: Msg,
                position: Position,
                showHideTransition: 'plain',
                stack: 5,
                hideAfter: 5000,
                // hideAfter: false
            });
            break;
    }

}


function getListItemFromHostWeb() {
    context = new SP.ClientContext.get_current();
    user = context.get_web().get_currentUser();
    hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));

    ctx = new SP.ClientContext(appWebUrl);
    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web();
    lists = web.get_lists();

    ctx.load(lists);
    context.load(user);

}


var UnblockUI = function () {
    $.unblockUI();
}

var BlockUI = function () {
    $.blockUI({ message: '<h5><img src="../assets/Images/rolling.gif" /> Please Wait...</h5>' });
}

function ChangePage_Menu() {
    debugger;
    $('.ChangePage').each(function (i, e) {
        var page = $(e).attr('_val');
        $(e).attr('href', Origin + PathName + page + URL_Attr);
    });
}

function manageQueryStringParameter(paramToRetrieve) {
    var params =
    document.URL.split("?")[1].split("&");
    var strParams = "";
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve) {
            return singleParam[1];
        }
    }
}

function PageRedirect(URL, time) {
    setTimeout(function () {
        location.href = URL;
    }, time);
}

function tblToJson(rows) {
    var JsonArray = [];

    $(rows).each(function (i, e) {
        $(e).find("input[type=checkbox]").each(function (i, ee) {
            $(e).find("[name=" + ee.name + "][type=hidden]").val($(ee).prop("checked"));
        });
        $(e).find("input[type=radio]:checked").each(function (i, ee) {
            $(e).find("[name=" + ee.name + "][type=hidden]").val($(ee).val());
        });

        var JsonElem = {};
        var counter = 0;
        $(e).find("input[type=hidden],input[type=text],input[type=number],select,textarea").each(function (ii, ee) {
            JsonElem[counter] = $(ee).val();
            counter = counter + 1;
        });

        $(e).find("input[type=file]").each(function (iii, eee) {
            JsonElem[eee.classList[1]] = eee.files[0];
        });
        $(e).find('.MaxLength').each(function (j, k) {
            JsonElem[k.classList[0]] = $(k).html();
        });
        JsonArray.push(JsonElem);

    });
    return JsonArray;
}