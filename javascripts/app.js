$(document).ready(function() {

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
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;


    //checking the next attr of each and going to each in the following cases
    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      //ben code added -->
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");
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
      case "Thief":
        currentPlayer.class = new Thief();
        break;   
      case "Ninja":
        currentPlayer.class = new Ninja();
        break; 
      case "Assassin":
        currentPlayer.class = new Ninja();
        break;
    }

    //calculate bonuses after class selection
    $("#wep-link").click(function(){
      currentPlayer.health = currentPlayer.health + currentPlayer.class.healthBonus;
      console.log("current player health after class selection is", currentPlayer.health);
    });

    console.log("current Health is ", currentPlayer.health);

});

  //Built Functionality for Weapon Selection
  $(".actual_weapon").click(function(){
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


  $("#goatEnemy").click(function(){
    $("#battleground").hide();
     $("#indivBattle").show();
      $("#player_stats_holder").append("<h1>"+currentPlayer.toString()+"</h1>"+
                                        "<p>Current Health is "+"<span>"+ currentPlayer.health+"</span><p>"+
                                        "<p>Current Strength is "+"<span>"+ currentPlayer.strength+"</span><p>"+
                                        "<p>Current Intelligence is "+"<span>"+ currentPlayer.intelligence+"</span><p>"); 
      // $("#player_stats_holder").append("<p>Current Health is "+ currentPlayer.health+"<p>");
       $("#enemy_stats_holder").append("<h1>"+orc.toString()+"</h1>"+
                                        "<p>Current Health is "+"<span>"+ orc.health+"</span><p>"+
                                        "<p>Current Strength is "+"<span>"+ orc.strength+"</span><p>"+
                                        "<p>Current Intelligence is "+"<span>"+ orc.intelligence+"</span><p>"); 
      // $("#enemy_stats_holder").append("<p>Current Health is "+ orc.health+"<p>");
  });

//Battle Logic
  //when attack is clicked
    //Calculate player damage and subtract from Enemy health-- formula str + int +damage /7 * a .1 - .3 modifier?
            // --> var damage = ((currentPlayer.strength + currentPlayer.intelligence + currentPlayer.weapon.damage)/7) + (damage * .3) 
    //Calcualte Enemy Damage and substract from Player Health -- same formula?

});

