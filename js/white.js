var darkButton = document.getElementById("dark");

darkButton.addEventListener("click", function() {
      document.body.classList.remove("bg-white");
      document.body.classList.add("bg-dark");

      document.getElementById("sun").src = "./images/sun_dark.png";
      document.getElementById("moon").src = "./images/moon_white.png";

      var blackCard = document.getElementById("blackCard");

      blackCard.classList.remove('card-white');
      blackCard.classList.add('card-black');

      var stepOne = document.getElementById("stepOne");
      var stepTwo = document.getElementById("stepTwo");
      var stepThree = document.getElementById("stepThree");

      stepOne.src = "./images/step_one.svg";
      stepTwo.src = "./images/step_two.svg";
      stepThree.src = "./images/step_three.svg";

      var service1 = document.getElementById("service1");
      var service2 = document.getElementById("service2");
      var service3 = document.getElementById("service3");
      var service4 = document.getElementById("service4");
      var service5 = document.getElementById("service5");
      var service6 = document.getElementById("service6");
      var service7 = document.getElementById("service7");
      var service8 = document.getElementById("service8");
      var service9 = document.getElementById("service9");

      service1.classList.remove('card-white');
      service2.classList.remove('card-white');
      service3.classList.remove('card-white');
      service4.classList.remove('card-white');
      service5.classList.remove('card-white');
      service6.classList.remove('card-white');
      service7.classList.remove('card-white');
      service8.classList.remove('card-white');
      service9.classList.remove('card-white');
      
      service1.classList.remove('card-border-white');
      service2.classList.remove('card-border-white');
      service3.classList.remove('card-border-white');
      service4.classList.remove('card-border-white');
      service5.classList.remove('card-border-white');
      service6.classList.remove('card-border-white');
      service7.classList.remove('card-border-white');
      service8.classList.remove('card-border-white');
      service9.classList.remove('card-border-white');

      service1.classList.add('card-black');
      service2.classList.add('card-black');
      service3.classList.add('card-black');
      service4.classList.add('card-black');
      service5.classList.add('card-black');
      service6.classList.add('card-black');
      service7.classList.add('card-black');
      service8.classList.add('card-black');
      service9.classList.add('card-black');

      service1.classList.add('card-border');
      service2.classList.add('card-border');
      service3.classList.add('card-border');
      service4.classList.add('card-border');
      service5.classList.add('card-border');
      service6.classList.add('card-border');
      service7.classList.add('card-border');
      service8.classList.add('card-border');
      service9.classList.add('card-border');

      document.getElementById("iconSend").src = "./images/icon_send.png";
});

var whiteButton = document.getElementById("white");

whiteButton.addEventListener("click", function() {
      document.body.classList.add("bg-white");

      var blackCard = document.getElementById("blackCard");

      document.getElementById("sun").src = "./images/sun_white.png";
      document.getElementById("moon").src = "./images/moon_dark.png";

      blackCard.classList.remove('card-black')
      blackCard.classList.add('card-white')

      var service1 = document.getElementById("service1");
      var service2 = document.getElementById("service2");
      var service3 = document.getElementById("service3");
      var service4 = document.getElementById("service4");
      var service5 = document.getElementById("service5");
      var service6 = document.getElementById("service6");
      var service7 = document.getElementById("service7");
      var service8 = document.getElementById("service8");
      var service9 = document.getElementById("service9");

      service1.classList.remove('card-black');
      service2.classList.remove('card-black');
      service3.classList.remove('card-black');
      service4.classList.remove('card-black');
      service5.classList.remove('card-black');
      service6.classList.remove('card-black');
      service7.classList.remove('card-black');
      service8.classList.remove('card-black');
      service9.classList.remove('card-black');

      service1.classList.remove('card-border');
      service2.classList.remove('card-border');
      service3.classList.remove('card-border');
      service4.classList.remove('card-border');
      service5.classList.remove('card-border');
      service6.classList.remove('card-border');
      service7.classList.remove('card-border');
      service8.classList.remove('card-border');
      service9.classList.remove('card-border');

      service1.classList.add('card-white');
      service2.classList.add('card-white');
      service3.classList.add('card-white');
      service4.classList.add('card-white');
      service5.classList.add('card-white');
      service6.classList.add('card-white');
      service7.classList.add('card-white');
      service8.classList.add('card-white');
      service9.classList.add('card-white');

      service1.classList.add('card-border-white');
      service2.classList.add('card-border-white');
      service3.classList.add('card-border-white');
      service4.classList.add('card-border-white');
      service5.classList.add('card-border-white');
      service6.classList.add('card-border-white');
      service7.classList.add('card-border-white');
      service8.classList.add('card-border-white');
      service9.classList.add('card-border-white');

      var stepOne = document.getElementById("stepOne");
      var stepTwo = document.getElementById("stepTwo");
      var stepThree = document.getElementById("stepThree");

      stepOne.src = "./images/step_one_white.png";
      stepTwo.src = "./images/step_two_white.png";
      stepThree.src = "./images/step_three_white.png";

      document.getElementById("iconSend").src = "./images/icon_send_white.png";
});

