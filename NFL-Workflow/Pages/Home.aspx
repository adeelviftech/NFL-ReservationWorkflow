<%@ Page language="C#" MasterPageFile="../MasterPage/NFL_Master.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>



<asp:Content ContentPlaceHolderID="PlaceHolderMainContent" runat="server">
    <div class="main">
                    <div class="row cstm-align">
                        <div class="col-md-12">
                            <p>Dashboard<span><i class="entypo-right-open-mini"></i></span>Admin</p>
                        </div>
                    </div>
                    <div class="welcome">
                        <h1>Welcome Admin</h1>
                    </div>
                    <div class="row main-grids">
                        <div class="col-lg-3">
                            <div class="request">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="pending-img">
                                            <a href="#"><img src="../assets/Images/pending.png">
     
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="Pending">
                                            <h1>023</h1>
                                            <h5>Requests Pending</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="request">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="Open-img">
                                            <a href="#"><img src="../assets/Images/open.png"></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="Open">
                                            <h1>012</h1>
                                            <h5>Open Requests </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="request">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="Complete-img">
                                               
                                            <a href="#"><img src="../assets/Images/complete.png"></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="Complete">
                                            <h1>012</h1>
                                            <h5>Complete Requests </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="request">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="Cancelled-img">
                                                
                                            <a href="#"><img src="../assets/Images/cancelled.png"></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="Cancelled">
                                            <h1>019</h1>
                                            <h5>Cancelled Requests</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="coorporate">
                                <h1>Requests</h1>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="admin-text">
                                <form class="search-btn">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search">
                                        <div class="input-group-append">
                                            <button class="btn btn-secondary" type="button">
                                                <span class="glyphicon glyphicon-search"></span></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div class="col-lg-1">
                            <div class="volume-img">
                                <img src="../assets/Images/volume.png">
                            </div>
                            <div class="main-list-inner">
                                <ul>
                                    <li><a href="">Employee Name</a></li>
                                    <li><a href="">Date</a></li>
                                    <li><a href="">Request Name</a></li>
                                    <li><a href="">Request ID</a></li>

                                </ul>
                            </div>

                        </div>
                    </div>


                    <ul class="nav nav-tabs nav-justified md-tabs indigo" id="myTabJust" role="tablist">
                        <li class="nav-item active">
                            <a class="nav-link active" id="home-tab-just" data-toggle="tab" href="#home-just" role="tab"
                                aria-controls="home-just" aria-selected="true">Visit Request</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab-just" data-toggle="tab" href="#profile-just" role="tab"
                                aria-controls="profile-just" aria-selected="false">Accommodation Requests</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab-just" data-toggle="tab" href="#contact-just" role="tab"
                                aria-controls="contact-just" aria-selected="false">Corporate Event</a>
                        </li>
                    </ul>
                    <div class="tab-content card pt-5" id="myTabContentJust">
                        <div class="tab-pane fade active in" id="home-just" role="tabpanel"
                            aria-labelledby="home-tab-just">
                            <div class="table-responsive">
                                <table class="table cstm-area" id="table_custom">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.NO.</th>
                                            <th scope="col">Employee Name</th>
                                            <th scope="col">Department</th>
                                            <th scope="col">Request ID</th>
                                            <th scope="col">Request Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       <%-- <tr>
                                            <td>001</td>
                                            <td>Mohammad Salman</td>
                                            <td>Sales</td>
                                            <td>@CR-001</td>
                                            <td>28-08-2019</td>
                                            <td>Pending</td>
                                            <td><a href="#"><i class="glyphicon glyphicon-eye-open" data-toggle="modal"
                                                        data-target="#Visit_Requests"></i></span></a></td>
                                        </tr>--%>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="profile-just" role="tabpanel" aria-labelledby="profile-tab-just">
                            <div class="table-responsive">
                                <table class="table cstm-area mt-20">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.NO.</th>
                                            <th scope="col">Employee Name</th>
                                            <th scope="col">Department</th>
                                            <th scope="col">Request ID</th>
                                            <th scope="col">Request Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>001</td>
                                            <td>Mohammad Salman</td>
                                            <td>Sales</td>
                                            <td>@CR-001</td>
                                            <td>28-08-2019</td>
                                            <td>Pending</td>
                                            <td><a href="#"><i class="glyphicon glyphicon-eye-open" data-toggle="modal"
                                                        data-target="#Accommodation_Requests"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>001</td>
                                            <td>Mohammad Salman</td>
                                            <td>Sales</td>
                                            <td>@CR-001</td>
                                            <td>28-08-2019</td>
                                            <td>Pending</td>
                                            <td><a href="#"><i class="glyphicon glyphicon-eye-open" data-toggle="modal"
                                                        data-target="#Accommodation_Requests"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>001</td>
                                            <td>Mohammad Salman</td>
                                            <td>Sales</td>
                                            <td>@CR-001</td>
                                            <td>28-08-2019</td>
                                            <td>Pending</td>
                                            <td><a href="#"><i class="glyphicon glyphicon-eye-open" data-toggle="modal"
                                                        data-target="#Accommodation_Requests"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>001</td>
                                            <td>Mohammad Salman</td>
                                            <td>Sales</td>
                                            <td>@CR-001</td>
                                            <td>28-08-2019</td>
                                            <td>Pending</td>
                                            <td><a href="#"><i class="glyphicon glyphicon-eye-open" data-toggle="modal"
                                                        data-target="#Accommodation_Requests"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact-just" role="tabpanel" aria-labelledby="contact-tab-just">
                            <div class="table-responsive">
                                <table class="table cstm-area mt-20">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.NO.</th>
                                            <th scope="col">Employee Name</th>
                                            <th scope="col">Department</th>
                                            <th scope="col">Request ID</th>
                                            <th scope="col">Request Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>001</td>
                                            <td>Mohammad Salman</td>
                                            <td>Sales</td>
                                            <td>@CR-001</td>
                                            <td>28-08-2019</td>
                                            <td>Pending</td>
                                            <td><a href="#"><i class="glyphicon glyphicon-eye-open" data-toggle="modal"
                                                        data-target="#Corporate_Event"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>001</td>
                                            <td>Mohammad Salman</td>
                                            <td>Sales</td>
                                            <td>@CR-001</td>
                                            <td>28-08-2019</td>
                                            <td>Pending</td>
                                            <td><a href="#"><i class="glyphicon glyphicon-eye-open" data-toggle="modal"
                                                        data-target="#Corporate_Event"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>001</td>
                                            <td>Mohammad Salman</td>
                                            <td>Sales</td>
                                            <td>@CR-001</td>
                                            <td>28-08-2019</td>
                                            <td>Pending</td>
                                            <td><a href="#"><i class="glyphicon glyphicon-eye-open" data-toggle="modal"
                                                        data-target="#Corporate_Event"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>001</td>
                                            <td>Mohammad Salman</td>
                                            <td>Sales</td>
                                            <td>@CR-001</td>
                                            <td>28-08-2019</td>
                                            <td>Pending</td>
                                            <td><a href="#"><i class="glyphicon glyphicon-eye-open" data-toggle="modal"
                                                        data-target="#Corporate_Event"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

        <!--Opening Visit Request-->

        <div class="modal fade" id="Visit_Requests" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title" id="exampleModalLongTitle">Visit Requests</h1>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="main-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Request ID</label>
                                        <input type="text" class="form-control" placeholder="AR-001" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Employee ID</label>
                                        <input type="text" class="form-control" placeholder="Employee ID" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Division</label>
                                        <input type="text" class="form-control" placeholder="ABC" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" placeholder="Enter Name" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="sel1">Designation</label>
                                        <select class="form-control" id="sel1">
                                            <option>Manager</option>
                                            <option>Suoervisor</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="sel1">Department</label>
                                        <select class="form-control" id="sel1" placeholder="Sale">
                                            <option>Sale</option>
                                            <option>Accounts</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Mobile Number</label>
                                        <input type="text" class="form-control" placeholder="+91 584445-4474" />
                                    </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Cost Center Description</label>
                                        <input type="text" class="form-control" placeholder="+91 584445-4474" />
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>GPS</label>
                                        <input type="text" class="form-control"
                                            placeholder="Enter GPS" />
                                    </div>
                                </div>
                            </div>

                            <div class="modal-section-two">
                                <h1>Visit Information</h1>
                                <div class="main-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group"> <label class="control-label">Visit Date</label>
                                                <div class="">
                                                    <div class="input-group"> <input type="text"
                                                            class="form-control datepicker" data-format="D, dd MM yyyy" />
                                                        <div class="input-group-addon"> <a href="#"><i
                                                                    class="entypo-calendar"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group"> <label class="control-label">Card Return
                                                    Date</label>
                                                <div class="">
                                                    <div class="input-group"> <input type="text"
                                                            class="form-control datepicker" data-format="D, dd MM yyyy" />
                                                        <div class="input-group-addon"> <a href="#"><i
                                                                    class="entypo-calendar"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="modal-section-two">
                                <h1>Family Member Information</h1>
                                <div class="main-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" class="form-control" placeholder="Enter Name" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Age</label>
                                                <input type="text" class="form-control" placeholder="21" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="sel1">Relation</label>
                                                <select class="form-control" id="sel1" placeholder="Sales">
                                                    <option>Brother</option>
                                                    <option>Sister</option>
                                                    <option>Mother</option>
                                                    <option>Father</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row object-show" style="display: none;">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Write Your Comments</label>
                                                <textarea rows="5" style="width:100%;" name="comment"
                                                    form="usrform">Comment Here</textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="main-btns mt-20">
                                <button type="button" class="btn btn-danger shows" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalCenter">Object</button>
                                <button type="button" class="btn btn-success" data-dismiss="modal">Accept</button>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="modal-footer">
 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
 <button type="button" class="btn btn-primary">Save changes</button>
