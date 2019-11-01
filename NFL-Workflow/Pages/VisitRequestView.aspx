<%@ Page language="C#" MasterPageFile="../MasterPage/NFL_Master.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderId="PlaceHolderMainContent" runat="server">
    <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
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

        <form id="VisitRequestFormView">
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
                    <table class="table mbl_cstm_tbl_blck" id="ViewTable">
                        <thead class="bg-primary">
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Relation</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr class="tr_ViewTable">
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
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label>Comments</label>
                        <textarea class="form-control" rows="5" id="comment"></textarea>
                    </div>
                </div>
            </div>
            <div class="text-left">
                <button type="button" class="btn cancle">Cancel</button>
                <button type="button" class="btn submitRequestView">Update</button>
            </div>
        </form>


    </div>
</asp:Content>

