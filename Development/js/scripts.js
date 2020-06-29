// let menu= ["pizza 0", "pasta 1", "macaroni 2"];

// alert ( "this is our menu: "+ " " + menu);

// let dish= prompt ("insert dish number");

// if(dish == 0) {
//     alert("enjoy your pizza!");

// }

// if (dish == 1){
//     alert("enjoy your pasta!");
// }

// if (dish == 2){
//     alert("enjoy your macaroni!");
// }

alert("welcome to my calculator!");

let calculations= ["multiply 0", "divide 1", "add 2", " substract 3"];
let number_1= prompt("insert a number");
alert ( "choose: "+ " " + calculations);
let calc= prompt("insert عملية حسابية ");
let number_2= prompt("insert another number");
 
let result= 0;


switch(calc) {
    case "*": 
    result = ((number_1) *(number_2));
      alert ( "the result is:"+ " " + result );
      break ;
    case "/":
        result = ((number_1) /(number_2));
        alert ( "the result is:"+ " " + result );
      break;
    case "+":
        result = (parseInt(number_1)+parseInt(number_2));
        alert ( "the result is:"+ " " + result );
        break;
    case "-":
        result = ((number_1) -(number_2));
        alert ( "the result is:"+ " " + result );
      break;
  }
  