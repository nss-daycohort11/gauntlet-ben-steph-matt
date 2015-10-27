// $(document).ready(function() {

  /*
    Test code to generate a human player and an orc player
   */
  var warrior = new Human();
  warrior.setWeapon(new WarAxe());
  warrior.generateClass();  // This will be used for "Surprise me" option
  console.log(warrior.toString());

  var orc = new Orc();
  orc.generateClass();
  orc.setWeapon(new BroadSword());
  console.log(orc.toString());

  var bowser = new Bowser(); 
  /*
    Test code to generate a spell
   */
  var spell = new Sphere();
  console.log("spell: ", spell.toString());


  /*
    END OF TEST CODE

    Show the initial view that accepts player name
   */

  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */

//adding to handle for advancing IF player selects a class/weapon ---> only advance screen if class is picked and same for weapon
    var classChosen = false;
    var wepChosen = false;

  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    //checking the next attr of each and going to each in the following cases
    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = (classChosen);
        break;
      //ben code added -->
      case "card--battleground":
        moveAlong = (wepChosen);
        break;
      // case "card--battle":
      //   moveAlong = ($("#player-name").val() !== "");
      //   break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

// });



//New Code for Ben


//define Current Player
var currentPlayer = new Human();

//Test enemy 
  orc.playerName = "Fluffy";

//Register classtype
var selectedClassType;
  

  //Build Functionality for Storing Player Name
  $("#player-setup .card__button").click(function(){
    console.log("Current PLayer Name is", $("#player-name").val());

    currentPlayer.playerName = $("#player-name").val();

    console.log("Current PLayer is", currentPlayer);

  });

  //Build Functionality for Class

$("#class-select .actual_classes").parent().click(function(){
  //tell app it is okay to advance screens/ go on to weapon selection
    classChosen = true;


  console.log("Thang");
  //This grabs the innerHTML of selected Class
  console.log($(this).children()[1].innerHTML);
  currentPlayer.class = $(this).children()[1].innerHTML;
  console.log(currentPlayer);

  switch(currentPlayer.class){
      case "Wizard":
        currentPlayer.class = new Wizard();
        selectedClassType = "Mage";
        break;
      case "Warrior":
        currentPlayer.class = new Warrior();
        selectedClassType = "Fighter";
        break;
      case "Valkyrie":
        currentPlayer.class = new Valkyrie();
        selectedClassType = "Fighter";
        break;
      case "berserker":
        currentPlayer.class = new Berserker();
        selectedClassType = "Fighter";
        break;
      case "Monk":
        currentPlayer.class = new Monk();
        selectedClassType = "Fighter";
        break;
       case "Sorcerer":
        currentPlayer.class = new Sorcerer();
        selectedClassType = "Mage";
        break; 
      case "Conjurer":
        currentPlayer.class = new Conjurer();
        selectedClassType = "Mage";
        break; 
       case "Thief":
        currentPlayer.class = new Thief();
        selectedClassType = "Stealth";
        break; 
       case "Ninja":
        currentPlayer.class = new Ninja();
        selectedClassType = "Stealth";
        break; 
      case "Assassin":
        currentPlayer.class = new Assassin();
        selectedClassType = "Stealth";
        break;  
      case "surprise me":
        currentPlayer.class = currentPlayer.generateClass();
        break;
    }

    //calculate bonuses after class selection
    $("#wep-link").click(function(){
      currentPlayer.health = currentPlayer.health + currentPlayer.class.healthBonus;
      currentPlayer.strength = currentPlayer.strength + currentPlayer.class.strengthBonus;
      currentPlayer.intelligence = currentPlayer.intelligence + currentPlayer.class.intelligenceBonus;

      console.log("current player health after class selection is", currentPlayer.health);
      console.log("current player strength after class selection is", currentPlayer.strength);
      console.log("current player intelligence after class selection is", currentPlayer.intelligence);
    });

    console.log("current Health is ", currentPlayer.health);

    // add logic for classes, if class is equal to certain class, disable weapon selection for other class weapons
    if(selectedClassType === "Fighter"){
      // $("#player_battle_holder").html("<img src="+ currentPlayer.class.imageSource + ">");
      $(".mage_weapon").parent().addClass("grayOut");
      $(".mage_weapon").unbind("click");
      $(".stealth_weapon").parent().addClass("grayOut");
      $(".stealth_weapon").unbind("click");

    } if(selectedClassType === "Stealth"){
      // $("#player_battle_holder").html("<img src="+ currentPlayer.class.imageSource + ">");
      $(".mage_weapon").parent().addClass("grayOut");
      $(".mage_weapon").unbind("click");
      $(".fighter_weapon").parent().addClass("grayOut");
      $(".fighter_weapon").unbind("click");
    } if(selectedClassType === "Mage"){
      // $("#player_battle_holder").html("<img src="+ currentPlayer.class.imageSource + ">");
      $(".stealth_weapon").parent().addClass("grayOut");
      $(".stealth_weapon").unbind("click");
      $(".fighter_weapon").parent().addClass("grayOut");
      $(".fighter_weapon").unbind("click");
    }

});



  //Built Functionality for Weapon Selection
  $(".fighter_weapon").click(function(){
    wepChosen = true;
    console.log($(this).html());
    var wepSelected = $(this).html();

    //the following switch statement is equivilent to -->
          // if(wepSelected === "Broadsword"){
          //   currentPlayer.weapon = new BroadSword();
          // }    etc

    switch(wepSelected){
      case "Broadsword":
        currentPlayer.weapon = new BroadSword();
        break;
      case "Dagger":
        currentPlayer.weapon = new Dagger();
        break;
      case "Axe":
        currentPlayer.weapon = new WarAxe();
        break;
    }

  });

