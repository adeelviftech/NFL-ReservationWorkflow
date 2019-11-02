<%@ Page language="C#" MasterPageFile="../MasterPage/NFL_Master.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderID="PlaceHolderMainContent" runat="server">
    <script type="text/javascript" src="../Scripts/CorporateEventApproval.js"></script>
    <div class="main-area-wrapper">
            <form id="CorporateEventForm">
        <div class="row cstm-align">
            <div class="col-md-12">
                <p>Home<span><i class="entypo-right-open-mini"></i></span>Event</p>
            </div>
        </div>

        <h1>Corporate Event</h1>
     
        <div class="main-form">
            <div class="row">
              
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Employee ID</label>
                        <input type="text" class="form-control" placeholder="35343" id="EmpID" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Division</label>
                        <input type="text" class="form-control" placeholder="Abc" id="Division" />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" placeholder="Enter Name" id="Name" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Designation</label>
                        <input type="text" class="form-control" placeholder="Sales Manager" id="Designation" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="department">Department</label>
                        <select class="form-control" id="department">
                            <option>Sales</option>
                            <option>Supervisor</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Mobile Number</label>
                        <input type="number" class="form-control" placeholder="+92 340 1807773" id="MblNumber" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Cost Center Description</label>
                        <input type="text" class="form-control" placeholder="Abc" id="CostCenterDescription" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>GPS</label>
                        <input type="text" class="form-control" placeholder="Invalid Location" id="GPS" />
                    </div>
                </div>
            </div>
        </div>

        <h1>Event Details</h1>
    
        <div class="main-form">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Name of event</label>
                        <input type="text" class="form-control" placeholder="Enter Event Name" id="NameOfEvent" name="NameOfEvent" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Number of Attendees</label>
                        <input type="text" class="form-control" placeholder="Enter Attendees" id="NumberofAttendees" name="NumberofAttendees" />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label">Date From</label>
                        <div class="">
                            <div class="input-groups">
                                <input type="text" class="form-control datepicker" id="Datefrom" placeholder="Date From"
                                    data-format="D, dd MM yyyy" name="Datefrom" />
                                <i class="entypo-calendar"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label">Date To</label>
                        <div class="">
                            <div class="input-groups">
                                <input type="text" class="form-control datepicker" id="Dateto" placeholder="Date To"
                                    data-format="D, dd MM yyyy" name="Dateto" />
                                <i class="entypo-calendar"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label">Time duration</label>
                        <div class="">
                            <div class="input-group">
                                <input type="text" class="form-control timepicker"
                                    data-template="dropdown" data-show-seconds="true" data-default-text="0:00"
                                    data-show-meridian="true" data-minute-step="5" data-second-step="5" id="TimeDuration" name="TimeDuration" />
                                <div class="input-group-addon"><a href="#"><i class="entypo-clock"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Choose Accommodation Type</label>
                        <form class="d-flex-cstm" action="#">
                            <p>
                                <input type="radio" id="Accommdationtype1" name="radio-group" checked />
                                <label for="Accommdationtype1">Cabana</label>
                            </p>
                            <p>
                                <input type="radio" id="Accommdationtype2" name="radio-group" />
                                <label for="Accommdationtype2">Chalet</label>
                            </p>
                        </form>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Meeting Room Requried</label>
                        <form class="d-flex-cstm" action="#">
                            <p>
                                <input type="radio" id="meetingRoom1" name="radio-group" checked />
                                <label for="meetingRoom1">Yes</label>
                            </p>
                            <p>
                                <input type="radio" id="meetingRoom2" name="radio-group" />
                                <label for="meetingRoom2">No</label>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Number of Cabana </label>
                        <input type="text" class="form-control" id="numofCabana" name="numofCabana" placeholder="Enter Cabana" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Number of Meeting Room Required</label>
                        <input type="number" class="form-control" id="numofmeetingRoomReq" name="numofmeetingRoomReq" placeholder="999" />
                    </div>
                </div>
                <!-- <div class="col-md-4">
                        <div class="form-group">
                            <label for="sel1">Select list:</label>
                            <select class="form-control" id="sel1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div> -->
                <!-- <div class="col-md-4">
                        <div class="form-group"> <label class="control-label">Time Picker (input-group)</label>
                            <div class="">
                                <div class="input-group"> <input type="text" class="form-control timepicker"
                                        data-template="dropdown" data-show-seconds="true" data-default-time="11:25 AM"
                                        data-show-meridian="true" data-minute-step="5" data-second-step="5">
                                    <div class="input-group-addon"> <a href="#"><i class="entypo-clock"></i></a> </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
            </div>

            <!-- <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Request ID</label>
                            <input type="text" class="form-control" placeholder="VR-001">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group"> <label class="control-label">Date Picker (popup)</label>
                            <div class="">
                                <div class="input-groups"> <input type="text" class="form-control datepicker"
                                        data-format="D, dd MM yyyy">
                                    <i class="entypo-calendar"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div> -->

        </div>
            
        <!-- TS157046936416258: Xenon - Boostrap Admin Template created by Laborator / Please buy this theme and support the updates -->
        <h1>Day Plan Details</h1>
        <div class="main-form">

            <%--     <div class="row">
                    <div class="col-md-4">
                        <div class="form-group"> <label class="control-label">Date</label>
                            <div class="">
                                <div class="input-groups"> <input type="text" id="PlansDate" class="form-control datepicker" placeholder="Select Date"
                                        data-format="D, dd MM yyyy" />
                                    <i class="entypo-calendar"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group"> <label class="control-label">Time</label>
                            <div class="">
                                <div class="input-group"> <input type="text" id="PlansTime" class="form-control timepicker" 
                                        data-template="dropdown" data-show-seconds="true" data-default-text="0:00"
                                        data-show-meridian="true" data-minute-step="5" data-second-step="5" />
                                    <div class="input-group-addon"> <a href="#"><i class="entypo-clock"></i></a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Description</label>
                            <input type="text" class="form-control" id="PlansDescription" placeholder="Add Description" />
                        </div>
                    </div>
                </div>--%>


            <div class="table-responsive cstm-table">
                <table class="table mbl_cstm_tbl_blck" id="MedicalTable">
                    <thead class="bg-primary">
                        <tr>
                            <th>Date</th>
                            <th>Time<%--<strong style="color:red">*</strong>--%></th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="tr_MedicalTable">
                            <td>
                                <div class="">
                                    <div class="input-groups">
                                        <input type="text" id="PlansDate" name="PlansDate" class="form-control plansdate datepicker" placeholder="Select Date"
                                            data-format="D, dd MM yyyy" />
                                        <i class="entypo-calendar"></i>
                                        <span id="Dateerror" class="Date_error" style="color: red; font-size: 10px;"></span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="">
                                    <div class="input-group">
                                        <input type="text" id="PlansTime" name="PlansTime" class="form-control planstime timepicker"
                                            data-template="dropdown" data-show-seconds="true" data-default-text="0:00"
                                            data-show-meridian="true" data-minute-step="5" data-second-step="5" />
                                        <div class="input-group-addon"><a href="#"><i class="entypo-clock"></i></a></div>
                                        <span id="Timerror" class="Age_Time" style="color: red; font-size: 10px;"></span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <input type="text" class="form-control PlansDescription" id="PlansDescription" placeholder="Add Description" />
                            <span id="Descriptionerror" class="Description_error" style="color: red; font-size: 10px;"></span>
                            </td>
                          <%--  <td>
                                <button class="btn cstm-btn bg-danger DeleteRow" type="button" onclick="removeRow_New(this);">
                                    <i class="entypo-trash"></i>
                                </button>
                            </td>--%>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      
        <%--<button class="btn cstm mt-20 addnewMedicalRow" id="clone"><i class="entypo-plus"></i>Add More</button>--%>
        <%--        <button class="btn cstm mt-20"><i class="entypo-plus"></i>Add More</button>--%>
        <div class="text-right">
            <button  type="button" class="btn submitRequestView">Update</button>
        </div>
      </form>
    </div>
</asp:Content>
