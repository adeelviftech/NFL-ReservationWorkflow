$(document).ready(function () {

    if (pagename == "VisitRequest.aspx") {
        debugger;
        //BlockUI();
        addnewMedicalRow();
        $('.submit').click(function () {
            //block of code that runs when the click event triggers
            AddListItem();
        });
       
    }
});

function AddListItem()
{
    debugger;
    var listTitle = VisitRequestList;
    //Get the current client context  
    //context = SP.ClientContext.get_current();

    ctx = new SP.ClientContext(appWebUrl);//Get the SharePoint Context object based upon the URL  
    appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);
    web = appCtxSite.get_web(); //Get the Site   
     

    var airportList = web.get_lists().getByTitle(listTitle);
    //Create a new record  
    var listItemCreationInformation = new SP.ListItemCreationInformation();  
    listItem = airportList.addItem(listItemCreationInformation);  
    //Set the values  
    var EmpID = $("#empid").val();
    var Division = $("#division").val();
    var EmpName = $("#empname").val();
    var Designation = $("#designation").val();
    var Department = $("#dept").val();
    var Mobile = $("#mobile").val();
    var Cost = $("#cost").val();
    var GPS = $("#gps").val();
    var VisitDate = $("#VisitDate").val();
    var CardReturnDate = $("#cardreturndate").val();

    var d = new Date();
    var strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
   
    listItem.set_item('EmployeeID', $("#empid").val());
    listItem.set_item('Division', $("#division").val());
    listItem.set_item('EmployeeName', $("#empname").val());
    listItem.set_item('Designation', $("#designation").val());
    listItem.set_item('Department', $("#dept").val());
    listItem.set_item('MobileNumber', $("#mobile").val());
    listItem.set_item('CostCentreDescription', $("#cost").val());
    listItem.set_item('GPS', $("#gps").val());
    listItem.set_item('VisitDate', $("#VisitDate").val());
    listItem.set_item('CardReturnDate', $("#cardreturndate").val());
    listItem.set_item('CreatedBy', _spPageContextInfo.userDisplayName);
    listItem.set_item('CreatedDate', strDate);
    listItem.update();  
    ctx.load(listItem);
    //ctx.executeQueryAsync(FamilyMemberInformationSave, AddListItemFailed);

    ctx.executeQueryAsync(Function.createDelegate(this, FamilyMemberInformationSave),Function.createDelegate(this, AddListItemFailed)
   );
}

function FamilyMemberInformationSave() {
    masterid = listItem.get_id();

    lists = web.get_lists().getByTitle(VisitRequestFamilylist); //Get the List based upon the Title  
    listCreationInformation = new SP.ListItemCreationInformation(); //Object for creating Item in the List  

    var detailItems = tblToJson($("[id$=MedicalTable] tbody tr"));

    for (var i = 0; i < detailItems.length; i++) {
        listItem = lists.addItem(listCreationInformation);

        listItem.set_item("RequestID", masterid);
        listItem.set_item("MemberName", detailItems[i].Name);
        listItem.set_item("Relation", detailItems[i].Relation);
        listItem.set_item("Age", detailItems[i].Age);
        listItem.update(); //Update the List Item 
        ctx.load(listItem);

        results.push(listItem);

    }
    PageRedirect()
}

function PageRedirect()
{
    PageRedirect(location.href.replace(pagename, HomeView), 5000);
}

function AddListItemFailed(sender, args) {
   
    showStatusMsgPopup("3", args.get_message());
}

function addnewMedicalRow() {
    $(".addnewMedicalRow").on('click', function () {
        var clone_area = $($(".tr_MedicalTable").html());
        $('<tr>').addClass("tr_MedicalTable").append(clone_area).appendTo($("[id$=MedicalTable] tbody"));
        showStatusMsgPopup("1", "Row Added !");
    });
}
