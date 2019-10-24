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
                        <input type="text" class="form-control" placeholder="35343" id="empid" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Division</label>
                        <input type="text" class="form-control" placeholder="ABC" id="division" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" placeholder="Enter Name" id="empname" />
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-md-4">
                    <div class="form-group">
                        <label>Designation</label>
                        <input type="text" class="form-control" placeholder="Enter Designation" id="designation" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="sel1">Department</label>
                        <input type="text" class="form-control" placeholder="Enter Department" id="dept" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Mobile Number</label>
                        <input type="number" class="form-control" placeholder="+92 340 1807773" id="mobile" />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Cost Center Description</label>
                        <input type="text" class="form-control" placeholder="ABC" id="cost" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>GPS</label>
                        <input type="text" class="form-control" placeholder="Enter GPS" id="gps" />
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
                                <input type="text" placeholder="21-08-19" class="form-control datepicker"
                                    data-format="dd-MM-yyyy" id="VisitDate" />
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
                                <input type="text" placeholder="21-08-19" class="form-control datepicker"
                                    data-format="dd-MM-yyyy" id="cardreturndate" />
                                <i class="entypo-calendar"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <h1>Family Member Information</h1>



        <div class="main-form">
            <%--<div class="row" id="dupliacaterow">
                <div class="row" id="rowToClone">

                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" placeholder="Enter Name" />
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Age</label>
                            <input type="number" class="form-control" placeholder="Enter Age" />
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="sel1">Relation</label>
                            <select class="form-control" id="sel1">
                                <option>Sales Relation</option>
                                <option>Brother</option>
                                <option>Sister</option>
                                <option>Wife</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>--%>

            <div class="table-responsive cstm-table">
                <table class="table mbl_cstm_tbl_blck" id="MedicalTable">
                    <thead class="bg-primary">
                        <tr>
                            <th>Name</th>
                            <th>Age<%--<strong style="color:red">*</strong>--%></th>
                            <th>Relation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="tr_MedicalTable">
                            <td>
                                <input type="text" class="Name form-control" placeholder="Enter Name" />
                            </td>
                            <td>
                                <input type="number" class="Age form-control" placeholder="Enter Age" />
                            </td>
                            <td>
                                <select class="Relation form-control" id="sel1">
                                    <option>Sales Relation</option>
                                    <option>Brother</option>
                                    <option>Sister</option>
                                    <option>Wife</option>
                                </select>

                            </td>
                            <td>
                                <button class="btn cstm-btn bg-danger DeleteRow" type="button">
                                    <i class="entypo-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <button class="btn cstm mt-20 addnewMedicalRow" id="clone"><i class="entypo-plus"></i>Add More</button>
        <div class="text-right">
            <button type="button" class="btn submit">Submit</button>
        </div>

    </div>
</asp:Content>