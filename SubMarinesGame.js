submarinesArr11 = [
    {
        size: 2,
        amount: 2
    },
    {
        size: 3,
        amount: 3
    },
    {
        size: 4,
        amount: 2
    },
    {
        size: 5,
        amount: 1
    }
];


function startAgain() {

    marines1 = [], marines2 = [];
    player1 = true, heightGame, widthGame;
    MarinesArr;
    json_Player1 = [], json_Player2 = [];
    NumDesShipsP1 = 0, NumDesShipsP2 = 0;
    
    Json_emptySpace = {},counterForEmpty = 0;
    Json_emptySpace2 = {},counterForEmpty2 = 0;
     
    finishGame = false;
    numOfHitsP1 = 0, numOfHitsP2 = 0;

    statusPlayer = [], arrays = [];
    missedP1 = [], missedP2 = [], GotHitP1 = [], GotHitP2 = [], desMarinesP1 = [], desMarinesP2 = [];
    tempMissedP1 = [], tempMissedP2 = [], tempGotHitP1 = [], tempGotHitP2 = [], tempdesMarinesP1 = [], tempdesMarinesP2 = [];
    computerHits = [], counterComHits = 0;
    placess1 = 0, placess2 = 0;
}


var numOfHitsP1 = 0, numOfHitsP2 = 0;
var placess1 = 0, placess2 = 0;
var computerHits = [], counterComHits = 0;
var marines1 = [], marines2 = [];
var player1 = true, heightGame, widthGame;
var MarinesArr;
var json_Player1 = [], json_Player2 = [];
var NumDesShipsP1 = 0, NumDesShipsP2 = 0;

var Json_emptySpace = {}; var counterForEmpty = 0;
var Json_emptySpace2 = {}; var counterForEmpty2 = 0;

var tempMissedP1 = [], tempMissedP2 = [], tempGotHitP1 = [], tempGotHitP2 = [], tempdesMarinesP1 = [], tempdesMarinesP2 = [];
var finishGame = false;

var statusPlayer = [], arrays = [];
var missedP1 = [], missedP2 = [], GotHitP1 = [], GotHitP2 = [], desMarinesP1 = [], desMarinesP2 = [];


function SaveToLS() {

    localStorage.clear();
    statusPlayer = {
        "p1Turn": player1,
        "width": Number(widthGame),
        "height": Number(heightGame),
        "finishGame": finishGame,
        "shipsDesp1": NumDesShipsP1,
        "shipsDesp2": NumDesShipsP2,
        "hitNumsP1": numOfHitsP1,
        "hitNumsP2": numOfHitsP2
    };

    missedP1 = document.getElementById("leftGrid").getElementsByClassName("missedHit");
    missedP2 = document.getElementById("rightGrid").getElementsByClassName("missedHit");
    GotHitP1 = document.getElementById("leftGrid").getElementsByClassName("successfulHit");
    GotHitP2 = document.getElementById("rightGrid").getElementsByClassName("successfulHit");
    desMarinesP1 = document.getElementById("leftGrid").getElementsByClassName("destroyedShip");
    desMarinesP2 = document.getElementById("rightGrid").getElementsByClassName("destroyedShip");


    var tempMissedP1 = [], tempMissedP2 = [], tempGotHitP1 = [], tempGotHitP2 = [], tempdesMarinesP1 = [], tempdesMarinesP2 = [];
    for (let i = 0; i < missedP1.length; i++) {

        tempMissedP1[i] = missedP1[i].classList[0];
    }

    for (let i = 0; i < missedP2.length; i++) {

        tempMissedP2[i] = missedP2[i].classList[0];
    }

    for (let i = 0; i < GotHitP1.length; i++) {

        tempGotHitP1[i] = GotHitP1[i].classList[0];
    }

    for (let i = 0; i < GotHitP2.length; i++) {

        tempGotHitP2[i] = GotHitP2[i].classList[0];
    }

    for (let i = 0; i < desMarinesP1.length; i++) {

        tempdesMarinesP1[i] = desMarinesP1[i].classList[0];
    }

    for (let i = 0; i < desMarinesP2.length; i++) {

        tempdesMarinesP2[i] = desMarinesP2[i].classList[0];
    }

    arrays = {
        "ArrMarinesPlayer1": json_Player1,
        "ArrMarinesPlayer2": json_Player2,
        "marines1": marines1,
        "marines2": marines2,
        "emptyScp1": Json_emptySpace,
        "emptyScp2": Json_emptySpace2,
        "GotHitP1": tempGotHitP1,
        "GotHitP2": tempGotHitP2,
        "missedP1": tempMissedP1,
        "missedP2": tempMissedP2,
        "desMarinesP1": tempdesMarinesP1,
        "desMarinesP2": tempdesMarinesP2,
        "comTries":computerHits,
        "comTriesCounter" : counterComHits,
    };

    localStorage.setItem("statusPlayer", JSON.stringify(statusPlayer));
    localStorage.setItem("arrays", JSON.stringify(arrays));
}

