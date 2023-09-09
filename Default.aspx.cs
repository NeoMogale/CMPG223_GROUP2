using System;
using System.Drawing;
using System.IO;
using System.Web.UI;
using ZXing;

namespace BarcodeDemo
{
    public partial class Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // Empty load event
            string ticketData = "Event12345";

            // Generate a random 9-digit number
            Random random = new Random();
            string randomDigits = random.Next(100000000, 999999999).ToString();

            // Combine the barcode and random number
            string combinedData = ticketData + randomDigits;

            BarcodeWriter barcodeWriter = new BarcodeWriter();
            barcodeWriter.Format = BarcodeFormat.QR_CODE;
            Bitmap barcodeBitmap = barcodeWriter.Write(combinedData);

            using (MemoryStream ms = new MemoryStream())
            {
                barcodeBitmap.Save(ms, System.Drawing.Imaging.ImageFormat.Png);
                byte[] imageBytes = ms.ToArray();
                string base64Image = Convert.ToBase64String(imageBytes);

                BarcodeImage.ImageUrl = "data:image/png;base64," + base64Image;
                RandomNumberLabel.Text = randomDigits;
            }
        }
    }
}
