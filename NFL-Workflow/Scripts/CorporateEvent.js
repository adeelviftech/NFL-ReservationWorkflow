$(document).ready(function () {

    if (pagename == "CorporateEvent.aspx") {
        debugger;
        //BlockUI();
        addnewMedicalRow();
        BindDatePicker();
        $('.submit').click(function () {
            //block of code that runs when the click event triggers
            $.getScript(scriptbase + "SP.js", AddListItem);
        });

    }
});

function AddListItem() {
    debugger;

    var listTitle = CorporateEvent;
    //Get the current client context  
    //context = SP.ClientContext.get_current();

    hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));

    ctx = new SP.ClientContext(appWebUrl);//Get the SharePoint Context object based upon the URL  
    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web(); //Get the Site   


    var airportList = web.get_lists().getByTitle(listTitle);
    //Create a new record  
    var listItemCreationInformation = new SP.ListItemCreationInformation();
    listItem = airportList.addItem(listItemCreationInformation);


    var d = new Date();
    var strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();

    //listItem.set_item('RequestID', $("#ReqID").val());
    listItem.set_item('EmployeeID', $("#EmpID").val());
    listItem.set_item('Division', $("#Division").val());
    listItem.set_item('EmployeeName', $("#Name").val());
    listItem.set_item('Designation', $("#Designation").val());
    listItem.set_item('Department', $("#department").val());
    listItem.set_item('MobileNumber', $("#MblNumber").val());
    listItem.set_item('CostCentreDescription', $("#CostCenterDescription").val());
    listItem.set_item('GPS', $("#GPS").val());
    listItem.set_item('Nameofevent', $("#NameOfEvent").val());
    listItem.set_item('Numberofattendees', $("#NumberofAttendees").val());
    listItem.set_item('DateFrom', $("#Datefrom").val());
    listItem.set_item('DateTo', $("#Dateto").val());
    listItem.set_item('Timeduration', $("#TimeDuration").val());
    listItem.set_item('NumberofChalet', $("#Accommdationtype1").val());
    //listItem.set_item('NumberofChalet', $("#Accommdationtype2").val());
    listItem.set_item('MeetingRoomRequired', $("#meetingRoom1").val());
    //listItem.set_item('MeetingRoomRequired', $("#meetingRoom2").val());
    listItem.set_item('NumberofCabana', $("#numofCabana").val());
    listItem.set_item('MeetingRoom', $("#numofmeetingRoomReq").val());
    //listItem.set_item('CreatedBy', _spPageContextInfo.userDisplayName);
    //listItem.set_item('CreatedDate', strDate);
    listItem.update();
    ctx.load(listItem);
    //ctx.executeQueryAsync(FamilyMemberInformationSave, AddListItemFailed);

    ctx.executeQueryAsync(Function.createDelegate(this, CorporateDetailListSave), Function.createDelegate(this, AddListItemFailed)
   );
}

function CorporateDetailListSave() {
    masterid = listItem.get_id();

    lists = web.get_lists().getByTitle(CorporateDetailList); //Get the List based upon the Title  
    listCreationInformation = new SP.ListItemCreationInformation(); //Object for creating Item in the List  

    var detailItems = tblToJson($("[id$=MedicalTable] tbody tr"));

    for (var i = 0; i < detailItems.length; i++) {
        listItem = lists.addItem(listCreationInformation);

        listItem.set_item("CorporateID", masterid);
        listItem.set_item("Date", detailItems[i][0]);
        listItem.set_item("Time", detailItems[i][1]);
        listItem.set_item("Description", detailItems[i][2]);

        listItem.update(); //Update the List Item 
        ctx.load(listItem);

        results.push(listItem);

    }
    showStatusMsgPopup("1", "Corporate Details added successfully");
    ctx.executeQueryAsync(PageRedirectToHome, AddListItemFailed);

}

function PageRedirectToHome() {
    //UnblockUI();
    PageRedirect(location.href.replace(pagename, HomeView), 2000);
}

function AddListItemFailed(sender, args) {

    showStatusMsgPopup("3", args.get_message());
}

function addnewMedicalRow() {
    $(".addnewMedicalRow").on('click', function () {
        debugger;
        var clone_area = $($(".tr_MedicalTable").html());
        $('<tr>').addClass("tr_MedicalTable").append(clone_area).appendTo($("[id$=MedicalTable] tbody"));
        showStatusMsgPopup("1", "Row Added !");
    });
}


