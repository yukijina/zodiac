// Array & Object for each sign
var signs = [
  {
    name: "Aquarius",
    image: "img/aquarius.jpg",
    details: "The mad scientist and humanitarian of the horoscope wheel, futuristic Aquarius energy helps us innovate, unite for social justice and follow our utopian ideals.",
    goodDay: "Communicative, original, open-minded, fair, logical, inviting",
    badDay: "Guarded, detached, self-destructive, out-of-touch, irrational, desperate"
  },
  {
    name: "Pisces",
    image: "img/pisces.jpg",
    details:"The dreamer and healer of the horoscope family, Pisces energy awakens compassion, imagination and artistry, dissolving the boundaries that divide us.",
    goodDay: "Romantic, helpful, wise, comforting, imaginative",
    badDay: "Gullible, self-pitying, out of touch with reality, self-destructive, clingy"
  },
  {
    name:"Aries",
    image: "img/aries.jpg",
    details: "The pioneer and trailblazer of the horoscope wheel, Aries energy helps us initiate, fight for our beliefs and fearlessly put ourselves out there.",
    goodDay:"Energetic, encouraging, unstoppable, bold, devoted, heroic, caring",
    badDay: "Proud, self-centered, impulsive, bossy, stubborn, reckless, jealous"
  },
  {
    name:"Taurus",
    image: "img/taurus.jpg",
    details: "Taurus is the persistent provider of the zodiac, the sign that helps us seek security, enjoy earthly pleasures and get the job done.",
    goodDay: "Patient, organized, supportive, romantic, careful, dedicated",
    badDay: "Overindulgent, stubborn, lazy, vain, cheap, too cautious"
  },
  {
    name: "Gemini",
    image: "img/gemini.jpg",
    details: "The most versatile and vibrant horoscope sign, Gemini energy helps us communicate, collaborate and fly our freak flags at full mast.",
    goodDay:"Fascinating, original, resourceful, charming, wise, adventurous",
    badDay: "Restless, distracted, two-faced, judgmental, depressed, overwhelmed"
  },
  {
    name: "Cancer",
    image: "img/cancer.jpg",
    details: "The natural nurturer of the horoscope wheel, Cancer energy helps us connect with our feelings, plant deep roots and feather our family nests.",
    goodDay: "Helpful, patient, compassionate, nurturing, romantic, creative",
    badDay: "Gossipy, clique-y, isolated, uncommunicative, hypersensitive, overly competitive"
  },
  {
    name: "Leo",
    image: "img/leo.jpg",
    details: "The drama queen and regal ruler of the horoscope clan, Leo energy helps us shine, express ourselves boldly and wear our hearts on our sleeves.",
    goodDay: "Courageous, kind, generous, loyal, protective, nakedly honest, entertaining",
    badDay: "Arrogant, wasteful, sloppy, cold-hearted, jealous, aggressive"
  },
  {
    name: "Virgo",
    image: "img/virgo.jpg",
    details: "The masterful helper of the horoscope wheel, Virgo energy teaches us to serve, do impeccable work and prioritize wellbeing—of ourselves, our loved ones and the planet.",
    goodDay: "Dedicated, resourceful, helpful, hardworking, witty, practical",
    badDay: "Preachy, self-destructive, overwhelmed, self-pitying, uptight, critical"
  },
  {
    name: "Libra",
    image: "img/libra.jpg",
    details: "The balanced beautifier of the horoscope family, Libra energy inspires us to seek peace, harmony and cooperation—and to do it with style and grace.",
    goodDay: "Charming, lovable, fair, sincere, sharing, hopelessly romantic",
    badDay: "Vain, indecisive, melodramatic, manipulative, spoiled, delusional"
  },
  {
    name: "Scopio",
    image: "img/scorpio.jpg",
    details: "The most intense and focused of the horoscope signs, Scorpio energy helps us dive deep, merge our superpowers and form bonds that are built to last.",
    goodDay: "Magnetic, passionate, loyal, protective, trendsetting, brave",
    badDay: "Obsessive, possessive, jealous, secretive, vengeful, manipulative"
  },
  {
    name: "Sagittarius",
    image: "img/sagittarius.jpg",
    details: "The worldly adventurer of the horoscope wheel, Sagittarius energy inspires us to dream big, chase the impossible and take fearless risks.",
    goodDay: "Honest, fair-minded, inspiring, optimistic, enthusiastic, encouraging, dedicated",
    badDay: "Argumentative, reckless, flaky, preachy, tactless, overconfident"
  },
  {
    name: "Capricorn",
    image: "img/capricorn.jpg",
    details: "The measured master planner of the horoscope family, Capricorn energy teaches us the power of structure, delayed gratification and setting goals for the long haul.",
    goodDay: "Loyal, family-minded, hardworking, devoted, honest, fearless",
    badDay: "Pessimistic, unforgiving, cold, materialistic, snobbish, hopeless"
  }
];