function LoadLocalStorage() {

    if (localStorage["statusPlayer"] == undefined || localStorage["arrays"] == undefined) {
        firstTime();
    }
    else {
        askingIfWantTOLoad();
    }
}



function wantToLoadGame() {

    document.getElementById("askIfContinue").remove();
  

    statusPlayer = JSON.parse(localStorage["statusPlayer"]);
    player1 = statusPlayer['p1Turn'];
    widthGame = statusPlayer['width'];
    heightGame = statusPlayer['height'];
    finishGame = statusPlayer["finishGame"];
    NumDesShipsP1 = statusPlayer['shipsDesp1'];
    NumDesShipsP2 = statusPlayer['shipsDesp2'];
    numOfHitsP1 = statusPlayer['hitNumsP1'];
    numOfHitsP2 = statusPlayer['hitNumsP2'];

    arrays = JSON.parse(localStorage["arrays"]);

    json_Player1 = arrays['ArrMarinesPlayer1'];
    json_Player2 = arrays['ArrMarinesPlayer2'];
    marines1 = arrays['marines1'];
    marines2 = arrays['marines2'];
    emptyScp1 = arrays['Json_emptySpace'];
    emptyScp2 = arrays['Json_emptySpace2'];
    missedP1 = arrays['missedP1'];
    missedP2 = arrays['missedP2'];
    GotHitP1 = arrays['GotHitP1'];
    GotHitP2 = arrays['GotHitP2'];
    desMarinesP1 = arrays['desMarinesP1'];
    desMarinesP2 = arrays['desMarinesP2'];
    computerHits = arrays["comTries"];
    counterComHits = arrays["comTriesCounter"];
 
    if (finishGame) {
        firstTime();
    }
    else {
        CreateTableGame();
        player1 = false;
        CreateTableGame();
        markPlaces();
        player1 = true;
    }
}

function markPlaces() {


    for (let i = 0; i < missedP1.length; i++) {


        document.getElementById("leftGrid").getElementsByClassName(missedP1[i])[0].classList.add("missedHit");

    }

    for (let i = 0; i < missedP2.length; i++) {


        document.getElementById("rightGrid").getElementsByClassName(missedP2[i])[0].classList.add("missedHit");

    }

    for (let i = 0; i < GotHitP1.length; i++) {


        document.getElementById("leftGrid").getElementsByClassName(GotHitP1[i])[0].classList.add("successfulHit");

    }

    for (let i = 0; i < GotHitP2.length; i++) {


        document.getElementById("rightGrid").getElementsByClassName(GotHitP2[i])[0].classList.add("successfulHit");

    }


    for (let i = 0; i < desMarinesP1.length; i++) {


        document.getElementById("leftGrid").getElementsByClassName(desMarinesP1[i])[0].classList.add("destroyedShip");

    }

    for (let i = 0; i < desMarinesP2.length; i++) {


        document.getElementById("rightGrid").getElementsByClassName(desMarinesP2[i])[0].classList.add("destroyedShip");

    }

}

function makeNewArr() {
    var counterTry = 1;

    for (let index = 0; index < 2; index++) {

        for (var i = 0; i < submarinesArr11.length; i++) {
            for (var j = 0; j < submarinesArr11[i].amount; j++) {
                var temp = {
                    'number': counterTry,
                    'places': [],
                    'size': submarinesArr11[i].size,
                    'placesDestroyed': [],
                    'isGone': "no",
                };

                if (index == 0) {
                    json_Player1.push(temp);
                }
                else {
                    json_Player2.push(temp);
                }

            }
        }
    }
}


function startGame() {
    widthGame = Number(document.getElementById("width").value);
    heightGame = Number(document.getElementById("height").value);

    if (widthGame >= 10 && widthGame <= 20 && heightGame >= 10 && heightGame <= 20) {
        makeNewArr();
        player1 = true;
      
        for (var j = 0; j < 2; j++) {
            for (var i = 0; i < json_Player1.length; i++) {
                renderGame(i);
            }

            CreateTableGame();
            player1 = false;
        }
        player1 = true;

        document.getElementById("menu").remove();
         
    }
}


