function sleepInOrNot() {
//input  
let message =document.getElementByIdlementById('inputDateDay').value;
let now = new Date();
let month = now.getMonth();
let dayOfMonth = now.getDate();
let dayOfWeek = now.getDay();
    //Process 
    //&& - And Operator - Both sides to be true
    //|| - OR Operator - One side needs to be true (choices given and one side could be false)
    

        if (month == 'January(0)' || month == 'March(2)'   || month == 'May(4)'  || month == 'July(6)' ||  month == 'August(7)'  
                || month == 'October(9)'  || month == 'December(11)'){
                message = '31 days';
        }
       
        else if (month == 'April(3)' || month == 'June(5)' || month == 'September(8)'  || month == 'November(10)' ){
                message = '30 days';
        }
        else if (dayOfMonth =='31 days' || dayOfMonth =='30 days'){
                message = 'number of days';
        }
        else{

         ( month == 'February(1)');
             message ='28 days'
        }
       
       
        if ( dayOfWeek =='Monday (1)' || dayOfWeek == 'Tuesday (2)' || dayOfWeek == 'Wednesday (3)' || dayOfWeek == 'Thursday (4)'  || 
        dayOfWeek == 'Friday (5)' || dayOfWeek == 'Saturday (6)' || dayOfWeek == 'Sunday(7)') {
             message= 'Weekdays'; 
}


        else{

        if (now == 'Friday (5)' || now == 'Thursday (4)' || now== 'Wednesday(3)' || now == 'Tuesday (2)'  || now == 'Monday (1)' )  { 
              message = "Get Up!";
}

         else{
             (now =='Jan 1 (0)' && now =='July 4 (6)' && now =='December 25 (11)' || now =='Saturday(6)' && now =='Sunday(7)')
             message = 'Sleep in';
   }    
}   
    //output
//get the right message :sleepin || get up
document.getElementById('output').innerHTML = message ;

}

