/** @format */

let showAns = true;

const toggleAnswers = () => {

 // Negate showAns

  showAns = !showAns;

 // Target the answer class paragraphs

  if (showAns) 

 $("p.answer").show();

  else 

 $("p.answer").hide();

};
const highlightRandomQuestion = () => {

 // Reset by unhighlightening all box class elements first

  $(".wrapper .box").css("border", "1px solid black");

  let randomIndex = Math.floor(Math.random() * 8);

 // Pass a random index into the :eq filter
  $(".card .box:eq(" + randomIndex + ")").css("background", " yellow");

  let mealNumber = Math.floor(Math.random() * 49);
    console.log(mealNumber);
    alert ("Please give this number to the clerk: " + mealNumber)

};