$(".mage_weapon").click(function(){
    wepChosen = true;
    console.log($(this).html());
    var wepSelected = $(this).html();

    //the following switch statement is equivilent to -->
          // if(wepSelected === "Broadsword"){
          //   currentPlayer.weapon = new BroadSword();
          // }    etc

    switch(wepSelected){
       case "Staff O' Wuhnduhr":
        currentPlayer.weapon = new StaffOhWunduhr();
        break;
      case "Book O' Reckoning":
        currentPlayer.weapon = new BookOReckoning();
        break;
      }
    });


$(".stealth_weapon").click(function(){
    wepChosen = true;
    console.log($(this).html());
    var wepSelected = $(this).html();

    //the following switch statement is equivilent to -->
          // if(wepSelected === "Broadsword"){
          //   currentPlayer.weapon = new BroadSword();
          // }    etc
  switch(wepSelected){
     case "Stunning Good Looks":
        currentPlayer.weapon = new StunningGoodLooks();
        break;
      case "Bow of Sniping":
        currentPlayer.weapon = new BowOfSniping();
        break;
      case "Throwing Stars":
        currentPlayer.weapon = new ThrowingStars();
        break;
      }
    });

  var currentEnemy;
 //Log Health totals before battle
    var totalPlayerHealth;
    var totalEnemyHealth;

  $("#goatEnemy").click(function(){
    currentEnemy = orc;
    $("#enemy_health_bar .current_hp").css("width", 100+"%");
    $("#enemy_health_bar .current_hp").css("background-color","green");
    console.log(currentEnemy);
    $("#battleground").hide();
     $("#indivBattle").show();
      $("#player_stats_holder").append("<h1>"+currentPlayer.toString()+"</h1>"+
                                        "<p>Current Health is "+"<span>"+ currentPlayer.health+"</span></p>"+
                                        "<p>Current Strength is "+"<span>"+ currentPlayer.strength+"</span></p>"+
                                        "<p>Current Intelligence is "+"<span>"+ currentPlayer.intelligence+"</span></p>"); 
      // $("#player_stats_holder").append("<p>Current Health is "+ currentPlayer.health+"<p>");
       $("#enemy_stats_holder").append("<h1>"+orc.toString()+"</h1>"+
                                        "<p>Current Health is "+"<span>"+ currentEnemy.health+"</span></p>"+
                                        "<p>Current Strength is "+"<span>"+ currentEnemy.strength+"</span></p>"+
                                        "<p>Current Intelligence is "+"<span>"+ currentEnemy.intelligence+"</span></p>"); 
      // $("#enemy_stats_holder").append("<p>Current Health is "+ currentEnemy.health+"<p>");
      $("#enemy_battle_holder").html("<img src="+ currentEnemy.imageSource + ">");
      totalPlayerHealth = currentPlayer.health;
      totalEnemyHealth = currentEnemy.health;

  });

$("#bowserEnemy").click(function(){
    currentEnemy = bowser;
    $("#enemy_health_bar .current_hp").css("width", 100+"%");
    $("#enemy_health_bar .current_hp").css("background-color","green");
    console.log(currentEnemy);
    $("#battleground").hide();
     $("#indivBattle").show();
      $("#player_stats_holder").append("<h1>"+currentPlayer.toString()+"</h1>"+
                                        "<p>Current Health is "+"<span>"+ currentPlayer.health+"</span></p>"+
                                        "<p>Current Strength is "+"<span>"+ currentPlayer.strength+"</span></p>"+
                                        "<p>Current Intelligence is "+"<span>"+ currentPlayer.intelligence+"</span></p>"); 
      // $("#player_stats_holder").append("<p>Current Health is "+ currentPlayer.health+"<p>");
       $("#enemy_stats_holder").append("<h1>"+currentEnemy.toString()+"</h1>"+
                                        "<p>Current Health is "+"<span>"+ currentEnemy.health+"</span></p>"+
                                        "<p>Current Strength is "+"<span>"+ currentEnemy.strength+"</span></p>"+
                                        "<p>Current Intelligence is "+"<span>"+ currentEnemy.intelligence+"</span></p>"); 
      // $("#enemy_stats_holder").append("<p>Current Health is "+ orc.health+"<p>");
      $("#enemy_battle_holder").html("<img src="+ currentEnemy.imageSource + ">");
      totalPlayerHealth = currentPlayer.health;
      totalEnemyHealth = currentEnemy.health;
  });
  
