# EmailJS Setup Instructions

The contact form is now configured to send emails to `info@kaisezle.com` using EmailJS.

## Setup Steps

1. **Create an EmailJS Account**

    - Go to https://www.emailjs.com/
    - Sign up for a free account (free tier includes 200 emails/month)

2. **Add an Email Service**

    - In the EmailJS dashboard, go to "Email Services"
    - Click "Add New Service"
    - Choose your email provider (Gmail, Outlook, etc.)
    - Follow the setup instructions to connect your email account
    - Note your **Service ID**

3. **Create Main Email Template (Sends to info@kaisezle.com)**

    This template receives the contact form submission with the person's message.

    - Go to "Email Templates" in the dashboard
    - Click "Create New Template"
    - **CRITICAL:** Set the "To Email" field to: `info@kaisezle.com` (this is where you receive the messages)
    - Set the "Subject" field to: "New Contact Form Submission from {{from_name}}"
    - For the "Content" field, choose "HTML" format
    - Copy the HTML from `contact-form-template.html` file in this project
    - The template uses these variables:
        - `{{from_name}}` - The person's name who submitted the form
        - `{{from_email}}` - The person's email who submitted the form
        - `{{message}}` - The message content from the contact form
    - Click "Save"
    - Note your **Template ID** (this becomes your `VITE_EMAILJS_TEMPLATE_ID`)

4. **Create Autoreply Email Template (Sends to the person who contacted you)**

    This template sends a thank-you email to the person who submitted the contact form.

    - Go to "Email Templates" in the dashboard
    - Click "Create New Template"
    - **CRITICAL:** Set the "To Email" field to: `{{from_email}}` (this sends the reply to the person who submitted the form)
    - Set the "Subject" field to: "Thank you for contacting Kaisezle!"
    - For the "Content" field, choose "HTML" format
    - Copy the HTML from `autoreply-email-template-simple.html` file in this project
    - The template uses these variables:
        - `{{from_name}}` - The person's name (for personalization)
        - `{{message}}` - Their original message (shown back to them for reference)
    - Click "Save"
    - Note your **Autoreply Template ID** (this becomes your `VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID`)

5. **Get Your Public Key**

    - Go to "Account" > "General"
    - Find your **Public Key** (also called API Key)

6. **Configure Environment Variables**

    - Create a `.env` file in the root of your project
    - Add the following variables:
        ```
        VITE_EMAILJS_SERVICE_ID=your_service_id_here
        VITE_EMAILJS_TEMPLATE_ID=your_main_template_id_here
        VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_template_id_here
        VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
        ```
    - Replace the placeholder values with your actual IDs and keys
    - **Note:** `VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID` is optional. If you don't set it, only the main email to info@kaisezle.com will be sent (no autoreply)

7. **Restart Your Development Server**
    - Stop your current dev server (Ctrl+C)
    - Run `npm run dev` again to load the new environment variables

## How It Works

When someone submits the contact form, **two emails are sent**:

1. **Main Email to info@kaisezle.com**

    - **Purpose:** You receive the contact form submission
    - **Recipient:** `info@kaisezle.com` (set in EmailJS template "To Email" field)
    - **Template:** Uses `VITE_EMAILJS_TEMPLATE_ID`
    - **Contains:**
        - Person's name (`{{from_name}}`)
        - Person's email (`{{from_email}}`)
        - Their message (`{{message}}`)

2. **Autoreply Email to the Person**
    - **Purpose:** Thank-you email sent to the person who contacted you
    - **Recipient:** `{{from_email}}` (the person who submitted the form)
    - **Template:** Uses `VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID` (optional)
    - **Contains:**
        - Personalized thank you message
        - Their original message for reference

**Important:**

-   The main email (to info@kaisezle.com) is **required** - this is how you receive the contact form submissions
-   The autoreply is **optional** - if you don't set `VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID`, only the main email will be sent

## Testing

Once configured, test the contact form by:

1. Filling out the form with test data
2. Submitting the form
3. Checking your email inbox at info@kaisezle.com
4. If autoreply is set up, check the sender's email inbox for the thank-you message

## Troubleshooting

-   Make sure your `.env` file is in the root directory
-   Ensure environment variable names start with `VITE_` (required by Vite)
-   Check the browser console for any error messages
-   Verify your EmailJS service is active and properly configured
-   Make sure your email template includes all required variables
