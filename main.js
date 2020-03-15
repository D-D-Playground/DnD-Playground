   //===============================================Roll Dice!=========================================================
    function diceRoll() {
        var dice = []; //initialize result variable

        //Get values from input fields
        var type = document.getElementById('dice-selection').value;
        var numDice = document.getElementById('dice-num').value;

        //Generate values from input
       for (var i=0; i<numDice; i++ ) {
           dice.push(Math.floor(Math.random()*100%type)+1);
       }

       //Display values generated
       var diceBody = document.getElementById('diceResult');
       diceBody.innerHTML = dice.toString();
    }

    //===========================================Clear Selections on Load===============================================
    document.getElementById('dice-selection').value = "";
    document.getElementById('dice-num').value = "";



    document.getElementById("dice-num").addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            diceRoll();
        }
    });
    //===========================================NPC GENERATING=========================================================
var firstName =["Edric","Bartholomew","Gwendolyn","Elsa","Angel","Francis","Clarence","Lester","Hilda","Elias"] ;
var lastName = ["Griffith","Leopald","Powell","Baker","Woodward","Hotchkiss","Savage","Beasley","Wellington","Helberg"];
var origin = ["Woodlands","Capital City","Farm Lands","Survivalist","Nobility","Slums","Traveling Merchant","Church Orphan","Military","Criminal"];
var occupation = ["Religious Advisor","Messenger","Shop Keep","Guard","Laborer","Craftsman","Scribe","Entertainer","Mercenary","Influential Leader"];
var personalityType = ["Approachable","Unapproachable","Aggressive","Friendly","Sarcastic","Shy","Dimwitted","Haughty","Flirtatious","Mute"];
var physicalDescriptions = ["Tall","Short","Chubby","Thin","Weathered","Ugly","Attractive","Built","Dapper","Unkempt"];



var randomNum = function (){
    return Math.floor(Math.random()*10);
};


function generateNPC() {
    var text = "<body>";
    text+= "Name: " + firstName[randomNum()] + " " + lastName[randomNum()] + "<br>" + "Origin: " + origin[randomNum()] + "<br>" + "Occupation: " + occupation[randomNum()] + "<br>" + "Personality: " + personalityType[randomNum()] + "<br>" +  "Description: " + physicalDescriptions[randomNum()];
    text += "</body>";
    var charText = document.getElementById('charText');
    charText.innerHTML = text.toString();
}