//Battle Logic
  //when attack is clicked
    //Calculate player damage and subtract from Enemy health-- formula str + int +damage /7 * a .1 - .3 modifier?


    $("#attack-button").click(function(){
      // $("#enemy_health_bar .current_hp").css("width", (totalEnemyHealth/currentEnemy.health*10)+"%");
      var playerDeath = false;
      var enemyDeath = false;
      if (playerDeath === false || enemyDeath === false) {
      console.log("damage", playerDamage);


      if(selectedClassType === "Mage"){
        var playerDamage = Math.floor(((currentPlayer.intelligence + currentPlayer.weapon.damage)/7) + Math.random() * (currentPlayer.intelligence/6));
        alert(currentPlayer.playerName+": attacks with " +currentPlayer.weapon.name+" and "+currentPlayer.class.ability.name+" of "+currentPlayer.class.ability.type+" for "+ playerDamage + " damage!");
      } else {
        var playerDamage = Math.floor(((currentPlayer.strength + currentPlayer.intelligence + currentPlayer.weapon.damage)/7) + Math.random() * (currentPlayer.strength/8));
        alert(currentPlayer.playerName+": attacks with " +currentPlayer.weapon.name+" for "+ playerDamage + " damage!");
      }
  

      //$("#player_battle_holder img").animate({marginLeft: 900}, 400, function(){ alert("Complete");});

      currentEnemy.health = currentEnemy.health - playerDamage;
      console.log(currentEnemy.health, "orc health");
      $("#enemy_health_bar .current_hp").css("width", ((currentEnemy.health/totalEnemyHealth)*100)+"%");
      if(currentEnemy.health <= (totalEnemyHealth/2)){
        $("#enemy_health_bar .current_hp").css("background-color","yellow");
      } if(currentEnemy.health <= (totalEnemyHealth/3)){
        $("#enemy_health_bar .current_hp").css("background-color","red");
      }

      if(currentEnemy.health <= 0) {
          if(currentEnemy === bowser){
            $("#bowserEnemy").unbind("click");
             $("#bowserEnemy").children().addClass("grayOut");
          } else if(currentEnemy === orc){
            $("#goatEnemy").unbind("click");
             $("#goatEnemy").children().addClass("grayOut");
          }

        enemyDeath = true;
        $("#player_stats_holder").html("");
        $("#enemy_stats_holder").html("");
        alert("you won!");
        $("#indivBattle").hide();
        $("#battleground").show();
       
      } else {
       $("#enemy_stats_holder").html("<h1>"+currentEnemy.toString()+"</h1>"+
                                        "<p>Current Health is "+"<span>"+ currentEnemy.health+"</span></p>"+
                                        "<p>Current Strength is "+"<span>"+ currentEnemy.strength+"</span></p>"+
                                        "<p>Current Intelligence is "+"<span>"+ currentEnemy.intelligence+"</span></p>"); 

       var enemyDamage = Math.floor(((currentEnemy.strength + currentEnemy.intelligence + currentEnemy.weapon.damage)/7) + Math.random() * (currentEnemy.strength/8));
       console.log("enemy damage", enemyDamage);
       alert(currentEnemy.playerName+": attacks with " +currentEnemy.weapon.name+" for "+ enemyDamage + " damage!");
       // alert("Enemy did " + enemyDamage + " damage!");

       currentPlayer.health = currentPlayer.health - enemyDamage;
       console.log("player health", currentPlayer.health);
       //animate width
       $("#player_health_bar .current_hp").css("width", ((currentPlayer.health/totalPlayerHealth)*100)+"%");

       //animate color for health widths
       if(currentPlayer.health <= (totalplayerHealth/2)){
        $("#enemy_health_bar .current_hp").css("background-color","yellow");
      } if(currentPlayer.health <= (totalplayerHealth/3)){
        $("#enemy_health_bar .current_hp").css("background-color","red");
      }

       if (currentPlayer.health <= 0) {
        playerDeath = true;
        $("#player_stats_holder").html("");
        $("#enemy_stats_holder").html("");
        alert("game over");
        $("#indivBattle").hide();
        $("#battleground").show();
       }

       $("#player_stats_holder").html("<h1>"+currentPlayer.toString()+"</h1>"+
                                        "<p>Current Health is "+"<span>"+ currentPlayer.health+"</span></p>"+
                                        "<p>Current Strength is "+"<span>"+ currentPlayer.strength+"</span></p>"+
                                        "<p>Current Intelligence is "+"<span>"+ currentPlayer.intelligence+"</span></p>"); 
       }
     }
    });
            // --> var damage = ((currentPlayer.strength + currentPlayer.intelligence + currentPlayer.weapon.damage)/7) + (damage * .3) 
    //Calcualte Enemy Damage and substract from Player Health -- same formula?

// });

