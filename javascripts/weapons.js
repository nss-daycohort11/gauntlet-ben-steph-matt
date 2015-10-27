var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

var Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Dagger.prototype = new Weapon();

var BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
BroadSword.prototype = new Weapon();

var WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
WarAxe.prototype = new Weapon();

var Claws = function() {
  this.name = "claws";
  this.damage = 14;
  this.hands = 2;
};
Claws.prototype = new Weapon();

var StaffOhWunduhr = function() {
  this.name = "Staff O' Wonder";
  this.damage = 34;
  this.hands = 2;
};
StaffOhWunduhr.prototype = new Weapon();

var BookOReckoning = function() {
  this.name = "Book O' Reckoning";
  this.damage = 32;
  this.hands = 2;
};
BookOReckoning.prototype = new Weapon();



//weapons for stealth classes
var StunningGoodLooks = function() {
  this.name = "Stunning Good Looks";
  this.damage = 43;
  this.hands = 2;
};
StunningGoodLooks.prototype = new Weapon();

var ThrowingStars = function() {
  this.name = "Throwing Star";
  this.damage = 25;
  this.hands = 1;
};
ThrowingStars.prototype = new Weapon();

var BowOfSniping = function() {
  this.name = "Bow of Sniping";
  this.damage = 55;
  this.hands = 2;
};
BowOfSniping.prototype = new Weapon();




