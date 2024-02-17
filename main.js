 
 
 
 
 function quote() {
    var quoteOwner = ["― Oscar Wilde ", "― Mahatma Gandhi ", "― Andre Gide, Autumn Leaves " , "― Albert Einstein "];
    var quoteText = ["“Be yourself; everyone else is already taken.” ", "Be the change that you wish to see in the world.” "
    , "“It is better to be hated for what you are than to be loved for what you are not.” " ,
    " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” "];

    var num = Math.floor(Math.random() *quoteOwner.length);

    document.getElementById("demo1").innerHTML = quoteText[num];
    document.getElementById("demo2").innerHTML = quoteOwner[num];
    }
