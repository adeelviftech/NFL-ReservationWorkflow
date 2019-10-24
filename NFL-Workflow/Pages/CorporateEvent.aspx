<%@ Page language="C#" MasterPageFile="../MasterPage/NFL_Master.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderID="PlaceHolderMainContent" runat="server">
    <div class="main-area-wrapper">
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
                            <label>Request ID</label>
                            <input type="text" class="form-control" placeholder="VR-001" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Employee ID</label>
                            <input type="text" class="form-control" placeholder="35343" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Division</label>
                            <input type="text" class="form-control" placeholder="Abc" />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" placeholder="Enter Name" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Designation</label>
                            <input type="text" class="form-control" placeholder="Sales Manager" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="sel1">Department</label>
                            <select class="form-control" id="sel1">
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
                            <input type="number" class="form-control" placeholder="+92 340 1807773" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Cost Center Description</label>
                            <input type="text" class="form-control" placeholder="Abc" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>GPS</label>
                            <input type="text" class="form-control" placeholder="Invalid Location" />
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
                            <input type="text" class="form-control" placeholder="Enter Event Name" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Number of Attendees</label>
                            <input type="text" class="form-control" placeholder="Enter Attendees" />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group"> <label class="control-label">Date From</label>
                            <div class="">
                                <div class="input-groups"> <input type="text" class="form-control datepicker" placeholder="Date From" 
                                        data-format="D, dd MM yyyy" />
                                    <i class="entypo-calendar"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group"> <label class="control-label">Date To</label>
                            <div class="">
                                <div class="input-groups"> <input type="text" class="form-control datepicker" placeholder="Date To" 
                                        data-format="D, dd MM yyyy" />
                                    <i class="entypo-calendar"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group"> <label class="control-label">Time duration</label>
                            <div class="">
                                <div class="input-group"> <input type="text" class="form-control timepicker" 
                                        data-template="dropdown" data-show-seconds="true" data-default-text="0:00"
                                        data-show-meridian="true" data-minute-step="5" data-second-step="5" />
                                    <div class="input-group-addon"> <a href="#"><i class="entypo-clock"></i></a> </div>
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
                                    <input type="radio" id="test1" name="radio-group" checked />
                                    <label for="test1">Cabana</label>
                                </p>
                                <p>
                                    <input type="radio" id="test2" name="radio-group" />
                                    <label for="test2">Chalet</label>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Meeting Room Requried</label>
                            <form class="d-flex-cstm" action="#">
                                <p>
                                    <input type="radio" id="test3" name="radio-group" checked />
                                    <label for="test3">Yes</label>
                                </p>
                                <p>
                                    <input type="radio" id="test4" name="radio-group" />
                                    <label for="test4">No</label>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Number of Cabana </label>
                            <input type="text" class="form-control" placeholder="Enter Cabana" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Number of Meeting Room Required</label>
                            <input type="number" class="form-control" placeholder="999" />
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
           
            <div class="row">
                    <div class="col-md-4">
                        <div class="form-group"> <label class="control-label">Date</label>
                            <div class="">
                                <div class="input-groups"> <input type="text" class="form-control datepicker" placeholder="Select Date"
                                        data-format="D, dd MM yyyy" />
                                    <i class="entypo-calendar"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group"> <label class="control-label">Time</label>
                            <div class="">
                                <div class="input-group"> <input type="text" class="form-control timepicker" 
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
                            <input type="text" class="form-control" placeholder="Add Description" />
                        </div>
                    </div>
                </div>
                </div>

            <button class="btn cstm mt-20"><i class="entypo-plus"></i> Add More</button>
            <div class="text-right">
                <button class="btn submit">Submit</button>
            </div>

    </div>
</asp:Content>