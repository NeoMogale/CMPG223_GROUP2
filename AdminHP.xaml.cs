using Metrorail.Customers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Metrorail
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class AdminHP : ContentPage
    {
        public AdminHP()
        {
            InitializeComponent();
        }
       

        private void btnUpdate_Clicked(object sender, EventArgs e)
        {

        }

        private void btnDelete_Clicked(object sender, EventArgs e)
        {

        }

        private void btnAdd_Clicked(object sender, EventArgs e)
        {

        }

        private async void btnRead_Clicked(object sender, EventArgs e)
        {
            int id = int.Parse(txtPersonId.Text);
            // if (!string.IsNullOrEmpty(txtPersonId.Te))
            // { 
            //Get Person  
            var customers = await App.MyDatabase.GetItemAsync(txtName.Text);

                if (customers != null)
                {
                     id  = customers.Id;
                    
                    await DisplayAlert("Success", "Person Name: " + customers.LastName, "OK");
                }
           // }
           // else
          //  {
              //  await DisplayAlert("Required", "Please Enter PersonID", "OK");
           // }
        }
    }
}