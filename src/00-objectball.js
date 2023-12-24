function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson":{
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans":{
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez":{
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee":{
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry":{
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien":{
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo":{
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop":{
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon":{
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood":{
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }
}
const object = gameObject();

const teams = Object.values(object);






// 1. Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.

function numPointsScored(playerName){
    // Use Object.values to get an array of team objects
    
    
    // Use the find method to search for the player in each team's players
    let player = teams
        .map(team => team.players[playerName])
        .find(player => player !== undefined)

     // Return the points scored by the player, or 0 if the player was not found
     return player ? player.points : 0;
    
}
numPointsScored("Brendan Haywood")

//2. Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
/**
 * get 1st object values in an array
 * map through the array of 2 elements
 * for each element, get the players list
 * compare with argument, find player
 * if it matches(true) return shoesize
 */

function shoeSize(playerName) {
    
    
    let findPlayer = teams
    .map(team => team.players[playerName])
    .find(player => player !== undefined)

    return findPlayer ? findPlayer.shoe : 0
    
}
shoeSize("Brendan Haywood")

//3. Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
/**
 * get team names in an array
 * check if the argument matches the team name
 * map through and return the colours object 
 */

function teamColors(name) {
    

    const team = teams.find(team => team.teamName === name)
    
    return team ? team.colors : null
}

//4. Build a function, teamNames, that operates on the game object to return an array of the team names.
/**
 * get object values
 * map through 
 * return array of team names
 */

function teamNames() {
    
    
    let arrNames = teams.map(team => team.teamName);

    return arrNames;
}


// 4. Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.


function playerNumbers(name) {
    

    let team = teams.find(team => team.teamName === name)

    let numbers = Object.values(team.players) 

    return numbers.map(player => player.number)
}

//5. Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats. Check out the following example of the expected return value of the playerStats function:
// playerStats("Alan Anderson")
// // returns:
// {
//   number: 0,
//   shoe: 16,
//   points: 22,
//   rebounds: 12,
//   assists: 12,
//   steals: 3,
//   blocks: 1,
//   slamDunks: 1
// }

function playerStats(playerName) {
    
    let player = teams
        .map(team => team.players[playerName])
        .find(player => player !== undefined )

    return player ? { ...player } : null;
}

playerStats("Ben Gordon")


//6. Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
// First, find the player with the largest shoe size
// Then, return that player's number of rebounds
// Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why.

function bigShoeRebounds() {
    // find the player with the largest shoe size
    const allPlayers = [
        ...Object.values(object.home.players),
        ...Object.values(object.away.players)
    ]
    
    const playerWithLargestShoeSize = allPlayers.reduce(
        (maxShoePlayer, currentPlayer) =>
            currentPlayer.shoe > maxShoePlayer.shoe ? currentPlayer : maxShoePlayer,
        allPlayers[0] // Initial value, assuming there's at least one player
    );

    return playerWithLargestShoeSize ? playerWithLargestShoeSize.rebounds : null
   
}

//7. Which player has the most points? Call the function mostPointsScored.

function mostPointsScored() {
    const allPlayers = [
        ...Object.entries(object.home.players),
        ...Object.entries(object.away.players)
    ]
    

    const [playerNameWithMostPoints, playerWithMostPoints] = allPlayers.reduce(
        ([maxPointsPlayerName, maxPointsPlayer], [currentPlayerName, currentPlayer]) =>
            currentPlayer.points > maxPointsPlayer.points
                ? [currentPlayerName, currentPlayer]
                : [maxPointsPlayerName, maxPointsPlayer],
        ["", allPlayers[0][1]] // Initial value, assuming there's at least one player
    );

    return playerNameWithMostPoints
}


//8. Which team has the most points? Call the function winningTeam.
// 9.Which player has the longest name? Call the function playerWithLongestName.