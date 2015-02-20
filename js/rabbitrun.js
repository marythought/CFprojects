$('#runbutton').on('click', function() {
  var userName = $('#nameInput').val();
  var userSpeed = $('#speedInput').val();
  var userFocus = $('#focusInput').val();

  var Racer = function(speed, focus, name) {
    this.speed = speed;
    this.focus = focus;
    this.name = name;
    this.position = 0;
    this.report = function() {
      return this.name + " is at " + this.position;
    };
    this.run = function() {
      if(this.focus >= (Math.random() * 10)) {
        this.position += this.speed;
      }
    };  
  }
    
  var user = new Racer(userSpeed, userFocus, userName);
  var rabbit = new Racer(8,5,"Peter Rabbit");
  var distance = 100;
  var winner;
  var message;

  while(user.position < distance && rabbit.position < distance) {
    user.run();
    rabbit.run();
  };

  if(rabbit.position > user.position) {
    winner = rabbit.name;
    message = "The rabbit beat you! Better luck next time.";

  } else {
    winner = user.name;
    message = "You outran the rabbit! Time for a nap...";
  };
  
  console.log(rabbit.report());
  console.log(user.report());

  $('#results span').text(message);

});

