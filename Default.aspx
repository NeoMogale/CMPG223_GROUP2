<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="BarcodeDemo.Default" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Barcode Generator Demo</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <div>
                <asp:Image ID="imgLoGO" runat="server" Height="120px" ImageUrl="~/download.jpeg" Width="156px" />
                <br />
                <br />
                <br />
                <asp:Image ID="BarcodeImage" runat="server" />
                <br />
&nbsp;&nbsp;
                <asp:Label ID="RandomNumberLabel" runat="server"></asp:Label>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    </form>
</body>
</html>