</div> -->
                </div>
            </div>
        </div>

        <!---Close Visit Request-->


        <!---Opening Modal Accormodation Request-->

        <div class="modal fade" id="Accommodation_Requests" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title" id="exampleModalLongTitle">Accommodation Requests</h1>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="main-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Request ID</label>
                                        <input type="text" class="form-control" placeholder="AR-001" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Employee ID</label>
                                        <input type="text" class="form-control" placeholder="Employee ID" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" placeholder="Enter Name" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Division</label>
                                        <input type="text" class="form-control" placeholder="Enter Division" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="sel1">Designation</label>
                                        <select class="form-control" id="sel1">
                                            <option>Manager</option>
                                            <option>Suoervisor</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="sel1">Department</label>
                                        <select class="form-control" id="sel1" placeholder="Sale">
                                            <option>Sale</option>
                                            <option>Accounts</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>GPS</label>
                                        <input type="text" class="form-control" placeholder="Enter GPS" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Mobile Number</label>
                                        <input type="text" class="form-control" placeholder="+91 584445-4474" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Cost Centre Description</label>
                                        <input type="text" class="form-control"
                                            placeholder="Enter Cost Centre Description">
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group"> <label class="control-label">Visit Date</label>
                                        <div class="">
                                            <div class="input-group"> <input type="text" class="form-control datepicker"
                                                    data-format="D, dd MM yyyy" />
                                                <div class="input-group-addon"> <a href="#"><i
                                                            class="entypo-calendar"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group"> <label class="control-label">Card Return Date</label>
                                        <div class="">
                                            <div class="input-group"> <input type="text" class="form-control datepicker"
                                                    data-format="D, dd MM yyyy" />
                                                <div class="input-group-addon"> <a href="#"><i
                                                            class="entypo-calendar"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-section-two">
                                <h1>Family Member Information</h1>
                                <div class="main-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" class="form-control" placeholder="Enter Name" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Age</label>
                                                <input type="text" class="form-control" placeholder="21" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="sel1">Relation</label>
                                                <select class="form-control" id="sel1" placeholder="Sales">
                                                    <option>Brother</option>
                                                    <option>Sister</option>
                                                    <option>Mother</option>
                                                    <option>Father</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <label>Scanned copy of Valid CNIC*</label>
                                            <form class="form cstm">
                                                <div class="file-upload-wrapper" data-text="Upload CNIC">
                                                    <input name="file-upload-field" type="file"
                                                        class="file-upload-field" value="" />
                                                </div>
                                            </form>
                                        </div>



                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Scanned copy of Nikah Nama</label>
                                            <form class="form cstm">
                                                <div class="file-upload-wrapper" data-text="Upload Nikkah Nama">
                                                    <input name="file-upload-field" type="file"
                                                        class="file-upload-field" value="" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="row object-show" style="display: none;">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Write Your Comments</label>
                                                <textarea rows="5" style="width:100%;" name="comment"
                                                    form="usrform">Comment Here</textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="main-btns mt-20">
                                <button type="button" class="btn btn-danger shows" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalCenter">Object</button>
                                <button type="button" class="btn btn-success" data-dismiss="modal">Accept</button>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="modal-footer">
 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
 <button type="button" class="btn btn-primary">Save changes</button>
