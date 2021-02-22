function scuberGreetingForFeet(n){
  // Write your code here!
  if (n <= 400) {
    return "This one is on me!";
  }
  else if (n > 400 && n < 2500) {
    return "I will gladly take your thirty bucks."; 
  }
  else {
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const message = city == "NYC" ? "Ok, sounds good." : "No go.";
  return message;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}