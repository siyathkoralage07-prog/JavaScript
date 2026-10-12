//console.log("hello");
 function guessBtnOnAction(){
let count = 0;
if(count != 3){

    let number =  Math.floor(Math.random() * 10+1);
    let Value;

        let num1 = document.getElementById("1").value;
        let num2 = document.getElementById("2").value;
        let num3 = document.getElementById("3").value;
        let num4 = document.getElementById("4").value;
        let num5 = document.getElementById("5").value;
        let num6 = document.getElementById("6").value;
        let num7 = document.getElementById("7").value;
        let num8 = document.getElementById("8").value;
        let num9 = document.getElementById("9").value;
        let num10 = document.getElementById("10").value;

    function numOneGuessBtnOnAction(){
        num = document.getElementById("num");
        num.innerText = "1";
        Value = 1;
    }
    function numTwoGuessBtnOnAction(){
        numb = document.getElementById("num");
        numb.innerText = "2";
        Value = 2;
    }
    function numThreeGuessBtnOnAction(){
        num = document.getElementById("num");
        num.innerText = "3";
        Value = 3;
    }
    function numFourGuessBtnOnAction(){
        num = document.getElementById("num");
        num.innerText = "4";
        Value = 4;
    }
    function numFiveGuessBtnOnAction(){
        num = document.getElementById("num");
        num.innerText = "5";
        Value = 5;
    }
    function numSixGuessBtnOnAction(){
        num = document.getElementById("num");
        num.innerText = "6";
        Value = 6;
    }
    function numSevenGuessBtnOnAction(){
        num = document.getElementById("num");
        num.innerText = "7";
        Value = 7;
    }
    function numEightGuessBtnOnAction(){
        num = document.getElementById("num");
        num.innerText = "8";
        Value = 8;
    }
    function numNineGuessBtnOnAction(){
        num = document.getElementById("num");
        num.innerText = "9";
        Value = 9;
    }
    function numTenGuessBtnOnAction(){
        num = document.getElementById("num");
        num.innerText = "10";
        Value = 10;
    }

   
    count++;
        if(number==Value){
            alert("Your guess is Correct : "+Value);
            console.log("Auto generated num : "+number,"\nGuessed num : "+Value)
            console.log(count)
        }else{
            alert("Your guess is incorrect : "+Value);
            console.log("Generated num : "+number,"\nGuessed num : "+Value)
            console.log(count)
        }
    
}else{
    reloadPage();
}

function reloadPage(forceReload = false) {
            try {
                // forceReload = true bypasses cache
                window.location.reload(forceReload);
            } catch (error) {
                console.error("Page reload failed:", error);
            }
}
}
