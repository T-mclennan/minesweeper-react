# Covid-Sweeper: A minesweeper clone built with serverless AWS backend

  ### Click [here](https://covid-sweeper.com/) to try it out!
 
- ## Tools and Architecture: 
    This project was chosen to give practice with AWS Lambda and surrounding ecosystem.
 
  ##### Backend: 
    - The application and database are deployed as separate services, with the API repo found [here](https://github.com/T-mclennan/minesweeper-serverless-api).
    - CloudFormation template is generated and deployed using [Serverless](https://www.serverless.com/framework/docs/)).
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

- ## Scoreboard: 
  Displays a table listing of the top 10 player standings.

             
- ## Settings:

             
- ## Findgame: 
     Displays a table listing of all the open games that are possible to join
     Clicking on a listing will join and open that game. 
            
  
- ## Gameplay:

