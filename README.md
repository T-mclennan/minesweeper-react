# Covid-Sweeper: A minesweeper clone with serverless AWS backend

  ### Click [here](https://covid-sweeper.com/) to try it out!
 
- ## Tools and Architecture: 
    This project was chosen to give practice with AWS Lambda and surrounding ecosystem.
 
  ##### Backend: 
    - The application and database are deployed as separate services, with the API repo found [here](https://github.com/T-mclennan/minesweeper-serverless-api).
    - CloudFormation template is generated and deployed using [Serverless](https://www.serverless.com/framework/docs/).
    - Static assets are hosted in S3 bucket, served by CloudFront with an AWS Lambda trigger. 
    - DynamoDB is used for storage, accessed via API Gateway, and protected by Cognito.
    - CloudWatch is used for Lambda and API access logs. 
    
  ##### Frontend:
    - The game has customizable parameters and layout, 3 kinds of mouse input. 
    - The Landing, Settings, Game, and Standings pages were built with React and CSS.
    - AWS Amplify is used to connect with backend resources.
    - Jest & React-Testing-Library for unit testing. 
    - useContext hook and Context API share theme and settings between components.
    - Routing is done with the ReactRouter and history API.
      
- ## Authentication:
    There is currently have no formal authentication mechanism, players are only prompted for a name when they achieve a high score. 
    I do however use Cognito + Gateway to protect the API routes, with Cognito's identity pool creating guest access credentials. 
    In a future release I'd like to save the user settings into the browser's local storage, so the preferences would persist between visits. 
 

- ## Landing: 
    Featured in the middle of the page are game options players can use to generate a new game. They can choose between standard difficulty combinations,
    or build a game with custom parameters. Below this form are icons linking to the scoreboard, settings page, and github. Animation is added to 
    grow and change the color of icons on hover, as well as adding descriptive tooltip.
    Here is the landing page as seen in both orange and blue color schemes:
    
![2020-07-15 14 55 27](https://user-images.githubusercontent.com/43154475/87602562-1196ee00-c6ac-11ea-931b-3f2c1297fc90.gif)
    
- ## Scoreboard: 
  Displays a table listing of the top 10 player standings.
  
  <img width="1280" alt="scoreboard" src="https://user-images.githubusercontent.com/43154475/87493057-d12e6600-c600-11ea-8f76-436975e4d519.png">

             
- ## Settings:
  This page offers toggle options for sound effects, animation, and color scheme:

<img width="1279" alt="settings" src="https://user-images.githubusercontent.com/43154475/87493070-d8557400-c600-11ea-80f3-fa23e0c7fb6e.png">
             
- ## Gameplay:
<img width="1280" alt="game-blue" src="https://user-images.githubusercontent.com/43154475/87493022-bf4cc300-c600-11ea-8b8d-903ccf056d41.png">