</div> -->
                </div>
            </div>
        </div>
        
        <!---Close Accormodation Request-->


   
        <!---Opening Modal Corporate Request-->

        <div class="modal fade" id="Corporate_Event" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title" id="exampleModalLongTitle">Corporate Event</h1>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="main-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Request ID</label>
                                        <input type="text" class="form-control" placeholder="VR-001" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Employee ID</label>
                                        <input type="text" class="form-control" placeholder="35343" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Division</label>
                                        <input type="text" class="form-control" placeholder="Abc" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" placeholder="Enter Name" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Designation</label>
                                        <input type="text" class="form-control" placeholder="Sales Manager" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="sel1">Department</label>
                                        <select class="form-control" id="sel1">
                                            <option>Sales</option>
                                            <option>Suoervisor</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Mobile Number</label>
                                        <input type="number" class="form-control" placeholder="+92 340 1807773" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Cost Center Description</label>
                                        <input type="text" class="form-control" placeholder="Abc" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>GPS</label>
                                        <input type="text" class="form-control" placeholder="Enter GPS" />
                                    </div>
                                </div>
                            </div>
                            <div class="modal-section-two">
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
                                                <label>Number of Attendance</label>
                                                <input type="text" class="form-control" placeholder="Enter Attendance" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group"> <label class="control-label">Date From</label>
                                                <div class="">
                                                    <div class="input-groups"> <input type="text"
                                                            class="form-control datepicker" placeholder="Date From"
                                                            data-format="D, dd MM yyyy" />
                                                        <i class="entypo-calendar"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group"> <label class="control-label">Date To</label>
                                                <div class="">
                                                    <div class="input-groups"> <input type="text"
                                                            class="form-control datepicker" placeholder="Date To"
                                                            data-format="D, dd MM yyyy" />
                                                        <i class="entypo-calendar"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group"> <label class="control-label">Time duration</label>
                                                <div class="">
                                                    <div class="input-group"> <input type="text"
                                                            class="form-control timepicker" data-template="dropdown"
                                                            data-show-seconds="true" data-default-text="0:00"
                                                            data-show-meridian="true" data-minute-step="5"
                                                            data-second-step="5" />
                                                        <div class="input-group-addon"> <a href="#"><i
                                                                    class="entypo-clock"></i></a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Choose Accommodation Type</label>
                                                <form class="d-flex-cstm" action="#">
                                                    <p>
                                                        <input type="radio" id="test1" name="radio-group" checked="" />
                                                        <label for="test1">Cabana</label>
                                                    </p>
                                                    <p>
                                                        <input type="radio" id="test2" name="radio-group" />
                                                        <label for="test2">Chalet</label>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Meeting Room Requried</label>
                                                <form class="d-flex-cstm" action="#">
                                                    <p>
                                                        <input type="radio" id="test3" name="radio-group" checked="" />
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
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Number of Cabana </label>
                                                <input type="text" class="form-control" placeholder="Enter Cabana" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Number of Meeting Room Required</label>
                                                <input type="number" class="form-control" placeholder="999" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-section-two">
                                <h1>Day Plan Details</h1>
                                <div class="main-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group"> <label class="control-label">Date</label>
                                                <div class="">
                                                    <div class="input-groups"> <input type="text"
                                                            class="form-control datepicker" placeholder="Select Date"
                                                            data-format="D, dd MM yyyy" />
                                                        <i class="entypo-calendar"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group"> <label class="control-label">Time</label>
                                                <div class="">
                                                    <div class="input-group"> <input type="text"
                                                            class="form-control timepicker" data-template="dropdown"
                                                            data-show-seconds="true" data-default-text="0:00"
                                                            data-show-meridian="true" data-minute-step="5"
                                                            data-second-step="5" />
                                                        <div class="input-group-addon"> <a href="#"><i
                                                                    class="entypo-clock"></i></a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Description</label>
                                                <input type="text" class="form-control" placeholder="Add Description" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row object-show" style="display: none;">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Write Your Comments</label>
                                                <textarea rows="5" style="width:100%;" name="comment"
                                                    form="usrform">Comment Here</textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type="button" class="btn btn-danger shows" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalCenter">Object</button>
                            <button type="button" class="btn btn-success" data-dismiss="modal">Accept</button>
                        </div>
                    </div>
                    <!-- <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div> -->
                </div>
            </div>
        </div>

        <!---Opening Modal Corporate Request-->
        

        <!-- Modal -->

        <div class="modal fade" id="exampleModalCenter" tabindex="1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="exampleModalLongTitle">Comments</h2>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <label>Write Your Comments</label>
                        <textarea rows="15" style="width:100%;" name="comment" form="usrform">Comment Here</textarea>
                    </div>
                    <div class="modal-footer text-left">
                        <button type="button" class="btn btn-primary submits">Send</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Close Modal -->
</asp:Content>