// For loop used to create the option tags for dropdown menu
for(var i = 0; i < signs.length; i++) {
  //Store the actual dropdown as a variable
  var dropdown = document.getElementById('myList');
  //Create an option element
  var selection = document.createElement('option');

    //Give the option element a value
    selection.value = signs[i].name;
    // Set the text of the option element
    selection.textContent = signs[i].name;
    // Append the option element to the dropdown
    dropdown.appendChild(selection);
}

//Using dropdown because we created that variable in the above for loop
dropdown.onchange = function() {
  //Targeting several elements from the HTML and storing them as variables
  var container = document.getElementById('displayInfo');
  var sign = document.getElementById('sign');
  var icon = document.getElementById('icon');
  var details = document.getElementById('details');
  var goodDay = document.getElementById('goodDay');
  var badDay = document.getElementById('badDay');
  /*Creating a function, storing it as a valiable.
   This function removes the animate.css classes from an element
   so that when they get re-applied, the animation happens again */
  var animation = function() {
  container.className = 'form-group displayInfo';
  };


  //Loop through the Array
  for(var i = 0; i < signs.length; i++) {
    /* i[0]Aquarius AND i[2]Aries need to be "an"for it'sn ame(just grammer)
    to perform this, we create if an else if.
    If the value selected is signs[0].name or signs[2].name
    AND the value of i = 2, then do this block of code. The i = 2 is
    necessary because signs[i].name has a value regardless of the loop,
    so if a user selects signs[2].name, but the loop has just begun (i = 0),
    then the conditional will evaluate as 'true' and execute the code, but will
    display all the signs[0] data, not the signs[2] data. */
    if(this.value == signs[0].name && i == 0 || this.value == signs[2].name && i == 2) {
      //Change all the data according to what object in the signs array we are targeting
      sign.textContent = "You are an " + signs[i].name + "!";
      icon.src = signs[i].image;
      icon.width = "400";
      icon.height = "400";
      details.textContent = "All about: " + signs[i].details;
      goodDay.textContent = "Good day: " + signs[i].goodDay;
      badDay.textContent = "Bad day: " + signs[i].badDay;

      // Add these classes to 'container' - the last two are from animate.css
      container.className = "form-group displayInfo animated fadeInUp";

      // This 'animation' function is called 1 second after the classes are added, using the setTimeout() method, so the animation can take place.
      setTimeout(animation, 1000);
      /*If the user selects something that doesn't match above two instances,
      then run the below code, which is functionallity identical, except for some grammer differences */
    } else if(this.value == signs[i].name) {
      sign.textContent = "You are a " + signs[i].name + "!";
      icon.src = signs[i].image;
      icon.width = "400";
      icon.height = "400";
      details.textContent = "All about: " + signs[i].details;
      goodDay.textContent = "Good day: " + signs[i].goodDay;
      badDay.textContent = "Bad day: " + signs[i].badDay;

      // Add these classes to 'container' - the last two are from animate.css
      container.className = "form-group displayInfo animated fadeInUp";

      setTimeout(animation, 1000);
    };
  };
};
