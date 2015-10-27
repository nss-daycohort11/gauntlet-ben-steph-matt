var Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];
  this.imageSource = "http://www.d3press.us/files/Puzzle%20Quest%202/Puzzle%20Quest%202%20Features/Game%20Enemies/Art%20Assets/Character%20Art/Dark%20Orc/Dark%20orc.PNG";

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};

Orc.prototype = new Monster();


var Bowser = function() {
  this.playerName = "Bowser";
  this.health += 50;
  this.class = new Berserker();
  this.strength += this.class.strengthBonus;
  this.health += this.class.healthBonus;
  this.weapon = new Claws();
  this.imageSource = "http://img4.wikia.nocookie.net/__cb20130810025136/ssbb/es/images/8/8a/Sprite_Apertura_Bowser_SSBB.png";
}

Bowser.prototype = new Monster();
//Ben Code
  //Define enemies
//Browser enemy
var Browser = function() {
  this.playerName = "Browser";
  this.health += 60;
  this.class = new Thief();
  this.strength += this.class.strengthBonus;
  this.health += this.class.healthBonus;
  this.weapon = new Torment();
  this.imageSource = "http://img4.wikia.nocookie.net/__cb20130116153004/uncyclopedia/images/c/cb/Internet-troll-face-explorer.png";
}

Browser.prototype = new Monster();
