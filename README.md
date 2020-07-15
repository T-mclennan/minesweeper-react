# Covid-Sweeper: A minesweeper clone built with serverless AWS backend

  ### Click [here](https://covid-sweeper.com/) to try it out!
 
- ## Tools and Architecture: 
    This project was chosen to give practice with the AWS ecosystem, and was aided by the use of the [Serverless Stack](http://serverless-stack.com) guide.
 
  ##### Backend: 
    - The application and database are deployed as separate services, with the API repo found [here](https://github.com/T-mclennan/minesweeper-serverless-api).
    - CloudFormation template is generated and deployed using Serverless.
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
    Whena player logs in a JSON webtoken is created for the session and is stored in local storage of the browser. 
    When a player logs out this is cleared. This gives the player the ability to maintain a session and not have to log 
    in every visit, unless they explicitly log out. This feature is currently disabled so that players can open multiple tabs
    and play themselves, as a demonstration of the app.
 

- ## Lobby: 

    Left sidebar has game options: Dashboard, Quickplay, Findgame, Standings
    Right sidebar has player list, with green for currently logged in players
  
  <img width="1280" alt="Lobby" src="https://user-images.githubusercontent.com/43154475/74298059-84ff9280-4cfd-11ea-93d2-6a30c6739d99.png">
   
- ## Dashboard: 
     If the player has no games pending, the Dashboard welcomes the player and provides information.
     Otherwise the dashboard has a listing of current games to re-open.
             
- ## Quickplay:
   Joins the most recently created open game.
   If none is available it will create and open a default game.
             
- ## Findgame: 
     Displays a table listing of all the open games that are possible to join
     Clicking on a listing will join and open that game. 
            
- ## Standings: 
     Displays a table listing of the top 10 player standings. 
             
  
   Future releases will add interactivity for the list of players on the right side: the ability to click a players name and
   challenge them, or open a chat modal. 
  
  
- ## Gameplay:
   When any game event happens such as a player joining, a move being made, etc. the information is bundled and sent to the
   server, which broadcasts it to other players in the game. Many events also coincide with dispatching a redux action to save
   the game state into the store as well as an API call to save the information in the servers database. 
   
   <img width="1280" alt="Game" src="https://user-images.githubusercontent.com/43154475/74298052-7f09b180-4cfd-11ea-9155-c3e02eb56dec.png">
   
   The game status is checked during the initial load, as well as after each move. Possible status could show a player in
   check or checkmate, a stalemate position, draw from three-fold repetition. If the game is over a modal will pop up 
   displaying the status and the winner of the match. 
   
   Future development of the game will include the addition of a scoring algorithm for rated games, the implementation of a
   time clock, and the addition of castling. (Not currently supported by our chess engine for 960)
   
 - ## Inspiration:
    Chess 960 is a variation of [Fischer Random](https://en.wikipedia.org/wiki/Fischer_random_chess), where the back row of pieces is randomized to encourage improvised play.
    However, because true randomization would lead to many board positions that are far out of balance, the board is 
    constructed according to the following conditions:

    - Both players have identical configurations at the start of the game. 
    - Each player is first given a black and white bishop in random position.
    - The queen is placed in one of the remaining 6 squares.
    - The black and white knight are played randomly in the remaining 5 and 4 squares.
    - With the 3 remaining squares, the king goes in the middle with the rooks on each side,
      which allows for castling in both directions. Once the start position is generated, it is passed as fen notation into both the board and game logic. 
