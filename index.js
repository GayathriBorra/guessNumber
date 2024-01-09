var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById("guessbutton").addEventListener("click",function(){
    var guess=parseInt(document.getElementById("guessinput").value);
    attempts++;
    if(guess==randomNumber)
    {
        displaymsg("congratulations!!you guessed the number in "+attempts+"attempts");
        document.getElementById("guessbutton").disabled=true;
    }
    else if(guess < randomNumber)
    {
        displaymsg("Too low!!try another number");
    }
    else{
        displaymsg("Too high!!try another number");
    }



});
function displaymsg(k)
{
    document.getElementById("msg").textContent=k;
}