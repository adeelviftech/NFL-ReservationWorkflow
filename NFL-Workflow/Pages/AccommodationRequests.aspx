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
                                <label>Request ID</label>
                                <input type="text" class="form-control" placeholder="AR-001" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Employee ID</label>
                                <input type="text" class="form-control" placeholder="Employee ID" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" placeholder="Enter Name" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Division</label>
                                <input type="text" class="form-control" placeholder="Enter Division" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="sel1">Designation</label>
                                <select class="form-control" id="sel1">
                                    <option>Manager</option>
                                    <option>Suoervisor</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-4">
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

                        <div class="col-md-4">
                            <div class="form-group">
                                <label>GPS</label>
                                <input type="text" class="form-control" placeholder="Enter GPS" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Mobile Number</label>
                                <input type="text" class="form-control" placeholder="Enter Mobile Number" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Cost Centre Description</label>
                                <input type="text" class="form-control" placeholder="Enter Cost Centre Description" />
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
                                    <div class="input-groups"> <input type="text" placeholder="21-october-2019" class="form-control datepicker"
                                            data-format="dd-MM-yyyy" />
                                        <i class="entypo-calendar"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group"> <label class="control-label">Card Return Date</label>
                                <div class="">
                                    <div class="input-groups"> <input type="text" placeholder="21-october-2019" class="form-control datepicker"
                                            data-format="dd-MM-yyyy" />
                                        <i class="entypo-calendar"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <h1>Family Member Information</h1>
                <div class="main-form">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" placeholder="Enter Name" />
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Age</label>
                                <input type="text" class="form-control" placeholder="Enter Age" />
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="sel1">Relation</label>
                                <select class="form-control" id="sel1" placeholder="Select Relation">
                                    <option>Sale</option>
                                    <option>Accounts</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <label>Scanned copy of Valid CNIC*</label>
                            <form class="form cstm">
                                <div class="file-upload-wrapper" data-text="Upload CNIC">
                                    <input name="file-upload-field" type="file" class="file-upload-field" value="" />
                                </div>
                            </form>
                        </div>
                        <div class="col-md-4">
                            <label>Scanned copy of Nikah Nama</label>
                            <form class="form cstm">
                                <div class="file-upload-wrapper" data-text="Upload Nikkah Nama">
                                    <input name="file-upload-field" type="file" class="file-upload-field" value="" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <button class="btn cstm mt-20"><i class="entypo-plus"></i> Add More</button>
                <div class="text-right">
                    <button class="btn submit">Submit</button>
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