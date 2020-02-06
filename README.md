# Shipt Code Challenge - Tic-Tac-Toe Game

A Tic-Tac-Toe made in React Native with TypeScript and Expo. Requires two player to play or else play against yourself!

# Constraints

Questions I asked:
Did the game need to be on 2 separate individual phones? It wasn't required but allowed. I chose to just focus on a single phone.
Was Expo allowed to be used? It was allowed but seemed like Expo wasn't used by them before, so directions on using Expo below.

Code constraints:
Since the board only has 3x3 blocks, a single game would consist of 9 moves possible.
Two players only
Allowing for leaving the game and returning to menu.

Thoughts:
Using expo meant I needed to publish the app to allow others to use it.
Fortunately using expo means faster setup for me to test the app ( do not have any apple devices =P ).

# Plan of Attack

I did a brute force attack, made all of the possible components I could think of up in my mind which was a GameView, GameBoard and Menu.
I wanted to allow the player to actually choose to start a game rather than have the game pop up immediately.

After that, I thought about how I wanted to start the game and decided an easy button would be sufficient.
So for GameView, I wanted it to hold the gameboard and the menu but using a boolean flag in order to switch between them and maintain the title.

Also I enjoy using functional components over class components due to the fact we can use React Hooks so I proceeded with functional components for the whole application.

When approaching the Gameboard I looked over the rules and realized that there are possible combinations of how to win based on a 3x3 matrix array.
Using that, I decided to create an matrix with all possible winning conditions of 3 matching letters in my gameConstants file. Then I created an array that gave each element in the matrix array an index so it would be easy to keep track of. Then after that I created another 3x3 matrix as a placeholder for all the possible positions for the game pieces (X, O) to be placed upon.

It took me a little bit to understand how to solve this problem but after realizing I could create a moves list that held the X's and O's in an single array (moveList) and use the index from the grid array to match and find whether the X's and O's matched any of the winning conditions. If they did match then I could determine that one of the players had won. If none of the possible combinations were matching anything, keep the game going until 9 moves were made then throw an alert to ask the player if they wanted to try again or just return to the main screen. I also added a X next to the title to allow the person/s to quit the board immediately to the main screen and they can start a new game if they want to.

I ran into several bugs including useState issues where my state was not updating correctly at the right time and would require a 10th move in order to fire the findAWinner function. Also ran into some issue where I was looping through the list multiple times, and realized my mistake and fixed it. I let my friend and my wife play the game and they helped me find bugs since its important to have other eyes looking at the application and test it in ways you probably didn't think about. Fixed two bugs related to end game issues.

As for styling, I pulled them out of all components into its own individual file gameStyles to prevent bloating of the components code.

# How to use Expo

To view the game, you must download the Expo client on your phone, it is available on the iOS and Android store.
Once it has been downloaded, you can just go to this https://expo.io/@shhwolf17/Shipt_Tic_Tac_Toe and it should provide the QR code which you use the app to scan the QR then it should be playable. Due to Apple rules, unfortunately iOS phones won't be able to use this application because its just a published application, but Android phones are allowed to use this. Let me know if this doesn't meet the requirements of your code challenge.

If there are issues with the game, it won't download or anything, you can contact me at welborn.austin17@gmail.com and I'll make sure that the expo cli is up and running, since the only way to keep the game working is I have to keep my expo cli up and running on my computer, of course my computer might restart or go to sleep so just email me and I will get it back up and running asap.

# Reflection after Code Challenge

After hearing back, I realized that I could have broken down my components even further, so I broke down all of the components into two separate components, containers and views.  Containers will hold the functionalities and return the view and pass any required props the view needed.  The views would render any UI related components.  This helps increase the modularity of all of my components.
