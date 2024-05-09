function calculator() {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let currentValue="";

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            
                
            if(value === "=") {
           try {

          
               let answer = eval(currentValue); // error message points to this line
               screen.value = answer;
               currentValue = answer.toString();
            } catch (error) {
                screen.value = "error";
                currentValue ="";
            }

           
            } else if(value === "Clear") {
               currentValue ="";
                screen.value = "";
            } else {
                currentValue += value
                screen.value = currentValue;
            }
           
           
       })
            
        
    });


};
calculator();

