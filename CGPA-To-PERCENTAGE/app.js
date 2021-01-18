document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#sem1').focus();
})

document.querySelector('#calculator').addEventListener('keyup', function(event) {
    if (event.which == 13 || event.keyCode == 13){
        event.preventDefault();
        document.querySelector('#calculator').submit();
    }
});

function calculate() {
    //Getting inputs from input and storing it into array.
    var inputs = document.getElementsByClassName("sem_input");
    var array = [];
    for(inp of inputs) {
    if(inp.value != "") {array.push(Number(inp.value));}}
        
    // Finding sum of elements of array
    var sum = array.reduce(function (a , b){
        return a + b;
    } , 0 ); 
    console.log(sum);

    // Finding average of elements of array
    var average = sum / array.length;
    console.log(average);

    // Finding percentage of given CGPA
    var percentage = (7.25 * average) + 11;

    let = document.querySelector('#result');
    result.value = "Your Percentage is "+ percentage.toFixed(2) + "%";
}