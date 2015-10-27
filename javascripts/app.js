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
        break;
      case "Warrior":
        currentPlayer.class = new Warrior();
        break;
      case "Valkyrie":
        currentPlayer.class = new Valkyrie();
        break;
      case "berserker":
        currentPlayer.class = new Berserker();
        break;
      case "Monk":
        currentPlayer.class = new Monk();
        break;
       case "Sorcerer":
        currentPlayer.class = new Sorcerer();
        break; 
      case "Conjurer":
        currentPlayer.class = new Conjurer();
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
    if(currentPlayer.class === "Warrior"){

    }

});

  //Built Functionality for Weapon Selection
  $(".actual_weapon").click(function(){
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
      case "Staff O' Wuhnduhr":
        currentPlayer.weapon = new StaffOhWunduhr();
        break;
      case "Book O' Reckoning":
        currentPlayer.weapon = new BookOReckoning();
        break;
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


  $("#goatEnemy").click(function(){
    currentEnemy = orc;
    console.log(currentEnemy);
    $("#battleground").hide();
     $("#indivBattle").show();
      $("#player_stats_holder").append("<h1>"+currentPlayer.toString()+"</h1>"+
                                        "<p>Current Health is "+"<span>"+ currentPlayer.health+"</span><p>"+
                                        "<p>Current Strength is "+"<span>"+ currentPlayer.strength+"</span><p>"+
                                        "<p>Current Intelligence is "+"<span>"+ currentPlayer.intelligence+"</span><p>"); 
      // $("#player_stats_holder").append("<p>Current Health is "+ currentPlayer.health+"<p>");
       $("#enemy_stats_holder").append("<h1>"+orc.toString()+"</h1>"+
                                        "<p>Current Health is "+"<span>"+ currentEnemy.health+"</span><p>"+
                                        "<p>Current Strength is "+"<span>"+ currentEnemy.strength+"</span><p>"+
                                        "<p>Current Intelligence is "+"<span>"+ currentEnemy.intelligence+"</span><p>"); 
      // $("#enemy_stats_holder").append("<p>Current Health is "+ currentEnemy.health+"<p>");
      $("#enemy_battle_holder").html("<img src="+ currentEnemy.imageSource + ">");
  });

$("#bowserEnemy").click(function(){
    currentEnemy = bowser;
    console.log(currentEnemy);
    $("#battleground").hide();
     $("#indivBattle").show();
      $("#player_stats_holder").append("<h1>"+currentPlayer.toString()+"</h1>"+
                                        "<p>Current Health is "+"<span>"+ currentPlayer.health+"</span><p>"+
                                        "<p>Current Strength is "+"<span>"+ currentPlayer.strength+"</span><p>"+
                                        "<p>Current Intelligence is "+"<span>"+ currentPlayer.intelligence+"</span><p>"); 
      // $("#player_stats_holder").append("<p>Current Health is "+ currentPlayer.health+"<p>");
       $("#enemy_stats_holder").append("<h1>"+currentEnemy.toString()+"</h1>"+
                                        "<p>Current Health is "+"<span>"+ currentEnemy.health+"</span><p>"+
                                        "<p>Current Strength is "+"<span>"+ currentEnemy.strength+"</span><p>"+
                                        "<p>Current Intelligence is "+"<span>"+ currentEnemy.intelligence+"</span><p>"); 
      // $("#enemy_stats_holder").append("<p>Current Health is "+ orc.health+"<p>");
      $("#enemy_battle_holder").html("<img src="+ currentEnemy.imageSource + ">");
  });
  
//Battle Logic
  //when attack is clicked
    //Calculate player damage and subtract from Enemy health-- formula str + int +damage /7 * a .1 - .3 modifier?
    $("#attack-button").click(function(){
      var playerDeath = false;
      var enemyDeath = false;
      if (playerDeath === false || enemyDeath === false) {
      var playerDamage = Math.floor(((currentPlayer.strength + currentPlayer.intelligence + currentPlayer.weapon.damage)/7) + Math.random() * (currentPlayer.strength/8));
      console.log("damage", playerDamage);
      alert(currentPlayer.playerName+": attacks with " +currentPlayer.weapon.name+" for "+ playerDamage + " damage!");

      //$("#player_battle_holder img").animate({marginLeft: 900}, 400, function(){ alert("Complete");});

      currentEnemy.health = currentEnemy.health - playerDamage;
      console.log(currentEnemy.health, "orc health");

      if(currentEnemy.health <= 0) {
          if(currentEnemy === bowser){
            $("#bowserEnemy").unbind("click");
             $("#bowserEnemy").children().addClass("grayOut");
          } else if(currentEnemy === orc){
            $("#goatEnemy").unbind("click");
             $("#goatEnemy").children().addClass("grayOut");
          }
        enemyDeath = true;
        alert("you won!");
        $("#indivBattle").hide();
        $("#battleground").show();
       
      } else {

       $("#enemy_stats_holder").html("<h1>"+currentEnemy.toString()+"</h1>"+
                                        "<p>Current Health is "+"<span>"+ currentEnemy.health+"</span><p>"+
                                        "<p>Current Strength is "+"<span>"+ currentEnemy.strength+"</span><p>"+
                                        "<p>Current Intelligence is "+"<span>"+ currentEnemy.intelligence+"</span><p>"); 

       var enemyDamage = Math.floor(((currentEnemy.strength + currentEnemy.intelligence + currentEnemy.weapon.damage)/7) + Math.random() * (currentEnemy.strength/8));
       console.log("enemy damage", enemyDamage);
       alert(currentEnemy.playerName+": attacks with " +currentEnemy.weapon.name+" for "+ enemyDamage + " damage!");
       // alert("Enemy did " + enemyDamage + " damage!");

       currentPlayer.health = currentPlayer.health - enemyDamage;
       console.log("player health", currentPlayer.health);

       if (currentPlayer.health <= 0) {
        playerDeath = true;
        alert("game over");
        $("#indivBattle").hide();
        $("#battleground").show();
       }

       $("#player_stats_holder").html("<h1>"+currentPlayer.toString()+"</h1>"+
                                        "<p>Current Health is "+"<span>"+ currentPlayer.health+"</span><p>"+
                                        "<p>Current Strength is "+"<span>"+ currentPlayer.strength+"</span><p>"+
                                        "<p>Current Intelligence is "+"<span>"+ currentPlayer.intelligence+"</span><p>"); 
       }
     }
    });
            // --> var damage = ((currentPlayer.strength + currentPlayer.intelligence + currentPlayer.weapon.damage)/7) + (damage * .3) 
    //Calcualte Enemy Damage and substract from Player Health -- same formula?

// });

