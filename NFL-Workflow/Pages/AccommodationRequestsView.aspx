<%@ Page language="C#" MasterPageFile="../MasterPage/NFL_Master.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderID="PlaceHolderMainContent" runat="server">
    <div class="main-area-wrapper">
                <div class="row cstm-align">
                    <div class="col-md-12">
                        <p>Home<span><i class="entypo-right-open-mini"></i></span>Accommodation Requests</p>
                    </div>
                </div>

                <h1>Accommodation Requests</h1>
                <div class="main-form">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Employee ID</label>
                                <input type="text" class="form-control" placeholder="Employee ID" id="empidAcc" name="empidAcc" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" placeholder="Enter Name" id="empnameAcc" name="empnameAcc" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Division</label>
                                <input type="text" class="form-control" placeholder="Enter Division" id="divisionAcc" name="divisionAcc" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Designation</label>
                                <input type="text" class="form-control" placeholder="Enter Designation" id="designationAcc" name="designationAcc" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="sel1">Department</label>
                                <input type="text" class="form-control" placeholder="Enter Department" id="deptAcc" name="deptAcc" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>GPS</label>
                                <input type="text" class="form-control" placeholder="Enter GPS" id="gpsAcc" name="gpsAcc" />
                            </div>
                        </div>
                    </div>

                    <div class="row">

                        
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Mobile Number</label>
                                <input type="text" class="form-control" placeholder="+92 340 1807773" id="mobileAcc" name="mobileAcc" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Cost Center Description</label>
                                <input type="text" class="form-control" placeholder="ABC" id="costAcc" name="costAcc" />
                            </div>
                        </div>
                    </div>
                </div>

                <h1>Request Information</h1>
                <div class="main-form">
                    <form id="viewAccForm">
                        <div class="row">
                        <div class="col-md-4">
                            <div class="form-group"> <label class="control-label">Visit Date</label>
                                <div class="">
                                    <div class="input-groups">
                                    <input type="text" placeholder="21-08-19" class="form-control daterange-single"
                                         id="VisitDateAcc" name="VisitDateAcc" />
                                    <i class="entypo-calendar"></i>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group"> <label class="control-label">Card Return Date</label>
                                <div class="">
                                    <div class="input-groups">
                                    <input type="text" placeholder="21-08-19" class="form-control daterange-single"
                                         id="cardreturndateAcc" name="cardreturndateAcc" />
                                    <i class="entypo-calendar"></i>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                    

                </div>

                <h1>Family Member Information</h1>
                <div class="main-form">
            <div class="table-responsive cstm-table">
                <table class="table mbl_cstm_tbl_blck" id="AccommodationTableView">
                    <thead class="bg-primary">
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Relation</th>
                            <th>CNIC</th>
                            <th>Nikah Nama</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>


        </div>
               
                <div class="text-right">
                    <button class="btn submitUpateAcc">Update</button>
                    <button class="btn submitcancelAcc">Cancel</button>
                </div>

                <div class="trems-conditions">
                    <h3>Terms & Conditions</h3>
                    <ul>
                        <li>Dreamworld cards will be provided by Admin on first come first & availability basis</li>
                        <li>Docs required for Accommodation at Dreamworld</li>
                        <li>Scanned copy of Valid CNIC</li>
                        <li>Scanned copy of Nikkah Nama (If visiting with spouse)</li>
                        <li>Full advance payment in cash</li>
                    </ul>
                </div>
            </div>
</asp:Content>

