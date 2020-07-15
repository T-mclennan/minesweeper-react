# Covid-Sweeper: A minesweeper clone built with serverless AWS backend

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
    
    <img width="1279" alt="Landing-orange" src="https://user-images.githubusercontent.com/43154475/87493049-cc69b200-c600-11ea-8840-64bd16adfa64.png">
    <img width="1280" alt="Landing-blue" src="https://user-images.githubusercontent.com/43154475/87493034-c378e080-c600-11ea-9425-4134418f91e1.png">
    
- ## Scoreboard: 
  Displays a table listing of the top 10 player standings.

             
- ## Settings:

             
- ## Gameplay:

