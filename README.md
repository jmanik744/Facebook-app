Assessment Objective: Create a simple webpage using MERN Stack and fetch information using Facebook Graph API. 

Each step has been assigned a score. Your project will be assessed as per the score you have achieved. You will need at least 60 points to pass this test. 

Overview Flow:

	1. Create a web page with Login with Facebook button
2. User connects with the Facebook API and we display the profile name and picture.
3. Show the list of Facebook Pages users manage in a dropdown and with submit button.
	4. On submit, Display the insights of the selected page.

Instructions:

Create a Facebook App (5 points)
Go to this url https://developers.facebook.com/apps/?show_reminder=true 
Click on the ‘Create App’ button. (make sure to login if not already logged in) (Video Help)
Facebook will redirect you to a new page and will ask for “What do you want your app to do?” in his page select “Others” and click on Next
Then select “Business” and click Create App button 

Enabling User Login (5 points)
Once you have created your app. Navigate to this url https://developers.facebook.com/apps/<app_id>/add/
Replace, <app_id> with your newly created app id
Scroll down, and you will see “Facebook Login for Facebook”

Select Set Up, when the setup page opens up make sure to enter proper URLs for  “Valid OAuth Redirect URIs” and “Allowed Domains for the JavaScript SDK” fields.
Click on “Save Changes” and now you can proceed with the programming part.

Create a react project (90 points)
Implement the following features
Facebook Login Oauth using API (20 points)
Display logged in user’s name and picture (10 points)
A select box thats shows a list of pages owned by the user (10 points)
When user selects a page, 4 cards could be created that shows the following  information (20 points)
Total Followers / Fans
Total Engagement
Total Impressions
Total Reactions
Implement, ‘since’ and ‘until’ and `period=total_over_range` URL parameter for the API call made in step c. (30 points)

Important links
Facebook Login Auth: https://developers.facebook.com/docs/facebook-login/overview 
Page Insights: https://developers.facebook.com/docs/platforminsights/page#get-page-insights
Page supported Metrics: https://developers.facebook.com/docs/graph-api/reference/v20.0/insights
Video Instructions on how to setup facebook app & page https://t.ly/TjrwP

Note:
In order for login to work, you will need to make sure your project is using HTTPS even in a development environment. 
You are allowed to use both Facebook SDK as well as their Curl commands to complete this assessment.
App should be in development mode, in order to work, you don’t need any permission approval or verification from Meta.
