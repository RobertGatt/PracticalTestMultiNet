let arrayOfInputs = [];         //this is to store all the inputs

function submitChanges(){

    let content = document.getElementById("inputs").value;          //get the value of the input
    content = content.trim();                                       //trims the content in case user enters a space
    if(content == "" ){                                             //if the value is blank, alert the user
        alert("You have to input a string or a number");
        document.getElementById("inputs").value="";                 //clear the input field after the submit button
    }else{                                                          //else push the input into the array (arrayOfInputs)
        arrayOfInputs.push(document.getElementById("inputs").value);
        console.log(arrayOfInputs);                                 //this is to test that the array is being logged properly
        document.getElementById("usersInput").innerHTML = arrayOfInputs.toString(); //put onto the web the user's inputs
        document.getElementById("inputs").value="";                 //clear the input field after the submit button
        document.getElementById("yourInputs").innerHTML = "Your Inputs"
    }

}

function descendingOrder(){
    //sort out all the strings in descending order
    arrayOfInputs.sort();
    arrayOfInputs.reverse();

    //sort out all the number in descending order
    arrayOfInputs = arrayOfInputs.sort(function(a,b) {return b-a;});
    console.log(arrayOfInputs);

    //adjust the user's input on the web and rename the title accordingly
    document.getElementById("usersInput").innerHTML = arrayOfInputs.toString();
    document.getElementById("yourInputs").innerHTML = "Your Inputs in Descending Order"
}

function ascendingOrder(){
    
    //sort out all the strings in ascending order
    arrayOfInputs.sort();

    //sort out all the number in ascending order
    arrayOfInputs = arrayOfInputs.sort(function(a,b) {return a-b;});
    console.log(arrayOfInputs);

    //adjust the user's input on the web and rename the title accordingly
    document.getElementById("usersInput").innerHTML = arrayOfInputs.toString();
    document.getElementById("yourInputs").innerHTML = "Your Inputs in Ascending Order"

}
