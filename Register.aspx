<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="METRORAIL.Register" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
       <div>
    <asp:Label ID="lblCreateAccount" runat="server" Text="Create Account" Font-Bold="True" Font-Size="XX-Large" ForeColor="Blue"></asp:Label>
    
           <br />
           <br />
    
    <asp:Label ID="lblFirstName" runat="server" Text="First Name:" Font-Size="Large"></asp:Label>
</div>

        
        <p>
    <asp:TextBox ID="txtFirstName" runat="server"></asp:TextBox>
    
            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtFirstName" ErrorMessage="*Required!" Font-Bold="True" Font-Italic="True" Font-Size="Small" ForeColor="Red"></asp:RequiredFieldValidator>
    
        </p>
        <p>
    
    <asp:Label ID="lblLastName" runat="server" Text="Last Name:" Font-Size="Large"></asp:Label>
        </p>
        <p>
    <asp:TextBox ID="txtLastName" runat="server"></asp:TextBox>
    
            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="txtLastName" ErrorMessage="*Required!" Font-Bold="True" Font-Italic="True" Font-Size="Small" ForeColor="Red"></asp:RequiredFieldValidator>
    
            <asp:Label ID="Label3" runat="server" Text="Label"></asp:Label>
    
        </p>
        <p>
    
    <asp:Label ID="lblEmail" runat="server" Text="Email:" Font-Size="Large"></asp:Label>
        </p>
        <p>
    <asp:TextBox ID="txtEmail" runat="server" TextMode="Email"></asp:TextBox>
    
            <asp:RegularExpressionValidator ID="regEmail" runat="server" ControlToValidate="txtEmail" ErrorMessage="Please enter a valid email address" Font-Bold="True" Font-Italic="True" ForeColor="Red" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator>
    
        </p>
        <p>
    
    <asp:Label ID="lblPassword" runat="server" Text="Password:" Font-Size="Large"></asp:Label>
        </p>
        <p>
    <asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox>
    
        </p>
        <p>
    
    <asp:Label ID="lblConfirmPassword" runat="server" Text="Confirm Password:" Font-Size="Large"></asp:Label>
        </p>
        <p>
    <asp:TextBox ID="txtConfirmPassword" runat="server" TextMode="Password"></asp:TextBox>
        </p>
        <p>
            <asp:Label ID="Label1" runat="server" Font-Size="Large" Text="Phone Number:"></asp:Label>
        </p>
        <p>
            <asp:TextBox ID="txtNumber" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="txtNumber" ErrorMessage="Phone number must contain 10 digits." Font-Bold="True" Font-Italic="True" Font-Size="Small" ForeColor="Red"></asp:RequiredFieldValidator>
        </p>
        <asp:Button ID="btnRegister" runat="server" BorderColor="Blue" BorderStyle="Solid" Font-Bold="True" Font-Size="Large" OnClick="btnRegister_Click" Text="REGISTER" />
        <br />
        <br />
        <asp:Label ID="Label2" runat="server" Font-Size="Small" ForeColor="Blue" Text="Already have an Account?"></asp:Label>
        <p>
            <asp:HyperLink ID="HyperLink1" runat="server">Go to LOGIN</asp:HyperLink>
        </p>

        
    </form>
</body>
</html>
