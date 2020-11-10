# This will follow [these](https://unsplash.com/documentation#creating-a-developer-account) instructions: 
  1. Click Join
  2. Once Joined and logged in navigate to https://unsplash.com/oauth/applications
  3. Click 'New Application'
  4. Accept the terms
  5. Name your app: MyFirstPictureApp
  6. Give your app a description: This app is to enhance my ability to style images, cards, and more.
  7. Once you've done this it's time to start coding!
    71. Set up HTML
    72. Set up JavaScript
    73. Console.log to ensure they are hooked up properly
    74. Make a fetch request
      * your url should look like this: 				
      `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${cred.APP_ID}`
      * query and APP_ID should be changed
      * Query to what you want (Search phrase)
      * APP_ID to your Access Key which can be found within [your application](https://unsplash.com/oauth/applications)
    7-5. log that request to the console
    76. Target the url, date, likes, title, description, and anything else you'd like 
    77. Pass that information through a function 
