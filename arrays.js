// creating array of objects "data".
let data = [{'principal':2500,'time':1.8},{'principal':1000, 'time':5},{'principal':3000,'time':1},{'principal':2000,'time':3}];

let rate,interest;  // declaring variables for rate and interest.
let interestData=[]; // declaring interestData array.

// creating function interestCalculator.
function interestCalculator() {

    for(let i = 0; i < arguments.length;i++){
        // determining the rate using following coditions below:

      if(arguments[i].principal>=2500 &&(arguments[i].time>1 && arguments[i].time<3))
      {
          rate=3;
      }
      else if(arguments[i].principal>=2500 && arguments[i].time>=3)
      {
          rate=4;
      }
      else if(arguments[i].principal<2500 || arguments[i].time<=1)
      {
          rate=2;
      }
      else{
          rate=1;
      }

     //calculating interest for each object

      interest = (arguments[i].principal*rate*arguments[i].time)/100;
    
     // pushing objects into the interestData array.
      interestData.push({principal:arguments[i].principal,rate:rate,time:arguments[i].time,interest:interest});
      
    }
  // loging interestData array to console.
    console.log(interestData)
   
    // return interestData.
    return interestData;

}

interestCalculator(...data);