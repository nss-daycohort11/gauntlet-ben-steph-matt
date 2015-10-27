/*
  Base function for a player, or enemy, class (profession)
 */
var PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  }
};

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
var Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Fighter.prototype = new PlayerClass();


var Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
  //<!--*************** ADDED link the images ************-->
  this.imageSource = "http://img297.imageshack.us/img297/7871/pngwarrior.png";
};
Warrior.prototype = new Fighter();


var Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
  //<!--*************** ADDED link the images ************-->
  this.imageSource = "http://vignette2.wikia.nocookie.net/avengersalliance/images/4/41/Valkyrie_Portrait_Art.png/revision/latest?cb=20130209180913";
};
Valkyrie.prototype = new Fighter();


var Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
  //<!--*************** ADDED link the images ************-->
  this.imageSource = "http://media.history.ca/uploadedimages/smart_forms/battles/vikings_battletool_rollo_outline.png";
};
Berserker.prototype = new Fighter();


var Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
  //<!--*************** ADDED link the images ************-->
  this.imageSource = "http://obskures.de/s/obswpc/uploads/2014/09/fengshui2monk.png";
};
Monk.prototype = new Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
var Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
  this.ability = new Sphere();
};
Mage.prototype = new PlayerClass();


var Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
  //<!--*************** ADDED link the images ************-->
  this.imageSource = "http://api.ning.com/files/11AwE1JwVSApd6fJ72v2v4cSPZ7RHuV6bJIbcB5DOXsqXFOgD2oXopuyDknuypADIat8z9Zris5oGoYQZDtjJoVk9MidO6vG/Mage.png";
};
Shaman.prototype = new Mage();


var Wizard = function() {
  this.name = "Wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
  //<!--*************** ADDED link the images ************-->
  this.imageSource = "http://vignette4.wikia.nocookie.net/finalfantasy/images/c/c5/Elezen_Black_Mage_XIV.png/revision/latest?cb=20130516225754";
};
Wizard.prototype = new Mage();


var Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
  //<!--*************** ADDED link the images ************-->
  this.imageSource = "http://greenronin.com/assets_c/2013/03/Mage-final-thumb-576x1088-126.png";
};
Conjurer.prototype = new Mage();


var Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
  //<!--*************** ADDED link the images ************-->
  this.imageSource = "https://gandalara.files.wordpress.com/2010/07/fashih_mage2.png";
};
Sorcerer.prototype = new Mage();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin

 */

 //<!--*************** ADDED Stealth ************-->
var Stealth = function() {
 this.name = "Stealth";
 this.agilityBonus = 10;
 this.healthBonus = this.healthBonus - 10;
 this.strengthBonus = this.strengthBonus - 20;
 this.intelligenceBonus = this.intelligenceBonus + 20;
};
Stealth.prototype = new PlayerClass();

var Thief = function(){
 this.name = "Thief";
 this.agilityBonus = this.agilityBonus + 5;
 this.healthBonus = this.healthBonus + 10;
 this.strengthBonus = this.strengthBonus -10;
 this.intelligenceBonus = this.intelligenceBonus + 15;
 this.imageSource = "http://orig05.deviantart.net/ce87/f/2013/093/6/9/garrett__the_new_garrett____thief__4__thief_png_by_modyw94-d60de29.png";
};
Thief.prototype = new Stealth();

var Ninja = function(){
 this.name = "Ninja";
 this.agilityBonus = this.agilityBonus + 10;
 this.healthBonus = this.healthBonus + 15;
 this.strengthBonus = this.strengthBonus + 5;
 this.intelligenceBonus = this.intelligenceBonus + 10;
 this.imageSource = "https://www.sideshowtoy.com/wp-content/uploads/2013/06/100022-product-silo.png";
};
Ninja.prototype = new Stealth();

var Assassin = function(){
 this.name = "Assassin";
 this.agilityBonus = this.agilityBonus + 15;
 this.healthBonus = this.healthBonus + 15;
 this.strengthBonus = this.strengthBonus + 5;
 this.intelligenceBonus = this.intelligenceBonus + 20;
 this.imageSource = "http://3219a2.medialib.glogster.com/media/dd/dd10816effdd7bf1e739e2c4f966f6a2831589fbd587c69433b8ab236beec05b/assassins-creed-1.png";
};
Assassin.prototype = new Stealth();
