# Azure Static Website
This project is a simple, modern, and responsive static website designed to be hosted on Azure Storage. It serves as a great starting point for developers looking to deploy a basic website to the cloud in a cost-effective and scalable way.
# Features 
* Clean and Responsive Design: The site uses a clean, mobile-first design that adapts to different screen sizes.
* JavaScript Interactivity: A basic JavaScript file is included to demonstrate a simple interactive element.
* Static Hosting: Optimized for deployment as a static site, making it perfect for portfolios, blogs, and other content-focused websites.
* Easy Deployment: The project is structured to be easily deployed to Azure Blob Storage using the Azure CLI.
# Files Included
*index.html*: The main HTML file that structures the content of the website.

*style.css*: The CSS stylesheet that controls the look and feel of the site.

*script.js*: A JavaScript file that handles the interactive behavior on the page.

# Getting Started
To get this site up and running on Azure, you will need to have the Azure CLI installed and configured.

1. Clone the Repository:

    *git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)cd your-repo-name*
3. Configure Azure Static Website:

    If you haven't already, enable the static website feature on your Azure Storage account and take note of the $web container name and the endpoint URL.
4. Deploy the Files:Use the az storage blob upload-batch command to upload all the files in your project directory to the *$web* container.

    az storage blob upload-batch \
  --account-name <your_storage_account_name> \
  --source . \
  --destination '$web' \
  --pattern "*"
# This will upload all your HTML, CSS, and JS files to the public static website container. Your site will then be live at your static website's primary endpoint.
# Contribution - Feel free to fork this repository and use it as a base for your own projects.
