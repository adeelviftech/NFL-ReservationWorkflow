<%@ Page language="C#" MasterPageFile="../MasterPage/NFL_Master.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderID="PlaceHolderMainContent" runat="server">
    <div class="main-area-wrapper">
        
            <div class="row cstm-align">
                <div class="col-md-12">
                    <p>Home<span><i class="entypo-right-open-mini"></i></span>Visit Request</p>
                </div>
            </div>

            <h1>Visit Request</h1>

            <div class="main-form">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Employee ID</label>
                            <input type="text" class="form-control" placeholder="35343" id="empid" name="empid" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Division</label>
                            <input type="text" class="form-control" placeholder="ABC" id="division" name="division" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" placeholder="Enter Name" id="empname" name="empname" />
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Designation</label>
                            <input type="text" class="form-control" placeholder="Enter Designation" id="designation" name="designation" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="sel1">Department</label>
                            <input type="text" class="form-control" placeholder="Enter Department" id="dept" name="dept" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Mobile Number</label>
                            <input type="number" class="form-control" placeholder="+92 340 1807773" id="mobile" name="mobile" />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Cost Center Description</label>
                            <input type="text" class="form-control" placeholder="ABC" id="cost" name="cost" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>GPS</label>
                            <input type="text" class="form-control" placeholder="Enter GPS" id="gps" name="gps" />
                        </div>
                    </div>
                </div>

            </div>

            <h1>Visit Information</h1>


            <div class="main-form">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label">Visit Date</label>
                            <div class="">
                                <div class="input-groups">
                                    <input placeholder="21-08-19" class="form-control daterange-single" id="VisitDate" name="VisitDate" />
                                    <i class="entypo-calendar"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label">Card Return Date</label>
                            <div class="">
                                <div class="input-groups">
                                    <input type="text" placeholder="21-08-19" class="form-control daterange-single" id="cardreturndate" name="cardreturndate" />
                                    <i class="entypo-calendar"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <h1>Family Member Information</h1>



            <div class="main-form">
                <div class="table-responsive cstm-table">
                    <table class="table mbl_cstm_tbl_blck" id="FamilyTable">
                        <thead class="bg-primary">
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Relation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="tr_MedicalTable">
                                <td>
                                    <input type="text" class="Name form-control" placeholder="Enter Name" />
                                    <span id="Nameerror" class="Name_error" style="color: red; font-size: 10px;"></span>
                                </td>
                                <td>
                                    <input type="number" class="Age form-control" placeholder="Enter Age" />
                                    <span id="Ageerror" class="Age_error" style="color: red; font-size: 10px;"></span>
                                </td>
                                <td>
                                    <select class="Relation form-control" id="sel1">
                                        <option>Brother</option>
                                        <option>Sister</option>
                                        <option>Wife</option>
                                    </select>
                                    <span id="Relationerror" class="Relation_error" style="color: red; font-size: 10px;"></span>

                                </td>
                               
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h1>Admin Use Only</h1>
        <form id="VisitRequestApprovalForm">
            <div class="main-form">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Card Handover Date</label>
                            <div class="">
                                <div class="input-groups">
                                    <input type="text" placeholder="21-08-19" class="form-control daterange-single" id="cardhandoverdate" name="cardhandoverdate" />
                                    <i class="entypo-calendar"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <div class="">
                                <div class="input-groups">
                                    <input type="text" placeholder="21-08-19" class="form-control daterange-single" id="cardreturn" name="cardreturn" />
                                    <i class="entypo-calendar"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Card Serial Number</label>
                            <input type="text" class="form-control" placeholder="123456789" id="cardserial" name="cardserial" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Employee Name</label>
                           <%-- <input type="text" class="form-control" placeholder="Enter Employee Name" id="employeename" name="employeename" />--%>
                            <select class="EMPNAME form-control empnames" id="EMPID" name="EMPNAME">
                                        
                                        
                                        
                                    </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Employee Number</label>
                            <input type="text" class="form-control" placeholder="Enter Employee Number" id="empnumber" name="empnumber" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Employee Email</label>
                            <input type="text" class="form-control" placeholder="Enter Employee Email" id="empemail" name="empemail" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Contact No</label>
                            <input type="text" class="form-control" placeholder="Enter Contact No" id="ContactNo" name="ContactNo" />
                        </div>
                    </div>
                    <div class="col-md-4">
                    </div>
                    <div class="col-md-4">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Comments</label>
                            <textarea cols="" class="form-control" rows="5" id="commentbox" name="commentbox"></textarea>
                        </div>
                    </div>

                </div>
            </div>

            <div class="text-left">
                <button type="button" class="btn submitapproval">Approve</button>
                <button type="button" class="btn reject">Reject</button>
                <button type="button" class="btn sendback">Send Back To Initiator</button>
            </div>
        </form>
            
    </div>
</asp:Content>