function askingIfWantTOLoad() {
    var str = "";

    str += '<p id="askIfContinue"> would you like to start from where you last stopped? <br/>';
    str += '<button type="button" onclick="wantToLoadGame()"> yes </button>  <button type="button" onclick="ChoseStartNew()"> no </button> </p>';

    document.getElementById("ph").innerHTML += str;
}

function ChoseStartNew() {
    var temp = document.getElementById("askIfContinue");
    temp.remove();

  

    firstTime();
}


function firstTime() {

    if (localStorage["statusPlayer"] != undefined || localStorage["arrays"] != undefined) {
        localStorage.clear();
    }
    var str = "";

    str += '  <div id="menu" <p> Please enter a number between 10-20</p> <label> width: </label>'
    str += ' <input id="width" type="text" /> <label> height: </label> <input id="height" type="text" /> <br /> <button type="button" onclick="startGame()"> Run</button> </div>'

    document.getElementById("startQ").innerHTML = str;

    document.getElementById("ph").innerHTML = "<h1> SubMarines Battle! </h1>"

    document.getElementById("width").value = 15;
    document.getElementById("height").value = 15;

}

var tries;
function renderGame(num) {
    var done = false, tries = 15;
    while (!done) {
        
        var arrayWithSides = [], arrayToAdd = [];
        ver = verticl11();
        do {
            goodNum = true;
            col1 = Math.floor(Math.random() * widthGame) + 1;
            row1 = Math.floor(Math.random() * heightGame) + 1;
            blackPlace = col1 + (row1 - 1) * widthGame;

            if (ver) {
                if (row1 + json_Player1[num]['size'] - 1 > heightGame) {
                    goodNum = false;
                }
            }
            else {
                if (col1 + json_Player1[num]['size'] - 1 > widthGame) {
                    goodNum = false;
                }
            }
        } while (!goodNum);

        placeTaken = false;

        AddToMarine(blackPlace);
        arrayToAdd[0] = blackPlace;


        for (var j = 1; j < json_Player1[num]['size']; j++) {

            if (ver) {
                blackPlace += Number(widthGame);
            }
            else {
                blackPlace++;
            }
            AddToMarine(blackPlace);
            arrayToAdd[j] = blackPlace;
        }

        if (!placeTaken) {
            if (player1) {

                json_Player1[num]['places'] = arrayToAdd;
            }
            else {

                json_Player2[num]['places'] = arrayToAdd;
            }

            done = true;

            var num1, num2;

            if (ver) {
                num1 = Number(widthGame);
                num2 = 1;
            }
            else {
                num1 = 1;
                num2 = Number(widthGame);
            }

            for (let index = 0; index < arrayToAdd.length; index++) {
                arrayWithSides[index] = arrayToAdd[index];

            }
            arrayWithSides[arrayWithSides.length] = arrayWithSides[arrayWithSides.length - 1] + num1;
            arrayWithSides[arrayWithSides.length] = arrayWithSides[0] - num1;


            for (let i = 0; i < arrayWithSides.length; i++) {

                if (!isNearMarines(arrayWithSides[i] + num2) && arrayWithSides[i] + num2 > 0) {
                    if (player1) {
                        Json_emptySpace[counterForEmpty++] = arrayWithSides[i] + num2;
                    }
                    else {

                        Json_emptySpace2[counterForEmpty2++] = arrayWithSides[i] + num2;
                    }

                }

                if (!isNearMarines(arrayWithSides[i] - num2) && arrayWithSides[i] - num2 > 0) {
                    if (player1) {
                        Json_emptySpace[counterForEmpty++] = arrayWithSides[i] - num2;
                    }
                    else {
                        Json_emptySpace2[counterForEmpty2++] = arrayWithSides[i] - num2;
                    }

                }
            }

            if (!isNearMarines(arrayWithSides[arrayWithSides.length - 1]) && arrayWithSides[arrayWithSides.length - 1] > 0) {

                if (player1) {
                    Json_emptySpace[counterForEmpty++] = arrayWithSides[arrayWithSides.length - 1];
                }
                else {
                    Json_emptySpace2[counterForEmpty2++] = arrayWithSides[arrayWithSides.length - 1];
                }
            }

            if (!isNearMarines(arrayWithSides[arrayWithSides.length - 2]) && arrayWithSides[arrayWithSides.length - 2] > 0) {
                if (player1) {
                    Json_emptySpace[counterForEmpty++] = arrayWithSides[arrayWithSides.length - 2];

                }
                else {
                    Json_emptySpace2[counterForEmpty2++] = arrayWithSides[arrayWithSides.length - 2];

                }

            }


        }
        else {
            if (player1) {
                placess1 -= json_Player1[num]['size'];
                tries--;

            }
            else {
                placess2 -= json_Player2[num]['size'];
                tries--;
            }

        }

    }

}




