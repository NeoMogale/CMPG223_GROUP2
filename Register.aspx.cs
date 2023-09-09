using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;
using System.Xml.Linq;

//

namespace METRORAIL
{
    public partial class Register : System.Web.UI.Page
    {
        public SqlConnection connection = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\MetroRailSystem.mdf;Integrated Security=True");
        public SqlCommand cmd = new SqlCommand();
        public SqlDataAdapter adapter = new SqlDataAdapter();

        protected void Page_Load(object sender, EventArgs e)
        {
            if(!IsPostBack)
            {
                txtFirstName.Focus();
            }
        }

        protected void btnRegister_Click(object sender, EventArgs e)
        {
            try
            {
                connection.Open();

                string name = txtFirstName.Text;
                string surname = txtLastName.Text;
                string email = txtEmail.Text;
                string password = txtPassword.Text;
                string contactNo = txtNumber.Text;

                string sqlInsert = "INSERT INTO ClientTbl (Name, Surname, Email, Password, ContactNo) " +
                                   "VALUES (@Name, @Surname, @Email, @Password, @ContactNo)";

                cmd = new SqlCommand(sqlInsert, connection);

                cmd.Parameters.AddWithValue("@Name", name);
                cmd.Parameters.AddWithValue("@Surname", surname);
                cmd.Parameters.AddWithValue("@Email", email);
                cmd.Parameters.AddWithValue("@Password", password);
                cmd.Parameters.AddWithValue("@ContactNo", contactNo);

                cmd.ExecuteNonQuery();

                //in place of Label3 - Referrence Login Page.
                //Remove LABEL3.

                Label3.Text = "Registration Successful!";

                //clear all textboxes as soon as the information is stored in database
                txtFirstName.Text = "";
                txtLastName.Text = "";
                txtEmail.Text = "";
                txtNumber.Text = "";
            }
            catch (Exception ex)
            {
                // Handle exceptions here
                Label3.Text = "An error occurred: " + ex.Message; // Login page != displayed.
            }
           
            
                connection.Close();
            
        }
    }
}


