<%@ Page language="C#" MasterPageFile="../MasterPage/NFL_Master.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderID="PlaceHolderMainContent" runat="server">
    <div class="main-area-wrapper">
        <form id="AccommodationRequestForm">
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
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group"> <label class="control-label">Visit Date</label>
                                <div class="">
                                    <div class="input-groups">
                                    <input placeholder="21-08-19" class="form-control daterange-single"
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

                </div>

                <h1>Family Member Information</h1>
        <div class="main-form">
            <div class="table-responsive cstm-table">
                <table class="table mbl_cstm_tbl_blck" id="AccommodationTable">
                    <thead class="bg-primary">
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Relation</th>
                            <th>CNIC</th>
                            <th>Nikah Nama</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="tr_AccommodationTable">
                            <td>
                                <input type="text" class="Name form-control NameAcc" placeholder="Enter Name" />
                                <span id="NameerrorAcc" class="Name_error_Acc" style="color: red; font-size: 10px;"></span>
                            </td>
                            <td>
                                <input type="number" class="Age form-control AgeAcc" placeholder="Enter Age" />
                                <span id="AgeerrorAcc" class="Age_error_Acc" style="color: red; font-size: 10px;"></span>
                            </td>
                            <td>
                                <select class="RelationAcc form-control relation" id="sel1">
                                    <option>Brother</option>
                                    <option>Sister</option>
                                    <option>Wife</option>
                                </select>
                                <span id="RelationerrorAcc" class="Relation_error_Acc" style="color: red; font-size: 10px;"></span>

                            </td>
                            <td>

                                <form class="form cstm">
                                    <div class="file-upload-wrapper">
                                        <input name="file-upload-field" type="file" id="CNIC" class="file-upload-field customFileCNIC" value="" />
                                    </div>
                                    
                                </form>
                                <span class="CNICAttachment" style="color: red; font-size: 10px;"></span>
                            </td>
                            <td>
                                <form class="form cstm">
                                    <div class="file-upload-wrapper">
                                        <input name="file-upload-field" type="file" id="NikahNama" class="file-upload-field customFileNikahNama" value="" />
                                    </div>
                                </form>
                                <span class="NikahNamaAttachment" style="color: red; font-size: 10px;"></span>
                            </td>
                            <td>
                                <button class="btn cstm-btn bg-danger DeleteRow" type="button" onclick="removeRow_New(this);">
                                    <i class="entypo-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
                <button class="btn cstm mt-20 addnewAccommodationRow"><i class="entypo-plus"></i> Add More</button>
                <div class="text-right">
                    <button class="btn submitAccommodation">Submit</button>
                </div>
            </form>
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