function isNearMarines(num) {
    if (player1) {

        for (let i = 0; i < Object.keys(Json_emptySpace).length; i++) {

            if (Json_emptySpace[i] == (Number(num))) {
                return true;
            }
        }
        return false;
    }
    else {

        for (let j = 0; j < Object.keys(Json_emptySpace2).length; j++) {

            if (Json_emptySpace2[j] == (Number(num))) {
                return true;
            }

        }
        return false;
    }
}



function AddToMarine(num1)
{
    if (widthGame <= 12  && heightGame <= 12)
    {
        if(tries <= 10)
        {
            if (IsBlack(num1))
            {
                placeTaken = true;
            }        

        }
        else if(tries <=5)
        {
            
        }
        else{

            if(IsBlack(num1) || isNearMarines(num1))
             {
                placeTaken = true;
            }
        }
      
           
    }
    else if (IsBlack(num1) || isNearMarines(num1)) {
        placeTaken = true;
    }

    if (player1) {
        marines1[placess1++] = num1;
    }
    else {

        marines2[placess2++] = num1;
    }
}

function verticl11() {
    var yes = Math.random();
    if (yes <= 0.5) {

        return true;
    }
    return false;
}


function IsBlack(num) {

    count = 0;
    if (player1) {

        for (let index = 0; index < marines1.length; index++) {
            if (marines1[index] == num) { return true; }

        }

        return false
    }
    else {

        for (let index = 0; index < marines2.length; index++) {
            if (marines2[index] == num) { return true; }

        }

        return false
    }

}



function CreateTableGame() {
    var str = "", counter = 1;
    if (player1) {
        str += '<div id="leftGrid">';
        str += "<h4> Enemy board: </h4> <h2> number of hits: <span>" + numOfHitsP1 + "</span> </h2>";

    }
    else {
        str += '<div id="rightGrid">';
        str += "<h4> Your board: </h4> <h2> number of hits: <span>" + numOfHitsP2 + "</span> </h2>";

    }
    str += "<table>"
    for (var i = 0; i < heightGame; i++) {
        str += "<tr>"
        for (var j = 0; j < widthGame; j++) {

            str += '<td class="' + counter;
            if (player1) {
                if (IsBlack(counter)) {
                    str += ' subMarine" onclick="clickHandler(this)">';
                }
                else {
                    str += '" onclick="clickHandler(this)">';
                }
            }
            else {
                if (IsBlack(counter)) {
                    str += ' subMarine">'
                }
                else {
                    str += '" >'
                }
            }
            str += "</td>";
            counter++;
        }
        str += "</tr>";
    }
    if (player1) {
        str += "</table> <h3> number of ships destroyed: <span>" + NumDesShipsP1 + "</span></h3>"
        str += '<button id="cheatBtn" type="button" onclick="WantToCheat()"> cheat! </button> </div>';

    }
    else {
        str += "</table> <h3> number of ships destroyed: <span>" + NumDesShipsP2 + "</span></h3> </div>";

    }

    document.getElementById("ph").innerHTML += str;

}


function clickHandler(elementTD) {

    if (!elementTD.classList.contains("cheating")) {

        document.getElementById("leftGrid").getElementsByTagName("h2")[0].getElementsByTagName("span")[0].innerHTML = ++numOfHitsP1;

        if (elementTD.classList.contains("subMarine")) 
        {
            elementTD.classList.replace("subMarine", "successfulHit");
            ChangedClass(elementTD.classList[0]);
        }
        else if (elementTD.classList.contains("successfulHit")) {
         
            if(elementTD.classList.contains("subMarine"))
            {
                elementTD.classList.remove("subMarine");
            }
        }
        else if (elementTD.classList[1] == undefined) {
            elementTD.classList.add("missedHit");
        }
        player1 = false;
        SaveToLS();
        computerTurn();

    }
}


function ChangedClass(num) {
    var temp = [], counterTemp = 0, lengthOfDestroyed;
    if (player1) {
        for (let index = 0; index < marines1.length; index++) {

            if (marines1[index] != Number(num)) {
                temp[counterTemp++] = marines1[index];
            }
        }
        marines1 = temp;

        for (sub in json_Player1) {
            for (place in json_Player1[sub]['places']) {
                if (json_Player1[sub]['places'][place] == num) {
                    lengthOfDestroyed = json_Player1[sub]['placesDestroyed'].length;

                    json_Player1[sub]['placesDestroyed'][lengthOfDestroyed] = Number(num);
                    console.log(json_Player1[sub]['placesDestroyed'].length);
                    console.log(json_Player1[sub]['places'].length);

                    if (json_Player1[sub]['placesDestroyed'].length == json_Player1[sub]['places'].length) {
                    
                        json_Player1[sub]['isGone'] = "yes";

                      
                        document.getElementById("leftGrid").getElementsByTagName("h3")[0].getElementsByTagName("span")[0].innerHTML = (++NumDesShipsP1);
                        burnedCompletly("leftGrid", json_Player1[sub]);
                        return; 
                    }
                }

            }
        }

    }

}




