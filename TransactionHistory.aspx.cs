using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace METRORAIL
{
    public partial class TransactionHistory : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            // TEMPORARY CODE
           /** if (!IsPostBack)
            {
                // Sample transaction data (replace this with your actual data source)
                List<Transaction> transactions = new List<Transaction>
            {
                new Transaction { Date = DateTime.Now.AddDays(-2), NumberOfTravelers = 2, Payment = "Credit Card", Amount = 250.00 },
                new Transaction { Date = DateTime.Now.AddDays(-1), NumberOfTravelers = 1, Payment = "PayPal", Amount = 100.50 },
                new Transaction { Date = DateTime.Now, NumberOfTravelers = 3, Payment = "Cash", Amount = 350.75 },
            };

                GridView1.DataSource = transactions;
                GridView1.DataBind();
            }
        }
        private class Transaction
        {
            public DateTime Date { get; set; }
            public int NumberOfTravelers { get; set; }
            public string Payment { get; set; }
            public double Amount { get; set; }
        }

        protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
        {
*/
        }
    }
}