function computerTurn() {

    var NumOk;

    do {

        NumOk = false;
        random = Math.round(Math.random() * (widthGame * heightGame));
        for (let index = 0; index < computerHits.length; index++) {

            if (random == computerHits[index] && random > 0) {
                NumOk = true;
               
            } 

        }


    } while (NumOk)

    computerHits[counterComHits++] = random


    HitPlayer2Turn(random);

}


function HitPlayer2Turn(numOftd) {

    var tdString = numOftd.toString();

    document.getElementById("rightGrid").getElementsByTagName("h2")[0].getElementsByTagName("span")[0].innerHTML = ++numOfHitsP2;

    if (document.getElementById("rightGrid").getElementsByClassName(tdString)[0].classList.contains("subMarine")) 
    {
        document.getElementById("rightGrid").getElementsByClassName(tdString)[0].classList.replace("subMarine", "successfulHit");
        containsTdPlayer2(numOftd);
    }
    else if (document.getElementById("rightGrid").getElementsByClassName(tdString)[0].classList.contains("successfulHit")) {
        //do nothing
    }
    else if (document.getElementById("rightGrid").getElementsByClassName(tdString)[0].classList[1] == undefined) {
        document.getElementById("rightGrid").getElementsByClassName(tdString)[0].classList.add("missedHit");
    }

    player1 = true;
    SaveToLS();
}

function containsTdPlayer2(num) {
    var temp2 = [], counterTemp2 = 0, lengthOfDestroyed2;

    for (let index = 0; index < marines2.length; index++) {

        if (marines2[index] != num) {
            temp2[counterTemp2++] = marines2[index];
        }

    }
    marines2 = temp2;

    for (sub in json_Player2) {
        for (place in json_Player2[sub]['places']) {
            if (json_Player2[sub]['places'][place] == num) {
                lengthOfDestroyed2 = json_Player2[sub]['placesDestroyed'].length;

                json_Player2[sub]['placesDestroyed'][lengthOfDestroyed2] = num;
                if (json_Player2[sub]['placesDestroyed'].length == json_Player2[sub]['places'].length) {

                    json_Player2[sub]['isGone'] = "yes";

                    document.getElementById("rightGrid").getElementsByTagName("h3")[0].getElementsByTagName("span")[0].innerHTML = (++NumDesShipsP2);
                    burnedCompletly("rightGrid", json_Player2[sub])
                    return;
                }


            }

        }
    }

}

function burnedCompletly(whatGrid, whatShip) {


    for (let index = 0; index < whatShip['places'].length; index++) {

        if (whatGrid == "rightGrid") {
            document.getElementById("rightGrid").getElementsByClassName(whatShip['places'][index])[0].classList.replace("successfulHit", "destroyedShip");

        }
        else {
            document.getElementById("leftGrid").getElementsByClassName(whatShip['places'][index])[0].classList.replace("successfulHit", "destroyedShip");

        }

    }

    checkIfWin();
}


function WantToCheat() {

    $("#leftGrid").find(".subMarine").addClass("cheating");
    setTimeout(function () {
        $("#leftGrid").find(".subMarine").removeClass("cheating");

    }, 3000);
}


function checkIfWin() {

    if (document.getElementById("leftGrid").getElementsByTagName("h3")[0].getElementsByTagName("span")[0].innerHTML == "8") {
        finishGame = true;
        finishGameF("player1");
    }
    else if (document.getElementById("rightGrid").getElementsByTagName("h3")[0].getElementsByTagName("span")[0].innerHTML == "8") {
        finishGame = true;
        finishGameF("computer");
    }

}

function finishGameF(whoWon) {

    var doc = document.getElementById("ph");


    if (whoWon == "player1")
    {
        doc.innerHTML = '<img src="aballonsPic.png" /> <h4> you Won! congratulation !!!! </h4> <button type="button" onclick="firstTime()"> play again </button>';

    }
    else {
        doc.innerHTML = '<img src="aballonsPic.png" /> <h4> sorry, this time you lost </h4>  <button type="button" onclick="firstTime()"> play again </button>';
    }

    startAgain();

}
